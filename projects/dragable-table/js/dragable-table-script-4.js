/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {

    var input   = $('#inp-1'),
        table   = $('#main-table'),
        tbodies = table.find('tbody'),
        tbody   = $('#main-table-tbody'),
        total   = tbodies.find('tr:first'),
        rows    = tbodies.find('tr:gt(0)'),
        rows2   = rows.clone(),
        valid   = function (index) {
            var result = false;
            if (index) {
                if (typeof index !== 'number') {
                    index = parseInt(index, 10);
                }
                result = ((veryFirstIndex <= index) && (index <= veryLastIndex));
            }
            return result;
        };

    input.attr('placeholder', 'Row-index [' + rows.first().data('row-id') + '...' + rows.last().data('row-id') + ']');

    $('#btn-1').on('click', function () {
        // var index = parseInt(input.val(), 10);
        // var before, current, after;
        // var tbodies;
        // if (valid(index)) {
        //     before  = rows.slice(veryFirstIndex - 1, index - 1);
        //     current = rows.filter('[data-row-id="' + index + '"]');
        //     after   = rows.slice(index, veryLastIndex);
        //     rows.remove();
        //     tbody.attr('data-body-type', 'total');
        // tbody.after('<tbody data-body-type="after"></tbody>');
        // tbody.after('<tbody class="fifo" data-body-type="current"></tbody>');
        // tbody.after('<tbody data-body-type="before"></tbody>');
        // tbodies = table.find('tbody');
        // tbodies.filter('[data-body-type="before"]').append(before);
        // tbodies.filter('[data-body-type="current"]').append(current);
        // tbodies.filter('[data-body-type="after"]').append(after);
        // }
        // input.val('');

        var veryFirstIndex = rows.first().data('row-id'),
            veryLastIndex  = rows.last().data('row-id');
        // var success        = $('tr.success');
        // var normal         = rows.filter(':not(.success)');
        // if (success.length) {
        //     success.each(function () {
        //         console.log(this);
        //     });
        //     console.log('---------------------------------');
        // }
        // normal.each(function () {
        //     console.log(this);
        // });
        console.log('---------------------------------');
        var left   = veryFirstIndex - 1;
        var right  = veryFirstIndex;
        var i      = veryFirstIndex;
        var set;
        var slices = [];
        var state  = 'normal';
        rows.each(function (index, element) {

            /* Детерминированный конечный автомат */
            switch (state) {
                case 'normal':
                    if ($(element).hasClass('success')) {
                        right = i - 1;
                        set   = rows.slice(left, right);
                        slices.push(set);
                        console.log(set);
                        left  = i;
                        state = 'success';
                    }
                    break;
                case 'success':
                    if (!$(element).hasClass('success')) {
                        right = i - 1;
                        set   = rows.slice(left, right);
                        slices.push(set);
                        console.log(set);
                        left  = right;
                        state = 'normal';
                    }
                    break;
            }
            i += 1;
        });
        console.log('---------------------------------');
        console.log(slices);
    });

    $('#btn-2').on('click', function () {
        window.location.reload();
    });

    tbodies.on('mousedown', 'tr', function (e) {
        var me      = $(this),
            success = $('tr.success'),
            current = success.data('row-id'),
            target  = me.data('row-id'),
            first   = current,
            last    = target,
            delta;
        if (me.hasClass('total')) {
            return false;
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
                $('[data-row-id="' + (first + i) + '"]').addClass('success')
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