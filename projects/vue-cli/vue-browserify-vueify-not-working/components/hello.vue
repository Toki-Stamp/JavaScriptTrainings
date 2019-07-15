<template>
    <h1>{{ greetings }}</h1>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greetings: 'Hello from Browserify Vueify!'
            }
        }
    }
</script>

<style>
    h1 {
        color: green;
    }
</style>