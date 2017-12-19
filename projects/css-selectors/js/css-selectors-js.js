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
    var blink;

    /* Выделение строк таблицы */
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
                me.removeClass('selected group');
            } else {
                me.addClass('selected');
            }
        }
    });

    $('#move-btn').on('mousedown', function () {
        var selected = $('table tbody > tr.selected'),
            expanded,
            excluded,
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
            parentIndex,
            expand;

        selected.each(function () {
            me    = $(this);
            index = me.index();
            if (!(index in indexes)) {
                indexes[index] = 'selected';
                thisClass      = siftClasses(getClasses(this));
                if (matrix[thisClass].children) {
                    equal      = me.next();
                    last       = equal;
                    equalIndex = equal.index();
                    lastIndex  = equalIndex;
                    if (!equal.hasClass(thisClass)) {
                        equalSpan = me.nextUntil('tr.' + thisClass);
                        equal     = equalSpan.last().next();
                        if (equal.length) {
                            last       = equal;
                            equalIndex = equal.index();
                            lastIndex  = equalIndex;
                            parents    = matrix[thisClass].parents;
                            if (parents && $.isArray(parents)) {
                                parents.forEach(function (parentClass) {
                                    if (parentClass !== 'level-0') {
                                        parent      = me.next();
                                        parentIndex = parent.index();
                                        if (!parent.hasClass(parentClass)) {
                                            parentSpan  = me.nextUntil('tr.' + parentClass);
                                            parent      = parentSpan.last().next();
                                            parentIndex = parent.index();
                                        }
                                        if ((-1 !== parentIndex) && (parentIndex < lastIndex)) {
                                            last      = (equalIndex > parentIndex) ? parent : equal;
                                            lastIndex = (equalIndex > parentIndex) ? parentIndex : equalIndex;
                                        }
                                    }
                                });
                            }
                        } else {
                            last      = rows.last();
                            lastIndex = last.index() + 1;
                        }
                    }
                    expand = rows.slice(index, lastIndex);
                    if (lastIndex === rows.length) {
                        expand = expand.add(rows.last());
                    }
                    expand.each(function () {
                        indexes[$(this).index()] = 'selected';
                    });
                }
            }
        });

        Object.keys(indexes).forEach(function (element) {
            var item = rows.eq(element);
            if (!item.hasClass('selected')) {
                item.addClass('selected');
            }
            item.addClass('group');
        });

        expanded = $('table tbody > tr.selected');

        blink = setInterval(function () {
            expanded.toggleClass('group');
        }, 750);

        var classes = {};
        /* Исключить из поиска самого себя и ближайшего родителя */
        /* Исключить из поиска самого себя и ближайшего родителя */
        /* Исключить из поиска самого себя и ближайшего родителя */
        /* Исключить из поиска самого себя и ближайшего родителя */
        selected.each(function () {
            var thisClass = siftClasses(getClasses(this));
            var insert    = matrix[thisClass]['insert-rule'];
            if (insert && $.isArray(insert)) {
                insert.forEach(function (level) {
                    classes[level] = true;
                });
            }
        });

        /* Переопределяем все доступные строки таблицы */
        rows = $('table > thead tr, table > tbody tr');
        /* Исключить из поиска самого себя и ближайшего родителя */
        /* Исключить из поиска самого себя и ближайшего родителя */
        /* Исключить из поиска самого себя и ближайшего родителя */
        /* Исключить из поиска самого себя и ближайшего родителя */
        rows = rows.not(expanded);

        Object.keys(classes).forEach(function (clazz) {
            var item = rows.filter('.' + clazz);
            if (!item.hasClass('insert-here')) {
                item.addClass('insert-here');
            }
        });
    });

    $('#cancel-btn').on('mousedown', function () {
        $('table tbody > tr, table thead > tr').removeClass('selected group insert-here not-insertable');
        if (blink) {
            clearInterval(blink);
            blink = undefined;
        }
    });
});