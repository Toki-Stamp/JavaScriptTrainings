/**
 * Created by Fomichev Yuri on 15.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

'use strict';

var service = {

    storage: [window.sessionStorage, window.localStorage],

    getData: function (key, option) {
        var string = undefined;
        if (key && option) {
            if (this.storage[this.getIndex(option)].getItem(key) &&
                (this.storage[this.getIndex(option)].getItem(key) !== 'undefined')) {
                string = this.storage[this.getIndex(option)].getItem(key);
            }
        }
        return string;
    },

    setData: function (key, option, string) {
        if (key && option && string) {
            this.storage[this.getIndex(option)].setItem(key, string);
        }
    },

    getIndex: function (option) {
        return (option === 'session') ? 0 : 1;
    },

    getSearchRuleObject: function () {
        var searchRule                = {};
        searchRule['reg-expressions'] = this.getRegExpressions();
        searchRule['technic-chars']   = this.getTechnicChars();
        return searchRule;
    },

    getRegExpressions: function (array) {
        var regExpressions;
        /* array - список id регулярок из ЧТЗ 15.5.п.2.2 */
        array = array || [0, 1, 2, 3, 4];
        console.log(array);
        /* сходить в БД получить регулярки */
        regExpressions = [{id: 1, expr: 'expression-1'}, {id: 2, expr: 'expression-2'}, {id: 3, expr: 'expression-3'}];
        return regExpressions;
    },

    getTechnicChars: function (array) {
        var technicChars;
        /* array - список id характеристик из ЧТЗ 15.5.п.2.2 */
        array = array || [5, 6, 7, 8, 9];
        console.log(array);
        /* сходить в БД получить описание харакеристик */
        technicChars = [{id: 1, char: 'technic-char-1'}, {id: 2, char: 'technic-char-2'}, {id: 3, char: 'technic-char-3'}];
        return technicChars;
    },

    objectToString: function (object) {
        var string;
        try {
            string = JSON.stringify(object);
        } catch (e) {
            console.log(e);
        }
        return string;
    },

    stringToObject: function (string) {
        var object;
        try {
            object = JSON.parse(string);
        } catch (e) {
            console.log(e);
        }
        return object;
    }

};

/* Self-invoking function */
(function main() {

    var key              = 'search-rule',
        storage          = 'local', // 'session' / 'local'
        searchRuleString = service.getData(key, storage),
        searchRuleObject;

    /* есть данные в storage ? */
    if (searchRuleString) {
        searchRuleObject = service.stringToObject(searchRuleString);
    } else {
        /* сходить в БД */
        /* создать объект searchRuleObject */
        searchRuleObject = service.getSearchRuleObject();
        /* подготовить к загрузке объект */
        searchRuleString = service.objectToString(searchRuleObject);
        /* загрузить объект в storage */
        service.setData(key, storage, searchRuleString);
    }
    /* разобрать объект для итерирования */

    console.log('object', searchRuleObject);
    /* найти input в соответстсвии с правилом searchRule */
    /* повесить обработчики на input */
    console.log('session', sessionStorage);
    console.log('local', localStorage);
})();