/**
 * Created by Fomichev Yuri on 08.04.2018
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var messages = {
        t_copy: 'Скопировать текст в буфер обмена',
        t_copied: 'Текст успешно скопирован в буфер обмена',
        t_empty: 'Нет данных'
    };

    var classes = {
        i_copy_before: 'glyphicon-copy',
        i_copy_after: 'glyphicon-ok',
        i_fade: 'fade',
        box_copied: 'copied',
        box_empty: 'empty',
        box_multi: 'multi'
    };

    var swapClasses = function (element, add, remove) {
        element.addClass(classes.i_fade);

        setTimeout(function () {
            if (add) {
                element.toggleClass(add)
            }

            if (remove) {
                element.toggleClass(remove);
            }

            element.removeClass(classes.i_fade);
        }, 250);
    };

    var copyToClipboard = function (element) {
        var text = element.get(0).innerText,
            textArea,
            result;

        if (document.queryCommandSupported('copy')) {
            textArea = document.createElement("textarea");
            textArea.value = text;
            document.body.appendChild(textArea);
            textArea.select();

            try {
                result = document.execCommand('copy');
            } catch (err) {
                result = false;
            }

            document.body.removeChild(textArea);
            element.focus();
        }

        return result;
    };

    var clearInput = function (element) {
        var text = element.val(),
            i, j = 1, size;

        if (text && (typeof text === 'string')) {
            for (size = (text.length - 1), i = size; i >= 0; i -= 1, j += 1) {
                setTimeout(function (txt, opacity) {
                    element.val(txt);
                    element.css('color', 'rgba(153, 153, 153, ' + (txt.length ? (1 / opacity) : 0) + ')');

                    console.log(txt, 'at', opacity);

                    if (!txt.length) {
                        element.removeAttr('style');
                    }
                }, 25 * j, text.substring(0, i), j);
            }
        }
    };

    (function init(boxes) {
        boxes.each(function () {
            var me = $(this),
                element = '',
                icon;

            if (this.innerText && this.innerText.length) {
                element += '<i ';
                element += 'class="glyphicon ' + classes.i_copy_before + '" ';
                element += 'title="' + messages.t_copy + '"';
                element += '></i>';

                me.prepend(element);

                me.on('mouseleave', function () {
                    var me = $(this),
                        i = me.find('i');

                    if (me.hasClass(classes.box_copied)) {
                        me.toggleClass(classes.box_copied);
                        me.removeAttr('title');
                        swapClasses(i, classes.i_copy_before, classes.i_copy_after);
                        i.attr('title', messages.t_copy)
                    }
                });

                icon = me.find('i');

                icon.on('click', function () {
                    var me = $(this),
                        parent = me.parent();

                    if (copyToClipboard(parent)) {
                        me.attr('title', messages.t_copied);
                    }

                    if (!parent.hasClass(classes.box_copied)) {
                        parent.toggleClass(classes.box_copied);
                        parent.attr('title', messages.t_copied);
                        swapClasses(me, classes.i_copy_before, classes.i_copy_after);
                    }
                });
            } else {
                me.addClass(classes.box_empty)
            }
        })
    })($('#main-table').find('.box'));

    (function init(form) {
        var input = form.find('input'),
            i = form.find('i');

        i.on('click', function () {
            clearInput(input);
        })
    })($('#main-table').find('form'));
});