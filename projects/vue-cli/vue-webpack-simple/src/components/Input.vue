<template>
    <div>
        <p>Setted up from outside: <strong>{{msg}}</strong></p>
        <!--        <input type="text" v-model="text">-->
        <input type="text" v-bind:value="msg" v-on:input="changeMsg">
        <p>Output: {{text}}</p>
    </div>
</template>

<script>
    export default {
        name   : "Input",
        props  : ['msg'],
        data   : function () {
            return {
                text: ''
            }
        },
        methods: {
            changeMsg: function (event) {
                this.text = event.target.value;
                this.$emit('msgChanged', this.text);
            }
        }
    }
</script>

<style scoped></style>