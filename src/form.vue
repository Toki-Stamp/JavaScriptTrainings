<template>
    <div id="app">
        <el-form ref="form-search-extended"
                 :model="formData"
                 class="form-search-extended">
            <!-- Всегда видимый контент  -->
            <template v-for="element in formDescription.main">
                <template v-if="element.item.type === 'input'">
                    <el-form-item :prop="element.prop"
                                  :key="element.prop"
                                  :label="element.label">
                        <el-tooltip :disabled="hasRoot(element, 'tooltip')" :placement="getProperty(element, 'tooltip', 'placement')">
                            <template #content>
                                <div v-html="getProperty(element, 'tooltip', 'content')"></div>
                            </template>
                            <el-input :placeholder="element.placeholder"
                                      :minlength="getProperty(element, 'validation','min')"
                                      :maxlength="getProperty(element, 'validation','max')"
                                      :show-word-limit="getProperty(element, 'validation','wordLimit')"/>
                        </el-tooltip>
                    </el-form-item>
                </template>
                <template v-else-if="element.item.type === 'select'"></template>
                <template v-else></template>
            </template>
            <!-- Скрытый за спойлером контент  -->
            <el-collapse @change="handleCollapseChange">
                <el-collapse-item :title="collapseTitle">
                    <el-button>Скрытая кнопка</el-button>
                </el-collapse-item>
            </el-collapse>
            <template v-for="collapse in formDescription.collapsed">
                <div :key="collapse.prop">- {{collapse.prop}}</div>
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
                formData       : {},
                controls       : {
                    isExpanded: false,
                },
                formDescription: {
                    main     : [
                        {
                            prop       : 'objectTypeForSearch',
                            item       : {
                                type   : 'select',
                                options: this.objectTypesForSearch
                            },
                            label      : 'Вид объекта',
                            placeholder: 'Выберите вид объекта для поиска...',
                        },
                        {
                            prop       : 'objectNumber',
                            item       : {type: 'input'},
                            label      : 'Номер объекта',
                            placeholder: 'Введите номер объекта...',
                            depData    : {
                                objectTypeForSearch: {
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
                            item   : {type: 'input-group'},
                            depData: {
                                objectTypeForSearch: {
                                    1: /* Земельный участок */ {
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
                                    },
                                    2: /* КС (НЗКС) */ {
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
                                        ],
                                    },
                                    3: /* ИП (ММ) */ {
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
                                        ],
                                    }
                                }
                            }
                        },
                        {
                            prop       : 'objectAddress',
                            item       : {
                                type    : 'input',
                                disabled: true
                            },
                            label      : 'Адрес объекта',
                            placeholder: 'Укажите адрес объекта...'
                        },
                    ],
                    collapsed: [
                        {
                            prop       : '_ex_objectType',
                            item       : {
                                type   : 'select',
                                options: this.availableObjectTypes
                            },
                            label      : 'Объект',
                            placeholder: 'Выберите (уточняющий) вид объекта...'
                        },
                        {
                            prop       : '_ex_objectPurpose',
                            item       : {
                                type   : 'select',
                                options: this.availableObjectPurposes
                            },
                            label      : 'Назначение',
                            placeholder: 'Выберите назначение объекта...'
                        },
                        {
                            prop : '_ex_objectSquare',
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
                            prop : '_ex_objectSquareLength',
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
                            prop : '_ex_objectCreationDate',
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
                            prop       : '_ex_objectStatus',
                            item       : {
                                type   : 'select',
                                options: this.objectStatuses
                            },
                            label      : 'Статус объекта',
                            placeholder: 'Выберите статус объекта...'
                        },
                        {
                            prop       : '_ex_objectWallsMaterial',
                            item       : {
                                type   : 'select',
                                options: this.objectWallsMaterials
                            },
                            label      : 'Материал стен',
                            placeholder: 'Выберите материал стен...'
                        },
                        {
                            prop : '_ex_objectRoomsNumber',
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
                            prop : '_ex_objectFloor',
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
                            prop       : '_ex_tor',
                            item       : {
                                type   : 'select',
                                options: this.regOrgs
                            },
                            label      : 'ТОР',
                            placeholder: 'Выберите ТОР...'
                        }
                    ],
                }
            }
        },
        computed: {
            ...mapGetters([
                'objectTypesForSearch',
                'objectTypes',
                'regOrgs',
                'objectPurposesLP',
                'objectPurposesCS',
                'objectPurposesNZCS',
                'objectPurposesIP',
                'objectPurposesMM',
                'objectStatuses',
                'objectWallsMaterials'
            ]),
            availableObjectTypes() {
                let type = parseInt(this.formData.objectTypeForSearch, 10);

                switch (type) {
                    case 1:
                }
                return type;
            },
            availableObjectPurposes() {
                let type = ((t1, t2) => {
                    console.log({t1, t2});
                    if (t2) {
                        return parseInt(t2, 10);
                    } else if (t1 && (parseInt(t1, 10) === 1)) {
                        return 3;
                    }
                })(this.formData.objectTypeForSearch, this.formData._extended_type);

                switch (type) {
                    case 1:
                        return this.objectPurposesCS;
                    case 2:
                        return this.objectPurposesIP;
                    case 3:
                        return this.objectPurposesLP;
                    case 4:
                        return this.objectPurposesNZCS;
                    case 5:
                        return this.objectPurposesMM;
                }

                return null;
            },
            collapseTitle() {
                return `${this.controls.isExpanded ? 'Скрыть' : 'Показать'} дополнительные критерии поиска`;
            }
        },
        watch   : {
            'formData.objectType'(newValue) {
                console.log('change type', newValue);
            },
            'formData._extended_type'(newValue) {
                console.log('change expanded object type', newValue);
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
            /* getters */
            getRoot(item, root) {
                let objectType = (this.formData.objectTypeForSearch || 1);

                if (root) {
                    if (this.hasRoot(item, root)) {
                        return item[root];
                    } else {
                        return item.depData.objectTypeForSearch[objectType][root];
                    }
                }
            },
            getProperty(item, root, property) {
                let rootObject = this.getRoot(item, root);

                if (rootObject && property) {
                    return rootObject[property];
                }
            },
            /* logic */
            hasRoot(item, root) {
                let objectType = this.formData.objectTypeForSearch;

                if (item[root]) {
                    return true;
                } else if (objectType && item.depData.objectTypeForSearch[objectType][root]) {
                    return true;
                }

                return false;
            },
            isDisabledTooltip(item) {
                let type = this.formData.objectTypeForSearch;

                if (item.tooltip) {
                    return false;
                } else if (type) {
                    return !item.depData.objectTypeForSearch[type].tooltip;
                }

                return true;
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
                } else if (object.depData.objectTypeForSearch[1].group) {
                    data = object.depData.objectTypeForSearch[1].group;
                }

                return (function () {
                    let result = {};

                    data.forEach((item, index) => result[(index + 1)] = null);

                    return result;
                })();
            }

            for (let key in this.formDescription) {
                this.formDescription[key].forEach(item => {
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