<template>
    <div>
        <h1>{{message}}</h1>
        <app-input v-bind:msg="message" v-on:msgChanged="message = $event"></app-input>
    </div>
</template>

<script>
    import Input from './Input.vue';

    export default {
        name      : "Message",
        data      : function () {
            return {
                message    : 'This is a GREAT message!'
            }
        },
        components: {
            'app-input': Input
        }
    }
</script>

<style scoped></style>