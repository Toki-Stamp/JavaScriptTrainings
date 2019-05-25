/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function init_utils(referenceName) {
    var utils = (window[referenceName] || {});

    function /* constructor */ Shield() {
        var classes   = {
                'shield':   'x-shield-container',
                'message':  'x-shield-message',
                'body':     'x-body',
                'relative': 'x-relative',
                'text':     'x-shield-text',
                'hidden':   'x-hidden',
                'get':      function (className) {
                    return ['.', this[className]].join('');
                }
            },
            reference = {'target': null, 'shield': null, 'message': null};
        /* chain call pattern */
        this.create  = function () {
            var shieldScreen       = $('<div>', {'class': classes['shield']}),
                shieldMessage      = $('<div>', {'class': classes['message']}),
                animationContainer = $('<div>', {'class': 'x-shield-message-animation-container'}),
                textContainer      = $('<div>', {'class': 'x-shield-message-text-container'}),
                spinnerAnimation   = $('<span>', {'class': 'fa fa-spinner fa-pulse'}),
                shieldText         = $('<span>', {'class': classes['text'], 'text': reference['message']});

            animationContainer.appendTo(shieldMessage);
            textContainer.appendTo(shieldMessage);
            spinnerAnimation.appendTo(animationContainer);
            shieldText.appendTo(textContainer);
            shieldMessage.appendTo(shieldScreen);

            reference['shield'] = shieldScreen;

            return this;
        };
        this.bind    = function (target) {
            reference['target'] = target;

            return this;
        };
        this.message = function (message) {
            reference['message'] = message;
            reference['shield'].find(classes.get('text')).text(message);

            if (reference['message']) {
                reference['shield'].find(classes.get('message')).removeClass(classes['hidden']);
            } else {
                reference['shield'].find(classes.get('message')).addClass(classes['hidden']);
            }

            return this;
        };
        this.show    = function () {
            if (reference['target']) {
                if (reference['target'].is('body')) {
                    if (!reference['target'].hasClass(classes['body'])) {
                        reference['target'].addClass(classes['body']);
                    }
                } else {
                    if (!reference['target'].hasClass(classes['relative'])) {
                        reference['target'].addClass(classes['relative']);
                    }
                }

                if (reference['message']) {
                    reference['shield'].find(classes.get('message')).removeClass(classes['hidden']);
                } else {
                    reference['shield'].find(classes.get('message')).addClass(classes['hidden']);
                }

                if (reference['shield'].hasClass(classes['hidden'])) {
                    reference['shield'].removeClass(classes['hidden']);
                } else {
                    if (!reference['target'].find(classes.get('shield')).length) {
                        reference['shield'].prependTo(reference['target']);
                    }
                }
            }

            return this;
        };
        this.hide    = function () {
            if (reference['shield']) {
                if (!reference['shield'].hasClass(classes['hidden'])) {
                    reference['shield'].addClass(classes['hidden']);
                }
            }

            return this;
        };
        this.destroy = function () {
            if (reference['target']) {
                reference['target'].removeClass(classes['relative']).removeClass(classes['body']);
                reference['target'].find(classes.get('shield')).remove();
            }

            return this;
        };
        this.status  = function () {
            console.info('status: ', reference);
        };
    }

    function /* constructor */ Alfirm() {
        var self          = this,
            events        = {
                onOkay:         function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Confirmed! [Oк]');

                    (alfirm.callback.okay) && execute(alfirm.callback.okay);
                },
                onCancel:       function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Canceled! [Отмена]');

                    (alfirm.callback.cancel) && execute(alfirm.callback.cancel);
                },
                onModalShown:   function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Shown!');
                },
                onModalHidden:  function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Hidden!');

                    if (alfirm) {
                        if (alfirm.confirm === true) {
                            (debug) && console.log('Alfirm Clear Confirm Mode!');
                            alfirm.confirm = false;
                        }
                        if (alfirm.callback.okay) {
                            (debug) && console.log('Alfirm Clear Okay Callback!');
                            alfirm.callback.okay = null;
                        }
                        if (alfirm.callback.cancel) {
                            (debug) && console.log('Alfirm Clear Cancel Callback!');
                            alfirm.callback.cancel = null;
                        }
                        if (alfirm.content.title.text !== defaultValues.title) {
                            (debug) && console.log('Alfirm Clear Title!');
                            alfirm.content.title.text = defaultValues.title;
                        }
                        if (alfirm.content.body.text !== defaultValues.body) {
                            (debug) && console.log('Alfirm Clear Body!');
                            alfirm.content.body.text = defaultValues.body;
                        }
                        //todo не забыть убрать debug
                        (debug) && self.status();
                    }
                },
                onModalEscaped: function (e) {
                    //todo не забыть убрать debug
                    (debug) && (e.keyCode === 27) && console.log('Alfirm Modal Escaped! [ESC]');

                    if (e.keyCode === 27) {
                        (alfirm.confirm === true) && alfirm.callback.cancel && execute(alfirm.callback.cancel);
                        (alfirm.confirm === false) && alfirm.callback.okay && execute(alfirm.callback.okay);
                    }
                },
            },
            defaultValues = {
                title:     'Подтвердите действие',
                body:      'Пустое сообщение...',
                container: $('body'),
                setTitle:  function (reference, title) {
                    reference.text(title);
                },
                setBody:   function (reference, body) {
                    reference.html(body);
                }
            },
            alfirm        = null;
        //todo не забыть убрать debug
        var debug         = true;

        function init() {
            var modal        = $('<div>', {'class': 'modal fade', 'id': 'x-alfirm', 'tabindex': '-1', 'role': 'dialog'}),
                modalDialog  = $('<div>', {'class': 'modal-dialog', 'role': 'document'}),
                modalContent = $('<div>', {'class': 'modal-content'}),
                modalHeader  = $('<div>', {'class': 'modal-header'}),
                modalTitle   = $('<div>', {'class': 'modal-title', 'html': defaultValues.title}),
                modalBody    = $('<div>', {'class': 'modal-body', 'html': defaultValues.body}),
                modalFooter  = $('<div>', {'class': 'modal-footer'}),
                btnOkay      = $('<button>', {
                    'id':           'x-alfirm-btn-okay',
                    'class':        'btn btn-primary',
                    'type':         'button',
                    'data-dismiss': 'modal',
                    'html':         '&nbsp;&nbsp;Ок&nbsp;&nbsp;'
                }),
                btnCancel    = $('<button>', {
                    'id':           'x-alfirm-btn-cancel',
                    'class':        'btn btn-default',
                    'type':         'button',
                    'data-dismiss': 'modal',
                    'html':         '&nbsp;&nbsp;Отмена&nbsp;&nbsp;'
                }),
                object       = (function update() {
                    var obj      = {
                            callback:  {okay: null, cancel: null},
                            confirm:   false,
                            container: null,
                            content:   {
                                title:  {reference: modalTitle, text: defaultValues.title},
                                body:   {reference: modalBody, text: defaultValues.body},
                                footer: {
                                    reference: modalFooter,
                                    buttons:   {
                                        okay:   {reference: btnOkay},
                                        cancel: {reference: btnCancel},
                                    }
                                }
                            },
                            reference: modal
                        },
                        reactive = [
                            {object: obj.content.title, callback: defaultValues.setTitle},
                            {object: obj.content.body, callback: defaultValues.setBody}
                        ];

                    reactive.forEach(function (element) {
                        var internalValue = element.object.text;

                        Object.defineProperty(element.object, 'text', {
                            get: function () {
                                //todo не забыть убрать debug
                                // (debug) && console.log('Getting "text" from', element, ':', '"' + internalValue + '"');

                                return internalValue;
                            },
                            set: function (newValue) {
                                //todo не забыть убрать debug
                                // (debug) && console.log('Setting "text" of', element, 'from', '"' + internalValue + '"', 'to', '"' + newValue + '"');
                                internalValue = newValue;

                                element.callback(element.object.reference, internalValue);
                            }
                        });
                    });

                    return obj;
                })();
            /* content */
            modalTitle.appendTo(modalHeader);
            modalHeader.appendTo(modalContent);
            modalBody.appendTo(modalContent);
            btnOkay.appendTo(modalFooter);
            btnCancel.appendTo(modalFooter);
            modalFooter.appendTo(modalContent);
            modalContent.appendTo(modalDialog);
            modalDialog.appendTo(modal);
            /* bootstrap: modal */
            modal.modal({'backdrop': false, 'keyboard': true, 'show': false});
            /* events */
            modal.on('shown.bs.modal', events.onModalShown);
            modal.on('hidden.bs.modal', events.onModalHidden);
            modal.on('keydown', events.onModalEscaped);
            modal.find(btnOkay).on('click', events.onOkay);
            modal.find(btnCancel).on('click', events.onCancel);
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Init!');

            return object;
        }

        function execute(callback) {
            var timer = setTimeout(function () {
                //todo не забыть убрать debug
                (debug) && console.log('Alfirm Execute Callback!');
                callback();
                clearTimeout(timer);
                timer = null;
            }, 350);

            self.hide();
        }

        this.bind    = function (container) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Bind!');

            (container) && (alfirm.container = container);
            alfirm.reference.prependTo(alfirm.container);

            return this;
        };
        this.title   = function (title) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Title!');

            (title && title.length && alfirm) && (alfirm.content.title.text = title);

            return this;
        };
        this.body    = function (body) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Body!');

            (body && body.length && alfirm) && (alfirm.content.body.text = body);

            return this;
        };
        this.okay    = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Okay Callback!');

            (callback && jQuery.isFunction(callback)) && (alfirm.callback.okay = callback);

            return this;
        };
        this.cancel  = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Cancel Callback!');

            (callback && jQuery.isFunction(callback)) && (alfirm.callback.cancel = callback);

            return this;
        };
        this.confirm = function (mode) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Confirm!');

            alfirm.confirm = mode;

            return this;
        };
        this.show    = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Show!');

            (!alfirm.container) && this.bind(defaultValues.container);
            (alfirm.confirm === true) ? alfirm.content.footer.buttons.cancel.reference.show() : alfirm.content.footer.buttons.cancel.reference.hide();

            (alfirm.reference) && alfirm.reference.modal('show');

            return this;
        };
        this.hide    = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Hide!');

            (alfirm.reference) && alfirm.reference.modal('hide');

            return this;
        };
        this.status  = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.info('Alfirm Status!', alfirm);
        };
    }

    function /* constructor */ Multialfirm(id, service) {
        var self          = this,
            defaultValues = {
                title:          'Подтвердите действие',
                body:           'Пустое сообщение...',
                container:      $('body'),
                onOkay:         function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Confirmed! [Oк]');

                    (alfirm.callback.okay) && execute(alfirm.callback.okay);
                },
                onCancel:       function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Canceled! [Отмена]');

                    (alfirm.callback.cancel) && execute(alfirm.callback.cancel);
                },
                onModalShown:   function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Shown!');
                },
                onModalHidden:  function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Hidden!');

                    if (alfirm) {
                        if (alfirm.callback.okay) {
                            (debug) && console.log('Alfirm Clear Okay Callback!');
                            alfirm.callback.okay = null;
                        }
                        if (alfirm.callback.cancel) {
                            (debug) && console.log('Alfirm Clear Cancel Callback!');
                            alfirm.callback.cancel = null;
                        }
                        if (alfirm.content.title.text !== defaultValues.title) {
                            (debug) && console.log('Alfirm Clear Title!');
                            alfirm.content.title.text = defaultValues.title;
                        }
                        if (alfirm.content.body.text !== defaultValues.body) {
                            (debug) && console.log('Alfirm Clear Body!');
                            alfirm.content.body.text = defaultValues.body;
                        }
                    }
                },
                onModalEscaped: function (e) {
                    //todo не забыть убрать debug
                    (debug) && (e.keyCode === 27) && console.log('Alfirm Modal Escaped! [ESC]');

                    (e.keyCode === 27) && (alfirm.callback.cancel) && execute(alfirm.callback.cancel);
                },
                setTitle:       function (reference, title) {
                    reference.text(title);
                },
                setBody:        function (reference, body) {
                    reference.html(body);
                },
            },
            alfirm        = null;
        //todo не забыть убрать debug
        var debug         = true;

        function init() {
            var modal        = $('<div>', {
                    'class':    'modal fade',
                    'id':       ('x-alfirm-' + (id ? id : 0)),
                    'tabindex': '-1',
                    'role':     'dialog'
                }),
                modalDialog  = $('<div>', {'class': 'modal-dialog', 'role': 'document'}),
                modalContent = $('<div>', {'class': 'modal-content'}),
                modalHeader  = $('<div>', {'class': 'modal-header'}),
                modalTitle   = $('<div>', {'class': 'modal-title', 'html': defaultValues.title}),
                modalBody    = $('<div>', {'class': 'modal-body', 'html': defaultValues.body}),
                modalFooter  = $('<div>', {'class': 'modal-footer'}),
                btnOkay      = $('<button>', {
                    'id':           'x-alfirm-btn-okay',
                    'class':        'btn btn-primary',
                    'type':         'button',
                    'data-dismiss': 'modal',
                    'html':         '&nbsp;&nbsp;Ок&nbsp;&nbsp;'
                }),
                btnCancel    = $('<button>', {
                    'id':           'x-alfirm-btn-cancel',
                    'class':        'btn btn-default',
                    'type':         'button',
                    'data-dismiss': 'modal',
                    'html':         '&nbsp;&nbsp;Отмена&nbsp;&nbsp;'
                }),
                object       = (function update() {
                    var obj      = {
                            callback:  {okay: null, cancel: null},
                            container: null,
                            content:   {
                                title:  {reference: modalTitle, text: defaultValues.title},
                                body:   {reference: modalBody, text: defaultValues.body},
                                footer: {
                                    reference: modalFooter,
                                    buttons:   {
                                        okay:   {reference: btnOkay},
                                        cancel: {reference: btnCancel},
                                    }
                                }
                            },
                            destroy:   false,
                            reference: modal
                        },
                        reactive = [
                            {object: obj.content.title, callback: defaultValues.setTitle},
                            {object: obj.content.body, callback: defaultValues.setBody}
                        ];

                    reactive.forEach(function (element) {
                        var internalValue = element.object.text;

                        Object.defineProperty(element.object, 'text', {
                            get: function () {
                                //todo не забыть убрать debug
                                // (debug) && console.log('Getting "text" from', element, ':', '"' + internalValue + '"');

                                return internalValue;
                            },
                            set: function (newValue) {
                                //todo не забыть убрать debug
                                // (debug) && console.log('Setting "text" of', element, 'from', '"' + internalValue + '"', 'to', '"' + newValue + '"');
                                internalValue = newValue;

                                element.callback(element.object.reference, internalValue);
                            }
                        });
                    });

                    return obj;
                })();
            /* content */
            modalTitle.appendTo(modalHeader);
            modalHeader.appendTo(modalContent);
            modalBody.appendTo(modalContent);
            btnOkay.appendTo(modalFooter);
            btnCancel.appendTo(modalFooter);
            modalFooter.appendTo(modalContent);
            modalContent.appendTo(modalDialog);
            modalDialog.appendTo(modal);
            /* bootstrap: modal */
            modal.modal({'backdrop': false, 'keyboard': true, 'show': false});
            /* events */
            modal.on('shown.bs.modal', defaultValues.onModalShown);
            modal.on('hidden.bs.modal', defaultValues.onModalHidden);
            modal.on('keydown', defaultValues.onModalEscaped);
            modal.find(btnOkay).on('click', defaultValues.onOkay);
            modal.find(btnCancel).on('click', defaultValues.onCancel);
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Init!');

            return object;
        }

        function execute(callback) {
            var timer = setTimeout(function () {
                //todo не забыть убрать debug
                (debug) && console.log('Alfirm Execute Callback!');
                callback();
                clearTimeout(timer);
                timer = null;
            }, 350);
            self.hide();
        }

        this.bind    = function (container) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Bind!');

            (container) && (alfirm.container = container);
            alfirm.reference.prependTo(alfirm.container);

            return this;
        };
        this.title   = function (title) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Title!');

            (title && title.length && alfirm) && (alfirm.content.title.text = title);

            return this;
        };
        this.body    = function (body) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Body!');

            (body && body.length && alfirm) && (alfirm.content.body.text = body);

            return this;
        };
        this.okay    = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Okay Callback!');

            (callback && jQuery.isFunction(callback)) && (alfirm.callback.okay = callback);

            return this;
        };
        this.cancel  = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Cancel Callback!');

            (callback && jQuery.isFunction(callback)) && (alfirm.callback.cancel = callback);

            return this;
        };
        this.show    = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Show!');

            (!alfirm.container) && this.bind(defaultValues.container);
            (alfirm.callback.okay) ? alfirm.content.footer.buttons.cancel.reference.show() : alfirm.content.footer.buttons.cancel.reference.hide();

            (alfirm.reference) && alfirm.reference.modal('show');

            return this;
        };
        this.hide    = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Hide!');

            (alfirm.reference) && alfirm.reference.modal('hide');

            return this;
        };
        this.destroy = function (state) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Destroy!');

            (state) && (alfirm.destroy = state);

            return this;
        };
        this.status  = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.info('Alfirm Status!', alfirm);

            return this;
        };
    }

    utils.shield      = (function () {
        var counter = 0,
            store   = {};

        return {
            getNewInstance: function () {
                var instance = new Shield();

                store[++counter] = instance;

                return instance;
            },
            status:         function () {
                console.info('instances: ', counter);
                console.info('store: ', store);
            }
        }
    })();
    utils.alfirm      = (function () {
        var instance;

        return {
            getInstance: function () {
                /* singleton */
                if (!instance) {
                    instance = new Alfirm();
                }

                return instance;
            }
        }
    })();
    utils.multialfirm = (function () {
        var counter = 0,
            store   = {},
            service = {
                getNewInstance: function () {
                    var instance = new Multialfirm(++counter, service);

                    store[counter] = instance;

                    return instance;
                },
                getInstance:    function (id) {
                    return (store[id] ? store[id] : null);
                },
                destroy:        function (id) {
                    (store[id]) && (store[id] = null);
                },
                status:         function () {
                    console.info('instances: ', counter);
                    console.info('store: ', store);
                }
            };

        return service;
    })();

    /* return */
    window[referenceName] = utils;
})('rh_utils');