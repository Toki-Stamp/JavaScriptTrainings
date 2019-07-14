<template>
    <h1>{{ greeting }}</h1>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                greeting: 'Hello from Component!'
            }
        }
    }
</script>

<style>
    h1 {
        color: red;
    }
</style>