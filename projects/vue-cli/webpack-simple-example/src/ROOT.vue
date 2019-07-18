<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <ninjas></ninjas>
        <ninjas></ninjas>
    </div>
</template>

<script>
    import Ninjas from './components/NinjasList.vue'

    export default {
        name      : 'app',
        data() {
            return {
                title: 'ROOT (Host) Component'
            }
        },
        components: {
            'ninjas': Ninjas
        }
    }
</script>

<style>
</style>
