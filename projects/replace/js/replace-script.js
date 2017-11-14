/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {

    $('#input-advanced').keydown(function (e) {
        if (repeatedEvent(e)) return false;
        if (e && (e.key === ',')) {
            var self = $('#input-advanced'),
                parent = self.parent();
            self.next().addClass('glyphicon-pencil');
            parent.addClass('has-warning');
        }
    }).keyup(function () {
        var self = $(this),
            parent = self.parent(),
            replaceValue = self.val();
        if (parent.hasClass('has-warning')) {
            self.next().removeClass('glyphicon-pencil');
            parent.removeClass('has-warning');
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

    function repeatedEvent(event) {
        /* 8 - backspace / 37 - left arrow / 39 - right arrow / 46 - delete */
        if (event && event.originalEvent.repeat) {
            if (![8, 37, 39, 46].includes(event.keyCode)) {
                return true;
            }
        }
    }
});
