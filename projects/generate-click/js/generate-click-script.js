/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var input  = $('input[title="target"]'),
        clear = $('button[title="clear"]'),
        trigger = $('button[title="trigger"]');
    clear.on('click', function () {
        input.val('');
        input.css('background', '');
    });
    input.on('click', function () {
        input.val('input-click-event');
        input.css('background', 'rgba(255, 0, 0, 0.2)');
    });
    trigger.on('click', function () {
        input.trigger('click');
    });
});

/* Self-invoking function */
(function main() {
})();