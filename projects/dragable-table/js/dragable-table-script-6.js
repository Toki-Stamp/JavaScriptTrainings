/**
 * Created by Fomichev Yuri on 11.12.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function () {

    $('#btn-1').on('click', function () {
        var $mainTable   = $("#mainTable");
        var $header      = $mainTable.find('tr:first').clone();
        var splitBy      = 5;
        //$mainTable.find ( "tr" ).slice( splitBy ).css( "background-color", "red" );
        var rows         = $mainTable.find("tr").slice(splitBy);
        var $secondTable = $("#mainTable").parent().append("<table id='secondTable'><tbody></tbody></table>");
        $secondTable.find("tbody").append($header).append(rows);
        $mainTable.find("tr").slice(splitBy).remove();
    });

    $('#btn-2').on('click', function () {
        window.location.reload();
    });

});