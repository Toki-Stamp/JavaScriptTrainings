/**
 * Created by Fomichev Yuri on 21.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function () {
    var dialog1 = window['rh_utils'].dialog.getInstance();

    var body = $('<table>', {
        'class': 'table table-condensed table-hover',
        'html' : '<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr></thead><tbody><tr><th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope="row">3</th> <td colspan="2">Larry the Bird</td> <td>@twitter</td></tr></tbody>'
    });
    var button = {
        'class': 'btn btn-success',
        'click': {
            handler: null,
            args   : null
        },
        'text' : 'Button 1 Text'
    };

    dialog1
        .title('Таблица 1')
        .body(body)
        .button(button)
        .info();

    window['rh_utils'].dialog.status();

    $('.rh-container').find('section').find('button').on('click', function () {
        dialog1
            .show()
            .info();
    });
})();