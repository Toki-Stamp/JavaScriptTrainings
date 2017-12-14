/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
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
    var siftClasses = function (classes) {
        var item,
            i,
            length = classes.length;
        if ($.isArray(classes)) {
            for (i = 0; i < length; i += 1) {
                item = classes[i];
                if (Object.keys(matrix).indexOf(item) >= 0) {
                    return item;
                }
            }
        }
    };
    var getValue    = function (element, key) {
        return matrix[siftClasses(getClasses(element))][key];
    };
    var printInfo   = function (element) {
        console.log(
            'type:', '"' + getValue(element, 'type') + '"',
            'level:', getValue(element, 'level'),
            'accept:', getValue(element, 'accept'),
            'insert:', getValue(element, 'insert')
        );
    };

    /* Выделение строк талицы */
    $(document).on('mousedown', 'table tbody > tr', function (e) {
        var me       = $(this),
            selected = $('table tbody > tr.selected'),
            current  = (selected.length ? (selected[0].rowIndex - 1) : 0),
            target   = me[0].rowIndex,
            first    = current,
            last     = target;
        if (!e.ctrlKey && !e.shiftKey) {
            selected.removeClass('selected');
        }
        if (e.shiftKey) {
            e.preventDefault();
            if (me.is(selected)) {
                selected.removeClass('selected');
            } else {
                if (current >= target) {
                    first = target - 1;
                    last  = current + 1;
                }
                $('table > tbody tr').slice(first, last).addClass('selected');
            }
        } else {
            if (me.hasClass('selected')) {
                me.removeClass('selected');
            } else {
                me.addClass('selected');
            }
        }
    });

    $(document).on('mousedown', function (e) {
        if (['tr', 'th', 'td'].indexOf(e.target.tagName.toLowerCase()) === -1) {
            $('table tbody > tr.selected').removeClass('selected');
        }
    });

    $(document).on('mousedown', 'table thead > tr', function () {
        console.log('click on thead!');
    })
});