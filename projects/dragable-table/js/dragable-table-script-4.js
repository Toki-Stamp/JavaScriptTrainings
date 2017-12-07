/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var target = $('#main-table').find('tbody');
    target.on('click', 'tr', function () {
        var me = $(this);

        /* split() */

        console.log(target);
        target.each(function () {
            console.log(this)
        });
        console.log('data-row-id', me.data('row-id'));
    });
});