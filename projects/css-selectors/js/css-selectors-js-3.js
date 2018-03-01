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
        btnMove              = $('#move-btn'),
        btnCopy              = $('#copy-btn'),
        btnCancel            = $('#cancel-btn'),
        btnDialogOk          = $('#move-copy-dialog-ok-btn'),
        btnDialogCancel      = $('#move-copy-dialog-cancel-btn'),
        dialog               = $('#move-copy-dialog'),
        blink,
        description          = {},
        selectedClass        = 'selected',
        borderClass          = 'border',
        validClass           = 'valid-place',
        invalidClass         = 'invalid-place',
        /* ------------------------------------------------------ */
        init                 = function (mode) {
            var msg = '';

            if (mode && mode.length) {
                /* основной вариант */
                description['mode'] = mode;
                /* backup, запасной вариант */
                table.attr('mode', mode);
                msg += 'Пожалуйста, укажите место вставки ';
                msg += ((mode.indexOf('move') > 0) ? 'ПЕРЕМЕЩАЕМЫХ' : 'КОПИРУЕМЫХ') + ' ';
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
            /* основной вариант */
            description = {};
            /* backup, запасной вариант */
            table.removeAttr('mode');
            table.removeAttr('destination');
            table.removeAttr('source');
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
        getInfo              = function (element, mode) {
            var str,
                level,
                tree,
                i,
                item;

            if (element) {
                level = element.data('level');

                if (level) {
                    tree = element.data('tree').substring(1).split('/');

                    str = '';
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

                    if (level < 4) {
                        if (mode && (mode !== 'copy')) {
                            str += ' и вложенные элементы';
                        }
                    }

                    str += '</span>';
                    str += '</p>';
                } else {
                    str = '<p>(Ур:0) <span class="branch">Корень таблицы</span></p>';
                }
            }

            return str;
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

                    object['group'] = group;
                    object['size']  = group.length;
                    object['gaps']  = (group.not('.' + selectedClass)).length;

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
                        var group = item['group'];

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
        getList              = function (model, mode) {
            var result = '';

            if (model && $.isArray(model) && model.length) {
                model.forEach(function (item) {
                    var group;
                    if (!$.isEmptyObject(item)) {
                        group = item['group'];

                        if (group && (group instanceof jQuery)) {
                            result += getInfo(group.first(), mode);
                        }
                    }
                });
            }

            return result;
        },
        getExpandedModel     = function (model) {
            if (model) {
                setExpandedSelection(model);

                return getModel(getUnique(getGroups(getSelectedElements())));
            }
        },
        getIds               = function (model) {
            var result = [];

            if (model && $.isArray(model) && model.length) {
                model.forEach(function (item) {
                    var group;
                    if (!$.isEmptyObject(item)) {
                        group = item['group'];

                        if (group && (group instanceof jQuery)) {
                            result.push(group.first().attr('id'));
                        }
                    }
                });
            }

            return result;
        },
        getConfirmation      = function (/* Function */yes, /* Function */no) {
            var confirmation = $('#confirmation-dialog').modal({
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

            $('#confirmation-dialog-yes-btn, #confirmation-dialog-no-btn, #confirmation-dialog-cancel-btn, #confirmation-dialog-dismiss-btn').off();

            $('#confirmation-dialog-yes-btn').one('click', function () {
                method(yes);
            });

            $('#confirmation-dialog-no-btn').one('click', function () {
                method(no);
            });

            $('#confirmation-dialog-cancel-btn, #confirmation-dialog-dismiss-btn').one('click', function () {
                method(null);
            });
        },
        getSelectedElements  = function () {
            return rows.filter('.' + selectedClass);
        },
        getDescription       = function () {
            var result = {},
                fields = ['mode', 'source', 'destination'],
                i,
                key,
                size;

            for (i = 0, size = fields.length; i < size; i += 1) {
                if (description &&
                    !$.isEmptyObject(description) &&
                    description[fields[i]]) {
                    /* основной вариант */
                    result[fields[i]] = description[fields[i]];
                } else if (table.attr(fields[i])) {
                    /* backup, запасной вариант */
                    result[fields[i]] = table.attr(fields[i]);
                } else {
                    /* вообще всё плохо */
                    result[fields[i]] = null;
                }
            }

            for (key in result) {
                if (!result[key]) {
                    result = null;
                    break;
                }
            }

            return result;
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
                    if (model[i]['gaps']) {
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
                    var object = item && item['group'];

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
                        elements = group['group'];

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
                    hasGaps = group['gaps'];
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
                        validInsert = matrix[group['group'].first().data('level')];
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
        };

    table.tooltip({
        disabled: true,
        items   : 'body',
        track   : true
    });

    dialog.modal({
        backdrop: 'static',
        keyboard: false,
        show    : false
    });

    $(document).on('mousedown', '#tbodyForMainTable > tr', function (e) {
        var
            /* ------------------------------------------------------ */
            me          = $(this),
            selected    = getSelectedElements(),
            current     = (selected.length ? selected.index() : 0),
            target      = (me.index() + 1),
            first       = current,
            last        = target,
            disableFlag = true,
            /* ------------------------------------------------------ */
            model,
            mode        = table.attr('mode'),
            source      = $('#source'),
            destination = $('#destination'),
            ids;

        if (!mode) {
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

            selected = getSelectedElements();

            if (selected && selected.length) {
                disableFlag = false;
            }

            btnCopy.add(btnMove).prop('disabled', disableFlag);
        } else {
            if (me.hasClass(validClass)) {
                table.tooltip('disable');

                model = getModel(getUnique(getGroups(selected)));
                ids   = JSON.stringify(getIds(model));

                dialog.find('.modal-title').text(
                    ((mode.indexOf('move') > 0) ? 'Перемещение' : 'Копирование') + ' ' +
                    'элементов экспликации'
                );

                source.html(getList(model, mode));
                destination.html(getInfo(me));
                /* основной вариант */
                description['destination'] = me.attr('id');
                description['source']      = ids;
                /* backup, запасной вариант */
                table.attr('destination', me.attr('id'));
                table.attr('source', ids);

                dialog.modal('show');
            } else {
                return false;
            }
        }
    });

    /* перемещение элементов */
    btnMove.on('click', function () {
        var model = getExpandedModel(getModel(getUnique(getGroups(getSelectedElements()))));

        init('move');

        setBorder(model);
        setAvailability(model);
    });
    /* копирование элементов */
    btnCopy.on('click', function () {
        var model = getModel(getUnique(getGroups(getSelectedElements())));

        init('copy');

        if (hasGaps(model)) {
            getConfirmation(
                /* Yes */function () {
                    /* переопределяем модель после расширения */
                    init('copy-expanded');

                    model = getExpandedModel(model);
                    setBorder(model);
                    setAvailability(model);
                },
                /* No  */function () {
                    setBorder(model);
                    setAvailability(model);
                }
            );
        } else {
            setBorder(model);
            setAvailability(model);
        }
    });
    /* большая красная кнопка отмены */
    btnCancel.on('click', function () {
        destroy();
    });
    /* отменит перемещение / копирование */
    btnDialogOk.on('click', function () {
        var description = getDescription();

        dialog.modal('hide');

        if (description && !$.isEmptyObject(description)) {
            console.log('mode', description['mode']);
            console.log('ids source', description['source']);
            console.log('id destination', description['destination']);
        } else {
            alert('Ошибка формирования запроса в БД!');
        }

        destroy();
    });

    btnDialogCancel.on('click', function () {
        dialog.modal('hide');
        table.tooltip('enable');
    });
});