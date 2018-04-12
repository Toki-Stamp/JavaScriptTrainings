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
        i_copy: 'glyphicon-copy',
        i_ok: 'glyphicon-ok',
        box_copied: 'copied',
        box_empty: 'empty',
        box_multi: 'multi'
    };


    (function init(boxes) {
        boxes
            .each(function (index) {
                var me = $(this),
                    element = '';

                if (this.innerText && this.innerText.length) {
                    element += '<i ';
                    element += 'class="glyphicon ' + classes.i_copy + '" ';
                    element += 'title="' + messages.t_copy + '"';
                    element += '></i>';

                    me
                        .attr('tabindex', (index + 1))
                        .prepend(element)
                        .find('i')
                        .on('click', function () {
                            var me = $(this),
                                copyToClipboard = (function (element) {
                                    var text = element.get(0).innerText,
                                        textArea,
                                        result;

                                    console.log(text);

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

                }
            })
    })($('#main-table').find('.box'));


});


function formAction() {
    var regex = new RegExp('^[1-9]{1}[0-9]{0,11}$'),
        tests = ['1', '0', '07', '', '-2', '11', '123456789012345', '1234567890123456', '12345678901234567'];

    tests.forEach(function (value) {
        console.log(value, '==>', regex.test(value));
    });
}

