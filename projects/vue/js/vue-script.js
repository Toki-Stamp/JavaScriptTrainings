/**
 * Created by Fomichev Yuri on 11.04.2019
 * Contact me at : toki.stamp@gmail.com
 */

/* Self-invoking function */
(function main() {
    let app = new Vue({
        el  : '#app',
        data: {
            message: '',
            isOne  : true,
            isTwo  : true
        }
    });
    
    $('#input').find('input').on('input', function () {
        app['message'] = $(this).val();
    });
})();