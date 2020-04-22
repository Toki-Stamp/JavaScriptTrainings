<template>
    <div id="app">
        <el-form ref="searchExtended" v-bind:model="formData">
            <el-divider></el-divider>
            <el-form-item label="Вид объекта">
                <el-select v-model="formData.objectType.value" placeholder="Выберите вид объекта..." clearable>
                    <el-option v-for="type in objectTypes" v-bind:key="type.code" v-bind:value="type.code" v-bind:label="type.name"></el-option>
                </el-select>
            </el-form-item>
            <el-divider></el-divider>
            <el-form-item label="Номер объекта">
                <el-tooltip placement="top" v-bind:disabled="formData.objectNumber.disabled">
                    <div slot="content">
                        <strong>Маска для ввода номера объекта (18 цифр), где:</strong><br>
                        – Первые <strong>10 цифр</strong> - Код СОАТО;<br>
                        – Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>
                        – Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке;<br>
                    </div>
                    <el-input placeholder="Введите номер объекта..." v-model="formData.objectNumber.raw" clearable
                              v-bind:minlength="formData.objectNumber.size" v-bind:maxlength="formData.objectNumber.size" show-word-limit
                              v-on:clear="clearField" v-bind:disabled="formData.objectNumber.disabled"></el-input>
                </el-tooltip>
                <el-divider></el-divider>
                <el-button type="primary" plain v-on:click="formData.objectNumber.disabled = !formData.objectNumber.disabled">
                    {{formData.objectNumber.disabled ? 'Enable' : 'Disable'}} Input
                </el-button>
            </el-form-item>
            <el-form-item class="except-this-one">
                <el-row :gutter="18">
                    <el-col :span="10">
                        <el-tooltip placement="top-start">
                            <div slot="content">Код СОАТО</div>
                            <el-input v-model="formData.objectNumber.detailed.soato" clearable minlength="10" maxlength="10" show-word-limit
                                      v-on:clear="clearField"></el-input>
                        </el-tooltip>
                    </el-col>
                    <el-col :span="6">
                        <el-tooltip placement="top">
                            <div slot="content">Кадастровый блок земельного участка</div>
                            <el-input v-model="formData.objectNumber.detailed.block" clearable minlength="2" maxlength="2" show-word-limit
                                      v-on:clear="clearField"></el-input>
                        </el-tooltip>
                    </el-col>
                    <el-col :span="8">
                        <el-tooltip placement="top-end">
                            <div slot="content">Порядковый номер земельного участка в соответствующем кадастровом блоке</div>
                            <el-input v-model="formData.objectNumber.detailed.order" clearable minlength="6" maxlength="6" show-word-limit
                                      v-on:clear="clearField"></el-input>
                        </el-tooltip>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-divider></el-divider>
        </el-form>
    </div>
</template>

<script>
    import setEvent from './mixins/SetEvent.js';
    import {mapGetters} from 'vuex';

    const formDataDefaults = {
        objectType  : {
            value : null,
            regexp: null
        },
        objectNumber: {
            disabled: false,
            size    : 18,
            raw     : '',
            detailed: {
                soato: '',
                block: '',
                order: ''
            },
            pattern : '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$'
        }
    };

    export default {
        name    : 'App',
        mixins  : [setEvent],
        data() {
            return {
                formData: JSON.parse(JSON.stringify(formDataDefaults))
            }
        },
        computed: {
            ...mapGetters(['objectTypes'])
        },
        watch   : {
            'formData.objectNumber.raw': function (newValue) {
                if (newValue && (newValue.length === this.formData.objectNumber.size)) {
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
                type    : 'keydown',
                trigger : {key: 'B', modifiers: ['alt']},
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
        methods : {
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
        --form-width:                      600px;
        --form-item-label-width:           120px;
        --form-item-content-width:         calc(var(--form-width) - var(--form-item-label-width));
        --form-item-content-popover-width: calc(var(--form-width) - var(--form-item-label-width) - 26px);
    }

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
        text-align:  left;
        /*border: 2px solid fuchsia;*/
    }

    .el-form .el-form-item:not(.except-this-one) .el-form-item__content .el-input {
        width: var(--form-item-content-width);
        /*border: 2px solid orange;*/
    }

    .el-form .el-form-item .el-form-item__content .el-input .el-input__count {
        color: gainsboro;
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