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

    function /* constructor */ Alert() {
        var reference = (function () {
            var description = {
                'target':  $('body'),
                'modal':   null,
                'title':   {
                    'defaultValue': 'Подтвердите действие',
                    'currentValue': null,
                    'reactive':     true,
                    'callback':     function (title) {
                        if (description['modal'] && description['modal'].length) {
                            description['modal'].find('.modal-title').text(((title && title.length) ? title : description['title']['defaultValue']));
                        }
                    }
                },
                'message': {
                    'defaultValue': 'Пустое сообщение...',
                    'currentValue': null,
                    'reactive':     true,
                    'callback':     function (message) {
                        if (description['modal'] && description['modal'].length) {
                            description['modal'].find('.modal-body').html(message);
                        }
                    }
                },
            };

            Object.keys(description).forEach(function (item) {
                var internalValue;

                if (description[item] && description[item]['reactive']) {
                    internalValue = description[item]['currentValue'];

                    Object.defineProperty(description[item], 'currentValue', {
                        get: function () {
                            console.log(`Прочитали "${item}" равное "${internalValue}"`);

                            return internalValue;
                        },
                        set: function (newValue) {
                            var preValue = ((newValue && newValue.length) ? newValue : null);

                            console.log(`Установили "${item}" из "${internalValue}" в значение "${preValue}"`);
                            internalValue = preValue;
                            description[item]['callback'](preValue);
                        }
                    });
                }
            });

            return description;
        })();

        this.create  = function () {
            var modal,
                modalDialog,
                modalContent,
                modalHeader,
                modalHeaderContent,
                modalBody,
                modalFooter,
                modalFooterContent,
                key;

            if (reference && reference['modal']) {
                return this;
            }

            modal              = $('<div>', {'class': 'modal fade', 'id': 'rh-alert', 'tabindex': '-1', 'role': 'dialog'});
            modalDialog        = $('<div>', {'class': 'modal-dialog', 'role': 'document'});
            modalContent       = $('<div>', {'class': 'modal-content'});
            modalHeader        = $('<div>', {'class': 'modal-header'});
            modalHeaderContent = {
                'title': $('<h4>', {
                    'class': 'modal-title',
                    'html':  reference['title']['defaultValue']
                })
            };
            modalBody          = $('<div>', {
                'class': 'modal-body',
                'html':  reference['message']['defaultValue']

            });
            modalFooter        = $('<div>', {'class': 'modal-footer'});
            modalFooterContent = {
                'ok-btn': $('<button>', {
                    'class':        'btn btn-primary',
                    'type':         'button',
                    'data-dismiss': 'modal',
                    'html':         '&nbsp;&nbsp;OK&nbsp;&nbsp;'
                })
            };
            /* header */
            for (key in modalHeaderContent) {
                if (modalHeaderContent.hasOwnProperty(key)) {
                    modalHeaderContent[key].appendTo(modalHeader);
                }
            }
            modalHeader.appendTo(modalContent);
            /* body */
            modalBody.appendTo(modalContent);
            /* footer */
            for (key in modalFooterContent) {
                if (modalFooterContent.hasOwnProperty(key)) {
                    modalFooterContent[key].appendTo(modalFooter);
                }
            }
            modalFooter.appendTo(modalContent);
            /* content */
            modalContent.appendTo(modalDialog);
            /* dialog */
            modalDialog.appendTo(modal);
            /* init bootstrap modal */
            modal.modal({
                // 'backdrop': 'static',
                'backdrop': false,
                'keyboard': true,
                'show':     false
            });
            modal.on('hidden.bs.modal', function (e) {
            });
            modal.prependTo(reference['target']);
            reference['modal'] = modal;

            return this;
        };
        this.message = function (message) {
            reference['message']['currentValue'] = message;

            return this;
        };
        this.title   = function (title) {
            reference['title']['currentValue'] = title;

            return this;
        };
        this.show    = function () {
            if (reference &&
                reference['target'] && reference['target'].length &&
                reference['modal'] && reference['modal'].length &&
                reference['message'] && reference['message']['currentValue']) {
                reference['modal'].modal('show');
            }

            return this;
        };
        this.status  = function () {
            console.info('status: ', reference);
        };
    }

    utils.alert  = (function () {
        var instance;

        return {
            getInstance: function () {
                /* singleton */
                if (!instance) {
                    instance = new Alert();
                }

                return instance;
            }
        }
    })();
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

    /* return */
    window[referenceName] = utils;
})('rh_utils');