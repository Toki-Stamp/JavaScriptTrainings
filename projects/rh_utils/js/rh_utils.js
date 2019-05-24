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
            defaultValues = {
                title:        'Подтвердите действие',
                body:         'Пустое сообщение...',
                container:    $('body'),
                onOkay:       function (e) {
                    var callback = (alfirm.callback || null),
                        timer;
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Confirmed! [Oк]');

                    if (callback) {
                        self.hide();
                        timer = setTimeout(function () {
                            //todo не забыть убрать debug
                            (debug) && console.log('Alfirm Run Callback!');
                            callback();
                            clearTimeout(timer);
                            timer = null;
                        }, 350);
                    }
                },
                onCancel:     function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Canceled! [Отмена]');
                },
                modalShown:   function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Shown!');
                },
                modalHidden:  function (e) {
                    //todo не забыть убрать debug
                    (debug) && console.log('Alfirm Modal Hidden!');

                    if (alfirm) {
                        if (alfirm.callback) {
                            (debug) && console.log('Alfirm Clear Callback!');
                            alfirm.callback = null;
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
                modalEscaped: function (e) {
                    //todo не забыть убрать debug
                    (debug) && (e.keyCode === 27) && console.log('Alfirm Modal Escaped! [ESC]');
                },
                setTitle:     function (reference, title) {
                    reference.text(title);
                },
                setBody:      function (reference, body) {
                    reference.html(body);
                },
            },
            alfirm        = null;
        //todo не забыть убрать debug
        var debug         = true;

        function init() {
            var modal        = $('<div>', {
                    'class': 'modal fade', 'id': 'x-alfirm', 'tabindex': '-1', 'role': 'dialog'
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
                            callback:  null,
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
                                (debug) && console.log('Getting "text" from', element, ':', '"' + internalValue + '"');

                                return internalValue;
                            },
                            set: function (newValue) {
                                //todo не забыть убрать debug
                                (debug) && console.log('Setting "text" of', element, 'from', '"' + internalValue + '"', 'to', '"' + newValue + '"');
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
            modal.on('shown.bs.modal', defaultValues.modalShown);
            modal.on('hidden.bs.modal', defaultValues.modalHidden);
            modal.on('keydown', defaultValues.modalEscaped);
            modal.find(btnOkay).on('click', defaultValues.onOkay);
            modal.find(btnCancel).on('click', defaultValues.onCancel);
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Init!');

            return object;
        }

        this.bind     = function (container) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Bind!');

            (container) && (alfirm.container = container);
            alfirm.reference.prependTo(alfirm.container);

            return this;
        };
        this.title    = function (title) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Title!');

            (title && title.length && alfirm) && (alfirm.content.title.text = title);

            return this;
        };
        this.body     = function (body) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Body!');

            (body && body.length && alfirm) && (alfirm.content.body.text = body);

            return this;
        };
        this.callback = function (callback) {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Callback!');

            (callback && jQuery.isFunction(callback)) && (alfirm.callback = callback);

            return this;
        };
        this.show     = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Show!');

            (!alfirm.container) && this.bind(defaultValues.container);
            (alfirm.callback) ? alfirm.content.footer.buttons.cancel.reference.show() : alfirm.content.footer.buttons.cancel.reference.hide();

            (alfirm.reference) && alfirm.reference.modal('show');

            return this;
        };
        this.hide     = function hide() {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.log('Alfirm Hide!');

            (alfirm.reference) && alfirm.reference.modal('hide');

            return this;
        };
        this.status   = function () {
            alfirm = (alfirm || init());
            //todo не забыть убрать debug
            (debug) && console.info('Alfirm Status!', alfirm);
            //todo не забыть убрать это!
            window.alfirm = alfirm;
        };
    }

    utils.shield = (function () {
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
    utils.alfirm = (function () {
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

    /* return */
    window[referenceName] = utils;
})('rh_utils');