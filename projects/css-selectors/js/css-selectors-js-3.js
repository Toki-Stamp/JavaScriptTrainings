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

    var table             = $('table'),
        tbody             = $('#tbodyForMainTable'),
        rows              = tbody.find('tr'),
        blink, clearBlink = function () {
            clearInterval(blink);
        },
        selectedClass     = 'selected',
        borderClass       = 'border',
        validClass        = 'valid-place',
        invalidClass      = 'invalid-place';

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

        if (table.attr('move-mode') === 'true') {
            return false;
        }

        clearBlink();

        if (!e.ctrlKey && !e.shiftKey) {
            selected.removeClass(selectedClass + ' ' + borderClass);
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
        var selected    = rows.filter('.' + selectedClass),
            expanded,
            levels      = [],
            highlight   = function (model) {
                var getValid = function (level) {
                    var valid  = rows.first();
                    var matrix = {1: null, 2: 1, 3: 2, 4: [2, 3]},
                        levels = [],
                        expand;

                    if (level in matrix) {
                        expand = matrix[level];
                        if (expand) {
                            if ($.isArray(expand)) {
                                expand.forEach(function (item) {
                                    levels.push(item);
                                });
                            } else {
                                levels.push(expand);
                            }
                        }
                    }

                    levels.forEach(function (item) {
                        if (typeof item === 'number') {
                            var elements = rows.filter(
                                '[data-level="' + item + '"]'
                            );
                        }
                        valid = valid.add(elements);
                    });

                    return valid;
                };
                if ($.isArray(model)) {
                    model.forEach(function (item) {
                        var me       = item['0-me'],
                            setBlink = function (elements) {
                                if (elements.length) {
                                    elements.addClass(borderClass);
                                    blink = setInterval(function () {
                                        elements.toggleClass(borderClass);
                                    }, 750);
                                }
                            };
                        console.log(item);
                    });
                }
            },
            getId       = function (element) {
                var result;

                if (element instanceof jQuery) {
                    result = parseInt(element.attr('id'), 10);
                }

                return result;
            },
            getChildren = function (element) {
                var result;

                if (element instanceof jQuery) {
                    result = rows.filter(
                        '[data-parent="' + getId(element) + '"]'
                    );
                    result = (result.length) ? result : null;
                }

                return result;
            },
            getParent   = function (parentId) {
                var result;

                if (typeof parentId === 'number') {
                    result = rows.filter('[id="' + parentId + '"]');
                }

                return result;
            },
            getGroups   = function (elements) {
                var groups    = [],
                    output,
                    expand    = function (elements) {
                        var group = $();

                        elements.each(function () {
                            var me       = $(this),
                                children = getChildren(me);

                            group = group.add(me);

                            if (children) {
                                group = group.add(expand(children))
                            }
                        });

                        group.addClass(selectedClass).addClass(borderClass);

                        return group;
                    },
                    consume   = function (array) {
                        var result = array.slice(0),
                            i      = 0, j,
                            left, right;
                        if ($.isArray(result)) {
                            /* outer */
                            while (i < (result.length - 1)) {
                                left = result[i];
                                /* inner */
                                for (j = (i + 1); j < result.length; j++) {
                                    right = result[j];
                                    if (left.is(right)) {
                                        result.splice(j, 1);
                                        i = -1;
                                        break;
                                    }
                                }
                                i += 1;
                            }
                        }
                        return result;
                    },
                    getLevels = function (array) {
                        var levels = [];
                        array.forEach(function (item) {
                            var level = item.data('level');
                            if (levels.indexOf(level) === -1) {
                                levels.push(level)
                            }
                        });
                        return levels;
                    };

                if ((elements instanceof jQuery) && (elements.length)) {
                    elements.each(function () {
                        groups.push(expand($(this)));
                    });
                }

                expanded = rows.filter('.' + selectedClass);
                blink    = setInterval(function () {
                    expanded.toggleClass(borderClass);
                }, 750);
                output   = consume(groups);
                levels   = getLevels(output).sort(function (a, b) {
                    return b - a;
                });

                return output;
            },
            getModel    = function (elements) {
                var items = [];

                elements.forEach(function (element) {
                    var item     = {},
                        id       = getId(element),
                        children = getChildren(element),
                        parent   = getParent(element.data('parent')),
                        level    = element.data('level');

                    item['0-me']       = element;
                    item['1-parent']   = parent;
                    item['2-children'] = children;
                    item['3-id']       = id;
                    item['4-name']     = element.data('name');
                    item['5-number']   = element.data('number');
                    item['6-level']    = level;
                    item['7-tree']     = element.data('tree');

                    items.push(item);
                });

                return items;
            };

        table.attr('move-mode', true);
        var groups = getGroups(selected);
        console.log(groups);
        var message = 'Элементы одной группы или различных групп, но одного уровня - вставка согласно матрицы вставки';
        var matrix  = {1: null, 2: [1], 3: [2], 4: [2, 3]};
        var insert  = matrix[levels[0]];
        if (levels.length > 1) {
            if (JSON.stringify(levels) === '[4,3]') {
                message = 'Элементы разных групп уровней 3 и 4. Вставка во все 0 и 2';
                insert  = matrix[3];
            } else {
                message = 'Элементы разных групп и/или уровней. Вставка только в 0';
                insert  = null;
            }
        }
        console.log(message);
        console.log('levels', levels, 'insert', insert);
        if ($.isArray(groups) && groups.length) {
            var valid = rows.first(),
                invalid;

            groups.forEach(function () {
                if (insert) {
                    insert.forEach(function (level) {
                        valid = valid.add(rows.filter('[data-level="' + level + '"]'));
                    });
                }
            });

            invalid = rows.not(valid).not(expanded);

            valid.addClass(validClass);
            invalid.addClass(invalidClass);
        }
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