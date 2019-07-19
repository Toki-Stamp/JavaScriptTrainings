<template>
    <div>
        <!--        <app-header v-bind:title="title.header" v-on:changeTitleEvent="changeTitle($event)"></app-header>-->
        <app-header v-bind:title="title.header"></app-header>
        <app-ninjas v-bind:list="ninjas"></app-ninjas>
        <app-footer v-bind:title="title.footer"></app-footer>
    </div>
</template>

<script>
    import Header from './components/Header.vue'
    import Footer from './components/Footer.vue'
    import Ninjas from './components/Ninjas.vue'

    export default {
        name      : 'App',
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-ninjas': Ninjas,
        },
        data() {
            return {
                ninjas: [
                    {name: 'Ryu', speciality: 'Vue Components', show: false},
                    {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                    {name: 'Hitoshi', speciality: 'Click Events', show: false},
                    {name: 'Tango', speciality: 'Conditionals', show: false},
                    {name: 'Kami', speciality: 'Webpack', show: false},
                    {name: 'Yoshi', speciality: 'Data Diggin', show: false}
                ],
                title : {
                    header: 'This is header component title passed as prop to nested component',
                    footer: 'This is footer component title passed as prop to nested component'
                }
            }
        },
        methods   : {
            changeTitle(changedTitle) {
                this.title.header = changedTitle;
            }
        }
    }
</script>

<style>
    header, footer {
        cursor: pointer;
    }
</style>