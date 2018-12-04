/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    let tableContainer  = $('.table-container'),
        items           = tableContainer.find('.item'),
        alertsContainer = $('.tree-alerts-container'),
        additionsTable  = $('#tableOfAdditionalFeatures_'),
        addBtn          = additionsTable.find('[data-role="add"]');

    // items.on('click', function () {
    //     $('<div>', {
    //         'id'   : $(this).text(),
    //         'class': 'tree-alert',
    //         'title': 'Click to remove!',
    //         'text' : 'Clicked on ' + $(this).text()
    //     }).appendTo(alertsContainer);
    // });

    alertsContainer.on('click', '.tree-alert', function () {
        $(this).remove();
    });

    tableContainer.get(0).addEventListener('change', function (event) {
        let target = $(event.target);

        if (target.is('input, select')) {
            $('<div>', {
                'id':    target.text(),
                'class': 'tree-alert',
                'title': 'Click to remove!',
                'text':  'Change event on ' + target.attr('id')
            })
                .appendTo(alertsContainer);
        }

        /* блокировать дальнейшее погружение */
        //event.stopImmediatePropagation();
        console.log(event);
    }, true);
    tableContainer.on('click', 'tr', function () {
        let me      = $(this),
            parent  = me.parent(),
            headers = parent.find('tr:eq(0), tr:eq(1)');

        if (!me.is(headers)) {
            $(this).toggleClass('active');
        }
    });

    addBtn.on('click', function () {
        let last = tableContainer.find('tr').last().clone();

        last.appendTo(additionsTable);
    });
});