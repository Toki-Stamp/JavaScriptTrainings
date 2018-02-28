/**
 * Created by Fomichev Yuri on 24.12.2017
 * Contact me at : toki.stamp@gmail.com
 */

jQuery(document).ready(function main() {

    var
        /* ------------------------------------------------------ */
        table                = $('table'),
        tbody                = $('#tbodyForMainTable'),
        rows                 = tbody.find('tr'),
        top                  = rows.first(),
        /* ------------------------------------------------------ */
        initMode             = function (mode) {
            var msg = '';

            if (mode && mode.length) {
                table.attr('move-copy-mode', mode);
                msg += 'Пожалуйста, укажите место вставки ';
                msg += ((mode === 'move') ? 'ПЕРЕМЕЩАЕМЫХ' : 'КОПИРУЕМЫХ') + ' ';
                msg += 'элементов экспликации';
                table.tooltip('option', 'content', msg);
            }

            btnMove.add(btnCopy).prop('disabled', true);
            table.tooltip('enable');
        },
        destroy              = function () {
            rows.removeClass(
                selectedClass + ' ' +
                borderClass + ' ' +
                validClass + ' ' +
                invalidClass
            );

            table.tooltip('disable');
            table.removeAttr('move-copy-mode');
            btnMove.add(btnCopy).prop('disabled', true);
            clearInterval(blink);
        },
        /* ------------------------------------------------------ */
        getId                = function (element) {
            var result;

            if (element && (element instanceof jQuery)) {
                result = parseInt(element.attr('id'), 10);
            }

            return result;
        },
        getChildren          = function (element) {
            return rows.filter('[data-parent="' + getId(element) + '"]');
        },
        getGroup             = function (element) {
            var group    = $().add(element),
                children = hasChildren(element) ? getChildren(element) : null;

            if (children) {
                children.each(function () {
                    group = group.add(getGroup($(this)));
                });
            }

            return group;
        },
        getGroups            = function (elements) {
            var groups = [];

            elements.each(function () {
                groups.push(getGroup($(this)));
            });

            return groups;
        },
        getUnique            = function (groups) {
            var result = groups.slice(0),
                i      = 0,
                j,
                left,
                right;

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
        getModel             = function (groups) {
            var model = [];

            if (groups && $.isArray(groups)) {
                groups.forEach(function (group) {
                    var object = {};

                    object['1-group'] = group;
                    object['2-size']  = group.length;
                    object['3-gaps']  = (group.not('.' + selectedClass)).length;

                    model.push(object);
                });
            }

            return model;
        },
        getLevels            = function (model) {
            var levels = [];

            if (model && $.isArray(model)) {
                model.forEach(function (item) {
                    if (!$.isEmptyObject(item)) {
                        var group = item['1-group'];

                        if ((group instanceof jQuery) && (group.length)) {
                            group.each(function () {
                                var me = $(this),
                                    level;

                                if (me.hasClass(selectedClass)) {
                                    level = me.data('level');

                                    if (levels.indexOf(level) === -1) {
                                        levels.push(level)
                                    }
                                }
                            });
                        }
                    }
                });
            }

            return levels.sort();
        },
        getSelectedElements  = function () {
            return rows.filter('.' + selectedClass);
        },
        getConfirmation      = function (/* Function */yes, /* Function */no) {
            var confirmation = $('#check-dialog').modal({
                    backdrop: 'static',
                    keyboard: false,
                    show    : true
                }),
                method       = function (callback) {
                    confirmation.modal('hide');

                    if (callback && (typeof callback === 'function')) {
                        /* Запускаем callback */
                        callback();
                    } else {
                        destroy();
                    }
                };

            $('#check-yes, #check-no, #check-cancel').off();

            $('#check-yes').one('click', function () {
                method(yes);
            });

            $('#check-no').one('click', function () {
                method(no);
            });

            $('#check-cancel').one('click', function () {
                method(null);
            });

        },
        getExpandedModel     = function (model) {
            if (model) {
                setExpandedSelection(model);

                return getModel(getUnique(getGroups(getSelectedElements())));
            }
        },
        /* ------------------------------------------------------ */
        hasChildren          = function (element) {
            var result = false;

            if (getChildren(element).length) {
                result = true;
            }

            return result;
        },
        hasGaps              = function (model) {
            if (model && $.isArray(model)) {
                for (var i = 0, size = model.length; i < size; i++) {
                    if (model[i]['3-gaps']) {
                        return true;
                    }
                }
            }

            return false;
        },
        /* ------------------------------------------------------ */
        setExpandedSelection = function (model) {
            if ($.isArray(model) && model.length) {
                model.forEach(function (item) {
                    var object = item && item['1-group'];

                    object.addClass(selectedClass);
                });
            }
        },
        setBorder            = function (model) {
            var border = $();

            if (model && $.isArray(model)) {
                model.forEach(function (group) {
                    var elements;

                    if (!$.isEmptyObject(group)) {
                        elements = group['1-group'];

                        if (elements instanceof jQuery) {
                            border = border.add(elements.filter('.' + selectedClass));
                        }
                    }
                });

                border.addClass(borderClass);
                blink = setInterval(function () {
                    border.toggleClass(borderClass);
                }, 750);
            }
        },
        setAvailability      = function (model) {
            var matrix,
                selectedLevels,
                hasGaps,
                validInsert,
                available,
                size,
                group;

            if (model) {
                size      = model.length;
                matrix    = {1: null, 2: [1], 3: [2], 4: [2, 3]};
                available = top;

                /* сколько групп? */
                if (size === 1) {
                    /* группа всего 1 */
                    group = model[0];
                    /* есть ли дыры? */
                    hasGaps = group['3-gaps'];
                    if (hasGaps) {
                        /* дыры есть, их количество НЕ равно 0 */
                        /* какие уровни элементов? */
                        selectedLevels = getLevels(model);
                        /* уровни элементов одинаковые? */
                        if (selectedLevels.length === 1) {
                            /* да, одинаковые*/
                            validInsert = matrix[selectedLevels[0]];
                        } else {
                            /* нет, уровни разные */
                            if (JSON.stringify(selectedLevels) == '[3,4]') {
                                validInsert = matrix[3];
                            } else {
                                validInsert = matrix[1];
                            }
                        }
                    } else {
                        /* дыр нет, их количество равно 0 */
                        /* рассматриваем как 1 элемент, старший (по уровню) элемент группы */
                        validInsert = matrix[group['1-group'].first().data('level')];
                    }
                } else {
                    /* групп несколько */
                    /* какие уровни элементов? */
                    selectedLevels = getLevels(model);
                    /* уровни элементов одинаковые? */
                    if (selectedLevels.length === 1) {
                        /* да, одинаковые*/
                        validInsert = matrix[selectedLevels[0]];
                    } else {
                        /* нет, уровни разные */
                        if (JSON.stringify(selectedLevels) == '[3,4]') {
                            validInsert = matrix[3];
                        } else {
                            validInsert = matrix[1];
                        }
                    }
                }

                if (validInsert) {
                    if ($.isArray(validInsert)) {
                        validInsert.forEach(function (level) {
                            available = available.add(rows.filter('[data-level="' + level + '"]'));
                        });
                    }
                }

                available.addClass(validClass);
                rows.not(available).not(getSelectedElements()).addClass(invalidClass);
            }
        },
        setParameters        = function () {
            var move = (table.attr('move-copy-mode'));

            if (move && move.length) {
                switch (move) {
                    case 'move':
                        console.log('move mode!');
                        break;
                    case 'copy':
                        console.log('copy mode!');
                        break;
                }
            }
        },
        /* ------------------------------------------------------ */
        btnMove              = $('#move-btn'),
        btnCopy              = $('#copy-btn'),
        btnCancel            = $('#cancel-btn'),
        btnDialogOk          = $('#move-copy-dialog-ok-btn'),
        btnDialogCancel      = $('#move-copy-dialog-cancel-btn'),
        dialog               = $('#move-copy-dialog'),
        /* ------------------------------------------------------ */
        blink,
        /* ------------------------------------------------------ */
        selectedClass        = 'selected',
        borderClass          = 'border',
        validClass           = 'valid-place',
        invalidClass         = 'invalid-place';

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

    $(document).on('mousedown', '#tbodyForMainTable > tr', function (e) {
        var me            = $(this),
            selected      = rows.filter('.' + selectedClass),
            current       = (selected.length ? selected.index() : 0),
            target        = (me.index() + 1),
            first         = current,
            last          = target,
            disableToggle = true;

        if (me.is(top)) {
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

                rows.slice(first, last).addClass(selectedClass);
            }
        } else {
            if (me.hasClass(selectedClass)) {
                me.removeClass(selectedClass);
            } else {
                me.addClass(selectedClass);
            }
        }

        selected = rows.filter('.' + selectedClass);

        if (selected && selected.length) {
            disableToggle = false;
        }

        btnCopy.add(btnMove).prop('disabled', disableToggle);
    });

    /* перемещение элементов */
    btnMove.on('click', function () {
        var model = getExpandedModel(getModel(getUnique(getGroups(getSelectedElements()))));

        initMode('move');

        setBorder(model);
        setAvailability(model);
        setParameters();
    });
    /* копирование элементов */
    btnCopy.on('click', function () {
        var model = getModel(getUnique(getGroups(getSelectedElements())));

        initMode('copy');

        if (hasGaps(model)) {
            getConfirmation(
                /* Yes */function () {
                    /* переопределяем модель после расширения */
                    model = getExpandedModel(model);
                    setBorder(model);
                    setAvailability(model);
                    setParameters();
                },
                /* No  */function () {
                    setBorder(model);
                    setAvailability(model);
                    setParameters();
                }
            );
        } else {
            setBorder(model);
            setAvailability(model);
            setParameters();
        }
    });

    btnCancel.on('click', function () {
        destroy();
    });

    btnDialogOk.on('click', function () {

        dialog.modal('hide');
        mode = table.attr('move-copy-mode');
        console.log('Операция:', mode);
        console.log('Элементы экспликации:', sourceIds);
        console.log('Назначение:', destinationId);
    });
});