<template>
    <div id="app">
        <h1>Transition Demo</h1>
        <hr>
        <h3>Transitions begins here</h3>
        <hr>
        <transition name="fade" mode="out-in">
            <component v-bind:is="view"></component>
        </transition>
        <hr>
        <h3>Transitions ends here</h3>
        <el-button v-on:click="handleClick">Next Component</el-button>
    </div>
</template>

<script>
    import c1 from "@/components/c1";
    import c2 from "@/components/c2";
    import c3 from "@/components/c3";
    import c4 from "@/components/c4";

    export default {
        name      : 'App',
        components: {c1, c2, c3, c4},
        data() {
            return {
                view: 'c1'
            }
        },
        computed  : {
        },
        watch     : {},
        methods   : {
            printClassifiers() {
                let data = this.$store.state.classifiers;

                for (let key in data) {
                    let size = (data[key].defData ? data[key].defData.length : data[key].length);

                    console.log(
                        '%c%s%c%s%c%s',
                        'color:lightgray; background: inherit', 'Classifier ',
                        'color:black; background: orange; font-weight: bold', `[ ${key} ]`,
                        'color:lightgray; background: inherit', ` Successfully Loaded. ${size} Record${((size > 1) ? 's' : '')} Found.`
                    );
                }
            },
            handleClick() {
                switch (this.view) {
                    case "c1":
                        this.view = 'c2';
                        break;
                    case "c2":
                        this.view = 'c3';
                        break;
                    case "c3":
                        this.view = 'c4';
                        break;
                    case "c4":
                        this.view = 'c1';
                        break;
                }
            }
        },
        created() {
        },
        mounted() {
            this.printClassifiers.call(this);
        },
    }
</script>

<style>
    #app {
        font-family:             "Times New Roman", serif;
        -webkit-font-smoothing:  antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align:              center;
        color:                   rgb(44, 62, 80);
    }

    p {
        color:       magenta;
        font-weight: bold;
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 250ms ease-in-out;
    }

    .fade-enter, .fade-leave-to {
        font-size:      5px;
        letter-spacing: 10px;
        opacity:        .25;
        filter:         blur(4px);
    }
</style>