/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let remove              = $('[data-role="remove-date"]'),
        btns                = $('button'),
        input               = $('input'),
        datepickerContainer = $('.datepicker-container'),
        options             = {
            startDate             : new Date(1983, 4, 9),
            multipleDates         : true,
            multipleDatesSeparator: ', ',
            position              : 'top left',
            todayButton           : new Date(),
            clearButton           : true,
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
        // datepicker          = $('[data-role="datepicker"]').datepicker(options).data('datepicker'),
        datepicker          = $(".datepicker-container.v1").datepicker({inline: true}),
        picks               = $('.pick-date').find('span.text');

    remove.on('click', function () {
        let parent      = $(this).parent(),
            grandParent = parent.parent(),
            effect      = ['fade-out', 'collapse-out', 'zoom-in'],
            _class,
            check       = function () {
                let count = grandParent.find('.pick-date');

                if (!count.length) {
                    grandParent.empty();
                }
            };

        if (grandParent.is('.v1')) {
            _class = effect[0];
        } else if (grandParent.is('.v2')) {
            _class = effect[1];
        } else if (grandParent.is('.v3')) {
            _class = effect[2];
        }

        parent.addClass(_class).blur();

        setTimeout(function () {
            parent.remove();
            check();
        }, 250);
    });

    // datepickerContainer.on('click', function () {
    //     datepicker.show();
    // });

    picks.each(function () {
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