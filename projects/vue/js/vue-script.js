/**
 * Created by Fomichev Yuri on 11.04.2019
 * Contact me at : toki.stamp@gmail.com
 */

/* Self-invoking function */
(function main() {
    let app = new Vue({
        el:      '#app',
        data:    {
            message:    'Empty...',
            list:       null,
            siftedList: null,
            sift:       null,
            users:      [{id: 1, name: 'Иван'}, {id: 2, name: 'Сергей'}, {id: 3, name: 'Юрий'}, {id: 4, name: 'Елена'}],
            counter:    1,
            someData:   []
        },
        watch:   {
            message: function (current, previous) {
                console.log({current: current, previous: previous})
            },
            sift:    function (current) {
                console.log(current);

                if (this.siftedList && current) {
                    // for (let index = 0, size = this.siftedList.length; index < size; index += 1) {
                    //     if (this.siftedList[index].key == current) {
                    //         this.siftedList.splice(index, 1);
                    //
                    //         break;
                    //     }
                    // }
                    this.siftedList = this.siftedList.filter(function (item) {
                        return !(current == item.key);
                    })
                } else {
                    this.siftedList = this.list.slice(0);
                }
            }
        },
        filters: {
            customFilter: function (item, ...args) {
                console.log(item, args);

                return item;
            }
        },
        created: function () {
            // this.getList();
        },
        methods: {
            getList:        function () {
                let list = (Math.random() >= 0.5) ? [
                    {key: 1, value: 'data-1'},
                    {key: 2, value: 'data-2'},
                    {key: 3, value: 'data-3'},
                    {key: 4, value: 'data-4'},
                    {key: 5, value: 'data-5'},
                    {key: 6, value: 'data-6'},
                    {key: 7, value: 'data-7'},
                    {key: 8, value: 'data-8'},
                    {key: 9, value: 'data-9'},
                    {key: 0, value: 'data-0'}
                ] : [
                    {key: 1, value: 'alternative-data-1'},
                    {key: 2, value: 'alternative-data-2'},
                    {key: 3, value: 'alternative-data-3'},
                    {key: 4, value: 'alternative-data-4'},
                    {key: 5, value: 'alternative-data-5'},
                ];

                this.list       = list;
                this.siftedList = list.slice(0);
            },
            onInputHandler: function (event) {
                this.message = event.target.value;
            },
            increase:       function () {
                this.counter += 1;
            },
            decrease:       function () {
                this.counter -= 1;
            }
        }
    });

    // $('#input').find('input').on('input', function () {
    //     app['message'] = $(this).val();
    // });
})();