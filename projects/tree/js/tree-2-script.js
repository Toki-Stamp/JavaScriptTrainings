/**
 * Created by Fomichev Yuri on 30.12.2018
 * Contact me at : toki.stamp@gmail.com
 */
let global = {
    reference: {},
};

jQuery(document).ready(function main() {
    let ref      = global.reference, // shorthand
        utils    = window['rh_utils'],
        disable  = utils.disable,
        debounce = utils.debounce,
        shield   = utils.shield,
        wizard   = utils.wizard,
        helper   = utils.helper;

    ref.treeContainer   = $('.tree-container');
    ref.header          = $('.header');
    ref.footer          = $('.footer');
    ref.buttons         = $('.buttons');
    ref.tree            = $('.tree');
    ref.controls        = $('.controls');
    ref.alertsContainer = $('.alerts');
    ref.chars           = $('.chars');
    ref.body            = $('body');

    ref.buttons
        .on('click', '.btn-success, .btn-info, .btn-primary, .btn-warning', function (e) {
            let self             = $(this),
                debounceID       = self.attr('debounce-id'),
                debounceInstance = (debounce.getInstance(debounceID) || debounce.getNewInstance()),
                task             = function () {
                    let timeout,
                        shieldInstanceID = self.attr('shield-id'),
                        shieldInstance   = (shield.getInstance(shieldInstanceID) || shield.getNewInstance()),
                        shieldTarget     = ref.header.add(ref.footer);

                    shieldInstance.rise(self, shieldTarget);

                    console.log('Work to do!');
                    console.log('Timeout 5 sec...');

                    timeout = setTimeout(function () {
                        let shieldInstances;

                        debounceInstance.done(function () {
                            console.log('Run callback...');
                        });
                        debounce.deleteInstance(debounceInstance.getID());

                        //todo вот эту всю магию, вон нахуй отсюда! пользователь ничего этого не должен видеть

                        if (shield.getInstancesCount() && (shield.getInstancesCount() > 1)) {
                            shieldInstances = shield.getAllInstances();

                            for (let key in shieldInstances) {
                                if (shieldInstances.hasOwnProperty(key)) {
                                    let target = shieldInstances[key].getTarget();

                                    if (utils.helper.is$(shieldTarget) &&
                                        utils.helper.is$(target) && !shieldTarget.is(target)) {
                                        shieldInstance.decline();
                                    }
                                }
                            }
                        } else {
                            shieldInstance.decline();
                        }

                        shield.deleteInstance(shieldInstance.getID());

                        clearTimeout(timeout);
                        timeout = null;
                    }, 5000);
                };

            if (debounceInstance) {
                debounceInstance.run(self, task, true).call(this, e);
            }
        });
});

