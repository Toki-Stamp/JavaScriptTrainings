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
        rows  = table.find('tr');

    /* Обработчик строк таблицы */
    $(document).on('mousedown', 'table tbody > tr', function (e) {
        var me       = $(this),
            table    = $('table'),
            selected = table.find('tr.selected'),
            current  = (selected.length ? (selected.index()) : 0),
            target   = (me.index() + 1),
            first    = current,
            last     = target,
            level    = me.data('level'),
            mode     = (table.attr('move-mode') === 'true');
        if (mode) {
            if (me.hasClass('insert-here')) {
                alert('Дилог перемещения в элемент уровня', '"' + level + '"',
                    'с индексом', me.index());
            }
            return false;
        }
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
        var selected  = rows.filter('.selected'), expanded,
            expand    = function (elements) {
                elements.each(function () {
                    var me       = $(this),
                        id       = me.attr('id'),
                        level    = me.data('level'),
                        children = rows.filter('[data-parent="' + id + '"]');
                    /* Базовый случай */
                    if (level === 4) return;
                    /* Рекурсия */
                    if (level === 1 || level === 2) {
                        expand(children);
                    }
                    expanded = me.add(children);
                    expanded.addClass('selected');
                });
            },
            findPlace = function (elements) {
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
            },
            group     = function (selected, expanded) {
                selected.each(function () {
                    console.log(this);
                });
            };

        if (selected.length) {
            expand(selected);
            /* Переопределение */
            expanded = rows.filter('.selected');
            console.log('selected:', selected);
            console.log('expanded:', expanded);
        } else {
            alert('Выберите хотя бы одну строку!');
        }
        group(selected, expanded);
        // findPlace(selected);
    });

    $('#cancel-btn').on('mousedown', function () {
        rows.removeClass('selected border insert-here unable-to-insert');
        table.attr('move-mode', false);
    });
});