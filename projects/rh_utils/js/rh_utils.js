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
        var defaultValues = {
                title:    'Подтвердите действие',
                body:     'Пустое сообщение...',
                onOkay:   function () {
                    console.log('Alfirm Confirmed! [Oк]');
                },
                onCancel: function () {
                    console.log('Alfirm Canceled! [Отмена]');
                },
                shown:    function (e) {
                    console.log('Alfirm Shown!');
                    e.data.focusButton.focus();
                },
                hidden:   function (e) {
                    console.log('Alfirm Hidden!');
                }
            },
            alfirm        = null;

        function init() {
            var container    = $('body'),
                modal        = $('<div>', {'class': 'modal fade', 'id': 'x-alfirm', 'tabindex': '-1', 'role': 'dialog'}),
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
                model        = {
                    reference: modal,
                    callback:  null,
                    content:   {
                        title:  {reference: modalTitle, text: defaultValues.title},
                        body:   {reference: modalBody, text: defaultValues.body},
                        footer: {
                            reference: modalFooter,
                            buttons:   {
                                okay:   {reference: btnOkay, callback: defaultValues.onOkay},
                                cancel: {reference: btnCancel, callback: defaultValues.onCancel},
                            }
                        }
                    }
                };
            console.log('Alfirm Init!');
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
            modal.on('shown.bs.modal', {focusButton: btnOkay}, defaultValues.shown);
            modal.on('hidden.bs.modal', {modal: modal}, defaultValues.hidden);

            modal.prependTo(container);
            console.log('Alfirm Initiated!');

            return model;
        }

        this.show   = function () {
            if (!alfirm) {
                alfirm = init();
            }

            console.log('Alfirm Show!');
            alfirm.reference.modal('show');

            return this;
        };
        this.status = function () {
            console.info('Alfirm Status!', alfirm);
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