(function init_utils(varName) {
    let utils = (window[varName] || {});

    function /* constructor */ Debounce(ID) {
        let reference  = {
                debounceID:  ID,
                caller:      null,
                fn:          null,
                isProtected: false,
                args:        null,
                callback:    null
            },
            inProgress = false,
            counter    = 1,
            attributes = {'debounce-id': ID, 'debounce-in-progress': true};

        /**
         * Запуск Debounce. Возвращает обёртку над функцией fn, запускает её в первый раз и
         * переходит в состояние inProgress = true, до отмены состояния вызовом функции this.done.
         *
         * @param {Object} caller - jQuery объект элемента DOM, который инициирует вызов функции
         * @param {Function} fn - функция, выполняющая основную работу
         * @param {Boolean} isProtected - признак защиты от закрытия / обновления / перехода на другую страницу
         * @returns {Function} - обёртка над функцией fn
         */
        this.run = function (caller, fn, isProtected) {
            reference.caller      = caller;
            reference.fn          = fn;
            reference.isProtected = isProtected;

            return function (args) {
                reference.args = args;

                if (inProgress) {
                    console.log({
                        'Status':  'Boing-Boing! Bounce!',
                        'ID':      reference.debounceID,
                        'counter': counter++,
                        'fn':      reference.fn,
                        'args':    reference.args,
                        'caller':  reference.caller
                    });
                } else {
                    inProgress = true;
                    utils.helper.setAttributes(reference.caller, attributes);

                    if (reference.isProtected) {
                        utils.helper.setBeforeUnloadEventTo(true);
                    }
                    if (utils.helper.isFunction(reference.fn)) {
                        console.log({
                            'Status': 'Debounce Run...',
                            'ID':     reference.debounceID,
                            'fn':     reference.fn,
                            'args':   reference.args,
                            'caller': reference.caller
                        });

                        reference.fn.apply(null, reference.args);
                    }
                }
            }
        };
        this.done      = function (callback) {
            reference.callback = callback;

            if (inProgress) {
                inProgress = false;
                counter    = 1;

                utils.helper.removeAttributes(reference.caller, attributes);

                console.log({
                    'Status': 'Debounce Done!',
                    'ID':     reference.debounceID,
                    'fn':     reference.fn,
                    'args':   reference.args,
                    'caller': reference.caller
                });

                if (reference.isProtected) {
                    utils.helper.setBeforeUnloadEventTo(false);
                }
                if (utils.helper.isFunction(reference.callback)) {
                    reference.callback.apply(null, reference.args);
                }
            }
        };
        this.isRunning = function () {
            return inProgress;
        };
        this.getCaller = function () {
            return reference.caller;
        };
        this.getID     = function () {
            return reference.debounceID;
        };
    }

    function /* constructor */ Shield(ID) {
        let reference        = {
                shieldID: ID,
                target:   null,
                caller:   null,
            },
            inProgress       = false,
            text             = 'Загрузка данных...',
            shieldClassName  = 'shield-screen',
            body             = $('body'),
            bodyAttributes   = {'user-select': 'none'},
            targetAttributes = {'shield-id': ID, 'shield-in-progress': true};

        function createShield(className, message) {
            let shieldScreen       = $('<div>', {'class': className}),
                shieldMessage      = $('<div>', {'class': 'shield-message'}),
                animationContainer = $('<div>', {'class': 'shield-message-animation-container'}),
                textContainer      = $('<div>', {'class': 'shield-message-text-container'}),
                animation          = $('<span>', {'class': 'fa fa-spinner fa-pulse'}),
                shieldText         = $('<span>', {'class': 'shield-text', 'text': message});

            animationContainer.appendTo(shieldMessage);
            textContainer.appendTo(shieldMessage);
            animation.appendTo(animationContainer);
            shieldText.appendTo(textContainer);
            shieldMessage.appendTo(shieldScreen);

            return shieldScreen;
        }

        this.rise      = function (caller, target) {
            if (utils.helper.is$(caller) && utils.helper.is$(target)) {
                reference.caller = caller;
                reference.target = target;
                inProgress       = true;

                if (!target.is('[shield-in-progress="true"]')) {
                    console.log({
                        'Status': 'Shield Rise',
                        'ID':     reference.shieldID,
                        'target': reference.target,
                        'caller': reference.caller
                    });

                    createShield(shieldClassName, text).prependTo(target);

                    utils.helper.setAttributes(body, bodyAttributes);
                    utils.helper.setAttributes(caller, targetAttributes);
                    utils.helper.setAttributes(target, targetAttributes);
                }
            }
        };
        this.decline   = function () {
            if (inProgress && utils.helper.is$(reference.target)) {
                inProgress = false;

                console.log({
                    'Status': 'Shield Decline',
                    'ID':     reference.shieldID,
                    'target': reference.target,
                    'caller': reference.caller
                });

                //todo сюда перенести логику по отключению щита из обработчика клика

                reference.target.find('.'.concat(shieldClassName)).remove();

                utils.helper.removeAttributes(body, bodyAttributes);
                utils.helper.removeAttributes(reference.caller, targetAttributes);
                utils.helper.removeAttributes(reference.target, targetAttributes);
            }
        };
        this.getTarget = function () {
            return reference.target;
        };
        this.getCaller = function () {
            return reference.caller;
        };
        this.getID     = function () {
            return reference.shieldID;
        };
    }

    utils.wizard   = (function () {
        return {
            createTextNode:   function (text) {
                return $(document.createTextNode(text));
            },
            createElement:    function (tagName) {
                return $(document.createElement(tagName));
            },
            createStylesheet: function (file) {
                return $('<link>', {href: file, rel: 'stylesheet', type: 'text/css'});
            }
        }
    })();
    utils.debounce = (function () {
        let debounceInstancesCounter = 0,
            nextInstance             = 0,
            debounceInstancesStore   = {};

        return {
            getNewInstance:     function () {
                let newInstance = new Debounce(++nextInstance);

                debounceInstancesCounter += 1;
                debounceInstancesStore[nextInstance] = newInstance;

                return newInstance;
            },
            getInstance:        function (instanceID) {
                return debounceInstancesStore[instanceID];
            },
            getAllInstances:    function () {
                return debounceInstancesStore;
            },
            getInstancesCount:  function () {
                return debounceInstancesCounter;
            },
            deleteInstance:     function (instanceID) {
                debounceInstancesCounter -= 1;
                delete debounceInstancesStore[instanceID];
            },
            deleteAllInstances: function () {
                debounceInstancesCounter = 0;
                debounceInstancesStore   = {};
            }
        }
    })();
    utils.shield   = (function () {
        let shieldInstancesCounter = 0,
            nextInstance           = 0,
            shieldInstancesStore   = {};

        utils.wizard.createStylesheet('../css/shield.css').appendTo($('head'));

        return {
            getNewInstance:     function () {
                let newInstance = new Shield(++nextInstance);

                shieldInstancesCounter += 1;
                shieldInstancesStore[nextInstance] = newInstance;

                return newInstance;
            },
            getInstance:        function (instanceID) {
                return shieldInstancesStore[instanceID];
            },
            getAllInstances:    function () {
                return shieldInstancesStore;
            },
            getInstancesCount:  function () {
                return shieldInstancesCounter;
            },
            deleteInstance:     function (instanceID) {
                shieldInstancesCounter -= 1;
                delete shieldInstancesStore[instanceID];
            },
            deleteAllInstances: function () {
                shieldInstancesCounter = 0;
                shieldInstancesStore   = {};
            }
        }
    })();
    utils.disable  = (function () {
        let disableInstancesStore   = {},
            disableInstancesCounter = 0;

        return {
            /* --- */
            enable:  function (target, callback, arguments) {
                if (is$(target)) {
                    target.removeAttr('disabled');
                }
                if (isFunction(callback)) {
                    callback.apply(null, arguments);
                }
            },
            disable: function (target, callback, arguments) {
                if (is$(target)) {
                    target.attr('disabled', 'disabled');
                }
                if (isFunction(callback)) {
                    callback.apply(null, arguments);
                }
            },
            /* --- */
            show:    function (target) {
                if (is$(target)) {
                    target.show();
                }
            },
            hide:    function (target) {
                if (is$(target)) {
                    target.hide();
                }
            }
        }
    })();
    utils.helper   = (function () {
        let handler = function (event) {
            let msg = '';

            event.returnValue = msg;

            return msg;
        };

        return {
            is$:                    function is$(target) {
                return (target && (target instanceof jQuery));
            },
            isFunction:             function isFunction(target) {
                return (target && (jQuery.isFunction(target)));
            },
            setBeforeUnloadEventTo: function (state) {
                if (state) {
                    window.addEventListener('beforeunload', handler);
                } else {
                    window.removeEventListener('beforeunload', handler);
                }
            },
            setAttributes:          function (target, attributes) {
                if (utils.helper.is$(target)) {
                    target.attr(attributes);
                }
            },
            removeAttributes:       function (target, attributes) {
                let attributesList = Object.keys(attributes);

                if (utils.helper.is$(target)) {
                    attributesList.forEach(function (attribute) {
                        target.removeAttr(attribute);
                    });
                }
            }
        }
    })();

    /* return */
    window[varName] = utils;
})('rh_utils');