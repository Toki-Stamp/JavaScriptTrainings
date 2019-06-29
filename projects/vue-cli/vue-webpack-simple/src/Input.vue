<template>
    <div>
        <input type="text" v-model="text">
        <p>Output: {{text}}</p>
    </div>
</template>

<script>
    export default {
        name: "Input",
        data() {
            return {
                text: ''
            }
        }
    }
</script>

<style scoped>

</style>