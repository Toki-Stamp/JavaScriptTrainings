/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function init_utils(referenceName) {
    var utils       = (window[referenceName] || {}),
        debug       = true,
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
            halt          = {
                target: defaultValues.target,
                types : defaultValues.types,
                except: {keyCodes: null, selector: null, object: null},
                init  : false,
                type  : null
            };
        
        // function handler(e) {
        //     var me = $(e.target);
        //
        //     if (halt.except && me.is(halt.except)) {
        //         (debug) && console.log('Halt: Pass Event Through', {id: instance.id, type: e.type, e: e, me: me});
        //     } else {
        //         (debug) && console.log('Halt: Block Event Propagation', {id: instance.id, type: e.type, e: e, me: me});
        //         e.stopImmediatePropagation();
        //
        //         return false;
        //     }
        // }
        
        function handler(e) {
            var me = $(e.target);
            
            if (halt.except && me.is(halt.except)) {
                (debug) && console.log('Halt: Pass Event Through', {id: instance.id, type: e.type, e: e, me: me});
            } else {
                (debug) && console.log('Halt: Block Event Propagation', {id: instance.id, type: e.type, e: e, me: me});
                e.stopImmediatePropagation();
                
                return false;
            }
        }
        
        function init(description) {
            (debug) && console.log('Halt: Init', {id: instance.id});
            
            (description.target && description.target.length && (description.target instanceof jQuery)) && (halt.target = description.target);
            (description.types && description.types.length && jQuery.isArray(description.types)) && (halt.types = description.types);
            (description.except && description.except.length && (description.except instanceof jQuery)) && (halt.except = description.except);
            
            halt.init = true;
        }
        
        // this.lock = function (description) {
        //     (!halt.init) && (init(description));
        //     (debug) && console.log('Halt: Lock', {id: instance.id});
        //
        //     halt.types.forEach(function (type) {
        //         halt.target.each(function () {
        //             this.addEventListener(type, handler, true);
        //         })
        //     });
        //
        //     (instance && !instance.locked) && (instance.locked = true);
        //
        //     return this;
        // };
        this.lock = function (description) {
            (!halt.init) && (init(description));
            (debug) && console.log('Halt: Lock', {id: instance.id});
            
            if (halt.type) {
                if (halt.type === 'mouse') {
                    halt.types = [];
                } else if (halt.type === 'keyboard') {
                    halt.types = ['keyup', 'keydown', 'keypress'];
                }
            }
            
            halt.types.forEach(function (type) {
                halt.target.each(function () {
                    this.addEventListener(type, handler, true);
                })
            });
            
            (instance && !instance.locked) && (instance.locked = true);
            
            return this;
        };
        this.unlock = function () {
            (!halt.init) && (init({}));
            (debug) && console.log('Halt: Unlock', {id: instance.id});
            
            halt.types.forEach(function (type) {
                halt.target.each(function () {
                    this.removeEventListener(type, handler, true);
                })
            });
            
            (instance && instance.locked) && (instance.locked = false);
            (halt.init) && (halt.init = false);
            
            return this;
        };
        
        this.type = function (type) {
            if (type) {
                halt.type = type;
            }
        };
        this.except = function (what) {
        };
    }
    
    utils.halt = (function haltFactory() {
        var counter = 0,
            storage = {};
        
        return {
            getInstance: function () {
                var id    = ++counter,
                    state = false,
                    item  = Object.create({locked: state}, {
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