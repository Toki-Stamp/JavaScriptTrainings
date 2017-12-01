/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var signInContainer = $('#sign-in-container'),
        inputs          = signInContainer.find('input');

    inputs.on('focus', function (e) {
        // console.log(this);
        // console.log(e);
        // if (!signInContainer.hasClass('panel-focused')) {
        //     signInContainer.addClass('panel-focused');
        // }
    }).blur(function () {
        // if (signInContainer.hasClass('panel-focused')) {
        //     signInContainer.removeClass('panel-focused');
        // }
    })

});

/* Self-invoking function */
(function main() {
})();