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
                    close: {
                        'class': 'btn btn-default',
                        'text' : 'Default button text...',
                    }
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
                },
                onModalEscaped: function (e) {
                    if (e.keyCode === 27) {
                        (debug) && console.log('Dialog: Escaped [ESC] Event', {id: instance.id, event: e});
                        dialog.el.modal('hide');
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
                    controls: null
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
                }),
                buttonClose = $('<button>', {
                    'class'       : defaultValues.button.close.class,
                    'type'        : 'button',
                    'data-dismiss': 'modal',
                    'text'        : defaultValues.button.close.text,
                });

            (debug) && console.log('Dialog: Init', {id: instance.id});
            /* content */
            modalTitle.appendTo(modalHeader);
            modalHeader.appendTo(modalContent);
            modalBody.appendTo(modalContent);
            modalClose.appendTo(modalFooter);
            modalControls.appendTo(modalFooter);
            modalFooter.appendTo(modalContent);
            modalContent.appendTo(modalDialog);
            modalDialog.appendTo(modal);
            buttonX.prependTo(modalHeader);
            buttonClose.appendTo(modalClose);
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
                controls: modalControls
            };
        }

        function destroy() {}

        function execute(callback, args) {
            dialog.el.modal('hide');
            var timer = setTimeout(function () {
                (debug) && console.log('Dialog: Executing Callback', {id: instance.id, callback: callback, args: args});
                (callback && jQuery.isFunction(callback)) && (callback.apply(null, args));
                clearTimeout(timer);
                timer = null;
            }, defaultValues.delay);
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
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Add Button', {id: instance.id, description: description});

            if (description) {
                $('<button>', {
                    'class': (description.class || defaultValues.button.close.class),
                    'text' : (description.text || defaultValues.button.close.text),
                    'type' : 'button',
                    'click': function () {
                        if (description.click && jQuery.isFunction(description.click.handler)) {
                            execute(description.click.handler, (description.click.args || null));
                        }
                    }
                }).appendTo(dialog.content.controls);
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
        };
        this.show = function () {
            (!dialog.el) && (init.call(null));
            (debug) && console.log('Dialog: Show', {id: instance.id});
            (!dialog.container) && (this.bind(defaultValues.container));
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

    utils.dialog = (function () {
        var counter = 0,
            storage = [],
            index = 0;

        return {
            getInstance: function () {
                return new Dialog({id: ++counter});
            },
            status     : function () {
                console.info('counter: ', counter);
                console.info('storage: ', storage);
            }
        };
    })();

    /* return */
    window[referenceName] = utils;
})('rh_utils');