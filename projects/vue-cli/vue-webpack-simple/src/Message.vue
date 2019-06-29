<template>
    <div>
        <h1>This is a GREAT message!</h1>
        <app-input></app-input>
    </div>
</template>

<script>
    import Input from './Input.vue';

    export default {
        name      : "Message",
        components: {
            'app-input': Input
        }
    }
</script>

<style scoped>

</style>