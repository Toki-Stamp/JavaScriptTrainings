<template>
    <header v-on:click="show = !show">
        <h2 v-on:click="changeTitle">{{title}}</h2>
        <h3 v-show="show">{{message}}</h3>
    </header>
</template>

<script>
    import {eventBus} from "../main.js";

    export default {
        name   : "Header",
        props  : {
            'title': {
                type: String
            }
        },
        data() {
            return {
                message: 'This is header little secret message',
                show   : false
            }
        },
        methods: {
            changeTitle() {
                // this.$emit('changeTitleEvent', 'This is changed header title');
                eventBus.$emit('titleChanged', 'This is changed header title');
            }
        }
    }
</script>

<style scoped>
    header {
        background: #f5f5f5;
        padding: 10px;
        border: 10px solid #364f6b;
        border-radius: 20px;
    }

    h2 {
        color: #fc5185;
        text-align: center;
        text-transform: uppercase;
    }

    h3 {
        color: #3fc1c9;
        text-align: center;
    }
</style>