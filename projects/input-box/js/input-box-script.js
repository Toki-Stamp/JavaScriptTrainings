/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let div,
        spans,
        container          = $('.container'),
        buttons            = container.find('button'),
        inputContainer     = container.find('[data-role="input-container"]'),
        inputVisualization = container.find('[data-role="input-visualization"]');
    
    buttons.each(function () {
        let button = $(this),
            event  = 'click',
            fn;
        
        switch (button.data('action')) {
            case 'add-date':
                fn = function () {
                    let currentDates = inputContainer.data('dates') || [],
                        dates        = currentDates.slice();
                    
                    dates.push(new Date().toLocaleTimeString());
                    
                    console.log('add-date-event-handler');
                    
                    inputVisualization.empty().addClass('has-focus').attr('tabindex', 1);
                    inputContainer.data('dates', dates);
                    inputContainer.val(dates.join(', ')).trigger('change');
                };
                break;
            case 'read-dates':
                fn = function () {
                    let currentDates = inputContainer.data('dates') || [],
                        val
                                     = inputContainer.val();
                    
                    console.log('read-dates-event-handler');
                    console.log('dates', currentDates);
                    console.log('val', '"' + val + '"');
                };
                break;
            case 'clear-dates':
                fn = function () {
                    console.log('clear-dates-event-handler');
                    
                    inputVisualization.empty().removeClass('has-focus').removeAttr('tabindex');
                    inputContainer.data('dates', []);
                    inputContainer.val('').removeAttr('value').trigger('change');
                };
                break;
        }
        
        button.on(event, fn);
    });
    
    inputContainer.on('change', function () {
        let me     = $(this),
            data   = me.data('dates'),
            create = function (value, index) {
                if (!inputVisualization.attr('tabindex')) {
                    inputVisualization.attr('tabindex', 1);
                }
            
                $('<span>').text(value).attr('tabindex', index + 10).appendTo(inputVisualization);
            
                if (!inputVisualization.hasClass('has-focus')) {
                    inputVisualization.addClass('has-focus')
                }
            };
        
        console.log('on-change-event-handler');
        
        if (data && $.isArray(data) && data.length) {
            data.forEach(function (value, index) {
                console.log(index, value);
                create(value, index);
            });
        }
    });
    
    $(document).on('mousedown', function (event) {
        let me = $(event.target);
        
        if (me.is('span') && me.parent().is('.has-control')) {
            let e = event || window.event;
            
            if (('object' === typeof e) && (1 === e.button)) {
                e.preventDefault();
                div = me.parent();
                me.remove();
                spans = div.find('span');
                
                if (spans.length) {
                    div.focus();
                } else {
                    div.removeAttr('tabindex').removeClass('has-focus').blur().empty();
                }
            }
            
            if (div && !div.hasClass('has-focus') && spans && spans.length) {
                div.addClass('has-focus');
            }
        } else {
            if (div && div.hasClass('has-focus')) {
                div.removeClass('has-focus');
            }
        }
    });
    
    $('.box.has-control').on('contextmenu', function (event) {
        event.preventDefault();
        event.stopPropagation();
        
        return false;
    });
    
    $('.box.has-control span').on('focus', function (event) {
        let me = $(event.target);
        
        div = me.parent();
        
        if (div && !div.hasClass('has-focus')) {
            div.addClass('has-focus');
        }
    });
    
    $('.box.has-control span').on('blur', function (event) {
        let me = $(event.target);
        
        div = me.parent();
        
        if (div && div.hasClass('has-focus')) {
            div.removeClass('has-focus');
        }
    });
    
    $('.box.has-control').on('keydown', function (event) {
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