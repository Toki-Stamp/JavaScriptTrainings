/**
 * Created by Fomichev Yuri on 30.12.2018
 * Contact me at : toki.stamp@gmail.com
 */

jQuery(document).ready(function main() {
    let ref       = global.reference, // shorthand
        utils     = window['rh_utils'],
        disabler  = utils.disabler,
        debouncer = utils.debouncer,
        domer     = utils.domer,
        instance  = debouncer.getNewInstance();
    
    ref.treeContainer = $('.tree-container');
    ref.header = $('.header');
    ref.buttons = $('.buttons');
    ref.tree = $('.tree');
    ref.controls = $('.controls');
    ref.alertsContainer = $('.alerts');
    ref.chars = $('.chars');
    ref.body = $('body');
    
    ref.buttons.on('click', 'button', function (e) {
           let target   = $(this),
               callback = function () {
                   let span            = $('<span>', {'class': 'glyphicon glyphicon-hourglass fa-spin'}),
                       space           = '&nbsp;&nbsp;',
                       text            = 'Загрузка...',
                       textNode        = domer.createTextNode(text),
                       originalContent = target.html();
            
                   target
                   .empty()
                   .attr('loading-in-progress', true)
                   .data('original-content', originalContent)
                   .append(span)
                   .append(space)
                   .append(textNode);
            
                   // disabler.shield(ref.controls.add(ref.chars));
                   disabler.shield(ref.header);
                   // gl.loading(gl.chars.add(gl.alertsContainer).add(gl.controls));
               };
        
           disabler.disable(target, callback);
        
           instance.run(function () {
               console.log('Work to do!');
           }).call(this, e);
       })
       .on('click', '.btn-danger', function () {
           let target   = $('.loading-container'),
               callback = function () {
                   target.parent().css('position', '');
                   target.remove();
               },
               all      = debouncer.getAllInstances(),
               key,
               buttons  = $('[loading-in-progress]');
        
           for (key in all) {
               if (all.hasOwnProperty(key)) {
                   all[key].done(callback);
               }
           }
        
           buttons.each(function () {
               let item            = $(this),
                   originalContent = item.data('original-content');
            
               item
               .html(originalContent)
               .removeAttr('loading-in-progress')
               .removeAttr('disabled');
           });
        
       });
    
    // gl.body.on('onpagehide', function (e) {
    //     console.log('onpagehide!');
    // })
});

let global = {
    reference: {},
    
};

(function init_utils(varName) {
    let utils = (window[varName] || {});
    
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
                    
                    if (isFunction(fn)) {
                        console.log({'Status': 'Run', 'ID': id, 'Event': e});
                        
                        fn.apply(null, arguments);
                    }
                }
            }
        };
        
        this.done = function (fn) {
            if (inProgress) {
                inProgress = false;
                counter = 1;
                
                console.log({'Status': 'Done', 'ID': id, 'Arguments': arguments});
                
                if (isFunction(fn)) {
                    fn.apply(this, arguments);
                }
            }
        }
    }
    
    function is$(target) {
        return (target && (target instanceof jQuery));
    }
    
    function isFunction(target) {
        return (target && (jQuery.isFunction(target)));
    }
    
    utils.domer = (function () {
        return {
            createTextNode  : function (text) {
                return $(document.createTextNode(text));
            },
            createElement   : function (tagName) {
                return $(document.createElement(tagName));
            },
            createStylesheet: function (fileName) {
                return $('<link>', {href: fileName, rel: 'stylesheet', type: 'text/css'});
            }
        }
    })();
    
    utils.debouncer = (function () {
        var instancesCount = 1,
            instancesBank  = {};
        
        return {
            getNewInstance   : function () {
                var newInstance = new Debounce(instancesCount);
                
                instancesBank[instancesCount++] = newInstance;
                
                return newInstance;
            },
            getInstance      : function (instanceID) {
                var instance = instancesBank[instanceID];
                
                return (instance || null);
            },
            getAllInstances  : function () {
                return instancesBank;
            },
            getInstancesCount: function () {
                return instancesCount;
            }
        }
    })();
    
    utils.disabler = (function () {
        utils.domer.createStylesheet('../css/shield.css').appendTo($('head'));
        
        return {
            /* --- */
            shield  : function (target) {
                let shieldContainer = $('<div>', {'class': 'shield-container'});
                
                if (is$(target) && !target.is('[shield-in-progress]')) {
                    target.attr('shield-in-progress', true);
                    shieldContainer.prependTo(target);
                }
            },
            unshield: function (target) {},
            /* --- */
            enable  : function (target, callback, arguments) {
                if (is$(target)) {
                    target.removeAttr('disabled');
                }
                if (isFunction(callback)) {
                    callback.apply(null, arguments);
                }
            },
            disable : function (target, callback, arguments) {
                if (is$(target)) {
                    target.attr('disabled', 'disabled');
                }
                if (isFunction(callback)) {
                    callback.apply(null, arguments);
                }
            },
            /* --- */
            show    : function (target) {
                if (is$(target)) {
                    target.show();
                }
            },
            hide    : function (target) {
                if (is$(target)) {
                    target.hide();
                }
            }
        }
    })();
    
    /* return */
    window[varName] = utils;
})('rh_utils');