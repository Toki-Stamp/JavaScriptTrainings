<template>
    <div>
        <h1>Vue Blog Example</h1>
        <add-blog></add-blog>
    </div>
</template>

<script>
    import AddBlog from './components/AddBlog.vue';

    export default {
        name      : 'app',
        components: {
            'add-blog': AddBlog
        },
        data() {
            return {}
        },
        methods   : {}
    };
</script>

<style>
    *, *:before, *:after {
        box-sizing: border-box;
    }

    body {
        font-family: "Fira Mono", monospace;
    }
</style>
