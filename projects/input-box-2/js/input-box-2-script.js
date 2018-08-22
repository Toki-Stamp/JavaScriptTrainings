/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let remove    = $('.x-remove'),
        btns      = $('button'),
        input     = $('input'),
        reference = $('.datepicker-container.v1'),
        popup     = $('.x-datepicker-popup').css('display', 'none'),
        popper    = new Popper(reference, popup, {
            placement    : 'top-start',
            eventsEnabled: false,
            onCreate     : function (data) {
                console.log(data);
            }
        });
    
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
    reference.on('click', function () {
        let timeout,
            delay    = 50,
            style    = getComputedStyle(document.body),
            duration = (function () {
                let multipliers = {
                    s : 100,
                    ms: 1
                };
                console.log(multipliers);
                console.log(style.getPropertyValue('--duration'));
            })();
        
        popper.update();
        
        if (popup.hasClass('fade')) {
            popup.css('display', 'block');
            
            timeout = setTimeout(function () {
                popup.removeClass('fade');
                clearTimeout(timeout);
                timeout = null;
            }, delay);
        } else {
            popup.addClass('fade');
            
            timeout = setTimeout(function () {
                popup.css('display', 'none');
                clearTimeout(timeout);
                timeout = null;
            }, 1050);
        }
    })
});