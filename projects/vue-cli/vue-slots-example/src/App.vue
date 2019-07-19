<template>
    <div>
        <div id="controls">
            <button v-on:click="changeComponentType('form-one')">Form One</button>
            <button v-on:click="changeComponentType('form-two')">Form Two</button>
        </div>
        <keep-alive>
            <component v-bind:is="componentType"></component>
        </keep-alive>
    </div>
</template>

<script>
    import FormOne from './components/FormOne'
    import FormTwo from './components/FormTwo'

    export default {
        name      : 'app',
        components: {
            'form-one': FormOne,
            'form-two': FormTwo
        },
        data() {
            return {
                componentType: 'form-one'
            }
        },
        methods   : {
            changeComponentType(componentType) {
                (this.componentType != componentType) && (this.componentType = componentType);
            }
        }
    }
</script>

<style>
    *, *:before, *:after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
</style>
