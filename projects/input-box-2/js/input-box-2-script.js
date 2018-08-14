/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let closeBtns           = $('[data-role="remove-date"]'),
        btns                = $('button'),
        input               = $('input'),
        test                = $('#test'),
        datepickerContainer = $('.datepicker-container'),
        options             = {
            startDate             : new Date(1983, 4, 9),
            multipleDates         : true,
            multipleDatesSeparator: ', ',
            todayButton           : true,
            onShow                : function (instance, animationCompleted) {
                if (!animationCompleted) {
                    datepickerContainer.addClass('has-focus');
                }
            },
            onHide                : function (instance, animationCompleted) {
                if (!animationCompleted) {
                    datepickerContainer.removeClass('has-focus');
                }
            }
        },
        datepicker          = $('[data-role="datepicker"]').datepicker(options).data('datepicker'),
        dates               = $('.pick-date').find('span.text');
    
    closeBtns.on('click', function () {
        let parent      = $(this).parent(),
            grandParent = parent.parent(),
            check       = function () {
                let count = grandParent.find('.pick-date');
            
                if (!count.length) {
                    grandParent.empty();
                }
            };
        
        parent.addClass('fade-out');
        
        setTimeout(function () {
            parent.remove();
            check();
        }, 250);
    });
    
    test.hide();
    
    // datepickerContainer.on('click', function () {
    //     datepicker.show();
    // });
    
    dates.each(function () {
        let me = $(this);
        
        me.on('click', function () {
            let parts = me.text().split('.'),
                year  = parseInt(parts[2], 10),
                month = parseInt(parts[1], 10),
                day   = parseInt(parts[0], 10),
                date  = new Date(year, month - 1, day);
            
            datepicker.clear();
            datepicker.selectDate(date);
            datepicker.show();
        });
    });
    
    btns.each(function () {
        let me = $(this),
            fn;
        
        switch (me.data('role')) {
            case 'read-dates':
                fn = function () {
                    let popper = new Popper(me, test, {
                        placement: 'top'
                    });
                    console.log('input:', '"' + input.val() + '"');
                };
                break;
            case 'show-datepicker':
                fn = function () {
                    datepicker.show();
                }
        }
        
        me.on('click', fn);
    });
});

/* Self-invoking function */
(function main() {
})();