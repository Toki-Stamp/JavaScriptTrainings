/**
 * Created by Fomichev Yuri on 15.07.2019
 * Contact me at : toki.stamp@gmail.com
 */
new Vue({
    el      : '#game-app',
    data    : {
        progress  : 100,
        stepsTaken: 0,
        title     : {
            filled: 'Clear the Trash Bin, Please...',
            empty : 'Congrats! Trash Bin is Empty!'
        },
        isEmpty   : false
    },
    watch   : {
        progress: function (cur, prev) {
            console.info(`Changed from ${prev} to ${cur} step ${prev - cur}`);
        }
    },
    computed: {
        residue() {
            return `${this.progress}%`
        }
    },
    methods : {
        grab() {
            this.progress -= Math.round((Math.random() * 30) / 10) * 10;
            this.stepsTaken += 1;
            
            if (this.progress <= 0) {
                this.isEmpty = true;
            }
        },
        restart() {
            this.progress = 100;
            this.isEmpty = false;
            this.stepsTaken = 0;
        }
    }
});