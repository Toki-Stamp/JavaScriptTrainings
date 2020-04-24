<template>
    <div id="app">
        <h1>Transition Demo</h1>
        <hr>
        <h3>Transitions begins here</h3>
        <hr>
        <transition name="fade" mode="out-in">
            <div v-if="show" key="show">
                <p>{{jsonText}}</p>
            </div>
            <div v-else key="hide">
                <p>Nothing here...</p>
            </div>
        </transition>
        <hr>
        <h3>Transitions ends here</h3>
        <el-button v-on:click="handleClick">{{(show ? 'Hide' : 'Show')}} Content</el-button>
    </div>
</template>

<script>
    import json from './config/form'

    export default {
        name: 'App',
        data() {
            return {
                show: false
            }
        },
        computed: {
            jsonText() {
                return json;
            }
        },
        watch: {},
        methods: {
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
                this.show = !this.show;
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
        font-family: "Times New Roman", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: rgb(44, 62, 80);
    }

    p {
        color: magenta;
        font-weight: bold;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 250ms ease-in-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    /* :root */
    .search-extended {
        --form-width: 640px;
        --form-item-label-width: 160px;
        --form-item-content-width: calc(var(--form-width) - var(--form-item-label-width));
        --form-item-content-popover-width: calc(var(--form-width) - var(--form-item-label-width) - 26px);
        --border-color: rgb(220, 223, 230);
    }

    .el-form.search-extended {
        width: var(--form-width);
    }

    .el-form.search-extended input,
    .el-form.search-extended button {
        font-family: "Times New Roman", serif;
    }

    .el-form.search-extended .el-form-item {
        width: 100%;
        color: rgb(96, 98, 102);
    }

    .el-form.search-extended .el-form-item .el-form-item__label {
        width: var(--form-item-label-width);
    }

    .el-form.search-extended .el-form-item .el-form-item__content {
        margin-left: var(--form-item-label-width);
        text-align: left;
    }

    .el-form.search-extended .el-form-item:not(.except-this-one) .el-form-item__content .el-input {
        width: var(--form-item-content-width);
    }

    /* количество введённых символов и общее число доступных для ввода "0/18" */
    .el-form.search-extended .el-form-item .el-form-item__content .el-input .el-input__count {
        color: rgb(220, 220, 220);
    }

    .el-form.search-extended .el-collapse {
        margin-top: 26px;
        margin-bottom: 26px;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .el-form.search-extended .el-collapse .el-collapse-item__wrap,
    .el-form.search-extended .el-collapse .el-collapse-item__header:not(.is-active) {
        border-bottom: 1px solid var(--border-color);
    }

    .el-form.search-extended .el-collapse .el-collapse-item__wrap {
        padding-bottom: 2px;
    }

    .el-form.search-extended .el-collapse .el-collapse-item__header {
        display: inline-block;
        font-weight: bold;
        padding-top: 12px;
        padding-bottom: 12px;
        transition: none;
    }

    .el-form.search-extended .el-collapse .el-collapse-item__header i {
        margin-left: 10px;
    }

    .el-form.search-extended .el-collapse .el-collapse-item__content {
        padding-bottom: 0;
    }
</style>