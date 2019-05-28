/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function init_utils(referenceName) {
    var utils = (window[referenceName] || {}),
        debug = false;

    function /* constructor */ Shield() {
        var classes           = {
                'shield':   'x-shield-container',
                'body':     'x-body',
                'relative': 'x-relative',
                'text':     'x-shield-text',
                'hidden':   'x-hidden',
                getClass:   function (className) {
                    return ['.', this[className]].join('');
                }
            },
            reference         = {
                'target':       null,
                'shield':       null,
                'message':      'Загрузка данных...',
                'shield-state': null,
                'prevent':      false
            },
            keyCodesWhiteList = {
                'F5':  {keyCode: 116, description: 'Reload/Refresh Page'},
                check: function (event) {
                    return (this['F5'].keyCode === event.keyCode);
                }
            },
            events            = {
                keydownHandler:      function (event) {
                    if (!keyCodesWhiteList.check(event)) {
                        event.preventDefault();

                        return false;
                    }
                },
                beforeunloadHandler: function (event) {
                    var confirmationMessage = 'Собираетесь покинуть страницу?';

                    event.returnValue = confirmationMessage;

                    return confirmationMessage;
                }
            };

        function disableKeydown(state) {
            document.removeEventListener('keydown', events.keydownHandler);

            if (state) {
                document.addEventListener('keydown', events.keydownHandler);
            }
        }

        function preventLeavePage(state) {
            window.removeEventListener('beforeunload', events.beforeunloadHandler);

            if (state) {
                window.addEventListener('beforeunload', events.beforeunloadHandler)
            }
        }

        /* chain call pattern */
        this.create  = function () {
            var shieldScreen       = $('<div>', {'class': classes['shield']}),
                shieldMessage      = $('<div>', {'class': 'x-shield-message'}),
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

            if (reference['shield']) {
                reference['shield'].find(classes.getClass('text')).text(message);
            }

            return this;
        };
        this.show    = function () {
            if (reference['target']) {
                disableKeydown(true);

                (reference['prevent'] === true) && (preventLeavePage(true));

                reference['target'].find('*').blur();
                reference['shield-state'] = 'shown';

                if (reference['target'].is('body')) {
                    if (!reference['target'].hasClass(classes['body'])) {
                        reference['target'].addClass(classes['body']);
                    }
                } else {
                    if (!reference['target'].hasClass(classes['relative'])) {
                        reference['target'].addClass(classes['relative']);
                    }
                }

                if (reference['shield'].hasClass(classes['hidden'])) {
                    reference['shield'].removeClass(classes['hidden']);
                } else {
                    if (!reference['target'].find(classes.getClass('shield')).length) {
                        reference['shield'].prependTo(reference['target']);
                    }
                }
            }

            return this;
        };
        this.hide    = function () {
            if (reference['shield'] && reference['target']) {
                disableKeydown(false);
                preventLeavePage(false);

                reference['shield-state'] = 'hidden';

                if (!reference['shield'].hasClass(classes['hidden'])) {
                    reference['shield'].addClass(classes['hidden']);
                }
            }

            return this;
        };
        this.prevent = function (mode) {
            reference['prevent'] = mode;

            return this;
        };
        this.destroy = function () {
            if (reference['target']) {
                disableKeydown(false);
                reference['target'].removeClass(classes['relative']).removeClass(classes['body']);
                reference['target'].find(classes.getClass('shield')).remove();
                reference = {
                    'target':       null,
                    'shield':       null,
                    'message':      'Загрузка данных...',
                    'shield-state': null
                };
            }

            return this;
        };
        this.status  = function () {
            console.info('status: ', reference);
        };
    }

    function /* constructor */ Alfirm_deprecated() {
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
            (debug) && console.log('Alfirm Set Title!');

            (title && title.length && alfirm) && (alfirm.content.title.text = title);

            return this;
        };
        this.body    = function (body) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Body!');

            (body && body.length && alfirm) && (alfirm.content.body.text = body);

            return this;
        };
        this.okay    = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Okay Callback!');

            (callback && jQuery.isFunction(callback)) && (alfirm.callback.okay = callback);

            return this;
        };
        this.cancel  = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Cancel Callback!');

            (callback && jQuery.isFunction(callback)) && (alfirm.callback.cancel = callback);

            return this;
        };
        this.confirm = function (mode) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Confirm Mode!');

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

    function /* constructor */ Alfirm(instance) {
        var events        = {
                onOkay:         function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Confirmed! [Oк]', 'ID: ' + instance.id);

                    (alfirm.callback.okay) && execute(alfirm.callback.okay);
                },
                onCancel:       function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Canceled! [Отмена]', 'ID: ' + instance.id);

                    (alfirm.callback.cancel) && execute(alfirm.callback.cancel);
                },
                onModalShow:    function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Show!', 'ID: ' + instance.id);
                },
                onModalShown:   function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Shown!', 'ID: ' + instance.id);

                    (instance) && (instance.shown = true);
                },
                onModalHide:    function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Hide!', 'ID: ' + instance.id);
                },
                onModalHidden:  function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Hidden!', 'ID: ' + instance.id);

                    if (alfirm) {
                        if (alfirm.confirm !== defaultValues.confirm) {
                            (debug) && console.log('Alfirm Clear Confirm Mode!', 'ID: ' + instance.id);
                            alfirm.confirm = false;
                        }
                        if (alfirm.callback.okay) {
                            (debug) && console.log('Alfirm Clear Okay Callback!', 'ID: ' + instance.id);
                            alfirm.callback.okay = null;
                        }
                        if (alfirm.callback.cancel) {
                            (debug) && console.log('Alfirm Clear Cancel Callback!', 'ID: ' + instance.id);
                            alfirm.callback.cancel = null;
                        }
                        if (alfirm.content.title.text !== defaultValues.title) {
                            (debug) && console.log('Alfirm Clear Title!', 'ID: ' + instance.id);
                            alfirm.content.title.text = defaultValues.title;
                        }
                        if (alfirm.content.body.text !== defaultValues.body) {
                            (debug) && console.log('Alfirm Clear Body!', 'ID: ' + instance.id);
                            alfirm.content.body.text = defaultValues.body;
                        }
                    }

                    (instance) && (instance.shown = false);
                },
                onModalEscaped: function (e) {
                    //todo не забыть убрать debug
                    (debug) && (e.keyCode === 27) && console.log('Alfirm Modal Escaped! [ESC]', 'ID: ' + instance.id);

                    if (e.keyCode === 27) {
                        (alfirm.confirm === true) && alfirm.callback.cancel && execute(alfirm.callback.cancel);
                        (alfirm.confirm === false) && alfirm.callback.okay && execute(alfirm.callback.okay);
                    }
                },
            },
            defaultValues = {
                title:     'Подтвердите действие',
                body:      'Пустое сообщение...',
                container: (function getContainer() {
                    var alfirmContainer = $('#x-alfirm-container');

                    if (alfirmContainer && alfirmContainer.length) {
                        return alfirmContainer;
                    }

                    alfirmContainer = $('<div>', {'id': 'x-alfirm-container'});
                    alfirmContainer.prependTo($('body'));

                    return alfirmContainer;
                })(),
                confirm:   false,
                delay:     200,
            },
            alfirm        = null;

        function init() {
            var modal        = $('<div>', {
                    'class':    'modal fade',
                    'id':       ('x-alfirm-' + (instance.id ? instance.id : 1)),
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
                    'html':         'Ок'
                }),
                btnCancel    = $('<button>', {
                    'id':           'x-alfirm-btn-cancel',
                    'class':        'btn btn-default',
                    'type':         'button',
                    'data-dismiss': 'modal',
                    'html':         'Отмена'
                }),
                description  = {
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
                };

            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Init!', 'ID: ' + instance.id);

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
            modal.on('show.bs.modal', events.onModalShow);
            modal.on('shown.bs.modal', events.onModalShown);
            modal.on('hide.bs.modal', events.onModalHide);
            modal.on('hidden.bs.modal', events.onModalHidden);
            modal.on('keydown', events.onModalEscaped);
            modal.find(btnOkay).on('click', events.onOkay);
            modal.find(btnCancel).on('click', events.onCancel);

            return (function setReactivity() {
                var
                    setTitle = function (reference, title) {
                        reference.text(title);
                    },
                    setBody  = function (reference, body) {
                        reference.html(body);
                    },
                    reactive = [
                        {object: description.content.title, callback: setTitle},
                        {object: description.content.body, callback: setBody}
                    ];

                //todo не забыть убрать debug
                (debug) && console.log('Alfirm Set Reactivity!', 'ID: ' + instance.id);

                reactive.forEach(function (element) {
                    var internalValue = element.object.text;

                    Object.defineProperty(element.object, 'text', {
                        get: function () {
                            return internalValue;
                        },
                        set: function (newValue) {
                            internalValue = newValue;

                            element.callback(element.object.reference, internalValue);
                        }
                    });
                });

                return description;
            })();
        }

        function execute(callback) {
            var timer = setTimeout(function () {
                //todo не забыть убрать debug
                (debug) && console.log('Alfirm Execute Callback!', 'ID: ' + instance.id);
                callback();
                clearTimeout(timer);
                timer = null;
            }, defaultValues.delay);

            // (alfirm.stack === false) && self.hide();
        }

        this.bind    = function (container) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Bind!', 'ID: ' + instance.id);

            (container) && (alfirm.container = container);
            alfirm.reference.prependTo(alfirm.container);

            return this;
        };
        this.body    = function (body) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Body!', 'ID: ' + instance.id);

            (body && body.length) && (alfirm.content.body.text = body);

            return this;
        };
        this.cancel  = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Cancel Callback!', 'ID: ' + instance.id);

            (callback && jQuery.isFunction(callback)) && (alfirm.callback.cancel = callback);

            return this;
        };
        this.confirm = function (mode) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Confirm Mode!', 'ID: ' + instance.id);

            alfirm.confirm = mode;

            return this;
        };
        this.hide    = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Hide!', 'ID: ' + instance.id);

            (alfirm.reference) && alfirm.reference.modal('hide');

            return this;
        };
        this.okay    = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Okay Callback!', 'ID: ' + instance.id);

            (callback && jQuery.isFunction(callback)) && (alfirm.callback.okay = callback);

            return this;
        };
        this.show    = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Show!', 'ID: ' + instance.id);

            (!alfirm.container) && (this.bind(defaultValues.container));
            (alfirm.confirm === true) ? alfirm.content.footer.buttons.cancel.reference.show() : alfirm.content.footer.buttons.cancel.reference.hide();

            (alfirm.reference) && alfirm.reference.modal('show');

            return this;
        };
        this.status  = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.info('Alfirm Status!');
            (debug) && console.info('alfirm:', alfirm);
            (debug) && console.info('instance:', instance);
        };
        this.timer   = function (msecs) {

        };
        this.title   = function (title) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Set Title!', 'ID: ' + instance.id);

            (title && title.length) && (alfirm.content.title.text = title);

            return this;
        };
    }

    utils.shield            = (function () {
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
    utils.alfirm_deprecated = (function () {
        var instance;

        return {
            getInstance: function () {
                /* singleton */
                if (!instance) {
                    instance = new Alfirm_deprecated();
                }

                return instance;
            }
        }
    })();
    utils.alfirm            = (function () {
        var counter = 0,
            storage = [],
            index;

        return {
            getInstance: function () {
                var instance = {id: (counter + 1), shown: false};

                if (counter) {
                    for (index = 0; index < counter; index += 1) {
                        if ((storage[index].shown === false) && storage[index].reference) {
                            return storage[index].reference;
                        }
                    }
                }

                instance.reference = new Alfirm(instance);
                counter            = instance.id;

                storage.push(instance);

                return instance.reference;
            },
            status:      function () {
                console.info('counter: ', counter);
                console.info('storage: ', storage);
            }
        };
    })();

    /* return */
    window[referenceName] = utils;
})('rh_utils');