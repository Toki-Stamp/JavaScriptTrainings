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
        i_copy_before: 'glyphicon-share-alt',
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

    (function init(boxes) {
        boxes
            .each(function (index) {
                var me = $(this),
                    element = '';

                if (this.innerText && this.innerText.length) {
                    element += '<i ';
                    element += 'class="glyphicon ' + classes.i_copy_before + '" ';
                    element += 'title="' + messages.t_copy + '"';
                    element += '></i>';

                    me
                    // .attr('tabindex', (index + 1))
                        .prepend(element)
                        .on('mouseleave', function () {
                            var me = $(this),
                                i = me.find('i');

                            if (me.hasClass(classes.box_copied)) {
                                me.toggleClass(classes.box_copied);
                                me.removeAttr('title');
                                swapClasses(i, classes.i_copy_before, classes.i_copy_after);
                                i.attr('title', messages.t_copy)
                            }
                        })
                        .find('i')
                        .on('click', function () {
                            var me = $(this),
                                copyToClipboard = (function (element) {
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
                                })(me.parent());

                            if (copyToClipboard) {
                                me.attr('title', messages.t_copied);
                            }
                        })
                        .on('click', function () {
                            var me = $(this),
                                parent = me.parent();

                            if (!parent.hasClass(classes.box_copied)) {
                                parent.toggleClass(classes.box_copied);
                                parent.attr('title', messages.t_copied);
                                swapClasses(me, classes.i_copy_before, classes.i_copy_after);
                            }
                        });
                } else {
                    me
                        .addClass(classes.box_empty)
                        .text(messages.t_empty);
                }
            })
    })($('#main-table').find('.box'));

    (function init(form) {
        var input = form.find('input'),
            i = form.find('i');
        i.on('click', function () {
            input.val('');
        })
    })($('#main-table').find('form'));

    // $('#main-table').find('.test').find('i')
    //     .on('mouseenter', function () {
    //         var me = $(this),
    //             parent = me.parent();
    //
    //         if (!parent.hasClass('copied')) {
    //             me.addClass('fade').addClass('glyphicon-remove');
    //
    //             setTimeout(function () {
    //                 if (me.hasClass('glyphicon-ok')) {
    //                     me
    //
    //                         .removeClass('glyphicon-ok');
    //
    //                     parent
    //                         .removeClass('copied');
    //                 } else {
    //                     me
    //                         .addClass('glyphicon-ok')
    //                         .removeClass('glyphicon-remove');
    //
    //                     parent
    //                         .addClass('copied');
    //                 }
    //
    //                 me.removeClass('fade')
    //             }, 250);
    //         }
    //     })
    //     .on('mouseleave', function () {
    //         var me = $(this),
    //             parent = me.parent();
    //
    //         if (parent.hasClass('copied')) {
    //             me.addClass('fade');
    //
    //             setTimeout(function () {
    //                 me
    //                     .addClass('glyphicon-remove')
    //                     .removeClass('glyphicon-ok');
    //
    //                 parent
    //                     .removeClass('copied');
    //
    //                 me.removeClass('fade');
    //             }, 250);
    //         }
    //     });
});