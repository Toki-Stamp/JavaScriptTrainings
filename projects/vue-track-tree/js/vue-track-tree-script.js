/**
 * Created by Fomichev Yuri on 11.04.2019
 * Contact me at : toki.stamp@gmail.com
 */

let app = new Vue({
    el:      '#vue-app',
    data:    {
        id:   null,
        list: null
    },
    watch:   {
        id:   function (current, previous) {
            console.log('Watch data.id...');
            console.log({current: current, previous: previous});
        },
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
        getChars: function (id) {
            (storage.chars[id] && (this.list[id].characteristics = storage.chars[id]));

            // $('#bootstrap-modal').modal('show');
        },
        setID:    function (id) {
            this.$set(this, 'id', id);
        },
        highlight(event) {
            $(event.target).parent().addClass('table-primary').siblings().removeClass('table-primary');
        }
    },
    mounted: function () {
        $('#bootstrap-modal').modal({backdrop: false, keyboard: true, focus: true, show: false});
        console.log('Mounted Hook!');
    }
});

Vue.component('characteristics-component', {
    // props:    ['characteristics'],
    template: '<div>chars</div>',
    watch:    {
        characteristics: {
            handler: function (current, previous) {
                console.log('Watch characteristics...');
                console.log({current: current, previous: previous});
            },
            deep:    true
        }
    }
});