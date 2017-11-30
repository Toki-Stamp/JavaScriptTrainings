/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {

    $('#sign-in').find('input').focus(function () {
        if (!$('#sign-in').hasClass('focused')) {
            $('#sign-in').addClass('focused');
        }
    }).blur(function () {
        $('#sign-in').removeClass('focused');
    })

});

/* Self-invoking function */
(function main() {
})();