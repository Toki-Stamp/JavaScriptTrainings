/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */
(function init_utils(referenceName) {
    var utils = (window[referenceName] || {});

    function /* constructor */ Shield() {
        var thisMessage = 'Загрузка данных...',
            classes     = {
                'shield':   'x-shield-container',
                'body':     'x-body',
                'relative': 'x-relative',
                'text':     'x-shield-text'
            },
            reference   = {'target': null};

        function createShield(className, message) {
            var shieldScreen       = $('<div>', {'class': (className || classes['shield'])}),
                shieldMessage      = $('<div>', {'class': 'x-shield-message'}),
                animationContainer = $('<div>', {'class': 'x-shield-message-animation-container'}),
                textContainer      = $('<div>', {'class': 'x-shield-message-text-container'}),
                spinnerAnimation   = $('<span>', {'class': 'fa fa-spinner fa-pulse'}),
                shieldText         = $('<span>', {'class': classes['text'], 'text': (message || thisMessage)});

            animationContainer.appendTo(shieldMessage);
            textContainer.appendTo(shieldMessage);
            spinnerAnimation.appendTo(animationContainer);
            shieldText.appendTo(textContainer);
            shieldMessage.appendTo(shieldScreen);

            return shieldScreen;
        }

        this.bind    = function (target) {
            reference['target'] = target;

            return this;
        };
        this.message = function (message) {
            reference['target'].find(['.', classes['text']].join('')).text(message);

            return this;
        };
        //create
        this.rise    = function () {
            if (reference['target']) {
                if (reference['target'].is('body')) {
                    reference['target'].addClass(classes['body']);
                } else {
                    reference['target'].addClass(classes['relative']);
                }

                createShield().prependTo(reference['target']);
            }

            return this;
        };
        this.decline = function () {
            if (reference['target']) {
                reference['target'].removeClass(classes['relative']).removeClass(classes['body']);
                reference['target'].find(['.', classes['shield']].join('')).remove();
            }
        };
    }

    utils.shield = (function () {
        var counter = 0,
            store   = {};

        return {
            getShield: function () {
                var instance = new Shield();

                store[++counter] = instance;

                return instance;
            }
        }
    })();

    /* return */
    window[referenceName] = utils;
})('rh_utils');