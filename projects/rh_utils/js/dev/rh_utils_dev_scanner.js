/**
 * Created by Fomichev Yuri on 08.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function init_utils(referenceName) {
    var utils = (window[referenceName] || {}),
        debug = true,
        greetingMsg = '... rh_utils successfully loaded!';

    function /* constructor */ Scanner() {
        // console.log(jQuery._data(this, 'events'));
        // event.stopImmediatePropagation()
    }

    utils.scanner = (function () {
        var singleton;

        return {
            getInstance: function () {
                return (singleton || (singleton = new Scanner()));
            }
        };
    })();
    /* greeting */
    (debug) && (console.info(greetingMsg));
    /* return */
    window[referenceName] = utils;
})('rh_utils');