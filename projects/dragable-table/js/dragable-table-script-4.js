/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var tbodies        = $('#main-table').find('tbody'),
        veryFirstIndex = tbodies.find('tr').first().data('row-id') - 1,
        veryLastIndex  = tbodies.find('tr').last().data('row-id'),
        first,
        firstIndex,
        last,
        lastIndex;
    var total          = tbodies.find('tr:first');
    var rows           = tbodies.find('tr:gt(0)');

    // total.css('background-color', 'blue');
    // rows.css('background-color', 'green');

    tbodies.on('click', 'tr', function () {
        // var me           = $(this),
        //     currentIndex = me.data('row-id'),
        //     rows         = tbodies.find('tr'),
        //     rowsClone    = tbodies.find('tr').clone();

        // var left    = rows.slice(veryFirstIndex, currentIndex),
        //     right   = rows.slice(currentIndex, veryLastIndex),
        //     indexes = [];
        // rows.each(function () {
        //     indexes.push($(this).data('row-id'));
        // });
        // console.log('    all:', indexes);
        // indexes = [];
        // left.each(function () {
        //     indexes.push($(this).data('row-id'));
        // });
        // console.log('   left:', indexes);
        // indexes = [];
        // console.log('current:', currentIndex);
        // if (currentIndex !== veryLastIndex) {
        //     right.each(function () {
        //         indexes.push($(this).data('row-id'));
        //     });
        // }
        // console.log('  right:', indexes);
        // console.log('--------------------------------------------');
        // console.log('rows', rows);
        // console.log('parent', rows.parent());
        // console.log('closest', rows.closest('tbody'));
        // left.wrapAll('<tbody></tbody>');
        // right.wrapAll('<tbody></tbody>');
        // tbodies.each(function () {
        //     console.log(this);
        //     rows       = $(this).find('tr');
        //     first      = rows.first();
        //     firstIndex = first.data('row-id');
        //     last       = rows.last();
        //     lastIndex  = last.data('row-id');
        //     console.log('very-first-row-id', veryFirstIndex, 'first-row-id:', firstIndex, 'current-row-id:', current, 'last-row-id:', lastIndex, 'very-last-row-id', veryLastIndex);
        // });
    });
});