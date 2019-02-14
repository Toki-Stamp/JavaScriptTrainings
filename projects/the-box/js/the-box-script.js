/**
 * Created by Fomichev Yuri on 13.02.2019
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    $('.container-x').on('scroll', function () {
        $('.container-x-2').scrollTop($(this).scrollTop());
        $('.container-x-3').scrollTop($(this).scrollTop());
    });
    $('.container-x-2').on('scroll', function () {
        $('.container-x').scrollTop($(this).scrollTop());
        $('.container-x-3').scrollTop($(this).scrollTop());
    });
    $('.container-x-3').on('scroll', function () {
        $('.container-x').scrollTop($(this).scrollTop());
        $('.container-x-2').scrollTop($(this).scrollTop());
    });
});

/* Self-invoking function */
(function main() {
})();