/**
 * Регистрирует глобальное событие на объекте window, согласно переданного описания в объекте options
 * Смотреть ниже...
 */
export default {
    created() {
        /* non reactive 'private' data */
        this._eventSettings = {
            type       : null,
            trigger    : null,
            callback   : null,
            initialized: false,
            constants  : {
                types    : {
                    keyboard: ['keydown', 'keyup', 'keypress'],
                    mouse   : ['mousedown', 'mouseup', 'click', 'dblclick', 'contextmenu']
                },
                keys     : new RegExp('^[a-zA-Zа-яА-Я]$'),
                modifiers: ['alt', 'shift', 'ctrl']
            },
            handler    : function (event) {
                if (this._eventSettings.initialized && this._eventSettings.callback && this._eventSettings.check(event)) {
                    this._eventSettings.callback.call(this);
                }
            },
            check(event) {
                function checkKey() {
                    const key = this._eventSettings.trigger.key;
                    
                    return (event && key && (typeof key === 'string') && event.keyCode && (key.toLocaleUpperCase() === String.fromCharCode(event.keyCode)));
                }
                
                function checkModifiers() {
                    const modifiers = this._eventSettings.trigger.modifiers;
                    
                    if (modifiers && event && Array.isArray(modifiers)) {
                        for (let i = 0, size = modifiers.length; i < size; i += 1) {
                            if (!event[modifiers[i].toLowerCase() + 'Key']) {
                                return false;
                            }
                        }
                    }
                    
                    return true;
                }
                
                if (this._eventSettings.type && [...this._eventSettings.constants.types.mouse].includes(this._eventSettings.type)) {
                    return true;
                }
                
                return (event && checkKey.call(this) && checkModifiers.call(this));
            },
            validate(options) {
                function validateType() {
                    return (options.type && [
                        ...this._eventSettings.constants.types.keyboard,
                        ...this._eventSettings.constants.types.mouse
                    ].includes(options.type));
                }
                
                function validateTrigger() {
                    function validateKey() {
                        return (options.trigger && options.trigger.key && (typeof options.trigger.key === 'string') && this._eventSettings.constants.keys.test(options.trigger.key));
                    }
                    
                    function validateModifiers() {
                        const checker = (arr1, arr2) => arr2.every(item => arr1.includes(item));
                        
                        return (options.trigger && options.trigger.modifiers && Array.isArray(options.trigger.modifiers) && checker(this._eventSettings.constants.modifiers, options.trigger.modifiers));
                    }
                    
                    return (validateKey.call(this) && validateModifiers.call(this));
                }
                
                function validateCallback() {
                    return (options.callback && ({}.toString.call(options.callback) === '[object Function]'));
                }
                
                if (options) {
                    if (options.type && [...this._eventSettings.constants.types.mouse].includes(options.type)) {
                        return true;
                    }
                    
                    return !!(validateType.call(this) && validateTrigger.call(this) && validateCallback.call(this));
                }
            },
        };
    },
    methods: {
        /**
         * Вызывается для регистрации глобального события на объекте window
         *
         * @param {{callback: void, trigger: {modifiers: [string], key: string}, type: string}} options - конфигурационный объект параметров события
         * @param {string} options.type - тип события ('keydown','keyup','keypress','mousedown','mouseup','click','dblclick','contextmenu')
         * @param {object} options.trigger - триггер события, состоит из комбинации [клавиша + модификаторы] либо null для событий мышки
         * @param {string} options.trigger.key - клавиша триггера события (^[a-zA-Zа-яА-Я]$)
         * @param {[string]} options.trigger.modifiers - массив модификаторов клавиши ('alt','ctrl','shift')
         * @param {function} options.callback - функция обратного вызова при наступлении описанного события
         */
        setEvent(options) {
            if (this._eventSettings.validate.call(this, options)) {
                this._eventSettings.type = options.type;
                this._eventSettings.trigger = options.trigger;
                this._eventSettings.callback = options.callback;
                this._eventSettings.initialized = true;
                /* binding context */
                this._eventSettings.handler = this._eventSettings.handler.bind(this);
                this._eventSettings.check = this._eventSettings.check.bind(this);
                this._eventSettings.validate = this._eventSettings.validate.bind(this);
                
                window.addEventListener(this._eventSettings.type, this._eventSettings.handler);
            }
        }
    },
    beforeDestroy() {
        if (this._eventSettings.initialized) {
            window.removeEventListener(this._eventSettings.type, this._eventSettings.handler);
        }
    }
}