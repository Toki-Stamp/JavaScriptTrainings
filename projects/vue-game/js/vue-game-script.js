/**
 * Created by Fomichev Yuri on 15.07.2019
 * Contact me at : toki.stamp@gmail.com
 */
new Vue({
    el:      '#game-app',
    data:    {
        progress: 100,
        isEmpty:  false
    },
    watch:   {
        progress: function (prev, cur) {
            console.log('Changed from ' + prev + ' to ' + cur);
        }
    },
    methods: {
        grab() {
            this.progress -= 10;

            if (this.progress <= 0) {
                this.isEmpty = true;
            }
        },
        restart() {
            this.progress = 100;
            this.isEmpty  = false;
        }
    }
});