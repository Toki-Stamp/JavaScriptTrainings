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
            'accept': [1, 2, 3, 4]
        },
        'rowPorch': {
            'type'  : 'Подъезд (секция)',
            'level' : 1,
            'accept': [2]
        },
        'rowFloor': {
            'type'  : 'Этаж',
            'level' : 2,
            'accept': [3, 4]
        },
        'rowIp'   : {
            'type'  : 'Группа помещений / ИП / Жилое помещение / Помещение',
            'level' : 3,
            'accept': [4]
        },
        'rowOth'  : {
            'type'  : 'Помещение',
            'level' : 4,
            'accept': false
        }
    };
    var getAccepted = function (element) {
        var classes = element.className.trim().split(/\s+/),
            accept = [];
        classes.forEach(function (value) {
            var keys = Object.keys(matrix);
            if (keys.indexOf(value) >= 0) {
                accept = matrix[value].accept;
                return false;
            }
        });
        return accept;
    };

    target.on('click', 'tr', function () {
        var me     = $(this),
            object = me[0];
        // classes = object.className.trim().split(/\s+/);
        // classes.forEach(function (value) {
        //     var keys = Object.keys(matrix),
        //         object;
        //     if (keys.indexOf(value) >= 0) {
        //         object = matrix[value];
        //         console.log('name:', object.type, '>>', 'level:', object.level, '>>', 'accept:', object.accept);
        //     }
        // });
        console.log('me:', object, 'accept:', getAccepted(object));
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
    })

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