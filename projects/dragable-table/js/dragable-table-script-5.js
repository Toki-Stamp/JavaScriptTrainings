/**
 * Created by Fomichev Yuri on 11.12.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {

    $('#btn-1').on('click', function () {
        var $main      = $('#mainTable'),
            $head      = $main.find('tr:first'),
            $extraRows = $main.find('tr:gt(2)');

        for (var i = 0; i < $extraRows.length; i += 2) {
            var table          = $('<table>'),
                headClone      = $head.clone(),
                extraRowsSlice = $extraRows.slice(i, i + 2),
                mainParent     = $main.parent();

            table.append(headClone, extraRowsSlice);
            table.appendTo(mainParent);
        }
    });

    $('#btn-2').on('click', function () {
        window.location.reload();
    });
});
