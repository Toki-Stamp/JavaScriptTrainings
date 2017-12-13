/**
 * Created by Fomichev Yuri on 13.12.2017
 * Contact me at : toki.stamp@gmail.com
 */

jQuery(document).ready(function main() {
    // $("#items1, #items2, #items3").sortable({
    //     connectWith: "#items1, #items2, #items3",
    //     start      : function (event, ui) {
    //         ui.item.toggleClass("highlight");
    //     },
    //     stop       : function (event, ui) {
    //         ui.item.toggleClass("highlight");
    //     }
    // }).disableSelection();

    $('#main-table').sortable({
        axis       : 'y',
        // containment: 'table',
        containment: 'parent',
        cursor     : 'n-resize',
        // disabled            : true,
        // forceHelperSize     : true,
        // forcePlaceholderSize: true,
        helper:               'clone',
        // items      : 'tbody:not(#main-table-tbody)',
        tolerance  : 'pointer'
    }).disableSelection();
});
