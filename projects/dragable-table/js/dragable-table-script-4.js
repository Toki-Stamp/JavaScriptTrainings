/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var body  = $('body'),
        main  = '#mainTable',
        id    = 'rowid',
        table = $(main);

    /* Делаем backup */
    if (body.data('main-table-backup')) {
        body.removeData('main-table-backup');
    } else {
        body.data('main-table-backup', table.clone());
    }

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
                current = $('<tbody class="fifo"></tbody>');
                slice.removeClass('success');
            } else {
                current = $('<tbody></tbody>');
            }
            last.after(current);
            current.append(slice);
        });
    });

    $('#btn-2').on('click', function () {
        /* Читаем из backup, восстанавливаем DOM */
        table.replaceWith(body.data('main-table-backup'));
        /* Переопределяем ссылку на таблицу */
        table = $(main);
        /* Пересохраняем backup */
        body.removeData('main-table-backup').data('main-table-backup', table.clone());
    });

    $(document).on('mousedown', 'tbody tr:gt(0)', function (e) {
        var me      = $(this),
            success = $('tr.success'),
            current = success.data(id),
            target  = me.data(id),
            first   = current,
            last    = target,
            delta;
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
});