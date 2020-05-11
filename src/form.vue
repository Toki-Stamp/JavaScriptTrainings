<template>
    <!-- CTRL + ALT + G -->
    <div id="app" @keydown.ctrl.alt.71="handleSecretKeydown">
        <el-form ref="form-search-extended"
                 :model="formData"
                 class="search-extended">
            <!-- ID Объекта -->
            <template v-if="controls.isObjectIDVisible">
                <el-form-item :prop="formDesc.main[0].prop"
                              :label="formDesc.main[0].label">
                    <el-input v-model="formData[formDesc.main[0].prop]"
                              :placeholder="formDesc.main[0].placeholder"/>
                </el-form-item>
            </template>
            <!-- Вид объекта для поиска (без ПИК) -->
            <el-form-item :prop="formDesc.main[1].prop"
                          :label="formDesc.main[1].label">
                <el-select v-model="formData[formDesc.main[1].prop]"
                           :placeholder="formDesc.main[1].placeholder"
                           clearable>
                    <el-option v-for="item in getOptions(formDesc.main[1].item.options)"
                               :key="item.code"
                               :value="item.code"
                               :label="item.name"/>
                </el-select>
            </el-form-item>
            <!-- Номер объекта -->
            <el-form-item :prop="formDesc.main[2].prop"
                          :label="formDesc.main[2].label">
                <template v-if="!!formData[formDesc.main[2].depData.depProp]">
                    <el-tooltip :placement="formDesc.main[2].depData.depValues[formData[formDesc.main[2].depData.depProp]].tooltip.placement">
                        <template #content>
                            <div v-html="formDesc.main[2].depData.depValues[formData[formDesc.main[2].depData.depProp]].tooltip.content"></div>
                        </template>
                        <el-input v-model="formData[formDesc.main[2].prop]"
                                  :placeholder="formDesc.main[2].placeholder"
                                  :minlength="formDesc.main[2].depData.depValues[formData[formDesc.main[2].depData.depProp]].validation.min"
                                  :maxlength="formDesc.main[2].depData.depValues[formData[formDesc.main[2].depData.depProp]].validation.max"
                                  :show-word-limit="formDesc.main[2].depData.depValues[formData[formDesc.main[2].depData.depProp]].validation.wordLimit"/>
                    </el-tooltip>
                </template>
                <template v-else>
                    <el-input v-model="formData[formDesc.main[2].prop]"
                              :placeholder="formDesc.main[2].placeholder"/>
                </template>
            </el-form-item>
            <!-- Структурированный номер объекта -->
            <template v-if="!!formData[formDesc.main[3].depData.depProp]">
                {{formData[formDesc.main[3].depData.depProp]}}
                <el-form-item :prop="formDesc.main[3].prop"
                              class="object-number-structured">
                    <el-row :gutter="24">
                        <el-col v-for="(item, key) in formDesc.main[3].depData.depValues[formData[formDesc.main[3].depData.depProp]].item.group"
                                v-bind:span="item.span"
                                v-bind:key="key">
                            {{item}}
                            <template v-if="item.type === 'input'">
                                <el-tooltip :placement="item.tooltip.placement">
                                    <template #content>
                                        <div v-html="item.tooltip.content"></div>
                                    </template>
                                    <el-input v-model="formData[formDesc.main[3].prop][key]"
                                              :minlength="item.validation.min"
                                              :maxlength="item.validation.max"
                                              :show-word-limit="item.validation.wordLimit"/>
                                </el-tooltip>
                            </template>
                            <template v-else-if="item.type === 'select'">
                                <el-select v-model="formData[formDesc.main[3].prop][key]">
                                    <el-option v-for="(char, key) in item.options"
                                               v-bind:key="key"
                                               v-bind:value="char"
                                               v-bind:label="char"/>
                                </el-select>
                            </template>
                        </el-col>
                    </el-row>
                </el-form-item>
                hello
            </template>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import Vue from 'vue';

    export default {
        name    : "the-form",
        data() {
            return {
                formData: {},
                formDesc: {
                    main     : [
                        {
                            prop       : 'objectID',
                            item       : {
                                type: 'input'
                            },
                            label      : 'ID объекта',
                            placeholder: 'Введите ID объекта...'
                        },
                        {
                            prop       : 'objectTypeForSearch',
                            item       : {
                                type   : 'select',
                                options: 'objectTypesForSearchList'
                            },
                            label      : 'Вид объекта',
                            placeholder: 'Выберите вид объекта для поиска...'
                        },
                        {
                            prop       : 'objectNumber',
                            item       : {
                                type   : 'input',
                                visible: true
                            },
                            label      : 'Номер объекта',
                            placeholder: 'Введите номер объекта...',
                            depData    : {
                                depProp  : 'objectTypeForSearch',
                                depValues: {
                                    1: /* Земельный участок */ {
                                        tooltip   : {
                                            placement: 'bottom',
                                            content  : 'Маска для ввода номера объекта <strong>(18 цифр)</strong>, где:<br><hr>' +
                                                '– Первые <strong>10 цифр</strong> - Код СОАТО;<br>' +
                                                '– Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>' +
                                                '– Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке.'
                                        },
                                        validation: {
                                            min      : 18,
                                            max      : 18,
                                            pattern  : '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$',
                                            wordLimit: true
                                        }
                                    },
                                    2: /* КС (НЗКС) */ {
                                        tooltip   : {
                                            placement: 'bottom',
                                            content  : 'Маска для ввода номера объекта, где:<br><hr>' +
                                                '– Первые <strong>3 цифры</strong> - Код ТОР;<br>' +
                                                '– Следующий <strong>1 символ C или U</strong> - Литера;<br>' +
                                                '– Последние <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>'
                                        },
                                        validation: {
                                            min      : 5,
                                            max      : 34,
                                            pattern  : '^([1-9][0-9]{2})([CcUu])([1-9][0-9]{0,29})$',
                                            wordLimit: true
                                        }
                                    },
                                    3: /* ИП (ММ) */ {
                                        tooltip   : {
                                            placement: 'bottom',
                                            content  : 'Маска для ввода номера объекта, где:<br><hr>' +
                                                '– Первые <strong>3 цифры</strong> - Код ТОР;<br>' +
                                                '– Следующий <strong>1 символ D</strong> - Литера;<br>' +
                                                '– Последующие <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>'
                                        },
                                        validation: {
                                            min      : 5,
                                            max      : 34,
                                            pattern  : '^([1-9][0-9]{2})([Dd])([1-9][0-9]{0,29})$',
                                            wordLimit: true
                                        }
                                    }
                                }
                            }
                        },
                        {
                            prop   : 'objectNumberStructured',
                            item   : {
                                type: 'input-group'
                            },
                            depData: {
                                depProp  : 'objectTypeForSearch',
                                depValues: {
                                    1: /* Земельный участок */ {
                                        item: {
                                            group: [
                                                {
                                                    item      : {type: 'input'},
                                                    span      : 10,
                                                    validation: {
                                                        min      : 10,
                                                        max      : 10,
                                                        pattern  : '^[1-9][0-9]{9}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip   : {
                                                        placement: 'top-start',
                                                        content  : 'Код СОАТО <strong>(10 цифр)</strong>'
                                                    }
                                                },
                                                {
                                                    item      : {type: 'input'},
                                                    span      : 6,
                                                    validation: {
                                                        min      : 2,
                                                        max      : 2,
                                                        pattern  : '^[0-9]{2}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip   : {
                                                        placement: 'top',
                                                        content  : 'Кадастровый блок земельного участка <strong>(2 цифры)</strong>'
                                                    }
                                                },
                                                {
                                                    item      : {type: 'input'},
                                                    span      : 8,
                                                    validation: {
                                                        min      : 6,
                                                        max      : 6,
                                                        pattern  : '^[0-9]{6}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip   : {
                                                        placement: 'top-end',
                                                        content  : 'Порядковый номер земельного участка в соответствующем кадастровом блоке <strong>(6 цифр)</strong>'
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    2: /* КС (НЗКС) */ {
                                        item: {
                                            group: [
                                                {
                                                    item      : {type: 'input'},
                                                    span      : 5,
                                                    validation: {
                                                        min      : 3,
                                                        max      : 3,
                                                        pattern  : '^[1-9][0-9]{2}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip   : {
                                                        placement: 'top-start',
                                                        content  : 'Код ТОР <strong>(3 цифры)</strong>'
                                                    }
                                                },
                                                {
                                                    item      : {
                                                        type   : 'select',
                                                        options: ['C', 'U']
                                                    },
                                                    span      : 4,
                                                    validation: {
                                                        min    : 1,
                                                        max    : 1,
                                                        pattern: '^[CcUu]$',
                                                    },
                                                    tooltip   : {
                                                        placement: 'top',
                                                        content  : 'Литера <strong>(1 буква латинского алфавита)</strong>'
                                                    }
                                                },
                                                {
                                                    item      : {type: 'input'},
                                                    span      : 15,
                                                    validation: {
                                                        min      : 1,
                                                        max      : 30,
                                                        pattern  : '^[1-9][0-9]{0,29}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip   : {
                                                        placement: 'top-end',
                                                        content  : 'Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong>'
                                                    }
                                                }
                                            ]
                                        }
                                    },
                                    3: /* ИП (ММ) */ {
                                        item: {
                                            group: [
                                                {
                                                    item      : {type: 'input'},
                                                    span      : 5,
                                                    validation: {
                                                        min      : 3,
                                                        max      : 3,
                                                        pattern  : '^[1-9][0-9]{2}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip   : {
                                                        placement: 'top-start',
                                                        content  : 'Код ТОР <strong>(3 цифры)</strong>'
                                                    }
                                                },
                                                {
                                                    item      : {
                                                        type   : 'select',
                                                        options: ['D']
                                                    },
                                                    span      : 4,
                                                    validation: {
                                                        min    : 1,
                                                        max    : 1,
                                                        pattern: '^[Dd]$',
                                                    },
                                                    tooltip   : {
                                                        placement: 'top',
                                                        content  : 'Литера <strong>(1 буква латинского алфавита)</strong>'
                                                    }
                                                },
                                                {
                                                    item      : {type: 'input'},
                                                    span      : 15,
                                                    validation: {
                                                        min      : 1,
                                                        max      : 30,
                                                        pattern  : '^[1-9][0-9]{0,29}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip   : {
                                                        placement: 'top-end',
                                                        content  : 'Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong>'
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                }
                            }
                        },
                        {
                            prop       : 'objectAddress',
                            item       : {
                                type    : 'input',
                                disabled: true,
                                visible : true
                            },
                            label      : 'Адрес объекта',
                            placeholder: 'Укажите адрес объекта...'
                        },
                    ],
                    collapsed: [
                        {
                            prop       : 'objectType',
                            item       : {
                                type   : 'select',
                                options: 'availableObjectTypes'
                            },
                            label      : 'Объект',
                            placeholder: 'Выберите (уточняющий) вид объекта...'
                        },
                        {
                            prop       : 'objectPurpose',
                            item       : {
                                type   : 'select',
                                options: 'availableObjectPurposes'
                            },
                            label      : 'Назначение',
                            placeholder: 'Выберите назначение объекта...'
                        },
                        {
                            prop : 'objectSquare',
                            item : {
                                type : 'input-group',
                                group: [
                                    {
                                        item   : {type: 'input'},
                                        span   : 12,
                                        prepend: 'От'
                                    },
                                    {
                                        item   : {type: 'input'},
                                        span   : 12,
                                        prepend: 'До'
                                    },
                                ]
                            },
                            label: 'Площадь, га'
                        },
                        {
                            prop : 'objectSquareLength',
                            item : {
                                type : 'input-group',
                                group: [
                                    {
                                        item   : {type: 'input'},
                                        span   : 12,
                                        prepend: 'От'
                                    },
                                    {
                                        item   : {type: 'input'},
                                        span   : 12,
                                        prepend: 'До'
                                    },
                                ]
                            },
                            label: 'Площадь, кв.м.\n(Протяжённость, м.п.)'
                        },
                        {
                            prop : 'objectCreationDate',
                            item : {
                                type : 'input-group',
                                group: [
                                    {
                                        item   : {
                                            type    : 'input',
                                            disabled: true
                                        },
                                        span   : 12,
                                        prepend: 'C'
                                    },
                                    {
                                        item   : {
                                            type    : 'input',
                                            disabled: true
                                        },
                                        span   : 12,
                                        prepend: 'По'
                                    },
                                ]
                            },
                            label: 'Дата создания'
                        },
                        {
                            prop       : 'objectStatus',
                            item       : {
                                type   : 'select',
                                options: this.objectStatuses
                            },
                            label      : 'Статус объекта',
                            placeholder: 'Выберите статус объекта...'
                        },
                        {
                            prop       : 'objectWallsMaterial',
                            item       : {
                                type   : 'select',
                                options: 'objectWallsMaterialsList'
                            },
                            label      : 'Материал стен',
                            placeholder: 'Выберите материал стен...'
                        },
                        {
                            prop : 'objectRoomsNumber',
                            item : {
                                type : 'input-group',
                                group: [
                                    {
                                        item   : {type: 'input'},
                                        span   : 12,
                                        prepend: 'От'
                                    },
                                    {
                                        item   : {type: 'input'},
                                        span   : 12,
                                        prepend: 'До'
                                    },
                                ]
                            },
                            label: 'Количество комнат'
                        },
                        {
                            prop : 'objectFloor',
                            item : {
                                type : 'input-group',
                                group: [
                                    {
                                        item   : {type: 'input'},
                                        span   : 12,
                                        prepend: 'От'
                                    },
                                    {
                                        item   : {type: 'input'},
                                        span   : 12,
                                        prepend: 'До'
                                    },
                                ]
                            },
                            label: 'Этаж'
                        },
                        {
                            prop       : 'tor',
                            item       : {
                                type   : 'select',
                                options: 'regOrgsList'
                            },
                            label      : 'ТОР',
                            placeholder: 'Выберите ТОР...'
                        }
                    ],
                },
                controls: {
                    isExpanded       : false,
                    isObjectIDVisible: false,
                }
            }
        },
        computed: {
            ...mapGetters([
                'objectTypesForSearchList',
                'objectTypesList',
                'regOrgsList',
                'objectPurposesLPList',
                'objectPurposesCSList',
                'objectPurposesNZCSList',
                'objectPurposesIPList',
                'objectPurposesMMList',
                'objectStatusesList',
                'objectWallsMaterialsList'
            ]),
            collapseTitle() {
                return `${this.controls.isExpanded ? 'Скрыть' : 'Показать'} дополнительные критерии поиска`;
            }
        },
        watch   : {
            'formData.objectType'(newValue, preValue) {
                console.log(`change type from ${preValue} to ${newValue}`);
            }
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
            /* events */
            handleCollapseChange() {
                this.controls.isExpanded = !this.controls.isExpanded;
            },
            getOptions(key) {
                return this[key];
            },
            getProperty(object, property, deep, native) {
                let result = null;
                let key;
                let recursive = (deep || true);

                function isObject(o) {
                    return o && (typeof o === 'object')
                }

                function scan(o, p) {
                    if (o[p]) {
                        return o[p];
                    } else {
                        Object.entries(o).filter(([, value]) => {
                            return isObject(value);
                        }).forEach(([, value]) => {
                            if (!result) {
                                result = scan(value, p);
                            }
                        })
                    }

                    return result;
                }

                if (isObject(object)) {
                    if (recursive && object.depData && scan(object.depData, property)) {
                        key = Object.keys(object.depData).shift();

                        if (this.formData[key]) {
                            result = scan(object.depData[key][this.formData[key]], property);
                        } else {
                            return null;
                        }
                    } else if (!recursive) {
                        return object[property];
                    }

                    result = scan(object, property);
                }

                return (native ? this[result] : result);
            },
            handleSecretKeydown() {
                this.controls.isObjectIDVisible = !this.controls.isObjectIDVisible;
            },
            isVisible(object) {
                if (object.depData) {
                    const key = Object.keys(object.depData).shift();

                    return !!this.formData[key];
                }

                return false;
            }
        },
        mounted() {
            this.printClassifiers.call(this);
        },
        created() {
            function setDefaultValue(object) {
                let data;

                if (['input', 'select'].includes(object.item.type)) {
                    return null;
                } else if (object.item.group) {
                    data = object.item.group;
                } else if (object.depData.depValues[1].item.group) {
                    data = object.depData.depValues[1].item.group;
                }

                return (function () {
                    let result = {};

                    data.forEach((item, index) => result[(index + 1)] = null);

                    return result;
                })();
            }

            for (let key in this.formDesc) {
                this.formDesc[key].forEach(item => {
                    Vue.set(this.formData, item.prop, setDefaultValue(item));
                }, this);
            }
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
        --form-width:                      800px;
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

    .search-extended .el-form-item .el-form-item__label {
        width: var(--form-item-label-width);
    }

    .search-extended .el-form-item .el-form-item__content {
        margin-left: var(--form-item-label-width);
        text-align:  left;
    }

    /*.el-form.search-expanded .el-form-item:not(.object-number-structured) .el-form-item__content .el-input {*/
    /*    width: var(--form-item-content-width);*/
    /*}*/

    .search-extended .el-form-item .el-form-item__content .el-select, .el-input {
        width: 100% !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row {
        margin-left:  0 !important;
        margin-right: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row > .el-col.from {
        padding-left: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row > .el-col.to {
        padding-right: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-input-group__prepend {
        width:      24px;
        text-align: center;
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

    .el-select-dropdown.object-purpose {
        width: 380px;
    }
</style>