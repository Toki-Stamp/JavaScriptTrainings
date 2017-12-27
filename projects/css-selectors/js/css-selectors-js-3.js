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

    var table = $('table'),
        rows  = table.find('tr'),
        blink;

    /* Обработчик строк таблицы */
    $(document).on('mousedown', 'table tbody > tr', function (e) {
        var me       = $(this),
            selected = rows.filter('.selected'),
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
            selected.removeClass('selected border');
        }
        if (e.shiftKey) {
            e.preventDefault();
            if (me.is(selected)) {
                selected.removeClass('selected');
            } else {
                if (current >= target) {
                    first = target - 1;
                    last  = current + 1;
                }
                $('table > tbody tr').slice(first, last).addClass('selected');
            }
        } else {
            if (me.hasClass('selected')) {
                me.removeClass('selected border');
            } else {
                me.addClass('selected');
            }
        }
    });

    $('#move-btn').on('click', function () {
        var selected        = rows.filter('.selected'), expanded,
            makeModel       = function (elements) {
                var array = [];
                elements.each(function () {
                    var element      = {},
                        me           = $(this),
                        id           = parseInt(me.attr('id'), 10),
                        children     = rows.filter('[data-parent="' + id + '"]');
                    element.me       = me;
                    element.id       = id;
                    element.parent   = me.data('parent');
                    element.level    = me.data('level');
                    element.children = (children.length) ? children : null;
                    array.push(element);
                });
                return array;
            },
            expandSelection = function (array) {
                var expand = function (elements) {
                    var expanded = $();
                    elements.each(function () {
                        var me       = $(this),
                            id       = me.attr('id'),
                            level    = me.data('level'),
                            children = rows.filter('[data-parent="' + id + '"]');

                        /* Базовый случай */
                        if (level === 4) {
                            expanded = expanded.add(me);
                            return;
                        }
                        /* Рекурсия */
                        if (level === 1 || level === 2) {
                            expand(children);
                        }
                    });
                    console.log(expanded);
                };
                if ($.isArray(array)) {
                    array.forEach(function (element) {
                        var children = element.children;
                        if (children) {
                            expand(children);
                        }
                    });
                    expanded = rows.filter('.selected');
                }
            },
            expand_old      = function (elements) {
                elements.each(function () {
                    var me       = $(this),
                        id       = me.attr('id'),
                        level    = me.data('level'),
                        children = rows.filter('[data-parent="' + id + '"]');

                    /* Базовый случай */
                    if (level === 4) {
                        return;
                    }
                    /* Рекурсия */
                    if (level === 1 || level === 2) {
                        expand(children);
                    }
                    expanded = me.add(children);
                    expanded.addClass('selected');
                });
            },
            findPlace       = function (elements) {
                var group = {};
                elements.each(function () {
                    var group  = {};
                    var me     = $(this),
                        id     = me.attr('id'),
                        level  = me.data('level'),
                        parent = me.data('parent'),
                        tree   = me.data('tree');
                    console.log('id:' + id, 'level:' + level, 'parent:' + parent, 'tree:' + tree);
                })
            };

        // if (selected.length) {
        //     expand(selected);
        //     /* Переопределение */
        //     expanded = rows.filter('.selected');
        // } else {
        // }
        //     alert('Выберите хотя бы одну строку!');
        expandSelection(makeModel(selected));
    });

    $('#cancel-btn').on('mousedown', function () {
        rows.removeClass('selected border insert-here unable-to-insert');
        table.attr('move-mode', false);
        if (blink) {
            clearInterval(blink);
            blink = undefined;
        }
    });
});