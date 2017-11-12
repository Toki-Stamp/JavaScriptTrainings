/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {

    $('#input-advanced').keydown(function (e) {
        var self = $(this),
            parent = self.parent().parent();
        if (e && ((e.key = ',') && (e.keyCode === 188) && (e.code = 'Comma'))) {
            self.next().addClass('glyphicon-warning-sign');
            parent.addClass('has-error');
        }
    }).keyup(function () {
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