/**
 * Created by Fomichev Yuri on 09.08.2018
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let
        update    = function (target) {
            let spans = target.find('span');
            
            if (spans && spans.length) {
                spans.last().focus();
                target.addClass('has-focus').attr('tabindex', 1);
            } else {
                target.removeClass('has-focus').removeAttr('tabindex');
                spans.off();
            }
            
            console.log('update function fired!');
        },
        container = $('.container'),
        model     = {
            storage      : container.find('[data-role="storage"]'),
            visualization: container.find('[data-role="visualization"]'),
            datepicker   : container.find('[data-role="datepicker"]')
        },
        buttons   = container.find('button');
    
    buttons.each(function () {
        let button = $(this),
            event  = 'click',
            fn;
        
        switch (button.data('action')) {
            case 'add-date':
                fn = function () {
                    let currentDates = model.storage.data('dates') || [],
                        dates        = currentDates.slice();
                    
                    dates.push(new Date().toLocaleTimeString());
                    
                    console.log('add-date-event-handler');
                    
                    model.storage.data('dates', dates);
                    model.storage.val(dates.join(', ')).trigger('change');
                    model.datepicker.addClass('has-focus');
                };
                break;
            case 'read-dates':
                fn = function () {
                    let currentDates = model.storage.data('dates') || [],
                        val          = model.storage.val();
                    
                    console.log('read-dates-event-handler');
                    console.log('dates', currentDates);
                    console.log('val', '"' + val + '"');
                };
                break;
            case 'clear-dates':
                fn = function () {
                    console.log('clear-dates-event-handler');
                    
                    model.storage.data('dates', []);
                    model.storage.removeAttr('value').trigger('change');
                    model.datepicker.removeClass('has-focus');
                };
                break;
        }
        
        button.on(event, fn);
    });
    
    model.datepicker.datepicker({inline: true});
    
    model.storage.on('change', function () {
        let me      = $(this),
            data    = me.data('dates'),
            prepare = function (target) {
                target.empty()
            },
            create  = function (value, index) {
                $('<span>').text(value).attr('tabindex', index + 10).appendTo(model.visualization);
            };
        
        console.log('on-change-event-handler');
        
        prepare(model.visualization);
        
        if (data && $.isArray(data) && data.length) {
            data.forEach(function (value, index) {
                create(value, index);
            });
        }
        
        update(model.visualization);
    });
    model.visualization.on('click', function () {
        console.log('click-on-date-picker');
    });
    
    $(document).on('mousedown', function (event) {
        let me    = $(event.target),
            div   = model.visualization,
            spans = div.find('span');
        
        if (me.is('span') && me.parent().is('.has-control')) {
            // let e = event || window.event;
            // if (('object' === typeof e) && (1 === e.button)) {
            //     e.preventDefault();
            //     me.remove();
            //
            //     if (spans.length) {
            //         div.focus();
            //     } else {
            //         div.removeAttr('tabindex').removeClass('has-focus').blur().empty();
            //     }
            // }
            
            if (div && !div.hasClass('has-focus') && spans && spans.length) {
                div.addClass('has-focus');
            }
        } else {
            if (div) {
                if (div.hasClass('has-focus')) {
                    div.removeClass('has-focus');
                }
                if (div.attr('tabindex')) {
                    div.removeAttr('tabindex');
                }
            }
        }
    });
});