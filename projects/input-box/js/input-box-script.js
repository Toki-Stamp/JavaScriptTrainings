/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let div,
        spans;
    
    $(document).on('mousedown', function (event) {
        let me = $(event.target);
        
        if (me.is('span') && me.parent().is('.has-control')) {
            let e = event || window.event,
                btnCode;
            
            if ('object' === typeof e) {
                btnCode = e.button;
                
                switch (btnCode) {
                    case 0:
                        console.log('Нажата левая кнопка.');
                        break;
                    
                    case 1:
                        console.log('Нажата средняя кнопка или колёсико.');
                        e.preventDefault();
                        break;
                    
                    case 2:
                        console.log('Нажата правая кнопка.');
                        e.preventDefault();
                        break;
                    
                    default:
                        e.preventDefault();
                        console.log('Неопределённое событие: ' + btnCode);
                }
            }
            
            div = me.parent();
            
            if (div && !div.hasClass('has-focus')) {
                div.addClass('has-focus');
            }
        } else {
            if (div && div.hasClass('has-focus')) {
                div.removeClass('has-focus');
            }
        }
    });
    
    $(document).on('contextmenu', '.box.has-control', function (event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
    
    $(document).on('focus', '.box.has-control span', function (event) {
        let me = $(event.target);
        
        div = me.parent();
        
        if (div && !div.hasClass('has-focus')) {
            div.addClass('has-focus');
        }
    });
    
    $(document).on('blur', '.box.has-control span', function (event) {
        let me = $(event.target);
        
        div = me.parent();
        
        if (div && div.hasClass('has-focus')) {
            div.removeClass('has-focus');
        }
    });
    
    $(document).on('keydown', '.box.has-control', function (event) {
        let current = $(event.target);
        spans = spans || $(event.target).parent().find('span');
        
        if (event) {
            switch (event.keyCode) {
                case 37: //left
                    if (current.prev().length) {
                        current.prev().focus();
                    } else {
                        spans.last().focus();
                    }
                    
                    break;
                case 39: //right
                    if (current.next().length) {
                        current.next().focus();
                    } else {
                        spans.first().focus();
                    }
                    
                    break;
                case 46: //delete
                    if (current && current.is('span')) {
                        current.remove();
                        spans = div.find('span');
                        div.focus();
                    }
                    
                    break;
                case 8: //backspace
                    if (current && current.prev().length && current.prev().is('span')) {
                        current.prev().remove();
                        spans = div.find('span');
                    }
            }
        }
        
        if (!spans.length) {
            div = div || $(event.target).parent();
            div.removeAttr('tabindex').empty();
        }
    });
});

/* Self-invoking function */
(function main() {
    (function init(boxes) {
        let index = 0;
        
        boxes.each(function () {
            let me = $(this);
            
            if (me.is('.editable')) {
                me.attr('contenteditable', true);
            }
        })
    })($('.box'));
})();