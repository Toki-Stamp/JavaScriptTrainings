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
                    // "mouseenter",
                    // "mouseleave",
                    // "mousemove",
                    // "mouseover",
                    // "mouseout",
                    // "mouseup",
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
                    keys  : ['F1', 'F5', 'F12'],
                    object: null,
                    event : null
                },
                type  : null
            };

        function haltHandler(event) {
            var pass = false,
                i, size;

            if (event instanceof MouseEvent) {
                if (halt.except.object.length) {
                    for (i = 0, size = halt.except.object.length; i < size; i += 1) {
                        if ($(event.target).is(halt.except.object.get(i))) {
                            pass = true;

                            break;
                        }
                    }
                }
            } else if ((event instanceof KeyboardEvent) && halt.except.keys.includes(event.key)) {
                pass = true;
            }

            if (pass) {
                (debug) && (console.log('Halt: %cPass Through', 'color: lime', {id: instance.id, type: event.type, event: event, halt: halt}));
            } else {
                (debug) && (console.log('Halt: %cPrevent Default Handler & Stop Event Propagation', 'color: red', {id: instance.id, type: event.type, event: event, halt: halt}));

                event.preventDefault();
                event.stopPropagation();
            }
        }

        function actualizeExcept(ref) {
            var key,
                tmp = {};

            for (key in ref) {
                if (ref.hasOwnProperty(key) && ref[key] && (ref[key].length || verify(ref[key]))) {
                    tmp[key] = ref[key];
                }
            }

            return tmp;
        }

        function addObject(object) {
            if (halt.except.object) {
                halt.except.object = halt.except.object.add(object);
            } else {
                halt.except.object = object;
            }
        }

        function verify(ref) {
            return !jQuery.isEmptyObject(ref) &&
                ref.trigger && (jQuery.type(ref.trigger) === 'string') && ref.trigger.length &&
                ref.selector && (jQuery.type(ref.selector) === 'string') && ref.selector.length &&
                ref.handler && jQuery.isFunction(ref.handler);
        }

        function bindExceptEvent(ref) {
            var name = 'exceptEvent',
                exceptEvent = new CustomEvent(name, {detail: {/*empty*/}});

            function dispatcher(e) {
                var i, size, el;

                if (e.detail && (e.detail === 1)) {
                    for (i = 0, size = e.path.length; i < size; i += 1) {
                        el = $(e.path[i]);

                        if (el.is(ref.selector)) {
                            exceptEvent.detail.el = el;
                            document.body.dispatchEvent(exceptEvent);

                            break;
                        }
                    }
                }
            }

            function exceptEventHandler(e) {
                ref.handler.call(null, {
                    target: e.detail.el,
                    type  : name
                });
            }

            (debug) && (console.log('Halt: %cBind Except Event', 'color: yellow', {id: instance.id, ref: ref, halt: halt}));

            document.body.addEventListener(ref.trigger, dispatcher, {capture: true});
            document.body.addEventListener(name, exceptEventHandler);

            return jQuery.extend(ref, {
                name         : name,
                dispatcher   : dispatcher,
                exceptHandler: exceptEventHandler
            });
        }

        function unbindExceptEvent(ref) {
            (debug) && (console.log('Halt: %cUnbind Except Event', 'color: orange', {id: instance.id, ref: ref, halt: halt}));

            document.body.removeEventListener(ref.trigger, ref.dispatcher, {capture: true});
            document.body.removeEventListener(ref.name, ref.exceptEventHandler);
        }

        this.except = function (ex) {
            var object;

            (debug) && (console.log('Halt: Set Except', {id: instance.id, ex: ex, halt: halt}));

            if (ex) {
                if (ex.keys && jQuery.isArray(ex.keys) && ex.keys.length) {
                    ex.keys.forEach(function (item) {
                        (!halt.except.keys.includes(item)) && (halt.except.keys.push(item));
                    });
                }
                if (ex.object && (ex.object instanceof jQuery) && ex.object.length) {
                    addObject.call(null, ex.object)
                }
                if (ex.selector && (jQuery.type(ex.selector) === 'string') && ex.selector.length) {
                    object = $(ex.selector);
                    (object.length) && (addObject.call(null, object));
                }
                if (ex.event && verify(ex.event)) {
                    halt.except.event = bindExceptEvent.call(null, ex.event);
                }
            }

            return this;
        };
        this.lock = function () {
            (debug) && (console.log('Halt: %cLock', 'color: red', {id: instance.id, halt: halt}));

            halt.except = actualizeExcept.call(null, halt.except);
            halt.events.forEach(function (event) {
                halt.target.each(function () {
                    this.addEventListener(event, haltHandler, {capture: true});
                })
            });

            (instance && !instance.locked) && (instance.locked = true);

            return this;
        };
        this.type = function (type) {
            (debug) && (console.log('Halt: Set Lock Type', {id: instance.id, type: type, halt: halt}));

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
                    this.removeEventListener(event, haltHandler, true);
                })
            });
            (halt.except.event) && (unbindExceptEvent.call(null, halt.except.event));

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