/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function init_utils(referenceName) {
    var utils = (window[referenceName] || {}),
        debug = true,
        greetingMsg = '... rh_utils successfully loaded!';

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
                    var container = $('#x-dialog-container');

                    if (container && container.length) {
                        return container;
                    }

                    container = $('<div>', {'id': 'x-dialog-container'});
                    container.appendTo($('body'));

                    return container;
                })(),
                config   : {
                    height: {max: {value: 50, unit: 'vmin'}, current: null},
                    width : {max: {value: 50, unit: 'vmin'}, current: {value: 640, unit: 'px'}}
                },
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

                    if (dialog.content.close.hasCallback) {
                        dialog.content.close.callback.call(null);
                    }
                },
                onModalEscaped: function (e) {
                    if (e.keyCode === 27) {
                        (debug) && console.log('Dialog: Escaped [ESC] Event', {id: instance.id, event: e});
                        (instance && instance.shown) && (dialog.el.modal('hide'));
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
                controls: {
                    hasButton: false,
                    ref      : modalControls
                },
                close   : {
                    hasButton  : false,
                    hasCallback: false,
                    ref        : modalClose,
                    callback   : null
                }
            };
        }

        function execute(description) {
            var timer = setTimeout(function () {
                if (description.handler && jQuery.isFunction(description.handler)) {
                    (debug) && console.log('Dialog: Executing Callback', {id: instance.id, description: description});
                    description.handler.apply(null, (description.args || null));

                } else {
                    (debug) && console.log('Dialog: Skip Executing Callback', {id: instance.id, description: description});
                }

                clearTimeout(timer);
                timer = null;
            }, defaultValues.delay);

            if (dialog.content.close.hasCallback) {
                dialog.content.close.hasCallback = false;
                dialog.content.close.callback = null;
            }

            (instance && instance.shown && description && !description.prevent) && (dialog.el.modal('hide'));
        }

        this.config = function (description) {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Config', {id: instance.id, description: description});

            if (description.width && description.width.value && description.width.unit) {
                dialog.el.find('.modal-dialog').css('width', (function getWidth() {
                    return description.width.value + description.width.unit;
                })());
            }
            if (description.height && description.height.value && description.height.unit) {
                dialog.el.find('.modal-body').css('max-height', (function getHeight() {
                    return description.height.value + description.height.unit;
                })());
            }

            return this;
        };
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

            if (body && body.length) {
                if (body instanceof jQuery) {
                    dialog.content.body.empty().append(body);
                } else {
                    dialog.content.body.html(body)
                }
            }

            return this;
        };
        this.button = function (description) {
            var button = {
                    'type' : 'button',
                    'text' : defaultValues.button.text,
                    'class': defaultValues.button.class
                },
                destination = dialog.content.controls.ref,
                handler;

            (!dialog.el) && (init.call(null));

            if (description) {
                if (destination && button && description.type) {
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
                if (destination && button && description.click && jQuery.isFunction(description.click.handler)) {
                    handler = function () {
                        execute(description.click);
                    };

                    if ((description.type === 'close') && dialog.content.close.hasButton) {
                        if (!dialog.content.close.hasCallback) {
                            dialog.content.close.hasCallback = true;
                            dialog.content.close.callback = handler;
                        } else {
                            button = null;
                        }
                    } else {
                        button['click'] = handler;
                    }
                }
                if (destination && button && description.text) {
                    button['text'] = description.text;
                }
            }
            if (destination && button) {
                (debug) && console.log('Dialog: Add Button', {id: instance.id, description: description});
                $('<button>', button).appendTo(destination);

                if (destination.is(dialog.content.controls.ref) && !dialog.content.controls.hasButton) {
                    dialog.content.controls.hasButton = true;
                }
            } else {
                (debug) && console.log('Dialog: Skip Add Button', {id: instance.id, description: description});
            }

            return this;
        };
        this.destroy = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Destroy', {id: instance.id});
            dialog.el.remove();
        };
        this.hide = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Hide', {id: instance.id, shown: instance.shown});
            (instance && instance.shown) && (instance.shown = false);
            dialog.el.modal('hide');

            return this;
        };
        this.info = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Info', {dialog: dialog, instance: instance});

            return this;
        };
        this.refs = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Get Refs', {dialog: dialog, instance: instance});

            return dialog;
        };
        this.show = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Show', {id: instance.id});
            (!dialog.container) && (this.bind(defaultValues.container));

            if (!dialog.content.close.hasButton) {
                if (!dialog.content.controls.hasButton) {
                    dialog.content.footer.remove();
                } else {
                    dialog.content.close.ref.remove();
                }
            }

            dialog.el.modal('show');

            return this;
        };
        this.title = function (title) {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Set Title', {id: instance.id, title: title});
            (title && title.length) && dialog.content.title.html(title);

            return this;
        };
    }

    utils.dialog = (function factory() {
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
                                (debug) && (console.log('Dialog Factory: Setting Shown State', {
                                    id: id, from: state, to: value
                                }));

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

                Object.defineProperty(item, 'ref', {value: new Dialog(item)});

                storage[id] = item;

                return item.ref;
            },
            status     : function () {
                console.info('Status', {counter: counter, storage: storage});
            }
        };
    })();
    /* greeting */
    (debug) && (console.info(greetingMsg));
    /* return */
    window[referenceName] = utils;
})('rh_utils');