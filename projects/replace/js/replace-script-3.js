/**
 * Created by Fomichev Yuri on 16.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

(function main() {

    /* localStorage / sessionStorage */

    var str = '';
    str += '<div class="container">';
    str += '<hr>';
    str += '<h2>Session Storage</h2>';
    str += '<p>' + sessionStorage.getItem('search-rule') + '</p>';
    str += '<hr>';
    str += '<h2>Local Storage</h2>';
    str += '<p>' + localStorage.getItem('search-rule') + '</p>';
    str += '<hr>';
    str += '</div>';
    $('body').prepend(str);

})();
