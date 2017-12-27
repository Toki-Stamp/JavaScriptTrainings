/**
 * Created by Fomichev Yuri on 24.12.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Self-invoking function */
(function main() {
})();
/* jQuery */
jQuery(document).ready(function main() {

    var table         = $('table'),
        rows          = table.find('tr'),
        blink,
        selectedClass = 'selected';

    /* Обработчик строк таблицы */
    $(document).on('mousedown', 'table tbody > tr', function (e) {
        var me       = $(this),
            selected = rows.filter('.' + selectedClass),
            current  = (selected.length ? selected.index() : 0),
            target   = (me.index() + 1),
            first    = current,
            last     = target,
            level    = me.data('level');

        if (!level) {
            console.log('click on top level');
            return false;
        }
        if (!e.ctrlKey && !e.shiftKey) {
            selected.removeClass(selectedClass + ' border');
        }
        if (e.shiftKey) {
            e.preventDefault();
            if (me.is(selected)) {
                selected.removeClass(selectedClass);
            } else {
                if (current >= target) {
                    first = target - 1;
                    last  = current + 1;
                }
                $('table > tbody tr').slice(first, last).addClass(selectedClass);
            }
        } else {
            if (me.hasClass(selectedClass)) {
                me.removeClass(selectedClass + ' border');
            } else {
                me.addClass(selectedClass);
            }
        }
    });

    $('#move-btn').on('click', function () {
        var selected             = rows.filter('.' + selectedClass),
            selection,
            getId                = function (element) {
                var result;
                if (element instanceof jQuery) {
                    result = parseInt(element.attr('id'), 10);
                }
                return result;
            },
            getChildren          = function (element) {
                var result;
                if (element instanceof jQuery) {
                    result = rows.filter(
                        '[data-parent="' + getId(element) + '"]'
                    );
                }
                return result;
            },
            expandSelection      = function (elements) {
                var expanded = elements,
                    expand   = function (elements) {
                        var expanded = $();
                        elements.each(function () {
                            var me       = $(this),
                                level    = me.data('level'),
                                children = getChildren(me);

                            expanded = expanded.add(me);
                            if (level !== 4) {
                                /* Рекурсия */
                                expand(children);
                            }
                        });
                        expanded.addClass(selectedClass)
                    };
                if (elements.length) {
                    elements.each(function () {
                        var children = getChildren($(this));
                        if (children.length) {
                            expand(children);
                        }
                    });
                    expanded = rows.filter('.' + selectedClass);
                }
                return expanded;
            },
            getExpandedSelection = function (elements, sort) {
                var array = [];
                elements.each(function () {
                    var element      = {},
                        me           = $(this),
                        id           = getId(me),
                        children     = getChildren(me);
                    element.me       = me;
                    element.id       = id;
                    element.parent   = me.data('parent');
                    element.level    = me.data('level');
                    element.children = (children.length) ? children : null;
                    array.push(element);
                });
                if (sort) {
                    return array.sort(function (a, b) {
                        return a.level - b.level;
                    });
                }
                return array;
            };

        selection = getExpandedSelection(expandSelection(selected));
        selection.forEach(function (object) {
            object['me'].addClass('border').removeClass(selectedClass);
        });
        console.log(selection);
    });

    $('#cancel-btn').on('mousedown', function () {
        rows.removeClass(selectedClass + ' border insert-here unable-to-insert');
        table.attr('move-mode', false);
        if (blink) {
            clearInterval(blink);
            blink = undefined;
        }
    });
});