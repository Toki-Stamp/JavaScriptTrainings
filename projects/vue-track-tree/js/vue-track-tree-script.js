/**
 * Created by Fomichev Yuri on 11.04.2019
 * Contact me at : toki.stamp@gmail.com
 */

let app = new Vue({
    el:      '#vue-app',
    data:    {
        list: null
    },
    watch:   {
        list: function (current, previous) {
            console.log('Watch data.list...');
            console.log({current: current, previous: previous});
        },
    },
    methods: {
        getList:  function () {
            this.$set(this, 'list', (function (data) {
                let object = {};

                data.forEach(function (item) {
                    object[item.id] = item;
                });

                return object;
            })(storage.list));
        },
        getChars: function () {

        },
        highlight(event) {
            $(event.target).parent().addClass('bg-primary text-light').siblings().removeClass('bg-primary text-light');
        },
        doSomeMoreStuff(item, key, index) {
            console.log(arguments);
        }
    }
});