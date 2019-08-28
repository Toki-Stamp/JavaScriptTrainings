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

    content.on('click', 'tbody tr', handler);
    content.on('dblclick', 'tbody tr', handler2);
    content.on('contextmenu', 'tbody tr', handler3);
    tr.on('click', function (e) {
        $(this).addClass('success').siblings().removeClass('success');
    });
    buttons.eq(0).click(function () {
        buttonsContainer.add(buttonsContainer.parent()).addClass('locked');
        $(this).attr('disabled', 'disabled').siblings().removeAttr('disabled');
        halt.lock({
            target: null,
            types : ['click', 'dblclick', 'contextmenu'],
            except: buttons
        });
    });
    buttons.eq(1).click(function () {
        buttonsContainer.add(buttonsContainer.parent()).removeClass('locked');
        $(this).attr('disabled', 'disabled').siblings().removeAttr('disabled');
        halt.unlock();
    });
})();