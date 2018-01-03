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
        tbody         = $('#tbodyForMainTable'),
        rows          = tbody.find('tr'),
        blink,
        setBlink      = function (elements) {
            if (elements.length) {
                elements.addClass(borderClass);
                blink = setInterval(function () {
                    elements.toggleClass(borderClass);
                }, 750);
            }
        },
        clearBlink    = function () {
            clearInterval(blink);
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

        clearBlink();

        if (!level) {
            console.log('click on top level');
            return false;
        }

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
            groups,
            model,
            highlight   = function (elements) {
                if ($.isArray(elements)) {
                    elements.forEach(function (element) {
                        if (element instanceof jQuery) {
                            element.addClass(selectedClass);
                        }
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
                var groups  = [],
                    expand  = function (elements) {
                        var group = $();

                        elements.each(function () {
                            var me       = $(this),
                                children = getChildren(me);

                            group = group.add(me);

                            if (children) {
                                group = group.add(expand(children))
                            }
                        });

                        return group;
                    },
                    consume = function (array) {
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
                    };

                if ((elements instanceof jQuery) && (elements.length)) {
                    elements.each(function () {
                        groups.push(expand($(this)));
                    });
                }

                return consume(groups);
            },
            getModel    = function (elements) {
                var items = [],
                    model = {};

                elements.forEach(function (element) {
                    var item      = {},
                        id        = getId(element),
                        children  = getChildren(element),
                        parent    = getParent(element.data('parent')),
                        level     = element.data('level'),
                        getLevels = function (level) {
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
                            return levels;
                        },
                        getValid  = function (levels) {
                            var valid = rows.first();
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

                    item['1-me']       = element;
                    item['2-parent']   = parent;
                    item['3-children'] = children;
                    item['4-id']       = id;
                    item['5-name']     = element.data('name');
                    item['6-number']   = element.data('number');
                    item['7-level']    = level;
                    item['8-tree']     = element.data('tree');
                    item['9-valid']    = getValid(getLevels(level)).not(parent);

                    items.push(item);
                });

                return items;
            };

        groups = getGroups(selected);
        console.log('selected', selected);
        console.log('groups', groups);
        highlight(groups);
        model = getModel(groups);
        console.log(model);
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