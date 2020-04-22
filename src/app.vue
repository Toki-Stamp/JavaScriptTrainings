<template>
    <div id="app">
        <el-form ref="searchExtended" v-bind:model="formData">
            <el-form-item label="Вид объекта">
                <el-select v-model="formData.objectType.value" placeholder="Укажите вид объекта...">
                    <el-option v-for="type in objectTypes" v-bind:key="type.code" v-bind:value="type.code" v-bind:label="type.name"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Номер объекта">
                <el-popover placement="top-start" title="Маска для ввода номера объекта (посимвольно)" visible-arrow="true" popper-class="input-mask-popover"
                            trigger="focus">
                    <el-input slot="reference" placeholder="Укажите номер объекта..." v-model="formData.objectNumber.raw" clearable
                              v-bind:maxlength="formData.objectNumber.maxLength"
                              show-word-limit v-on:clear="clearField"></el-input>
                    <div class="input-mask-popover-slot">
                        – с <strong>1</strong> по <strong>10</strong> (10 цифр) - код СОАТО;<br>
                        – с <strong>11</strong> по <strong>12</strong> (2 цифры) - кадастровый блок земельного участка;<br>
                        – с <strong>13</strong> по <strong>18</strong> (6 цифр) - порядковый номера земельного участка в соответствующем кадастровом блоке;<br>
                    </div>
                </el-popover>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" plain>Empty</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import setEvent from './mixins/SetEvent.js';
    import {mapGetters} from 'vuex';

    const formDataDefaults = {
        objectType: {
            value: null,
            regexp: null
        },
        objectNumber: {
            maxLength: 18,
            raw: '',
            detailed: {
                soato: '',
                block: '',
                order: ''
            },
            pattern: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$'
        }
    };

    export default {
        name: 'App',
        mixins: [setEvent],
        data() {
            return {
                formData: JSON.parse(JSON.stringify(formDataDefaults))
            }
        },
        computed: {
            ...mapGetters(['objectTypes'])
        },
        watch: {
            'formData.objectNumber.raw': function (newValue) {
                if (newValue && (newValue.length === this.formData.objectNumber.maxLength)) {
                    const match = new RegExp(this.formData.objectNumber.pattern, 'g').exec(newValue);

                    if (match) {
                        this.formData.objectNumber.detailed.soato = match[1];
                        this.formData.objectNumber.detailed.block = match[2];
                        this.formData.objectNumber.detailed.order = match[3];
                    }
                } else if (!newValue) {
                    this.formData.objectNumber.detailed = Object.assign({}, formDataDefaults.objectNumber.detailed);
                }
            }
        },
        created() {
            this.setEvent({
                type: 'keydown',
                trigger: {key: 'B', modifiers: ['alt']},
                callback: this.printState
            });
        },
        mounted() {
            let data = this.$store.state.classifiers;

            for (let key in data) {
                let size = (data[key].defData ? data[key].defData.length : data[key].length);

                console.log(
                    '%c%s%c%s%c%s',
                    'color:lightgray; background: inherit', 'Classifier ',
                    'color:black; background: orange; font-weight: bold', '[ ' + key + ' ]',
                    'color:lightgray; background: inherit', ` Successfully Loaded. ${size} record${(size > 1) ? 's' : ''} found.`
                );
            }
        },
        methods: {
            clearField() {
                console.log('clear field', arguments);
            },
            printState() {
                /* de-reactivate */
                console.log(JSON.parse(JSON.stringify({...this.formData})));
            }
        }
    }
</script>

<style>
    :root {
        --form-width: 600px;
        --form-item-label-width: 120px;
        --form-item-content-width: calc(var(--form-width) - var(--form-item-label-width));
        --form-item-content-popover-width: calc(var(--form-width) - var(--form-item-label-width) - 27px);
    }

    #app {
        font-family: "Times New Roman", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    input, button {
        font-family: "Times New Roman", serif;
    }

    .el-form {
        width: var(--form-width);
        /*border: 2px solid black;*/
    }

    .el-form .el-form-item {
        width: 100%;
        /*border: 2px solid crimson;*/
    }

    .el-form .el-form-item .el-form-item__label {
        width: var(--form-item-label-width);
        /*border: 2px solid lawngreen;*/
    }

    .el-form .el-form-item .el-form-item__content {
        margin-left: var(--form-item-label-width);
        text-align: left;
        /*border: 2px solid fuchsia;*/
    }

    .el-form .el-form-item .el-form-item__content .el-input {
        width: var(--form-item-content-width);
        /*border: 2px solid orange;*/
    }

    .input-mask-popover {
        width: var(--form-item-content-popover-width);
        /*border: 2px solid green !important;*/
    }

    .input-mask-popover .input-mask-popover-slot {
        text-align: left;
        word-break: break-word;
        /*border: 2px solid orangered;*/
    }
</style>