/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let utils     = window['rh_utils'],
        disabler  = utils.disabler,
        debouncer = utils.debounce,
        instance  = debouncer.getNewInstance();

    gl.treeContainer   = $('.tree-container');
    gl.buttons         = $('.buttons');
    gl.tree            = $('.tree');
    gl.controls        = $('.controls');
    gl.alertsContainer = $('.alerts');
    gl.chars           = $('.chars');
    gl.body            = $('body');

    gl.buttons.on('click', '.btn-info', function (e) {
        let target = $(this);

        disabler.disable(target, function () {
            target.empty();
            target.html('&nbsp;&nbsp;Загрузка...');
            $('<span>', {'class': 'glyphicon glyphicon-refresh fa-spin'}).prependTo(target);
            gl.loading(gl.treeContainer);
            gl.loading(gl.alertsContainer);
            gl.loading(gl.chars);
        });

        instance.run(function () {
            console.log('Work to do!');
        }).call(this, e);
    }).on('click', '.btn-success', gl.debounce.run(function () {
        gl.loading(gl.tree);
    })).on('click', '.btn-danger', function () {
        let target   = $('.loading-container'),
            callback = function () {
                target.parent().css('position', '');
                target.remove();
            };
        gl.debounce.done(callback);
    }).on('click', '.btn-primary', gl.debounce.run(function () {
        gl.loading(gl.chars, 'Загрузка содержимого... Пожалуйста, подождите...');
    })).on('click', '.btn-warning', gl.debounce.run(function () {
        gl.loading(gl.controls, 'Загрузка содержимого... Пожалуйста, подождите...');
    }));
});

let gl = {
    loading:  function (target, msg) {
        let div        = [],
            img,
            paragraph,
            defaultMsg = 'Loading in progress...';

        if (target && (target instanceof jQuery) && target.length) {
            target.css('position', 'relative');
            div.push($('<div></div>', {
                'class': 'loading-container'
            }).prependTo(target));
            div.push($('<div></div>', {
                'class': 'animation-container'
            }).appendTo(div[0]));
            // div.push($('<div></div>', {
            //     'class': 'text-container'
            // }).appendTo(div[0]));
            // paragraph = $('<p></p>', {
            //     'class': 'loading-text',
            //     'text' : msg || defaultMsg
            // }).appendTo(div[2]);
            img = $('<img class="loading-animation" src="../image/loading-1.gif">').appendTo(div[1]);
        }
    },
    debounce: (function () {
        let inProgress = false,
            counter    = 1,
            check      = function (fn) {
                return $.type(fn) === 'function';
            };

        return {
            run:  function (callback) {
                return function () {
                    if (!inProgress) {
                        inProgress = true;

                        if (callback && check(callback)) {
                            console.log('run fn');
                            callback.apply(null, arguments);
                        }
                    } else {
                        console.log('bounce', counter++);
                    }
                }
            },
            done: function (callback) {
                if (inProgress) {
                    inProgress = false;
                    counter    = 1;

                    console.log('debounce done!');

                    if (callback && check(callback)) {
                        callback.apply(this, arguments);
                    }
                }
            }
        }
    })()
};

(function init_utils(varName) {
    var utils = window[varName] || {};

    function /* constructor */ Debounce() {
        var id         = (arguments[0] || null),
            inProgress = false,
            counter    = 1;

        this.run = function (fn) {
            return function (e) {
                if (inProgress) {
                    console.log({'Status': 'Bounce', 'ID': id, 'Counter': counter++, 'Event': e});
                } else {
                    inProgress = true;

                    if (fn && $.isFunction(fn)) {
                        console.log({'Status': 'Run', 'ID': id, 'Event': e});

                        fn.apply(null, arguments);
                    }
                }
            }
        };

        this.done = function (fn) {
            if (inProgress) {
                inProgress = false;
                counter    = 1;

                console.log({'Status': 'Done', 'ID': id, 'Arguments': arguments});

                if (fn && $.isFunction(fn)) {
                    fn.apply(this, arguments);
                }
            }
        }
    }

    utils.debounce = (function () {
        var instancesCount = 1,
            instancesBank  = {};

        return {
            getNewInstance:    function () {
                var newInstance = new Debounce(instancesCount);

                instancesBank[instancesCount++] = newInstance;

                return newInstance;
            },
            getInstance:       function (instanceID) {
                var instance = instancesBank[instanceID];

                return (instance || null);
            },
            getAllInstances:   function () {
                return instancesBank;
            },
            getInstancesCount: function () {
                return instancesCount;
            }
        }
    })();

    utils.disabler = (function () {
        var is$        = function (target) {
                return (target && (target instanceof jQuery));
            },
            isFunction = function (target) {
                return (target && (jQuery.isFunction(target)));
            },
            execute    = function (fn) {
                fn.apply(null, arguments);
            };

        return {
            disable: function (target, callback) {
                if (is$(target)) {
                    target.attr('disabled', 'disabled');
                }
                if (isFunction(callback)) {
                    execute(callback);
                }
            },
            enable:  function (target, callback) {
                if (is$(target)) {
                    target.removeAttr('disabled');
                }
                if (isFunction(callback)) {
                    execute(callback);
                }
            },
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

    /* return */
    window[varName] = utils;
})('rh_utils');