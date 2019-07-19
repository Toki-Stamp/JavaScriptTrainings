<template>
    <footer v-on:click="show = !show">
        <h2>{{title || defaultTitle}}</h2>
        <h3 v-show="show">{{message}}</h3>
    </footer>
</template>

<script>
    import {eventBus} from "../main.js";

    export default {
        name : "Footer",
        props: {
            'title': {
                type: String
            }
        },
        data() {
            return {
                defaultTitle: 'This is footer component title by default',
                message     : 'This is footer little secret message',
                show        : false
            }
        },
        created() {
            eventBus.$on('titleChanged', (data) => {
                this.title = data;
            })
        }
    }
</script>

<style scoped>
    footer {
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