/**
 * Created by Fomichev Yuri on 21.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function () {
    var body = $('<table>', {
        'class': 'table table-condensed table-hover',
        'html' : '<thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr></thead><tbody><tr><th scope="row">1</th> <td>Mark</td> <td>Otto</td> <td>@mdo</td> </tr> <tr> <th scope="row">2</th> <td>Jacob</td> <td>Thornton</td> <td>@fat</td> </tr> <tr> <th scope="row">3</th> <td colspan="2">Larry the Bird</td> <td>@twitter</td></tr></tbody>'
    });

    $('.rh-container')
        .find('section')
        .find('button')
        .on('click', function () {
            (function when() {
                var deferred = jQuery.Deferred();
                var dialog = window['rh_utils'].dialog.getInstance();

                dialog
                    .title('Step 1')
                    .body('Body for step 1')
                    .button({
                        type : 'close',
                        text : 'Отмена',
                        click: {
                            handler: function () {
                                console.error('CANCEL!', arguments);
                            },
                            args   : ['1', 2, {3: true}, [4]]
                        }
                    })
                    .button({
                        // type : 'success',
                        // click: {
                        //     handler: function () {
                        //         deferred.resolve({'step-1': dialog});
                        //     }
                        // },
                        // text : 'Next Step'
                    })
                    .button({
                        type : 'danger',
                        click: {
                            handler: function () {
                                deferred.reject('Interrupted!');
                            }
                        },
                        text : 'Interrupt!'
                    })
                    .show();

                return deferred.promise();
            })()
                .then(function (transport) {
                    var deferred = jQuery.Deferred();
                    var dialog = window['rh_utils'].dialog.getInstance();

                    dialog
                        .title('Step 2')
                        .body('Body for step 2<br>Body for step 2<br>Body for step 2<br>Body for step 2<br>Body for step 2<br>Body for step 2')
                        .button({
                            type : 'success',
                            click: {
                                handler: function () {
                                    transport['step-2'] = dialog;
                                    deferred.resolve(transport);
                                }
                            },
                            text : 'Continue'
                        })
                        .show();

                    return deferred.promise();
                })
                .then(function (transport) {
                    var deferred = jQuery.Deferred();
                    var dialog = window['rh_utils'].dialog.getInstance();

                    dialog
                        .title('Step 3')
                        .body(body)
                        .button({
                            type : 'warning',
                            click: {
                                handler: function () {
                                    transport['step-3'] = dialog;
                                    deferred.resolve(transport);
                                }
                            },
                            text : 'Finish'
                        })
                        .show();

                    return deferred.promise();
                })
                .done(function (transport) {
                    var key;

                    for (key in transport) {
                        if (transport.hasOwnProperty(key)) {
                            console.log(key);
                            transport[key].info.call();
                        }
                    }

                    if (confirm('Reload?')) {
                        window.location.reload();
                    }
                })
                .fail(function (error) {
                    alert(error);
                });
        });
})();