/**
 * Created by Fomichev Yuri on 24.12.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* jQuery */
jQuery(document).ready(function main() {

    var table         = $('table'),
        tbody         = $('#tbodyForMainTable'),
        rows          = tbody.find('tr'),
        groups,
        destination,
        moveBtn       = $('#move-btn'),
        okBtn         = $('#ok-btn'),
        cancelBtn     = $('#cancel-btn'),
        dialog        = $('#move-copy-dialog'),
        blink,
        message,
        selectedClass = 'selected',
        borderClass   = 'border',
        validClass    = 'valid-place',
        invalidClass  = 'invalid-place';

    table.tooltip({
        disabled: true,
        content : 'Укажите место для вставки',
        // items   : 'table tbody',
        items   : 'body',
        track   : true
    });

    dialog.modal({
        backdrop: 'static',
        keyboard: false,
        show    : false
    }).on('hidden.bs.modal', function () {
        table.tooltip('enable');
    });

    /* Обработчик строк таблицы */
    $(document).on('mousedown', 'table tbody > tr', function (e) {
        var me          = $(this),
            selected    = rows.filter('.' + selectedClass),
            current     = (selected.length ? selected.index() : 0),
            target      = (me.index() + 1),
            first       = current,
            last        = target,
            level       = me.data('level'),
            getInfo     = function (element, flag) {
                var str = '';
                if (element instanceof jQuery) {
                    var level = element.data('level'),
                        tree  = element.data('tree').substring(1).split('/'),
                        i, item;

                    str += '<p>';
                    str += '(Ур:' + level + ') ';
                    str += '<span class="root">';
                    for (i = 0; i < (level - 1); i++) {
                        item = rows.filter('[id="' + tree[i] + '"]');
                        str += item.data('name') + ' ' + item.data('number');
                        str += ' / ';
                    }
                    item = rows.filter('[id="' + tree[level - 1] + '"]');
                    str += '</span> ';
                    str += '<span class="branch">';
                    str += item.data('name') + ' ' + item.data('number');
                    if (!flag && (level < 4)) {
                        str += ' и вложенные элементы';
                    }
                    str += '</span>';
                    str += '</p>';
                }
                return str;
            },
            description = function (groups) {
                var result = '';

                if ($.isArray(groups)) {
                    groups.forEach(function (group) {
                        result += getInfo(group.first());
                    });
                }
                return result;
            };

        if (table.attr('copy-move-mode') === 'move') {
            table.tooltip('disable');

            if (!me.hasClass(validClass)) {
                return false;
            }

            destination = me;

            var elementsList = description(groups),
                targetPlace  = level ? getInfo(me, true) :
                    '<p>(Ур:0) <span class="branch">Корень таблицы</span></p>';

            console.log(elementsList);
            console.log(targetPlace);

            dialog.find('#elements-list').html(elementsList);
            dialog.find('#target-place').html(targetPlace);
            dialog.find('.modal-title').text('Перемещение элементов экспликации');

            dialog.modal('show');
        } else {
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
        }
    });
    $(document).on('mouseup', 'table tbody > tr', function () {
        if (table.attr('copy-move-mode') !== 'true') {
            if ((rows.filter('.' + selectedClass)).length) {
                moveBtn.prop('disabled', false);
            }
        }
    });

    moveBtn.on('click', function () {
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

        table.attr('copy-move-mode', 'move');
        moveBtn.prop('disabled', true);
        table.tooltip('enable');

        groups = getGroups(selected);

        var matrix = {1: null, 2: [1], 3: [2], 4: [2, 3]},
            insert = matrix[levels[0]];

        message = 'выделены элементы одной группы либо различных групп одинакового уровня. Вставка согласно матрицы вставки';
        if (levels.length > 1) {
            insert  = null;
            message = 'выделены элементы разных групп и / или уровней. Вставка только в корень таблицы';
            if (JSON.stringify(levels) === '[4,3]') {
                insert  = matrix[3];
                message = 'выделены элементы разных групп с уровнями 3 и 4. Вставка во все уровни 2 и в корень таблицы';
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

    okBtn.on('click', function () {
        var mode = table.attr('copy-move-mode');
        console.log('Операция:', mode);
    });

    cancelBtn.on('mousedown', function () {
        rows.removeClass(
            selectedClass + ' ' +
            borderClass + ' ' +
            validClass + ' ' +
            invalidClass
        );
        table.tooltip('disable');
        table.attr('copy-move-mode', false);
        moveBtn.prop('disabled', true);
        clearInterval(blink);
    });

});