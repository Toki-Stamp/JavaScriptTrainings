/**
 * Created by Fomichev Yuri on 24.12.2017
 * Contact me at : toki.stamp@gmail.com
 */

jQuery(document).ready(function main() {

    var table         = $('table'),
        tbody         = $('#tbodyForMainTable'),
        rows          = tbody.find('tr'),
        selected,
        groups,
        sourceIds     = [],
        destinationId,
        mode, title,
        moveBtn       = $('#move-btn'),
        copyBtn       = $('#copy-btn'),
        okBtn         = $('#move-copy-dialog-ok-btn'),
        cancelBtn     = $('#cancel-btn'),
        dialog        = $('#move-copy-dialog'),
        checkDialog   = $('#check-dialog'),
        blink,
        makeMagic     = function (selected, doCheck) {
            var expanded,
                levels      = [],
                matrix      = {1: null, 2: [1], 3: [2], 4: [2, 3]},
                insert,
                valid       = rows.first(),
                invalid,
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
                getGroups   = function (elements, doCheck) {
                    var groups    = [],
                        result,
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

                        if (doCheck) {
                            alert('do check');
                        }
                        elements.each(function () {
                            groups.push(expand($(this)));
                        });
                    }

                    expanded = rows.filter('.' + selectedClass);
                    blink    = setInterval(function () {
                        expanded.toggleClass(borderClass);
                    }, 750);
                    result   = consume(groups);
                    levels   = getLevels(result).sort(function (a, b) {
                        return b - a;
                    });

                    return result;
                };

            groups = getGroups(selected, doCheck);
            insert = matrix[levels[0]];

            if (levels.length > 1) {
                insert = null;
                if (JSON.stringify(levels) === '[4,3]') {
                    insert = matrix[3];
                }
            }
            if ($.isArray(groups) && groups.length) {
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
        },
        selectedClass = 'selected',
        borderClass   = 'border',
        validClass    = 'valid-place',
        invalidClass  = 'invalid-place';

    table.tooltip({
        disabled: true,
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

    checkDialog.modal({
        backdrop: 'static',
        keyboard: false,
        show    : true
    });

    $(document).on('mousedown', 'table tbody > tr', function (e) {
        var me          = $(this),
            selected    = rows.filter('.' + selectedClass),
            current     = (selected.length ? selected.index() : 0),
            target      = (me.index() + 1),
            first       = current,
            last        = target,
            level       = me.data('level'),
            mode        = table.attr('move-copy-mode'),
            getInfo     = function (element, flag) {
                var str   = '',
                    level = element.data('level'),
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

                return str;
            },
            description = function (groups) {
                var result = '';

                if ($.isArray(groups)) {
                    groups.forEach(function (group) {
                        var element = group.first();
                        if (element instanceof jQuery) {
                            sourceIds.push(element.attr('id'));
                            result += getInfo(element);
                        }
                    });
                }
                return result;
            },
            elementsList,
            targetPlace;

        if (mode) {
            if (!me.hasClass(validClass)) {
                return false;
            }
            table.tooltip('disable');
            elementsList  = description(groups);
            destinationId = me.attr('id');
            targetPlace   = level ? getInfo(me, true) :
                '<p>(Ур:0) <span class="branch">Корень таблицы</span></p>';
            title         = (mode === 'move') ? 'Перемещение элементов экспликации' :
                'Копирование элементов экспликации';

            dialog.find('#elements-list').html(elementsList);
            dialog.find('#target-place').html(targetPlace);
            dialog.find('.modal-title').text(title);
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
    }).on('mouseup', 'table tbody > tr', function () {
        mode = table.attr('move-copy-mode');
        if ((rows.filter('.' + selectedClass)).length) {
            moveBtn.prop('disabled', false);
            copyBtn.prop('disabled', false);
        }
    });

    moveBtn.on('click', function () {

        table.attr('move-copy-mode', 'move');
        table.tooltip(
            'option',
            'content',
            'Режим перемещения. Пожалуйста, укажите место вставки перемещаемых элементов экспликации'
        );
        moveBtn.prop('disabled', true);
        copyBtn.prop('disabled', true);
        table.tooltip('enable');

        selected = rows.filter('.' + selectedClass);
        makeMagic(selected);
    });

    copyBtn.on('click', function () {

        table.attr('move-copy-mode', 'copy');
        table.tooltip(
            'option',
            'content',
            'Режим копирования. Пожалуйста, укажите место вставки копируемых элементов экспликации'
        );
        moveBtn.prop('disabled', true);
        copyBtn.prop('disabled', true);
        table.tooltip('enable');

        selected = rows.filter('.' + selectedClass);
        makeMagic(selected, true);
    });

    okBtn.on('click', function () {

        dialog.modal('hide');
        mode = table.attr('move-copy-mode');
        console.log('Операция:', mode);
        console.log('Элементы экспликации:', sourceIds);
        console.log('Назначение:', destinationId);
        cancelBtn.trigger('click');
    });

    cancelBtn.on('click', function () {
        rows.removeClass(
            selectedClass + ' ' +
            borderClass + ' ' +
            validClass + ' ' +
            invalidClass
        );
        sourceIds = [];
        table.tooltip('disable');
        table.removeAttr('move-copy-mode');
        moveBtn.prop('disabled', true);
        copyBtn.prop('disabled', true);
        clearInterval(blink);
    });
});