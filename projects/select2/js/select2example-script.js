/**
 * Created by Fomichev Yuri on 19.10.2017
 * Contact me at : toki.stamp@gmail.com
 */

/* jQuery */
jQuery(document).ready(function main() {
    var data = [
            {
                name: 'Общая площадь здания',
                char: '315',
                value: [443.6]
            },
            {
                name: 'Общая площадь жилых помещений (квартир) жилого дома',
                char: '334',
                value: [153.3]
            }
        ],
        table = $('#main-table'),
        tbody = table.find('tbody');

    data.forEach(function (object) {
        var element = '';

        element += '<tr id="data-char-' + object.char + '-row">';
        element += '<td>';
        element += object.name;
        element += '</td>';
        element += '<td>';
        element += '<div class="row">';
        element += '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">';
        element += '<input type="text" class="form-control" title="' + object.name + '" value="' + object.value + '" readonly/>';
        element += '</div>';
        element += '</div>';
        element += '</td>';
        element += '</tr>';

        tbody.append(element);
    });
});

/* Self-invoking function */
(function main() {
})();