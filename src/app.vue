<template>
    <div id="app">
        <el-form ref="formSearchExtended"
                 v-bind:model="formData"
                 v-bind:rules="formRules"
                 class="search-extended">
            <el-form-item label="Вид объекта"
                          prop="objectType">
                <el-select v-model="formData.objectType.value"
                           placeholder="Выберите вид объекта..."
                           clearable>
                    <el-option v-for="type in objectTypes"
                               v-bind:key="type.code"
                               v-bind:value="type.code"
                               v-bind:label="type.name"/>
                </el-select>
            </el-form-item>
            <el-divider/>
            <el-form-item label="Номер объекта">
                <el-tooltip placement="top"
                            v-bind:disabled="formData.objectNumber.disabled">
                    <div slot="content">
                        Маска для ввода номера объекта <strong>(18 цифр)</strong>, где:<br>
                        <hr>
                        – Первые <strong>10 цифр</strong> - Код СОАТО;<br>
                        – Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>
                        – Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке.<br>
                    </div>
                    <el-input placeholder="Введите номер объекта..."
                              v-model="formData.objectNumber.raw"
                              clearable
                              v-bind:minlength="formData.objectNumber.size"
                              v-bind:maxlength="formData.objectNumber.size"
                              show-word-limit
                              v-bind:disabled="formData.objectNumber.disabled"/>
                </el-tooltip>
            </el-form-item>
            <el-form-item class="except-this-one">
                <el-row :gutter="24">
                    <el-col :span="10">
                        <el-tooltip placement="top-start">
                            <div slot="content">Код СОАТО <strong>(10 цифр)</strong></div>
                            <el-input v-model="formData.objectNumber.detailed.soato"
                                      clearable
                                      minlength="10"
                                      maxlength="10"
                                      show-word-limit/>
                        </el-tooltip>
                    </el-col>
                    <el-col :span="6">
                        <el-tooltip placement="top">
                            <div slot="content">Кадастровый блок земельного участка <strong>(2 цифры)</strong></div>
                            <el-input v-model="formData.objectNumber.detailed.block"
                                      clearable
                                      minlength="2"
                                      maxlength="2"
                                      show-word-limit/>
                        </el-tooltip>
                    </el-col>
                    <el-col :span="8">
                        <el-tooltip placement="top-end">
                            <div slot="content">Порядковый номер земельного участка в соответствующем кадастровом блоке <strong>(6 цифр)</strong></div>
                            <el-input v-model="formData.objectNumber.detailed.order"
                                      clearable
                                      minlength="6"
                                      maxlength="6"
                                      show-word-limit/>
                        </el-tooltip>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-divider/>
            <el-form-item label="Адрес объекта">
                <el-input disabled/>
            </el-form-item>
            <el-collapse v-on:change="changeCollapse">
                <el-collapse-item v-bind:title="formData.extended.title" name="extended-search-params">
                    <el-form-item label="Ещё какая-то строка 1">
                        <el-input disabled/>
                    </el-form-item>
                    <el-divider/>
                    <el-form-item label="Ещё какая-то строка 2">
                        <el-input disabled/>
                    </el-form-item>
                </el-collapse-item>
            </el-collapse>
            <el-button v-on:click="handleSearch">Поиск</el-button>
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
            disabled: false,
            size: 18,
            raw: '',
            detailed: {
                soato: '',
                block: '',
                order: ''
            },
            pattern: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$'
        },
        extended: {state: false, title: 'Показать дополнительные критерии поиска'}
    };
    const eventOptions = {
        type: 'keydown',
        trigger: {key: 'B', modifiers: ['alt']},
        callback: null
    };

    export default {
        name: 'App',
        mixins: [setEvent],
        data() {
            return {
                formData: JSON.parse(JSON.stringify(formDataDefaults)),
                formRules: {
                    objectType: [
                        {
                            type: 'object',
                            required: true,
                            message: 'Внимание! Не выбран «Вид объекта»!',
                            trigger: 'change',
                            fields: {
                                code: {
                                    type: 'number',
                                    required: true,
                                    message: 'Внимание! Не выбран «Вид объекта»!'
                                }
                            }
                        }
                    ]
                }
            }
        },
        computed: {
            ...mapGetters(['objectTypes'])
        },
        watch: {
            //     'formData.objectNumber.raw': function (newValue) {
            //         if (newValue && (newValue.length === this.formData.objectNumber.size)) {
            //             const match = new RegExp(this.formData.objectNumber.pattern, 'g').exec(newValue);
            //
            //             if (match) {
            //                 this.formData.objectNumber.detailed.soato = match[1];
            //                 this.formData.objectNumber.detailed.block = match[2];
            //                 this.formData.objectNumber.detailed.order = match[3];
            //             }
            //         } else if (!newValue) {
            //             this.formData.objectNumber.detailed = Object.assign({}, formDataDefaults.objectNumber.detailed);
            //         }
            //     }
            'formData.extended.state'(state) {
                this.formData.extended.title = (state ? 'Скрыть' : 'Показать') + ' дополнительные критерии поиска';
            }
        },
        created() {
            this.setEvent({...eventOptions, callback: this.printState});
        },
        mounted() {
            this.printClassifiers.call(this);
        },
        methods: {
            printState() {
                /* de-reactivate */
                console.log(JSON.parse(JSON.stringify({...this.formData})), {formDataDefaults, eventOptions});
            },
            changeCollapse() {
                this.formData.extended.state = !this.formData.extended.state;
            },
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
            handleSearch() {
                console.log();
            }
        }
    }
</script>

<style>
    #app {
        font-family: "Times New Roman", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
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