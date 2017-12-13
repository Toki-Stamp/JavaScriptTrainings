/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var target      = $('#tbodyForMainTable'),
        status      = $('#status');
    var matrix      = {
        'root'    : {
            'type'  : 'Корень',
            'level' : 0,
            'accept': [1, 2, 3, 4],
            'insert': false
        },
        'rowPorch': {
            'type'  : 'Подъезд (секция)',
            'level' : 1,
            'accept': [2],
            'insert': [0]
        },
        'rowFloor': {
            'type'  : 'Этаж',
            'level' : 2,
            'accept': [3, 4],
            'insert': [0, 1]
        },
        'rowIp'   : {
            'type'  : 'Группа помещений / ИП / Жилое помещение / Помещение',
            'level' : 3,
            'accept': [4],
            'insert': [0, 2]
        },
        'rowOth'  : {
            'type'  : 'Помещение',
            'level' : 4,
            'accept': false,
            'insert': [0, 2, 3]
        }
    };
    var getClasses  = function (element) {
        return element.className.trim().split(/\s+/);
    };
    var getValue    = function (object, key) {
        var result;
        getClasses(object).forEach(function (value) {
            if (Object.keys(matrix).indexOf(value) >= 0) {
                result = matrix[value][key];
                return false;
            }
        });
        return result;
    };
    var printMatrix = function (object) {
        console.log(
            'type:', '"' + getValue(object, 'type') + '"',
            'level:', getValue(object, 'level'),
            'accept:', getValue(object, 'accept'),
            'insert:', getValue(object, 'insert')
        );
    };

    target.on('click', 'tr', function (e) {
        var me      = $(this),
            success = $('tr.success'),
            current = success.data('rowid'),
            target  = me.data('rowid'),
            first   = current,
            last    = target,
            delta;
        if (me.hasClass('total')) {
            return false;
        }
        printMatrix(this);
        console.log('current:', current, 'target:', target);
        if (!e.ctrlKey && !e.shiftKey) {
            success.removeClass('success blink');
        }
        if (e.shiftKey) {
            e.preventDefault();
            if (current > target) {
                first = target;
                last  = current;
            }
            delta = last - first;
            for (var i = 0; i <= delta; i++) {
                $('[data-rowid=' + (first + i) + ']').addClass('success blink')
            }
        } else {
            if (me.hasClass('success')) {
                me.removeClass('success blink');
            } else {
                me.addClass('success blink');
            }
        }
    });

    $('#enable').click(function () {
        target.sortable('enable').disableSelection();
        target.find('tr').css('cursor', 'pointer');
        status.text('Перетаскивание включено');
    });

    $('#disable').click(function () {
        target.sortable('disable').enableSelection();
        target.find('tr').css('cursor', 'default');
        status.text('Перетаскивание выключено');
    });

    $('#cancel').click(function () {
        target.sortable('cancel');
    });

    $(document).keydown(function (e) {
        if (e.shiftKey || e.ctrlKey) {
            $('body').css('cursor', 'copy');
        }
    }).keyup(function () {
        $('body').css('cursor', 'default');
    });

    // target.sortable({
    //     axis:                 'y',
    //     containment:          'parent',
    //     cursor:               'n-resize',
    //     disabled:             'true',
    //     forceHelperSize:      true,
    //     forcePlaceholderSize: true,
    //     // helper:               'clone',
    //     items:                '> tr',
    //     tolerance:            'pointer'
    // });
});