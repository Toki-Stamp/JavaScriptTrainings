/**
 * Created by Fomichev Yuri on 08.04.2018
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var messages = {
        t_copy  : 'Скопировать текст в буфер обмена',
        t_copied: 'Текст успешно скопирован в буфер обмена',
        t_empty : 'Нет данных'
    };
    
    var classes = {
        i_copy_before: 'glyphicon-copy',
        i_copy_after : 'glyphicon-ok',
        i_fade       : 'fade',
        box_copied   : 'copied',
        box_empty    : 'empty',
        box_multi    : 'multi'
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
            i,
            j    = 1,
            size;
        
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
    
    var validateInput = function (input, parent, button) {
        var pattern,
            value,
            popover;
        
        if (input && parent && (input instanceof jQuery) && (parent instanceof jQuery)) {
            pattern = new RegExp(input.attr('pattern'), 'g');
            value = input.val();
            
            if (value && pattern.test(value)) {
                console.log('validation passed');
                parent.removeClass('has-error');
                return true;
            } else {
                popover = parent.find('[data-toggle="popover"]');
                popover.popover('show');
                
                popover.one('shown.bs.popover', function () {
                    input.focus();
                    
                    $(window).one('click', function (event) {
                        if (!$(event.target).is(button)) {
                            parent.find('[data-toggle="popover"]').popover('hide');
                        }
                    });
                });
                
                console.log('validation error');
                parent.addClass('has-error');
            }
        }
    };
    
    (function init(boxes) {
        boxes.each(function () {
            var me      = $(this),
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
                        i  = me.find('i');
                    
                    if (me.hasClass(classes.box_copied)) {
                        me.toggleClass(classes.box_copied);
                        me.removeAttr('title');
                        swapClasses(i, classes.i_copy_before, classes.i_copy_after);
                        i.attr('title', messages.t_copy)
                    }
                });
                
                icon = me.find('i');
                
                icon.on('click', function () {
                    var me     = $(this),
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
    
    (function init(parent) {
        var input = parent.find('input'),
            i     = parent.find('i');
        i.on('click', function () {
            input.val('');
            // input.trigger('change');
            // input.focus();
        })
    })($('#main-table').find('div.has-feedback'));
    
    (function init(alert) {
        var button = alert.find('.glyphicon');
        
        button.on('click', function () {
            var body = $('body');
            
            if (body.attr('time-out')) {
                clearTimeout(parseInt(body.attr('time-out'), 10));
                body.removeAttr('time-out');
            }
            
            body.removeAttr('alert');
        })
    })($('#alert-container'));
    
    $('#main-table')
    .find('div.has-feedback').find('button')
    .on('click', function () {
        var body  = $('body'),
            table = $('#main-table'),
            index,
            hide  = function (target, attr, delay) {
                index = setTimeout(function () {
                    if (target.attr(attr)) {
                        target.removeAttr(attr);
                    }
                    if (index) {
                        clearTimeout(index);
                        body.removeAttr('time-out');
                        index = undefined;
                    }
                }, delay);
                body.attr('time-out', [index]);
            };
        
        if (!body.attr('alert')) {
            body.attr('alert', true);
            hide(body, 'alert', 5000);
        }
        
        if (!table.attr('popover')) {
            table.attr('popover', true);
            hide(table, 'popover', 3500);
        }
    });
});