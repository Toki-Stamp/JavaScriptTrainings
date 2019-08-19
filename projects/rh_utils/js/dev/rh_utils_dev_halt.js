/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function init_utils(referenceName) {
    var utils = (window[referenceName] || {}),
        debug = true,
        greetingMsg = '... rh_utils successfully loaded!';

    function /* constructor */ Halt(instance) {
        var defaultValues = {
                target: $('body'),
                types : [
                    "click",
                    "contextmenu",
                    "dblclick",
                    "mousedown",
                    "mouseenter",
                    "mouseleave",
                    "mousemove",
                    "mouseover",
                    "mouseout",
                    "mouseup",
                    "keydown",
                    "keypress",
                    "keyup",
                    "blur",
                    "change",
                    "focus",
                    "focusin",
                    "focusout",
                    "input",
                    "invalid",
                    "reset",
                    "search",
                    "select",
                    "submit",
                    "drag",
                    "dragend",
                    "dragenter",
                    "dragleave",
                    "dragover",
                    "dragstart",
                    "drop",
                    "copy",
                    "cut",
                    "paste",
                    "mousewheel",
                    "wheel",
                    "touchcancel",
                    "touchend",
                    "touchmove",
                    "touchstart"
                ]
            },
            halt = {
                target: null,
                types : null
            };

        function handler(e) {
            console.log('stop!');
            e.preventDefault();
            e.stopImmediatePropagation();

            return false;
        }

        function init(description) {
            halt = {
                target: (description && description.target && description.target.length && (description.target instanceof jQuery)) ? description.target : defaultValues.target,
                types : (description && description.types && jQuery.isArray(description.types)) ? description.types : defaultValues.types
            }
        }

        this.lock = function (description) {
            (!halt.target) && (init(description));

            halt.types.forEach(function (type) {
                halt.target.each(function () {
                    this.addEventListener(type, handler, true);
                })
            });

            (instance && !instance.locked) && (instance.locked = true);

            return this;
        };
        this.unlock = function () {
            (!halt.target) && (init({}));

            halt.types.forEach(function (type) {
                halt.target.each(function () {
                    this.removeEventListener(type, handler, true);
                })
            });

            (instance && instance.locked) && (instance.locked = false);

            return this;
        }
    }

    utils.halt = (function () {
        var counter = 0,
            storage = {};

        return {
            getInstance: function () {
                var id = ++counter,
                    state = false,
                    item = Object.create({locked: state}, {
                        id    : {
                            /* non mutable */
                            value: id
                        },
                        locked: {
                            set: function (value) {
                                (debug) && (console.log('Dialog Factory: Setting Lock State', {
                                    id: id, from: state, to: value
                                }));

                                if (value === false) {
                                    storage[id] = null;
                                }

                                state = value;
                            },
                            get: function () {
                                (debug) && (console.log('Dialog Factory: Getting Lock State', {id: id, locked: state}));

                                return state;
                            }
                        }
                    });

                Object.defineProperty(item, 'ref', {value: new Halt(item)});

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