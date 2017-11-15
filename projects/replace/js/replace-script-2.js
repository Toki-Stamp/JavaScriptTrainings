/**
 * Created by Fomichev Yuri on 15.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

/* Название проблемы */
/* Описание */

/* jQuery */
jQuery(document).ready(function main() {
});

/* Self-invoking function */
(function main() {
    // JSON.parse();
    // JSON.stringify()
    // sessionStorage.getItem('search-rule')
    // sessionStorage.setItem('search-rule')
    // localStorage / sessionStorage,

    /* try - catch - finally */
    /* https://learn.javascript.ru/exception */

    var searchRule            = {
            regExp:      [
                {id: 1, expr: 'expression-1'},
                {id: 2, expr: 'expression-2'},
                {id: 3, expr: 'expression-3'}
            ],
            technicChar: [
                {id: 1, char: 'technic-char-1'},
                {id: 2, char: 'technic-char-2'},
                {id: 3, char: 'technic-char-3'}
            ]
        },
        stringifiedSearchRule = JSON.stringify(searchRule),
        parsedSearchRule;
    console.log(sessionStorage);
    sessionStorage.setItem('search-rule', stringifiedSearchRule);
    console.log(sessionStorage);
    parsedSearchRule = JSON.parse(sessionStorage.getItem('search-rule'));
    sessionStorage.removeItem('search-rule');
    console.log(sessionStorage);
    console.log('------------------------------------------------------');
    console.log('original', searchRule);
    console.log('parsed', parsedSearchRule);
    console.log('------------------------------------------------------');
})();