/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let closeBtns  = $('[data-role="remove-date"]'),
        btns       = $('button'),
        input      = $('input'),
        datepicker = $('[data-role="datepicker"]').datepicker().data('datepicker'),
        dates      = $('.pick-date').find('span.text');

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