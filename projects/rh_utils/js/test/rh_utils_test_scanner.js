/**
 * Created by Fomichev Yuri on 28.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function sif() {
    const
        content = $("#mainTableCont"),
        tr = content.find('tbody tr'),
        buttonsContainer = $('.buttons'),
        buttons = buttonsContainer.find('button');

    let
        debug = true,
        backup = {};

    function dummy(e) {
        console.log('dummy', e);
        e.stopImmediatePropagation();

        return false;
    }

    function handler(e) {
        const self = $(this);

        console.log('handler-1', e.type, {event: e, 'this': self});
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

    function lock_alt(target, type) {
        var thisTarget = (target.get(0) || document.querySelector('body'));

        thisTarget.addEventListener(type, dummy, true);
    }

    function unlock(events) {
        if (backup && !jQuery.isEmptyObject(backup)) {
            events.forEach(function (event) {
                event.handler = backup[event.guid].handler;
            });
            backup = {};
        }
    }

    function unlock_alt(target, type) {
        var thisTarget = (target.get(0) || document.querySelector('body'));

        thisTarget.removeEventListener(type, dummy, true);
    }

    content.on('click', 'tbody tr', handler);
    tr.on('click', function (e) {
        $(this).addClass('success').siblings().removeClass('success');
    });
    buttons.eq(0).click(function () {
        console.log('locked');
        buttonsContainer.add(buttonsContainer.parent()).addClass('locked');
        // lock(getEvents(content, 'click'));
        lock_alt(content, 'click');
        $(this).attr('disabled', 'disabled').siblings().removeAttr('disabled');
    });
    buttons.eq(1).click(function () {
        console.log('unlocked');
        buttonsContainer.add(buttonsContainer.parent()).removeClass('locked');
        // unlock(getEvents(content, 'click'));
        unlock_alt(content, 'click');
        $(this).attr('disabled', 'disabled').siblings().removeAttr('disabled');
    });
})();