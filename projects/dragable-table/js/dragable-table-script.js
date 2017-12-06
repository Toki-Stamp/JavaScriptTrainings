/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    "use strict";
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
    var getAccepted = function (element) {
        return getValue(element, 'accept');
    };
    var getInserted = function (element) {
        return getValue(element, 'insert');
    };
    var getType     = function (element) {
        return getValue(element, 'type');
    };
    var getLevel    = function (element) {
        return getValue(element, 'level');
    };

    target.on('click', 'tr', function () {
        console.log('type:', '"' + getType(this), 'level:', getLevel(this), 'accept:', getAccepted(this), 'insert:', getInserted(this));
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