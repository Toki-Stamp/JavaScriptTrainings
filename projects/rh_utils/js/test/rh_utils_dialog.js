/**
 * Created by Fomichev Yuri on 21.05.2019
 * Contact me at : toki.stamp@gmail.com
 */

(function () {
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
                click: {
                    handler: function () {
                        deferred.resolve({'step-1': dialog});
                    }
                },
                text : 'Next...'
            })
            .button({
                'class': 'btn btn-danger',
                click  : {
                    handler: function () {
                        deferred.reject('Error!');
                    }
                },
                text   : 'Interrupt'
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
                text : 'Go further...'
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
                type : 'success',
                click: {
                    handler: function () {
                        transport['step-3'] = dialog;
                        deferred.resolve(transport);
                    }
                },
                text : 'To Final Step...'
            })
            .show();
            
            return deferred.promise();
        })
        .done(function (transport) {
            console.log('Done!', {transport: transport});
            
            if (confirm('Reload?')) {
                window.location.reload();
            }
        })
        .fail(function (error) {
            alert(error);
        });
    });
})();