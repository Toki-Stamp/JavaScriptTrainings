/**
 * Created by Fomichev Yuri on 15.11.2017
 * Contact me at : toki.stamp@gmail.com
 */

var handyStuff = {

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