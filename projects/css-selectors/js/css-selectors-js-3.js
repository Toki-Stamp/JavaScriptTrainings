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
        clearBlink    = function () {
            if (blink) {
                clearInterval(blink);
                blink = undefined;
            }
        },
        selectedClass = 'selected',
        borderClass   = 'border',
        validClass    = 'valid-place',
        invalidClass  = 'invalid-place';

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
            selected.removeClass(selectedClass + ' ' + borderClass);
            clearBlink();
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
                me.removeClass(selectedClass + ' ' + borderClass);
            } else {
                me.addClass(selectedClass);
            }
        }
    });

    $('#move-btn').on('click', function () {
        var selected        = rows.filter('.' + selectedClass),
            expanded,
            model,
            getId           = function (element) {
                var result;
                if (element instanceof jQuery) {
                    result = parseInt(element.attr('id'), 10);
                }
                return result;
            },
            getChildren     = function (element) {
                var result;
                if (element instanceof jQuery) {
                    result = rows.filter(
                        '[data-parent="' + getId(element) + '"]'
                    );
                }
                return result;
            },
            getParent       = function (parent) {
                var result;
                if (typeof parent === 'number') {
                    result = rows.filter('[id="' + parent + '"]');
                }
                return result;
            },
            expandSelection = function (elements) {
                var expanded    = elements,
                    expand      = function (elements) {
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
                    },
                    blinkBorder = function (elements) {
                        if (elements.length) {
                            elements.addClass(borderClass);
                            blink = setInterval(function () {
                                elements.toggleClass(borderClass);
                            }, 750);
                        }
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
                blinkBorder(expanded);
                return expanded;
            },
            getModel        = function (elements, sort) {
                var array  = [];
                var levels = {};
                elements.each(function () {
                    var element  = {},
                        me       = $(this),
                        id       = getId(me),
                        children = getChildren(me).length ? getChildren(me) : null,
                        parent   = getParent(me.data('parent')),
                        level    = me.data('level');

                    levels[level] = true;

                    element['1-me']       = me;
                    element['2-parent']   = parent;
                    element['3-children'] = children;
                    element['4-id']       = id;
                    element['5-name']     = me.data('name');
                    element['6-number']   = me.data('number');
                    element['7-level']    = level;
                    element['8-tree']     = me.data('tree');

                    array.push(element);
                });

                array.unshift(Object.keys(levels));
                if (sort) {
                    /* Сортировка по уровню */
                    return array.sort(function (a, b) {
                        return a.level - b.level;
                    });
                }
                return array;
            },
            analyzeModel    = function (model) {
                var getValid   = function (element) {
                        var matrix = {1: null, 2: 1, 3: 2, 4: [2, 3]},
                            item,
                            level;
                        if (!$.isEmptyObject(element)) {
                            item = element['1-me'];
                            if (item instanceof jQuery) {
                                level = element['7-level'];
                                console.log('level:', level, 'valid:', matrix[level]);
                            }
                        }
                    },
                    getInvalid = function (element) {
                    };
                if ($.isArray(model)) {
                    var valid   = $(),
                        invalid = $();
                    model.forEach(function (item, index) {
                        if (index) {
                            getValid(item);
                        }
                    });
                    valid.addClass();
                    invalid.addClass();
                }
            };

        expanded = expandSelection(selected);
        model    = getModel(expanded);
        console.log('model -------------');
        console.log(model);
        console.log('------------- model');
        console.log('analyze -----------');
        analyzeModel(model);
        console.log('----------- analyze');
    });

    $('#cancel-btn').on('mousedown', function () {
        rows.removeClass(
            selectedClass + ' ' +
            borderClass + ' ' +
            validClass + ' ' +
            invalidClass
        );
        table.attr('move-mode', false);
        clearBlink();
    });
});