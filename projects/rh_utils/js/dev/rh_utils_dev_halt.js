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
                events: [
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
                target: defaultValues.target,
                events: [],
                except: {
                    keys    : ['F5', 'F12'],
                    codes   : [],
                    keyCodes: [],
                    selector: '',
                    object  : null,
                    getEx   : function () {
                        if (halt.type === 'keyboard') {
                            if (this.keys.length) return this.keys;
                            if (this.codes.length) return this.codes;
                            if (this.keyCodes.length) return this.keyCodes;
                        } else if (halt.type === 'mouse') {
                            if (this.selector.length) return $(this.selector);
                            if (this.object.length) return this.object;
                        }
                    }
                },
                type  : null
            };

        function handler(event) {
            var me,
                ex = halt.except.getEx(),
                key;

            if ((halt.type === 'all') || (halt.type === 'mouse')) {
                me = $(event.target);

                if (ex.is(me)) {
                    return;
                }
            } else if (halt.type === 'keyboard') {
                key = (event.key || event.code || event.keyCode);

                if (ex.includes(key)) {
                    return;
                }
            }

            (debug) && (console.log('Halt: Prevent & Stop', {id: instance.id, event: event}));
            event.preventDefault();
            event.stopImmediatePropagation();
        }

        this.except = function (ex) {
            (debug) && (console.log('Halt: Set Except', {id: instance.id, ex: ex}));

            if (ex) {
                if (ex.keys && jQuery.isArray(ex.keys) && ex.keys.length) {
                    halt.except.keys = halt.except.keys.concat(ex.keys);
                } else if (ex.object && (ex.object instanceof jQuery) && ex.object.length) {
                    halt.except.object = ex.object;
                }
            }

            return this;
        };
        this.lock = function () {
            (debug) && (console.log('Halt: %cLock', 'color: red', {id: instance.id, halt: halt}));

            halt.events.forEach(function (event) {
                halt.target.each(function () {
                    this.addEventListener(event, handler, true);
                })
            });

            (instance && !instance.locked) && (instance.locked = true);

            return this;
        };
        this.type = function (type) {
            (debug) && (console.log('Halt: Set Lock Type', {id: instance.id, type: type}));

            if (type) {
                if (type === 'keyboard') {
                    halt.events = [
                        'keypress',
                        'keydown',
                        'keyup'
                    ];
                } else if (type === 'mouse') {
                    halt.events = [
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
                        "mousewheel",
                        "wheel"
                    ];
                } else if (type === 'all') {
                    halt.events = defaultValues.events.slice();
                }

                halt.type = type;
            }

            return this;
        };
        this.unlock = function () {
            (debug) && (console.log('Halt: %cUnlock', 'color: lime', {id: instance.id, halt: halt}));

            halt.events.forEach(function (event) {
                halt.target.each(function () {
                    this.removeEventListener(event, handler, true);
                })
            });

            (instance && instance.locked) && (instance.locked = false);

            return this;
        };
    }

    utils.halt = (function haltFactory() {
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
                                (debug) && (console.log('Halt Factory: Setting Lock State', {
                                    id: id, from: state, to: value
                                }));

                                state = value;
                            },
                            get: function () {
                                (debug) && (console.log('Halt Factory: Getting Lock State', {id: id, locked: state}));

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