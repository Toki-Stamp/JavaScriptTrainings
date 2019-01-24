/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    $('.main-table').on('mousemove', 'th, td', function (e) {
        let cellIndex;

        if (e.altKey || e.ctrlKey || e.shiftKey) {
            cellIndex = (e.target.cellIndex + 1);
            $('.main-table').find('td:nth-child(' + cellIndex + ')').addClass('hover');
            $('.main-table').find('td:not(:nth-child(' + cellIndex + '))').removeClass('hover');
        }

        console.log(e);
    });
    $('input').addClass('form-control');
    $('select').select2();
});

/* Self-invoking function */
(function main() {
})();