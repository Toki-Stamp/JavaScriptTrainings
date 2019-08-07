/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function init_utils(referenceName) {
    var utils = (window[referenceName] || {}),
        debug = true;

    function /* constructor */ Dialog(instance) {
        var defaultValues = {
                id       : 'x-dialog-' + (instance.id ? instance.id : 1),
                title    : 'Dialog default title...',
                body     : 'Dialog default body...',
                button   : {
                    'class': 'btn btn-default',
                    'text' : 'Default button text...',
                },
                container: (function getContainer() {
                    var alfirmContainer = $('#x-dialog-container');

                    if (alfirmContainer && alfirmContainer.length) {
                        return alfirmContainer;
                    }

                    alfirmContainer = $('<div>', {'id': 'x-dialog-container'});
                    alfirmContainer.appendTo($('body'));

                    return alfirmContainer;
                })(),
                delay    : 200,
            },
            events = {
                onModalShow   : function (e) {
                    (debug) && console.log('Dialog: Modal Show Event', {id: instance.id, event: e});
                },
                onModalShown  : function (e) {
                    (debug) && console.log('Dialog: Modal Shown Event', {id: instance.id, event: e});
                    (instance) && (instance.shown = true);
                },
                onModalHide   : function (e) {
                    (debug) && console.log('Dialog: Modal Hide Event', {id: instance.id, event: e});
                },
                onModalHidden : function (e) {
                    (debug) && console.log('Dialog: Modal Hidden Event', {id: instance.id, event: e});
                    (instance) && (instance.shown = false);

                    //todo маленький крестик не вызывает callback
                    // if (dialog.content.close.hasCallback) {
                    //     dialog.content.close.callback.call(null);
                    // }
                },
                onModalEscaped: function (e) {
                    if (e.keyCode === 27) {
                        (debug) && console.log('Dialog: Escaped [ESC] Event', {id: instance.id, event: e});

                        if (dialog.content.close.hasCallback) {
                            dialog.content.close.callback.call(null);
                        } else {
                            dialog.el.modal('hide');
                        }
                    }
                }
            },
            dialog = {
                el       : null,
                container: null,
                content  : {
                    title   : null,
                    body    : null,
                    footer  : null,
                    controls: null,
                    close   : null
                }
            };

        function init() {
            var modal = $('<div>', {
                    'class'   : 'modal fade',
                    'id'      : defaultValues.id,
                    'tabindex': '-1',
                    'role'    : 'dialog'
                }),
                modalDialog = $('<div>', {'class': 'modal-dialog', 'role': 'document'}),
                modalContent = $('<div>', {'class': 'modal-content'}),
                modalHeader = $('<div>', {'class': 'modal-header'}),
                modalTitle = $('<div>', {'class': 'modal-title', 'html': defaultValues.title}),
                modalBody = $('<div>', {'class': 'modal-body', 'html': defaultValues.body}),
                modalFooter = $('<div>', {'class': 'modal-footer'}),
                modalClose = $('<div>', {'class': 'modal-close'}),
                modalControls = $('<div>', {'class': 'modal-controls'}),
                buttonX = $('<button>', {
                    'class'       : 'close',
                    'type'        : 'button',
                    'data-dismiss': 'modal',
                    'html'        : '<span aria-hidden="true">&times;</span>'
                });

            (debug) && console.log('Dialog: Init', {id: instance.id});
            /* content */
            modalTitle.appendTo(modalHeader);
            modalHeader.appendTo(modalContent);
            modalBody.appendTo(modalContent);
            modalControls.appendTo(modalFooter);
            modalClose.appendTo(modalFooter);
            modalFooter.appendTo(modalContent);
            modalContent.appendTo(modalDialog);
            modalDialog.appendTo(modal);
            buttonX.prependTo(modalHeader);
            /* bootstrap: modal */
            modal.modal({'backdrop': false, 'keyboard': false, 'show': false});
            /* events */
            modal.on('show.bs.modal', events.onModalShow);
            modal.on('shown.bs.modal', events.onModalShown);
            modal.on('hide.bs.modal', events.onModalHide);
            modal.on('hidden.bs.modal', events.onModalHidden);
            modal.on('keydown', events.onModalEscaped);
            /* return */
            dialog.el = modal;
            dialog.content = {
                title   : modalTitle,
                body    : modalBody,
                footer  : modalFooter,
                controls: modalControls,
                close   : {
                    hasButton  : false,
                    hasCallback: false,
                    ref        : modalClose,
                    callback   : null
                }
            };
            //todo не забыть убрать это!
            window['dialog'] = dialog;
        }

        function execute(callback, args) {
            var timer = setTimeout(function () {
                (debug) && console.log('Dialog: Executing Callback', {id: instance.id, callback: callback, args: args});
                (callback && jQuery.isFunction(callback)) && (callback.apply(null, args));
                clearTimeout(timer);
                timer = null;
            }, defaultValues.delay);

            dialog.el.modal('hide');
        }

        this.bind = function (container) {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Bind', {id: instance.id, container: container});

            if (container && container.length) {
                dialog.el.appendTo(container);
                dialog.container = container;
            }

            return this;
        };
        this.body = function (body) {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Set Body', {id: instance.id, body: body});
            (body && body.length) && dialog.content.body.html(body);

            return this;
        };
        this.button = function (description) {
            var button = {
                    'type' : 'button',
                    'text' : defaultValues.button.text,
                    'class': defaultValues.button.class
                },
                destination = dialog.content.controls;

            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Add Button', {id: instance.id, description: description});

            if (description) {
                if (description.type) {
                    button['class'] = (function getClass() {
                        switch (description.type) {
                            case 'success':
                                return 'btn btn-success';
                            case 'warning':
                                return 'btn btn-warning';
                            case 'danger':
                                return 'btn btn-danger';
                            case 'primary':
                                return 'btn btn-primary';
                            case 'secondary':
                                return 'btn btn-secondary';
                            case 'info':
                                return 'btn btn-info';
                        }

                        return defaultValues.button.class;
                    })();

                    if (description.type === 'close') {
                        if (!dialog.content.close.hasButton) {
                            button['data-dismiss'] = 'modal';
                            destination = dialog.content.close.ref;
                            dialog.content.close.hasButton = true;
                        } else {
                            destination = null;
                        }
                    }
                }
                if (description.click && jQuery.isFunction(description.click.handler)) {
                    button['click'] = function handler() {
                        execute(description.click.handler, (description.click.args || null));
                    };

                    if ((description.type === 'close') && dialog.content.close.hasButton) {
                        dialog.content.close.hasCallback = true;
                        dialog.content.close.callback = button['click'];
                    }
                }
                if (description.text) {
                    button['text'] = description.text;
                }
            }

            if (destination && button) {
                $('<button>', button).appendTo(destination);
            }

            return this;
        };
        this.hide = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Hide', {id: instance.id, shown: instance.shown});
            dialog.el.modal('hide');

            return this;
        };
        this.info = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Info', {dialog: dialog, instance: instance});

            return this;
        };
        this.show = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Show', {id: instance.id});
            (!dialog.content.close.hasButton) && (dialog.content.close.ref.remove());
            (!dialog.container) && (this.bind(defaultValues.container));
            dialog.el.modal('show');

            return this;
        };
        this.destroy = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Destroy', {id: instance.id});
            dialog.el.remove();
        };
        this.title = function (title) {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Set Title', {id: instance.id, title: title});
            (title && title.length) && dialog.content.title.html(title);

            return this;
        };
    }

    utils.dialog = (function () {
        var counter = 0,
            storage = {};

        return {
            getInstance: function (keepAliveOnHide) {
                var id = ++counter,
                    state = false,
                    item = Object.create({shown: state}, {
                        'id'   : {
                            /* non mutable */
                            value: id
                        },
                        'shown': {
                            set: function (value) {
                                (debug) && (console.log('Dialog Factory: Setting Shown State', {id: id, from: state, to: value}));

                                if ((!keepAliveOnHide) && (value === false) && item.ref) {
                                    /* destroy on hide */
                                    item.ref.destroy.call(null);
                                    storage[id] = null;
                                }

                                state = value;
                            },
                            get: function () {
                                (debug) && (console.log('Dialog Factory: Getting Shown State', {id: id, shown: state}));

                                return state;
                            }
                        }
                    });

                Object.defineProperty(item, 'ref', {
                    value: new Dialog(item)
                });

                storage[id] = item;

                return item.ref;
            },
            status     : function () {
                console.info('Status', {counter: counter, storage: storage});
            }
        };
    })();

    /* return */
    window[referenceName] = utils;
})('rh_utils');