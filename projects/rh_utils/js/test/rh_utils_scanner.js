/**
 * Created by Fomichev Yuri on 28.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function sif() {
    var utils   = window['rh_utils'],
        scanner = utils.scanner.getInstance(),
        buttons = $('.container').find('button'),
        handler = function (e) {
            console.log(e);
        };
    
    buttons.eq(0).on('click', handler).on('focus', handler).on('blur', handler);
    buttons.eq(1).on('click', handler);
    buttons.eq(2).on('focus', handler).on('blur', handler);
    buttons.eq(3).on('click', handler).on('dblclick', handler).on('mouseenter', handler).on('mouseleave', handler);
    
    scanner.add(buttons);
    
    for (var i = 0, size = buttons.length; i < size; i += 1) {
        console.log(i, buttons.eq(i), buttons.eq(i).data('scanner'));
    }
    
    scanner.freeze(buttons.eq(3));
})();