/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var target = $('#sortable'),
        status = $('#status');

    target.sortable({
        axis:                 'y',
        containment:          'parent',
        cursor:               'n-resize',
        disabled:             'true',
        forceHelperSize:      true,
        forcePlaceholderSize: true,
        // helper:               'clone',
        items:                '> tr',
        tolerance:            'pointer'
    });

    target.on('click', 'tr', function (e) {
        var me      = $(this),
            parent  = me.parent(),
            indexes = parent.data('indexes'),
            array   = [];

        console.log(me);
        console.log(parent);
        console.log(indexes);

        array.push(me.rowIndex);
        parent.data('indexes', array);

        // if (e.shiftKey || e.ctrlKey) {
        // console.log(' current', rowIndexes);
        // }
        me.addClass('success').siblings().removeClass('success');
    });

    $('#enable').click(function () {
        target.sortable('enable').disableSelection();
        target.find('tr').css('cursor', 'pointer');
        status.text('Перетаскивание включено');
    });

    $('#disable').click(function () {
        target.sortable('disable').enableSelection();
        target.find('tr').css('cursor', 'default');
        status.text('Перетаскивание выключено');
    });

    $('#cancel').click(function () {
        target.sortable('cancel');
    });

    $(document).keydown(function (e) {
        if (e.shiftKey || e.ctrlKey) {
            $('body').css('cursor', 'copy');
        }
    }).keyup(function () {
        $('body').css('cursor', 'default');
    })

});