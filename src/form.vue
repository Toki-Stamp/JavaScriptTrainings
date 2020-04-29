<template>
    <div id="app">
        <el-form ref="form-search-extended"
                 v-bind:model="formData"
                 class="search-extended">
            <!-- Вид объекта -->
            <el-form-item v-bind:label="formDescription.objectType.label"
                          prop="objectType">
                <el-select v-model="formData.objectType"
                           v-bind:placeholder="formDescription.objectType.placeholder">
                    <el-option v-for="type in objectTypesForSearch"
                               v-bind:key="type.code"
                               v-bind:value="type.code"
                               v-bind:label="type.name"/>
                </el-select>
            </el-form-item>
            <template v-if="formData.objectType">
                <!-- Номер объекта -->
                <el-form-item v-bind:label="formDescription.objectNumber.label"
                              prop="objectNumber">
                    <el-tooltip placement="bottom">
                        <template v-slot:content>
                            <div v-html="formDescription.objectNumber.validation[formData.objectType].tooltip"></div>
                        </template>
                        <el-input v-bind:placeholder="formDescription.objectNumber.placeholder"
                                  v-model="formData.objectNumber"
                                  v-bind:minlength="formDescription.objectNumber.validation[formData.objectType].size.min"
                                  v-bind:maxlength="formDescription.objectNumber.validation[formData.objectType].size.max"
                                  show-word-limit/>
                    </el-tooltip>
                </el-form-item>
                <!-- Структурированный номер объекта -->
                <el-form-item class="except-this-one">
                    <el-row :gutter="24">
                        <el-col v-for="(item, key) in formDescription.objectNumberStructured.validation[formData.objectType]"
                                v-bind:span="item.span"
                                v-bind:key="key">
                            <template v-if="item.tooltip">
                                <el-tooltip v-bind:placement="item.placement">
                                    <template v-slot:content>
                                        <div v-html="item.tooltip"></div>
                                    </template>
                                    <template v-if="item.type === 'input'">
                                        <el-input v-model="formData.objectNumberStructured[key]"
                                                  v-bind:minlength="item.size.min"
                                                  v-bind:maxlength="item.size.max"
                                                  show-word-limit/>
                                    </template>
                                    <template v-else-if="item.type === 'select'">
                                        <el-select v-model="formData.objectNumberStructured[key]"
                                                   placeholder=""
                                                   v-bind:disabled="(item.options.length <= 1)">
                                            <el-option v-for="(char, key) in item.options"
                                                       v-bind:key="key"
                                                       v-bind:value="char"
                                                       v-bind:label="char"/>
                                        </el-select>
                                    </template>
                                </el-tooltip>
                            </template>
                            <template v-else>
                                <template v-if="item.type === 'input'">
                                    <el-input v-model="formData.objectNumberStructured[key]"
                                              v-bind:minlength="item.size.min"
                                              v-bind:maxlength="item.size.max"
                                              show-word-limit/>
                                </template>
                                <template v-else-if="item.type === 'select'">
                                    <el-select v-model="formData.objectNumberStructured[key]"
                                               placeholder=""
                                               v-bind:disabled="(item.options.length <= 1)">
                                        <el-option v-for="(char, key) in item.options"
                                                   v-bind:key="key"
                                                   v-bind:value="char"
                                                   v-bind:label="char"/>
                                    </el-select>
                                </template>
                            </template>
                        </el-col>
                    </el-row>
                </el-form-item>
                <!-- Дополнительные критерии поиска -->
                <el-collapse v-on:change="formData._extended = !formData._extended">
                    <el-collapse-item v-bind:title="`${(formData._extended ? 'Скрыть' : 'Показать')} дополнительные критерии поиска`">
                        <el-form-item label="Ещё какая-то строка 1">
                            <el-input disabled/>
                        </el-form-item>
                        <el-form-item label="Ещё какая-то строка 2">
                            <el-input disabled/>
                        </el-form-item>
                    </el-collapse-item>
                </el-collapse>
            </template>
            <!-- Адрес объекта -->
            <el-form-item v-bind:label="formDescription.objectAddress.label"
                          prop="objectAddress">
                <el-input v-bind:placeholder="formDescription.objectAddress.placeholder" disabled/>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name: "the-form",
        data() {
            return {
                formData: {
                    objectType: null,
                    objectNumber: null,
                    objectNumberStructured: {
                        1: null,
                        2: null,
                        3: null
                    },
                    objectAddress: null,
                    _extended: false
                },
                formDescription: {
                    objectType: {
                        label: 'Вид объекта',
                        placeholder: 'Выберите вид объекта...',
                    },
                    objectNumber: {
                        label: 'Номер объекта',
                        placeholder: 'Введите номер объекта...',
                        validation: {
                            1: /* Земельный участок */ {
                                size: {min: 18, max: 18},
                                pattern: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$',
                                tooltip: 'Маска для ввода номера объекта <strong>(18 цифр)</strong>, где:<br><hr>' +
                                    '– Первые <strong>10 цифр</strong> - Код СОАТО;<br>' +
                                    '– Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>' +
                                    '– Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке.'
                            },
                            2: /* КС (НЗКС) */ {
                                size: {min: 5, max: 34},
                                pattern: '^([1-9][0-9]{2})([CcUu])([1-9][0-9]{0,29})$',
                                tooltip: 'Маска для ввода номера объекта, где:<br><hr>' +
                                    '– Первые <strong>3 цифры</strong> - Код ТОР;<br>' +
                                    '– Следующий <strong>1 символ C или U</strong> - Литера;<br>' +
                                    '– Последние <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>'
                            },
                            3: /* ИП (ММ) */ {
                                size: {min: 5, max: 34},
                                pattern: '^([1-9][0-9]{2})([Dd])([1-9][0-9]{0,29})$',
                                tooltip: 'Маска для ввода номера объекта, где:<br><hr>' +
                                    '– Первые <strong>3 цифры</strong> - Код ТОР;<br>' +
                                    '– Следующий <strong>1 символ D</strong> - Литера;<br>' +
                                    '– Последующие <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>'
                            },
                            4: /* ПИК */ null
                        }
                    },
                    objectNumberStructured: {
                        validation: {
                            1: /* Земельный участок */ {
                                1: {
                                    type: 'input',
                                    placement: 'top-start',
                                    size: {min: 10, max: 10},
                                    pattern: '^[1-9][0-9]{9}$',
                                    span: 10,
                                    tooltip: 'Код СОАТО <strong>(10 цифр)</strong>'
                                },
                                2: {
                                    type: 'input',
                                    placement: 'top',
                                    size: {min: 2, max: 2},
                                    pattern: '^[0-9]{2}$',
                                    span: 6,
                                    tooltip: 'Кадастровый блок земельного участка <strong>(2 цифры)</strong>'
                                },
                                3: {
                                    type: 'input',
                                    placement: 'top-end',
                                    size: {min: 6, max: 6},
                                    pattern: '^[0-9]{6}$',
                                    span: 8,
                                    tooltip: 'Порядковый номер земельного участка в соответствующем кадастровом блоке <strong>(6 цифр)</strong>'
                                }
                            },
                            2: /* КС (НЗКС) */ {
                                1: {
                                    type: 'input',
                                    placement: 'top-start',
                                    size: {min: 3, max: 3},
                                    pattern: '^[1-9][0-9]{2}$',
                                    span: 5,
                                    tooltip: 'Код ТОР <strong>(3 цифры)</strong>'
                                },
                                2: {
                                    type: 'select',
                                    placement: 'top',
                                    size: {min: 1, max: 1},
                                    options: ['C', 'U'],
                                    span: 4,
                                    tooltip: 'Литера'
                                },
                                3: {
                                    type: 'input',
                                    placement: 'top-end',
                                    size: {min: 1, max: 30},
                                    pattern: '^[1-9][0-9]{0,29}$',
                                    span: 15,
                                    tooltip: 'Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong>'
                                }
                            },
                            3: /* ИП (ММ) */ {
                                1: {
                                    type: 'input',
                                    placement: 'top-start',
                                    size: {min: 3, max: 3},
                                    pattern: '^[1-9][0-9]{2}$',
                                    span: 5,
                                    tooltip: 'Код ТОР <strong>(3 цифры)</strong>'
                                },
                                2: {
                                    type: 'select',
                                    placement: 'top',
                                    size: {min: 1, max: 1},
                                    options: ['D'],
                                    span: 4,
                                    tooltip: 'Литера'
                                },
                                3: {
                                    type: 'input',
                                    placement: 'top-end',
                                    size: {min: 1, max: 30},
                                    pattern: '^[1-9][0-9]{0,29}$',
                                    span: 15,
                                    tooltip: 'Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong>'
                                }
                            },
                            4: /* ПИК */ null
                        }
                    },
                    objectAddress: {
                        label: 'Адрес объекта',
                        placeholder: 'Укажите адрес объекта...'
                    },
                    _extended_objectType: {
                        label: 'Объект',
                        placeholder: 'Выберите вид объекта'
                    },
                    _extended_tor: {
                        label: 'ТОР',
                        placeholder: 'Выберите ТОР...'
                    },
                    _extended_purpose: {
                        label: 'Назначение',
                        placeholder: 'Выберите назначение объекта...'
                    },
                    _extended_square: {
                        label: 'Площадь'
                    },
                    _extended_squareLength: {
                        label: 'Площадь\nПротяжённость'
                    },
                    _extended_creationDate: {
                        label: 'Дата создания'
                    },
                    _extended_objectStatus: {
                        label: 'Статус объекта',
                        placeholder: 'Выберите статус объекта...'
                    },
                    _extended_wallMaterial: {
                        label: 'Материал стен',
                        placeholder: 'Выберите материал стен...'
                    },
                    _extended_roomsNumber: {
                        label: 'Количество комнат'
                    },
                    _extended_floor: {
                        label: 'Этаж'
                    }
                }
            }
        },
        computed: {
            ...mapGetters(['objectTypesForSearch'])
        },
        watch: {
            'formData.objectType'(newValue) {
                switch (parseInt(newValue, 10)) {
                    case 1:
                        break;
                    case 2:
                    case 3:
                        /* значение литеры по умолчанию */
                        this.formData.objectNumberStructured[2] = this.formDescription.objectNumberStructured.validation[newValue][2].options[0];
                        break;
                    case 4:
                        break;
                }

                console.log('change type', newValue);
            },
        },
        methods: {
            printClassifiers() {
                let classifiers = this.$store.state.classifiers;

                for (let classifier in classifiers) {
                    let size = (classifiers[classifier].defData ? classifiers[classifier].defData.length : classifiers[classifier].length);

                    console.log(
                        '%c%s%c%s%c%s',
                        'color:lightgray; background: inherit', 'Classifier ',
                        'color:black; background: orange; font-weight: bold', `[ ${classifier} ]`,
                        'color:lightgray; background: inherit', ` Successfully Loaded. ${size} Record${((size > 1) ? 's' : '')} Found.`
                    );
                }
            },
        },
        mounted() {
            this.printClassifiers.call(this);
        },
    }
</script>

<style>
    #form {
        font-family: "Times New Roman", serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: rgb(44, 62, 80);
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 250ms ease-in-out;
    }

    .fade-enter, .fade-leave-to {
        /*font-size:      5px;*/
        /*letter-spacing: 10px;*/
        opacity: .25;
        filter: blur(4px);
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