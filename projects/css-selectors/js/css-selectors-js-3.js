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
        var selected     = rows.filter('.' + selectedClass),
            groups,
            merged,
            model,
            analytics    = {},
            highlight    = function (elements) {
                if ($.isArray(elements)) {
                    elements.forEach(function (element) {
                        if (element instanceof jQuery) {
                            element.addClass(selectedClass);
                        }
                    });
                }

            },
            getId        = function (element) {
                var result;

                if (element instanceof jQuery) {
                    result = parseInt(element.attr('id'), 10);
                }

                return result;
            },
            getChildren  = function (element) {
                var result;

                if (element instanceof jQuery) {
                    result = rows.filter(
                        '[data-parent="' + getId(element) + '"]'
                    );
                    result = (result.length) ? result : null;
                }

                return result;
            },
            getParent    = function (parentId) {
                var result;

                if (typeof parentId === 'number') {
                    result = rows.filter('[id="' + parentId + '"]');
                }

                return result;
            },
            getGroups    = function (elements) {
                var groups = [],
                    expand = function (elements) {
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
                    };

                if ((elements instanceof jQuery) && (elements.length)) {
                    elements.each(function () {
                        groups.push(expand($(this)));
                    });
                }

                return groups;
            },
            mergeGroups  = function (array) {
                if ($.isArray(array)) {
                    console.log('begin');
                    array.forEach(function (item, index, array) {
                        if (item instanceof jQuery) {
                            console.log('\tround:', index);
                            for (var i = 0, length = array.length; i < length; i++) {
                                var element = array[i];
                                var left    = item.length,
                                    right   = element.length;
                                if (left > right) {
                                    left  = item;
                                    right = element;
                                } else if (left < right) {
                                    left  = element;
                                    right = item;
                                } else {
                                    console.log('\t\tspecial case! equivalent lengths');
                                    continue;
                                }
                                console.log('\t\tstep', i);
                                console.log('\t\tcompare');
                                console.log('\t\t', left);
                                console.log('\t\tand');
                                console.log('\t\t', right);
                                if (left.is(right)) {
                                    console.log('\t\t!!!contains!!! break!');
                                    break;
                                }
                                console.log('\t\tnext step')
                            }
                            console.log('\tnext round');
                        }
                    });
                    console.log('end');
                }
            },

            getModel     = function (elements, sort) {
                var array  = [];
                var levels = {};

                elements.each(function () {
                    var element  = {},
                        me       = $(this),
                        id       = getId(me),
                        children = getChildren(me),
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

                analytics.levels = Object.keys(levels);

                if (sort) {
                    /* Сортировка по уровню */
                    return array.sort(function (a, b) {
                        return a.level - b.level;
                    });
                }
                return array;
            },
            analyzeModel = function (model) {
                var checkKinship = function () {
                    },
                    getValid     = function (element) {
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
                    getInvalid   = function (element) {
                    };

                if ($.isArray(model)) {
                    var valid   = $(),
                        invalid = $();

                    model.forEach(function (item) {
                        getValid(item);
                    });

                    valid.addClass();
                    invalid.addClass();
                }
            };

        analytics.selected = selected;

        groups = getGroups(selected);
        merged = mergeGroups(groups);
        // highlight(groups);

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