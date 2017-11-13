/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {

    $('#input-advanced').keydown(function (e) {
        /* 8    - backspace */
        /* 37   - left arrow */
        /* 39   - right arrow */
        /* 46   - delete */
        if (e) {
            if (e.originalEvent.repeat) {
                if (![8, 37, 39, 46].includes(e.keyCode)) {
                    return false;
                }
            }
        }
        if (e && (e.key === ',')) {
            var self = $('#input-advanced'),
                parent = self.parent().parent();
            self.next().addClass('glyphicon-warning-sign');
            parent.addClass('has-error');
        }
    }).keyup(function (e) {
        var self = $(this),
            parent = self.parent().parent(),
            replaceValue = self.val();
        if (parent.hasClass('has-error')) {
            self.next().removeClass('glyphicon-warning-sign');
            parent.removeClass('has-error');
        }
        replaceValue = replaceValue.replace(/,/g, '.');
        self.val(replaceValue);
    });

    $('#input-normal').keyup(function () {
        var self = $(this),
            replaceValue = self.val();
        replaceValue = replaceValue.replace(/,/g, '.');
        self.val(replaceValue);
    });
});
