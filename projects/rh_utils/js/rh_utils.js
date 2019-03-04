/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function init_utils(referenceName) {
    var utils = (window[referenceName] || {});
    
    function /* constructor */ Shield() {
        var classes   = {
                'shield'  : 'x-shield-container',
                'message' : 'x-shield-message',
                'body'    : 'x-body',
                'relative': 'x-relative',
                'text'    : 'x-shield-text',
                'hidden'  : 'x-hidden',
                'get'     : function (className) {
                    return ['.', this[className]].join('');
                }
            },
            reference = {'target': null, 'shield': null, 'message': null};
        /* chain call pattern */
        this.create = function () {
            var shieldScreen       = $('<div>', {'class': classes['shield']}),
                shieldMessage      = $('<div>', {'class': classes['message']}),
                animationContainer = $('<div>', {'class': 'x-shield-message-animation-container'}),
                textContainer      = $('<div>', {'class': 'x-shield-message-text-container'}),
                spinnerAnimation   = $('<span>', {'class': 'fa fa-spinner fa-pulse'}),
                shieldText         = $('<span>', {'class': classes['text'], 'text': reference['message']});
            
            animationContainer.appendTo(shieldMessage);
            textContainer.appendTo(shieldMessage);
            spinnerAnimation.appendTo(animationContainer);
            shieldText.appendTo(textContainer);
            shieldMessage.appendTo(shieldScreen);
            
            reference['shield'] = shieldScreen;
            
            return this;
        };
        this.bind = function (target) {
            reference['target'] = target;
            
            return this;
        };
        this.message = function (message) {
            reference['message'] = message;
            reference['shield'].find(classes.get('text')).text(message);
            
            if (reference['message']) {
                reference['shield'].find(classes.get('message')).removeClass(classes['hidden']);
            } else {
                reference['shield'].find(classes.get('message')).addClass(classes['hidden']);
            }
            
            return this;
        };
        this.show = function () {
            if (reference['target']) {
                if (reference['target'].is('body')) {
                    if (!reference['target'].hasClass(classes['body'])) {
                        reference['target'].addClass(classes['body']);
                    }
                } else {
                    if (!reference['target'].hasClass(classes['relative'])) {
                        reference['target'].addClass(classes['relative']);
                    }
                }
                
                if (reference['message']) {
                    reference['shield'].find(classes.get('message')).removeClass(classes['hidden']);
                } else {
                    reference['shield'].find(classes.get('message')).addClass(classes['hidden']);
                }
                
                if (reference['shield'].hasClass(classes['hidden'])) {
                    reference['shield'].removeClass(classes['hidden']);
                } else {
                    if (!reference['target'].find(classes.get('shield')).length) {
                        reference['shield'].prependTo(reference['target']);
                    }
                }
            }
            
            return this;
        };
        this.hide = function () {
            if (reference['shield']) {
                if (!reference['shield'].hasClass(classes['hidden'])) {
                    reference['shield'].addClass(classes['hidden']);
                }
            }
            
            return this;
        };
        this.destroy = function () {
            if (reference['target']) {
                reference['target'].removeClass(classes['relative']).removeClass(classes['body']);
                reference['target'].find(classes.get('shield')).remove();
            }
            
            return this;
        };
        this.status = function () {
            console.info('status: ', reference);
        };
    }
    function /* constructor */ Alert() {
    
    }
    
    utils.shield = (function () {
        var counter = 0,
            store   = {};
        
        return {
            getNewInstance: function () {
                var instance = new Shield();
                
                store[++counter] = instance;
                
                return instance;
            },
            status        : function () {
                console.info('instances: ', counter);
                console.info('store: ', store);
            }
        }
    })();
    
    /* return */
    window[referenceName] = utils;
})('rh_utils');