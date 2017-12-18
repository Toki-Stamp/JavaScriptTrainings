/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var matrix      = {
        'level-0': {
            'parents'    : false,
            'children'   : ['level-1', 'level-2', 'level-3', 'level-4'],
            'insert-rule': false
        },
        'level-1': {
            'parents'    : ['level-0'],
            'children'   : ['level-2', 'level-3', 'level-4'],
            'insert-rule': ['level-0']
        },
        'level-2': {
            'parents'    : ['level-1'],
            'children'   : ['level-3', 'level-4'],
            'insert-rule': ['level-0', 'level-1']
        },
        'level-3': {
            'parents'    : ['level-2', 'level-1'],
            'children'   : ['level-4'],
            'insert-rule': ['level-0', 'level-2']
        },
        'level-4': {
            'parents'    : ['level-3', 'level-2', 'level-1'],
            'children'   : false,
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
            selected.removeClass('selected group');
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
            rows     = $('table tbody > tr'),
            indexes  = {},
            me,
            index,
            lastIndex,
            last,
            thisClass,
            equalSpan,
            equal,
            equalIndex,
            parents,
            parent,
            parentSpan,
            parentIndex;
        selected.each(function () {
            /* Получаем индекс текущего элемента */
            me    = $(this);
            index = me.index();
            /* Заполняем объект индексов tr.selected */
            if (!(index in indexes)) {
                indexes[index] = 'selected';
                /* Получаем класс выделенного элемента */
                thisClass = siftClasses(getClasses(this));
                /* Есть ли дети? */
                if (matrix[thisClass].children) {
                    /* Получаем ближайший элемент равного уровня */
                    equal = me.next();
                    last  = equal;
                    /* Получаем индекс ближайшего элемента равного уровня */
                    equalIndex = equal.index();
                    /* Определение крайнего индекса */
                    lastIndex = equalIndex;
                    if (!equal.hasClass(thisClass)) {
                        equalSpan = me.nextUntil('tr.' + thisClass);
                        /* Получаем ближайший элемент равного уровня */
                        equal = equalSpan.last().next();
                        if (equal.length) {
                            last = equal;
                            /* Определение крайнего индекса */
                            equalIndex = equal.index();
                            /* Получаем индекс ближайшего элемента равного уровня */
                            lastIndex = equalIndex;
                            /* Получаем предков элемента выделенного элемента */
                            parents = matrix[thisClass].parents;
                            if (parents && $.isArray(parents)) {
                                /* Перебор всех предков */
                                parents.forEach(function (parentClass) {
                                    if (parentClass !== 'level-0') {
                                        /* Получаем ближайший элемент предка */
                                        parent = me.next();
                                        /* Получаем индекс предка элемента выделенного элемента */
                                        parentIndex = parent.index();
                                        if (!parent.hasClass(parentClass)) {
                                            parentSpan  = me.nextUntil('tr.' + parentClass);
                                            parent      = parentSpan.last().next();
                                            parentIndex = parent.index();
                                        }
                                        if ((-1 !== parentIndex) && (parentIndex < lastIndex)) {
                                            /* Определение крайнего индекса, что из них дальше? */
                                            last      = (equalIndex > parentIndex) ? parent : equal;
                                            lastIndex = (equalIndex > parentIndex) ? parentIndex : equalIndex;
                                        }
                                    }
                                });
                            }
                        } else {
                            /* Граничная ситуация !!! */
                            last      = rows.last();
                            lastIndex = last.index() + 1;
                        }
                    }
                    /* Expand (расширяем) выделение со всеми вложенными элементами */
                    console.log('Expand (расширяем) выделение со всеми вложенными элементами');
                    var expand = rows.slice(index, lastIndex);
                    if (lastIndex === rows.length) {
                        expand = expand.add(rows.last());
                    }
                    expand.each(function () {
                        indexes[$(this).index()] = 'selected';
                    });
                }
                console.log(
                    ' this-index', index, 'this', this, '\n',
                    'equal-index', equalIndex, 'equal', (equal ? equal.get(0) : undefined), '\n',
                    'parent-index', parentIndex, 'parent', (parent ? parent.get(0) : undefined), '\n',
                    'last-index', lastIndex, 'last', (last ? last.get(0) : undefined), '\n',
                    '--------------------------------------------------------------------');
            }
        });
        console.log('indexes', indexes);
        /* Общее выделение */
        Object.keys(indexes).forEach(function (index) {
            var item = rows.eq(index);
            if (!item.hasClass('selected')) {
                item.addClass('selected');
            }
            item.addClass('group');
        });
    })
});