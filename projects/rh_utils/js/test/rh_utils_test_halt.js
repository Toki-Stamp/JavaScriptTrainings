/**
 * Created by Fomichev Yuri on 28.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function sif() {
    var content = $("#mainTableCont"),
        tr = content.find('tbody tr'),
        buttonsContainer = $('.buttons'),
        buttons = buttonsContainer.find('button'),
        backup = {};
    var halt = window['rh_utils'].halt.getInstance();
    var keyCodes = {
        up  : 38,
        down: 40,
        esc : 27
    };

    function dummy(e) {
        console.log('dummy', e);
        e.stopImmediatePropagation();

        return false;
    }

    function handler(e) {
        const self = $(this);

        console.log('handler-1', e.type, {event: e, 'this': self});
    }

    function handler2(e) {
        const self = $(this);

        console.log('handler-2', e.type, {event: e, 'this': self});
    }

    function handler3(e) {
        const self = $(this);

        console.log('handler-3', e.type, {event: e, 'this': self});
    }

    function getEvents(target, type, deep) {
        function recursion() {}

        const all = jQuery._data(target.get(0), 'events');

        return (type && type.length && all[type] ? all[type] : all);
    }

    function lock(events) {
        function dummy() {/*dummy*/}

        events.forEach(function (event) {
            (!backup[event.guid]) && (backup[event.guid] = jQuery.extend(true, {}, event));
            event.handler = dummy;
        });
    }

    function unlock(events) {
        if (backup && !jQuery.isEmptyObject(backup)) {
            events.forEach(function (event) {
                event.handler = backup[event.guid].handler;
            });
            backup = {};
        }
    }

    function highlight(target) {
        target.addClass('success').siblings().removeClass('success');
    }

    function deHighlight(target) {
        target.removeClass('success').siblings().removeClass('success');
    }

    content.on('click', 'tbody tr', handler);
    content.on('dblclick', 'tbody tr', handler2);
    content.on('contextmenu', 'tbody tr', handler3);
    $(document).on('keydown', function (e) {
        var current = tr.filter('.success');

        // e.preventDefault();

        if (e.keyCode === keyCodes.esc) {
            deHighlight(tr);
        } else {
            if (e.keyCode === keyCodes.up) {
                if (current && !current.length) {
                    current = tr.first();
                } else {
                    current = current.prev();
                }
            } else if (e.keyCode === keyCodes.down) {
                if (current && !current.length) {
                    current = tr.last();
                } else {
                    current = current.next();
                }
            }

            highlight(current);
        }
    });
    tr.on('click', function (e) {
        highlight($(this));
    });
    buttons.eq(0).click(function doLock() {
        buttonsContainer.add(buttonsContainer.parent()).addClass('locked');
        $(this).attr('disabled', 'disabled').siblings().removeAttr('disabled');
        tr.each(function () {
            var me = $(this);

            if (Math.round(Math.random())) {
                me.removeClass().addClass('warning');
            }
        });
        // document.body.addEventListener('click', function (e) {
        //     if (e.detail && (e.detail === 1)) {
        //         for (let i = 0, size = e.path.length, el; i < size; i += 1) {
        //             el = $(e.path[i]);
        //
        //             if (el.is('tr.warning')) {
        //                 event.detail.el = el;
        //                 document.body.dispatchEvent(event);
        //
        //                 break;
        //             }
        //         }
        //     }
        // }, {capture: true});
        halt
            .type('all')
            .except({keys: ['Escape'], object: buttons})
            .except({
                event: {
                    trigger : 'click',
                    selector: 'tr.warning',
                    handler : function (event) {
                        console.log('%cEXCEPT EVENT', 'color: pink');
                        highlight($(event.target));
                    }
                }
            })
            .lock();
    });

    // const event = new CustomEvent('except', {detail: {/*empty*/}});

    // document.body.addEventListener('except', function (e) {
    //     console.log('%cEXCEPT EVENT', 'color: pink', e);
    //     highlight(e.detail.el);
    // }, true);

    content.find('tbody > tr.warning').on('click', function (e) {
        console.log('content tbody > tr.warning', this, e);
    });

    buttons.eq(1).click(function doUnlock() {
        buttonsContainer.add(buttonsContainer.parent()).removeClass('locked');
        $(this).attr('disabled', 'disabled').siblings().removeAttr('disabled');
        halt.unlock();
        tr.removeClass();
    });
})();