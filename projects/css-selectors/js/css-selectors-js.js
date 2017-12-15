/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var matrix      = {
        'level-0': {
            'level'      : 0,
            'ancestors'  : false,
            'parent'     : false,
            'children'   : [1, 2, 3, 4],
            'insert-rule': false
        },
        'level-1': {
            'level'      : 1,
            'ancestors'  : 0,
            'parent'     : 0,
            'children'   : [2, 3, 4],
            'insert-rule': 0
        },
        'level-2': {
            'level'      : 2,
            'ancestors'  : [0, 1],
            'parent'     : 1,
            'children'   : [3, 4],
            'insert-rule': [0, 1]
        },
        'level-3': {
            'level'      : 3,
            'ancestors'  : [0, 1, 2],
            'parent'     : 2,
            'children'   : 4,
            'insert-rule': [0, 2]
        },
        'level-4': {
            'level'      : 4,
            'ancestors'  : [0, 1, 2, 3],
            'parent'     : 3,
            'children'   : false,
            'insert-rule': [0, 2, 3]
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

    /* Выделение строк талицы */
    $(document).on('mousedown', 'table tbody > tr', function (e) {
        var me       = $(this),
            selected = $('table tbody > tr.selected'),
            current  = (selected.length ? (selected.index()) : 0),
            target   = (me.index() + 1),
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
        var selected = $('table tbody > tr.selected'),
            indexes  = {};

        // console.log('selected', selected);
        selected.each(function () {
            /* Получаем индекс текущего элемента */
            var me    = $(this);
            var index = me.index();
            /* Заполняем объект индексов tr.selected */
            if (!(index in indexes)) {
                indexes[index] = 'selected';
                /* Получаем класс выделенного элемента */
                var thisClass = siftClasses(getClasses(this));
                console.log('class', ':', thisClass, 'typeof', typeof thisClass);
                /* Получаем уровень выделенного элемента по его классу */
                var thisLevel = matrix[thisClass].level;
                console.log('level', ':', thisLevel, 'typeof', typeof thisLevel);
                /* Получаем промежуток до ближайшего равного либо большего уровня */
                var span = me.nextUntil('tr.' + thisLevel);
            }
        });
        /* Expand (расширяем) выделение со всеми вложенными элементами */
    })
});