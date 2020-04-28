<template>
    <div id="app">
        <el-form ref="form-search-extended"
                 v-bind:model="formData"
                 class="search-extended">
            <el-form-item v-bind:label="formDescription.objectType.label"
                          prop="objectType">
                <el-select v-model="formData.objectType"
                           v-bind:placeholder="formDescription.objectType.placeholder"
                           clearable>
                    <el-option v-for="type in objectTypesForSearch"
                               v-bind:key="type.code"
                               v-bind:value="type.code"
                               v-bind:label="type.name"/>
                </el-select>
            </el-form-item>
            <template v-if="formData.objectType">
                <el-form-item v-bind:label="formDescription.objectNumber.label"
                              prop="objectNumber">
                    <el-tooltip placement="bottom"
                                v-bind:hide-after="3000">
                        <template v-slot:content>
                            <div v-html="formDescription.objectNumber.validation[formData.objectType].tooltip"></div>
                        </template>
                        <el-input v-bind:placeholder="formDescription.objectNumber.placeholder"
                                  v-model="formData.objectNumber"
                                  clearable
                                  v-bind:minlength="formDescription.objectNumber.validation[formData.objectType].min"
                                  v-bind:maxlength="formDescription.objectNumber.validation[formData.objectType].max"
                                  show-word-limit/>
                    </el-tooltip>
                </el-form-item>
            </template>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    export default {
        name    : "the-form",
        data() {
            return {
                formData       : {
                    objectType  : null,
                    objectNumber: null
                },
                formDescription: {
                    objectType            : {
                        label      : 'Вид объекта',
                        placeholder: 'Выберите вид объекта...',
                    },
                    objectNumber          : {
                        label      : 'Номер объекта',
                        placeholder: 'Введите номер объекта...',
                        validation : {
                            1: {
                                _name  : 'Земельный участок',
                                size   : {min: 18, max: 18},
                                pattern: null,
                                tooltip: 'Маска для ввода номера объекта <strong>(18 цифр)</strong>, где:<br><hr>' +
                                    '– Первые <strong>10 цифр</strong> - Код СОАТО;<br>' +
                                    '– Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>' +
                                    '– Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке.<br>'
                            },
                            2: {},
                            3: {},
                            4: {}
                        }
                    },
                    objectNumberStructured: {
                        1: {
                            validation: {
                                size   : {min: null, max: null},
                                pattern: null
                            }
                        },
                        2: {
                            validation: {
                                size   : {min: null, max: null},
                                pattern: null
                            }
                        },
                        3: {
                            validation: {
                                size   : {min: null, max: null},
                                pattern: null
                            }
                        }
                    },
                    objectAddress         : {
                        label      : 'Адрес объекта',
                        placeholder: 'Укажите адрес объекта...'
                    },
                    _extended             : {
                        label: 'Дополнительные критерии поиска'
                    },
                    _extended_objectType  : {
                        label      : 'Объект',
                        placeholder: 'Выберите вид объекта'
                    },
                    _extended_tor         : {
                        label      : 'ТОР',
                        placeholder: 'Выберите ТОР...'
                    },
                    _extended_purpose     : {
                        label      : 'Назначение',
                        placeholder: 'Выберите назначение объекта...'
                    },
                    _extended_square      : {
                        label: 'Площадь'
                    },
                    _extended_squareLength: {
                        label: 'Площадь\nПротяжённость'
                    },
                    _extended_creationDate: {
                        label: 'Дата создания'
                    },
                    _extended_objectStatus: {
                        label      : 'Статус объекта',
                        placeholder: 'Выберите статус объекта...'
                    },
                    _extended_wallMaterial: {
                        label      : 'Материал стен',
                        placeholder: 'Выберите материал стен...'
                    },
                    _extended_roomsNumber : {
                        label: 'Количество комнат'
                    },
                    _extended_floor       : {
                        label: 'Этаж'
                    }
                }
            }
        },
        computed: {
            ...mapGetters(['objectTypesForSearch'])
        },
        watch   : {
            'formData.objectType'(newValue) {
                let value;

                switch (parseInt(newValue, 10)) {
                    case 1:
                        value = 1;
                        break;
                    case 2:
                        value = 2;
                        break;
                    case 3:
                        value = 3;
                        break;
                    case 4:
                        value = 4;
                        break;
                }

                console.log({newValue, value});
            },
        },
        methods : {
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
        font-family:             "Times New Roman", serif;
        -webkit-font-smoothing:  antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align:              center;
        color:                   rgb(44, 62, 80);
    }

    .fade-enter-active, .fade-leave-active {
        transition: all 250ms ease-in-out;
    }

    .fade-enter, .fade-leave-to {
        /*font-size:      5px;*/
        /*letter-spacing: 10px;*/
        opacity: .25;
        filter:  blur(4px);
    }

    /* :root */
    .search-extended {
        --form-width:                      640px;
        --form-item-label-width:           160px;
        --form-item-content-width:         calc(var(--form-width) - var(--form-item-label-width));
        --form-item-content-popover-width: calc(var(--form-width) - var(--form-item-label-width) - 26px);
        --border-color:                    rgb(220, 223, 230);
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
        text-align:  left;
    }

    .el-form.search-extended .el-form-item:not(.except-this-one) .el-form-item__content .el-input {
        width: var(--form-item-content-width);
    }

    /* количество введённых символов и общее число доступных для ввода "0/18" */
    .el-form.search-extended .el-form-item .el-form-item__content .el-input .el-input__count {
        color: rgb(220, 220, 220);
    }

    .el-form.search-extended .el-collapse {
        margin-top:    26px;
        margin-bottom: 26px;
        border-top:    1px solid var(--border-color);
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
        display:        inline-block;
        font-weight:    bold;
        padding-top:    12px;
        padding-bottom: 12px;
        transition:     none;
    }

    .el-form.search-extended .el-collapse .el-collapse-item__header i {
        margin-left: 10px;
    }

    .el-form.search-extended .el-collapse .el-collapse-item__content {
        padding-bottom: 0;
    }
</style>