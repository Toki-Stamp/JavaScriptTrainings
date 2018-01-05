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
        move              = $('#move-btn'),
        dialog            = $('#move-copy-dialog'),
        blink, clearBlink = function () {
            clearInterval(blink);
        },
        message,
        selectedClass     = 'selected',
        borderClass       = 'border',
        validClass        = 'valid-place',
        invalidClass      = 'invalid-place';

    table.tooltip({
        disabled: true,
        content : 'Укажите место для вставки',
        // items   : 'table tbody',
        items   : 'body',
        track   : true
    });

    dialog.modal({
        backdrop: 'static',
        keyboard: true,
        show    : false
    });

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
            dialog.modal('show');
            dialog.find('div.modal-body').html('<p>' + message + '</p>');
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

    move.on('click', function () {
        var selected    = rows.filter('.' + selectedClass),
            expanded,
            levels      = [],
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
            };

        table.attr('move-mode', true);
        move.prop('disabled', true);
        table.tooltip('enable');

        var groups = getGroups(selected);

        var matrix = {1: null, 2: [1], 3: [2], 4: [2, 3]},
            insert = matrix[levels[0]];
        if (levels.length > 1) {
            insert = null;
            if (JSON.stringify(levels) === '[4,3]') {
                insert = matrix[3];
            }
        }
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
        table.tooltip('disable');
        table.attr('move-mode', false);
        move.prop('disabled', false);
        clearBlink();
    });
});