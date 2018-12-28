/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    gl.buttons = $('.buttons');
    gl.tree = $('.tree');
    gl.controls = $('.controls');
    gl.chars = $('.chars');
    gl.body = $('body');
    
    gl.buttons.on('click', '.btn-info', gl.debounce.run(function () {
        gl.loading(gl.body);
    })).on('click', '.btn-success', gl.debounce.run(function () {
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
    loading : function (target, msg) {
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
            run : function (callback) {
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
                    counter = 1;
                    
                    console.log('debounce done!');
                    
                    if (callback && check(callback)) {
                        callback.apply(this, arguments);
                    }
                }
            }
        }
    })()
};