/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var matrix = {
        'root'    : {
            'type'  : 'Корень',
            'level' : 0,
            'accept': [1, 2, 3, 4],
            'insert': false
        },
        'rowPorch': {
            'type'  : 'Подъезд (секция)',
            'level' : 1,
            'accept': [2],
            'insert': [0]
        },
        'rowFloor': {
            'type'  : 'Этаж',
            'level' : 2,
            'accept': [3, 4],
            'insert': [0, 1]
        },
        'rowIp'   : {
            'type'  : 'Группа помещений / ИП / Жилое помещение / Помещение',
            'level' : 3,
            'accept': [4],
            'insert': [0, 2]
        },
        'rowOth'  : {
            'type'  : 'Помещение',
            'level' : 4,
            'accept': false,
            'insert': [0, 2, 3]
        }
    };

    var body      = $('body'),
        main      = '#main-table',
        id        = 'row-id',
        table     = $(main),
        animation = 'fifo'; // fifo / blink / blink-frame

    /* Делаем backup */
    if (body.data('main-table-backup')) {
        body.removeData('main-table-backup');
    } else {
        body.data('main-table-backup', table.clone());
    }

    /* Запустить скрипт */
    $('#btn-1').on('click', function () {
        var veryFirst,
            veryLast,
            veryLastIndex,
            left,
            right,
            slice,
            slices = [],
            states,
            state,
            rows   = table.find('tbody tr:gt(0)');

        if (rows.length > 1) {
            /* --- */
            var rowsSuccess = rows.filter('.success');
            /* --- */
            veryFirst     = rows.first();
            veryLast      = rows.last();
            left          = 0;
            right         = Math.abs(veryLast.data(id) - veryFirst.data(id));
            veryLastIndex = rows.length;
            states        = ['success', 'normal'];
            state         = veryFirst.hasClass('success') ? states[0] : states[1];
            /* Slicer */
            rows.each(function (index, element) {
                /* Детерминированный конечный автомат */
                switch (state) {
                    case states[1]: // normal
                        if ($(element).hasClass('success')) {
                            right = index;
                            slice = rows.slice(left, right);
                            slices.push(slice);
                            left  = index;
                            state = states[0];
                        }
                        break;
                    case states[0]: // success
                        if (!$(element).hasClass('success')) {
                            right = index;
                            slice = rows.slice(left, right);
                            slices.push(slice);
                            left  = right;
                            state = states[1];
                        }
                        break;
                }
            });
            slice = rows.slice(left, veryLastIndex);
            slices.push(slice);
        } else {
            slices.push(rows);
        }
        /* Удаляем предыдущий DOM */
        rows.remove();
        /* Переопредеяем DOM */
        slices.forEach(function (slice) {
            var current,
                last = $(main).find('tbody').last();
            if (slice.hasClass('success')) {
                current = $('<tbody class="' + animation + '"></tbody>');
                slice.removeClass();
            } else {
                current = $('<tbody></tbody>');
            }
            last.after(current);
            current.append(slice);
        });
    });

    /* Откатить назад */
    $('#btn-2').on('click', function () {
        /* Читаем из backup, восстанавливаем DOM */
        table.replaceWith(body.data('main-table-backup'));
        /* Переопределяем ссылку на таблицу */
        table = $(main);
        /* Пересохраняем backup */
        body.removeData('main-table-backup').data('main-table-backup', table.clone());
    });

    /* Обновить страницу */
    $('#btn-3').on('click', function () {
        window.location.reload();
    });

    /* Выделение строк талицы */
    $(document).on('mousedown', 'tbody:not(.' + animation + ') tr:gt(0)', function (e) {
        var me      = $(this),
            success = $('tr.success'),
            current = success.data(id),
            target  = me.data(id),
            first   = current,
            last    = target,
            delta;
        if (me.parent().hasClass(animation)) {
            console.log('return false');
        }
        if (!e.ctrlKey && !e.shiftKey) {
            success.removeClass('success');
        }
        if (e.shiftKey) {
            e.preventDefault();
            if (current > target) {
                first = target;
                last  = current;
            }
            delta = last - first;
            for (var i = 0; i <= delta; i++) {
                $('[data-' + id + '="' + (first + i) + '"]').addClass('success')
            }
        } else {
            if (me.hasClass('success')) {
                me.removeClass('success');
            } else {
                me.addClass('success');
            }
        }
    });

    $(document).on('mousedown', 'tbody.fifo tr', function (e) {
        console.log(e);
        console.log(this);
        console.log($(this));
    });

});