/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var matrix      = {
        'level-0': {
            'parent':      false,
            'children':    ['level-1', 'level-2', 'level-3', 'level-4'],
            'insert-rule': false
        },
        'level-1': {
            'parent':      ['level-0'],
            'children':    ['level-2', 'level-3', 'level-4'],
            'insert-rule': ['level-0']
        },
        'level-2': {
            'parent':      ['level-1'],
            'children':    ['level-3', 'level-4'],
            'insert-rule': ['level-0', 'level-1']
        },
        'level-3': {
            'parent':      ['level-2'],
            'children':    ['level-4'],
            'insert-rule': ['level-0', 'level-2']
        },
        'level-4': {
            'parent':      ['level-3'],
            'children':    false,
            'insert-rule': ['level-0', 'level-2', 'level-3']
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
                /* Получаем ближайший элемент равного уровня */
                var nextEqual = me.nextUntil('tr.' + thisClass);
                /* Получаем индекс ближайшего элемента равного уровня */
                var nextEqualIndex = nextEqual.index();
                /* Получаем класс предка элемента выделенного элемента */
                var parentClass = matrix[thisClass].parent;
                /* Получаем ближайшего предка элемента ыф*/
                var nextParent = me.nextUntil('tr.' + parentClass);
                /* Получаем индекс предка элемента выделенного элемента */
                var nextParentIndex = nextParent.index();
            }
        });
        /* Expand (расширяем) выделение со всеми вложенными элементами */
    })
});