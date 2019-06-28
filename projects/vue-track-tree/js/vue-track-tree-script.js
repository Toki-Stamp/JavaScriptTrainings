/**
 * Created by Fomichev Yuri on 11.04.2019
 * Contact me at : toki.stamp@gmail.com
 */

Vue.component('chars-component', {
    template: '#chars',
    data:     function () {
        return {selftext: 'Self text here!'}
    },
    props:    ['linktoparenttext'],
    methods:  {
        changeParentText: function (event) {
            this.selftext = event.target.value;
            this.$emit('parentTextChanged', this.selftext);
            console.log(event);
        }
    }
});

let app = new Vue({
    el:      '#vue-app',
    data:    {
        id:         null,
        list:       null,
        parentText: 'Vue text here!'
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
        getList:                  function () {
            this.$set(this, 'list', (function (data) {
                let object = {};

                data.forEach(function (item) {
                    object[item.id] = item;
                });

                return object;
            })(storage.list));
        },
        getChars:                 function (id) {
            (storage.chars[id] && (this.list[id].characteristics = storage.chars[id]));

            $('#bootstrap-modal').modal('show');
        },
        setID:                    function (id) {
            this.$set(this, 'id', id);
        },
        highlight:                function (event) {
            $(event.target).parent().addClass('table-primary').siblings().removeClass('table-primary');
        },
        parentTextChangedHandler: function (event) {
            console.log('parentTextChanged!', event);
        }

    },
    mounted: function () {
        console.log('Mounted Hook!');
        $('#bootstrap-modal').modal({backdrop: false, keyboard: true, focus: true, show: false});
    }
});