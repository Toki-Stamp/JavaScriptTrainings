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
                debounceInstance = (debounce.getInstance(debounceID) || debounce.getNewInstance());

            if (debounceInstance) {
                debounceInstance.run(function () {
                    let attributes       = {'debounce-id': debounceInstance.getID(), 'debounce-in-progress': true},
                        shieldInstanceID = self.attr('shield-id'),
                        shieldInstance   = (shield.getInstance(shieldInstanceID) || shield.getNewInstance());

                    self.attr(attributes);
                    // shieldInstance.rise(self, ref.header.add(ref.footer).add(ref.chars));
                    /* --- */
                    console.log('Work to do!');
                    /* --- */
                }).call(this, e);
            }
        })
        .on('click', '.btn-danger', function () {
            let instanceID       = 1,
                debounceInstance = debounce.getInstance(instanceID),
                attributesList   = ['debounce-id', 'debounce-in-progress'],
                // target           = $('[debounce-id="' + instanceID + '"]');
                target           = $('[debounce-in-progress]');

            if (helper.is$(target)) {
                //todo тут хуйня, переделать!!!
                attributesList.forEach(function (attribute, index) {
                    if (index === 0) {
                        debounce.deleteInstance(target.eq(index).attr(attribute));
                    }

                    target.removeAttr(attribute);
                })
            }

            if (debounceInstance) {
                debounceInstance.done(function () {
                });
            }
        });
});

(function init_utils(varName) {
    let utils = (window[varName] || {});

    function /* constructor */ Debounce(ID) {
        let reference  = {
                ID:       ID,
                fn:       null,
                args:     null,
                callback: null
            },
            inProgress = false,
            counter    = 1;

        this.run       = function (fn) {
            reference.fn = fn;

            return function (args) {
                reference.args = args;

                if (inProgress) {
                    console.log({'Status': 'Boing-Boing! Bounce!', 'ID': reference.ID, 'Function': reference.fn, 'Arguments': reference.args, 'Counter': counter++});
                } else {
                    inProgress = true;

                    if (isFunction(reference.fn)) {
                        console.log({'Status': 'Debounce Run', 'ID': reference.ID, 'Function': reference.fn, 'Arguments': reference.args});

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

                console.log({'Status': 'Debounce Done', 'ID': reference.ID, 'Function': reference.fn, 'Arguments': reference.args});

                if (isFunction(reference.callback)) {
                    reference.callback.apply(null, arguments);
                }
            }
        };
        this.isRunning = function () {
            return inProgress;
        };
        this.getID     = function () {
            return reference.ID;
        }
    }

    function /* constructor */ Shield(ID) {
        let reference          = {
                ID:     ID,
                target: null,
                caller: null,
            },
            inProgress         = false,
            text               = 'Загрузка данных...',
            bodyAttributes     = {'user-select': 'none'},
            targetAttributes   = {'shield-in-progress': true, 'shield-id': ID},
            body               = $('body'),
            shieldScreen       = $('<div>', {'class': 'shield-screen'}),
            shieldMessage      = $('<div>', {'class': 'shield-message'}),
            animationContainer = $('<div>', {'class': 'shield-message-animation-container'}),
            textContainer      = $('<div>', {'class': 'shield-message-text-container'}),
            animation          = $('<span>', {'class': 'fa fa-spinner fa-pulse'}),
            shieldText         = $('<span>', {'class': 'shield-text', 'text': text});

        this.rise      = function (caller, shieldTarget) {
            if (is$(shieldTarget) && !shieldTarget.is('[shield-in-progress="true"]')) {
                inProgress       = true;
                reference.target = shieldTarget;

                console.log({'Status': 'Shield Rise', 'Target': shieldTarget, 'ID': ID});

                body.attr(bodyAttributes);
                shieldTarget.attr(targetAttributes);

                if (is$(caller)) {
                    reference.caller = caller;
                    caller.attr(targetAttributes);
                }

                animationContainer.appendTo(shieldMessage);
                textContainer.appendTo(shieldMessage);
                animation.appendTo(animationContainer);
                shieldText.appendTo(textContainer);
                shieldMessage.appendTo(shieldScreen);
                shieldScreen.prependTo(shieldTarget);
            }
        };
        this.decline   = function () {
            let bodyAttributesKeys = Object.keys(bodyAttributes);

            if (inProgress && is$(reference.target)) {
                inProgress = false;

                console.log({'Status': 'Shield Decline', 'Target': reference.target, 'Caller': reference.caller, 'ID': reference.ID});

                shieldScreen.remove();

                bodyAttributesKeys.forEach(function (attributeName) {
                    body.removeAttr(attributeName);
                });
                if (reference.target) {
                    reference.target.attr('shield-in-progress', false);
                }
                if (reference.caller) {
                    reference.caller.attr('shield-in-progress', false);
                }
            }
        };
        this.getTarget = function () {
            return reference.target;
        };
        this.getCaller = function () {
            return reference.caller;
        };
        this.getID     = function () {
            return reference.ID;
        };
    }

    function is$(target) {
        return (target && (target instanceof jQuery));
    }

    function isFunction(target) {
        return (target && (jQuery.isFunction(target)));
    }

    utils.wizard = (function () {
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
        let debounceInstancesCount = 0,
            nextInstance           = 0,
            debounceInstancesStore = {};

        return {
            getNewInstance:     function () {
                let newInstance = new Debounce(++nextInstance);

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
                return debounceInstancesCount;
            },
            deleteInstance:     function (instanceID) {
                debounceInstancesCount -= 1;
                delete debounceInstancesStore[instanceID];
            },
            deleteAllInstances: function () {
                debounceInstancesCount = 0;
                debounceInstancesStore = {};
            }
        }
    })();

    utils.shield = (function () {
        let shieldInstancesCounter = 0,
            shieldInstancesStore   = {};

        utils.wizard.createStylesheet('../css/shield.css').appendTo($('head'));

        return {
            getNewInstance:     function () {
                let newInstance = new Shield(++shieldInstancesCounter);

                shieldInstancesStore[shieldInstancesCounter] = newInstance;

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

    utils.disable = (function () {
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

    utils.helper = (function () {
        return {
            is$:        is$,
            isFunction: isFunction
        }
    })();

    /* return */
    window[varName] = utils;
})('rh_utils');

window.addEventListener("beforeunload", function (event) {
    console.log(event);
    // Cancel the event as stated by the standard.
    event.preventDefault();
    // Chrome requires returnValue to be set.
    event.returnValue = '';
});