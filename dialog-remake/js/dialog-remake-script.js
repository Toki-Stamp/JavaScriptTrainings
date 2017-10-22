/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */
jQuery(document).ready(function main() {
    var $modal = $('#modal-container'),
        $target = $('#text-container');
    $target.on('click', function () {
        $modal.modal('toggle');
    });
    $modal.modal({backdrop: 'static', show: false, keyboard: true});
});