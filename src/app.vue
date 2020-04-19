<template>
    <div id="app">
        <el-form ref="form" v-bind:model="form" label-width="120px">
            <el-form-item label="Вид объекта" prop="types">
                <el-select v-model="form.selectedType" placeholder="Укажите вид объекта...">
                    <el-option v-for="type in types"
                               v-bind:key="type.code"
                               v-bind:value="type.code"
                               v-bind:label="type.name">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain v-on:click="mutateCodes({'hello': 'world'})">Mutate Codes</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import setEvent from './mixins/SetEvent.js';
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        name    : 'App',
        mixins  : [setEvent],
        data() {
            return {
                form: {
                    selectedType: null
                }
            }
        },
        computed: {
            types() {
                return this.$store.state.types;
            },
            ...mapGetters(['typesGetter'])
        },
        created() {
            this.setEvent({
                type    : 'keydown',
                trigger : {key: 'B', modifiers: ['alt']},
                callback: this.printState
            });
        },
        methods : {
            printState() {
                /* de-reactivate */
                console.log(JSON.parse(JSON.stringify({...this.form, ...this.types})));
            },
            ...mapActions(['mutateCodes'])
        }
    }
</script>

<style>
    #app {
        font-family:             "Times New Roman", serif;
        -webkit-font-smoothing:  antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align:              center;
        color:                   #2c3e50;
    }

    input, button {
        font-family: "Times New Roman", serif;
    }


    .el-form {
        width: 640px;
    }
</style>