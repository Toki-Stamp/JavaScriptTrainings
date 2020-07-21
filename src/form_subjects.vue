<template>
    <div id="app">
        <el-form :ref="form.name"
                 :class="form.class"
                 :model="form.data">
            <!-- Период внесения -->
            <el-form-item
                    :label="form.fields.subjectEnteringPeriodFrom.label">
                <el-row :gutter="24">
                    <el-col :span="12"
                            class="first">
                        <el-date-picker
                                v-model="form.data.subjectEnteringPeriodFrom"
                                :placeholder="form.fields.subjectEnteringPeriodFrom.placeholder"
                                type="date"
                                format="dd.MM.yyyy"
                                popper-class="nca-date-picker"
                                align="left"
                                :editable="true">
                        </el-date-picker>
                    </el-col>
                    <el-col :span="12"
                            class="last">
                        <el-date-picker
                                v-model="form.data.subjectEnteringPeriodTo"
                                :placeholder="form.fields.subjectEnteringPeriodTo.placeholder"
                                type="date"
                                format="dd.MM.yyyy"
                                align="right"
                                :editable="true">
                        </el-date-picker>
                    </el-col>
                </el-row>
            </el-form-item>
            <!-- Вид субъекта -->
            <el-form-item prop="subjectType"
                          :label="form.fields.subjectType.label">
                <el-select v-model="form.data.subjectType"
                           @change="handleSubjectTypeChange"
                           :placeholder="getPlaceholder(form.fields.subjectType, {type: 'select'})"
                           clearable>
                    <el-option v-for="option in subjectTypes"
                               :key="option.code"
                               :value="option.code"
                               :label="option.name"/>
                </el-select>
            </el-form-item>
            <!-- Страна субъекта -->
            <el-form-item prop="subjectCountry"
                          v-if="form.triggers.visibility.subjectCountry"
                          :class="(form.triggers.visibility.subjectCountry ? 'shake': '')"
                          :label="form.fields.subjectCountry.label">
                <el-select v-model="form.data.subjectCountry"
                           :placeholder="form.fields.subjectCountry.placeholder"
                           multiple
                           clearable>
                    <el-option v-for="option in subjectCountries"
                               :key="option.code"
                               :value="option.code"
                               :label="option.name"/>
                </el-select>
            </el-form-item>
            <!-- Статус субъекта -->
            <el-form-item prop="subjectStatus"
                          :label="form.fields.subjectStatus.label">
                <el-select v-model="form.data.subjectStatus"
                           :placeholder="getPlaceholder({label: form.fields.subjectStatus.label, type: 'select'})"
                           clearable>
                    <el-option v-for="option in subjectStatuses"
                               :key="option.code"
                               :value="option.code"
                               :label="option.name"/>
                </el-select>
            </el-form-item>
            <!-- Адрес субъекта -->
            <el-form-item prop="subjectAddress"
                          :class="form.fields.subjectAddress.class"
                          :label="form.fields.subjectAddress.label">
                <el-input v-model="form.data.subjectAddress"
                          :placeholder="getPlaceholder({label: form.fields.subjectAddress.label, action: 'добавьте'})"
                          readonly>
                    <template v-if="!form.data.subjectAddress">
                        <el-tooltip slot="append"
                                    :hide-after="2000"
                                    :open-delay="250"
                                    :enterable="false"
                                    content="Добавить адрес"
                                    placement="top-end"
                                    popper-class="search-extended-tooltip">
                            <el-button @click="form.data.subjectAddress = 'Какой-то адрес...'"
                                       icon="el-icon-plus"
                                       class="first"/>
                        </el-tooltip>
                    </template>
                    <template v-else>
                        <el-tooltip slot="append"
                                    :hide-after="2000"
                                    :open-delay="250"
                                    :enterable="false"
                                    content="Редактировать адрес"
                                    placement="top-end"
                                    popper-class="search-extended-tooltip">
                            <el-button @click="form.data.subjectAddress += ' (отредактирован)'"
                                       icon="el-icon-edit"
                                       class="first"/>
                        </el-tooltip>
                        <el-tooltip slot="append"
                                    :hide-after="2000"
                                    :open-delay="250"
                                    :enterable="false"
                                    content="Удалить адрес"
                                    placement="top-end"
                                    popper-class="search-extended-tooltip">
                            <el-button @click="form.data.subjectAddress = null"
                                       icon="el-icon-delete"
                                       class="last"/>
                        </el-tooltip>
                    </template>
                </el-input>
            </el-form-item>
            <!-- Фмилия -->
            <el-form-item prop="subjectSurname"
                          v-if="form.triggers.visibility.subjectSurname"
                          :class="(form.triggers.visibility.subjectSurname ? 'shake': '')"
                          :label="form.fields.subjectSurname.label">
                <el-input v-model="form.data.subjectSurname"
                          :placeholder="form.fields.subjectSurname.placeholder"
                          clearable>
                </el-input>
            </el-form-item>
            <!-- Собственное имя -->
            <el-form-item prop="subjectPersonalName"
                          v-if="form.triggers.visibility.subjectPersonalName"
                          :class="(form.triggers.visibility.subjectPersonalName ? 'shake': '')"
                          :label="form.fields.subjectPersonalName.label">
                <el-input v-model="form.data.subjectPersonalName"
                          :placeholder="getPlaceholder(form.fields.subjectPersonalName, {type: 'input'})"
                          clearable>
                </el-input>
            </el-form-item>
            <!-- Отчество -->
            <el-form-item prop="subjectPatronymic"
                          v-if="form.triggers.visibility.subjectPatronymic"
                          :class="(form.triggers.visibility.subjectPatronymic ? 'shake': '')"
                          :label="form.fields.subjectPatronymic.label">
                <el-input v-model="form.data.subjectPatronymic"
                          :placeholder="getPlaceholder(form.fields.subjectPatronymic, {type: 'input'})"
                          clearable>
                </el-input>
            </el-form-item>
            <!-- Идентификационный номер -->
            <el-form-item prop="subjectIdentificationNumber"
                          v-if="form.triggers.visibility.subjectIdentificationNumber"
                          :class="(form.triggers.visibility.subjectIdentificationNumber ? 'shake': '')"
                          class="two-rows-label"
                          :label="form.fields.subjectIdentificationNumber.label">
                <el-input v-model="form.data.subjectIdentificationNumber"
                          :placeholder="getPlaceholder(form.fields.subjectIdentificationNumber, {type: 'input'})"
                          clearable>
                </el-input>
            </el-form-item>
            <!-- Дата рождения -->
            <el-form-item prop="subjectBirthDate"
                          v-if="form.triggers.visibility.subjectBirthDate"
                          :class="(form.triggers.visibility.subjectBirthDate ? 'shake': '')"
                          :label="form.fields.subjectBirthDate.label">
                <el-date-picker
                        v-model="form.data.subjectBirthDate"
                        :placeholder="form.fields.subjectBirthDate.placeholder"
                        type="date"
                        format="dd.MM.yyyy"
                        align="right"
                        :editable="true">
                </el-date-picker>
            </el-form-item>
            <!-- Наименование -->
            <el-form-item prop="subjectOrganizationName"
                          v-if="form.triggers.visibility.subjectOrganizationName"
                          :class="(form.triggers.visibility.subjectOrganizationName ? 'shake': '')"
                          :label="form.fields.subjectOrganizationName.label">
                <el-input v-model="form.data.subjectOrganizationName"
                          :placeholder="getPlaceholder(form.fields.subjectOrganizationName, {type: 'input'})"
                          clearable>
                </el-input>
            </el-form-item>
            <!-- УНП -->
            <el-form-item prop="subjectPayersAccountNumber"
                          v-if="form.triggers.visibility.subjectPayersAccountNumber"
                          :class="(form.triggers.visibility.subjectPayersAccountNumber ? 'shake': '')"
                          :label="form.fields.subjectPayersAccountNumber.label">
                <el-input v-model="form.data.subjectPayersAccountNumber"
                          :placeholder="form.fields.subjectPayersAccountNumber.placeholder"
                          clearable>
                </el-input>
            </el-form-item>
            <!-- Регистрационный номер -->
            <el-form-item prop="subjectRegistrationNumber"
                          v-if="form.triggers.visibility.subjectRegistrationNumber"
                          :class="(form.triggers.visibility.subjectRegistrationNumber ? 'shake': '')"
                          :label="form.fields.subjectRegistrationNumber.label">
                <el-input v-model="form.data.subjectRegistrationNumber"
                          :placeholder="getPlaceholder(form.fields.subjectRegistrationNumber, {type: 'input'})"
                          clearable>
                </el-input>
            </el-form-item>
            <!-- Организационно-правовая форма -->
            <el-form-item prop="subjectOrganizationalAndLegalForm"
                          v-if="form.triggers.visibility.subjectOrganizationalAndLegalForm"
                          :class="(form.triggers.visibility.subjectOrganizationalAndLegalForm ? 'shake': '')"
                          class="two-rows-label"
                          :label="form.fields.subjectOrganizationalAndLegalForm.label">
                <el-select v-model="form.data.subjectOrganizationalAndLegalForm"
                           :placeholder="form.fields.subjectOrganizationalAndLegalForm.placeholder"
                           clearable>
                    <el-option v-for="option in subjectOrganizationalAndLegalForms"
                               :key="option.code"
                               :value="option.code"
                               :label="option.name"/>
                </el-select>
            </el-form-item>
            <!-- Дата регистрации -->
            <el-form-item prop="subjectRegistrationDate"
                          v-if="form.triggers.visibility.subjectRegistrationDate"
                          :class="(form.triggers.visibility.subjectRegistrationDate ? 'shake': '')"
                          :label="form.fields.subjectRegistrationDate.label">
                <el-date-picker
                        v-model="form.data.subjectRegistrationDate"
                        :placeholder="form.fields.subjectRegistrationDate.placeholder"
                        type="date"
                        format="dd.MM.yyyy"
                        align="right"
                        :editable="true">
                </el-date-picker>
            </el-form-item>
            <el-divider></el-divider>
            <!-- Кнопки управления -->
            <el-form-item>
                <el-button type="primary" @click="submitForm">Submit</el-button>
                <el-button type="danger" @click="resetForm">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    const fields = {
        subjectEnteringPeriodFrom: {label: 'Период внесения', placeholder: 'Укажите дату начала периода...'},
        subjectEnteringPeriodTo: {label: 'Период внесения', placeholder: 'Укажите дату конца периода...'},
        subjectType: {label: 'Вид субъекта'},
        subjectCountry: {label: 'Страна субъекта', placeholder: 'Выберите страну субъекта...'},
        subjectStatus: {label: 'Статус субъекта'},
        subjectAddress: {label: 'Адрес субъекта', 'class': 'subject-address'},
        subjectSurname: {label: 'Фамилия', placeholder: 'Введите фамилию...'},
        subjectPersonalName: {label: 'Собственное имя'},
        subjectPatronymic: {label: 'Отчество'},
        subjectIdentificationNumber: {label: 'Идентификационный номер'},
        subjectBirthDate: {label: 'Дата рождения', placeholder: 'Укажите дату рождения...'},
        subjectOrganizationName: {label: 'Наименование'},
        subjectPayersAccountNumber: {label: 'УНП', placeholder: 'Введите УНП...'},
        subjectRegistrationNumber: {label: 'Регистрационный номер'},
        subjectOrganizationalAndLegalForm: {label: 'Организационно-правовая форма', placeholder: 'Укажите организационно-правовую форму...'},
        subjectRegistrationDate: {label: 'Дата регистрации', placeholder: 'Укажите дату регистрации...'}, // дата регистрации
    };

    function initData(object) {
        return Object.keys(JSON.parse(JSON.stringify(object))).reduce((accumulator, key) => Object.defineProperty(accumulator, key, {
            value: null, writable: true, enumerable: true, configurable: true
        }), {});
    }

    export default {
        name: "subjects-search-extended-form",
        data() {
            return {
                form: {
                    name: 'subjects-search-extended-form',
                    class: 'subjects-search-extended',
                    triggers: {
                        visibility: {
                            subjectCountry: false,
                            subjectSurname: false,
                            subjectPersonalName: false,
                            subjectPatronymic: false,
                            subjectIdentificationNumber: false,
                            subjectBirthDate: false,
                            subjectOrganizationName: false,
                            subjectPayersAccountNumber: false,
                            subjectRegistrationNumber: false,
                            subjectOrganizationalAndLegalForm: false,
                            subjectRegistrationDate: false
                        }
                    },
                    fields: Object.assign({}, JSON.parse(JSON.stringify(fields))),
                    data: initData.call(this, fields),
                    rules: {
                        objectTypeForSearch: {
                            required: true,
                            validator: this.validateSelectChange,
                            trigger: 'change',
                            message: 'Пожалуйста, выберите вид объекта для поиска!'
                        },
                        objectTOR: {
                            required: true,
                            validator: this.validateSelectChange,
                            trigger: 'change',
                            message: 'Пожалуйста, укажите организацию по регистрации!'
                        },
                        objectNumber: {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            message: 'Пожалуйста, введите корректный номер объекта, согласно указанной маске!',
                            pattern: {
                                1: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$',
                                2: '^([1-9][0-9]{2})([CcUu])([1-9][0-9]{0,29})$',
                                3: '^([1-9][0-9]{2})([Dd])([1-9][0-9]{0,29})$'
                            }
                        },
                        'objectNumberStructured.1': {
                            validator: this.validateObjectNumberStructured,
                            trigger: 'change',
                            index: 0,
                        },
                        'objectNumberStructured.2': {
                            validator: this.validateObjectNumberStructured,
                            trigger: 'change',
                            index: 1,
                        },
                        'objectNumberStructured.3': {
                            validator: this.validateObjectNumberStructured,
                            trigger: 'change',
                            index: 2,
                        },
                        'objectSquareLength.1': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: {
                                1: '^(?!0\\d|$)\\d*(\\.\\d{1,4})?$',
                                2: '^(?!0\\d|$)\\d*(\\.\\d{1,2})?$',
                                3: '^(?!0\\d|$)\\d*(\\.\\d{1,2})?$',
                            }
                        },
                        'objectSquareLength.2': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: {
                                1: '^(?!0\\d|$)\\d*(\\.\\d{1,4})?$',
                                2: '^(?!0\\d|$)\\d*(\\.\\d{1,2})?$',
                                3: '^(?!0\\d|$)\\d*(\\.\\d{1,2})?$',
                            }
                        },
                        'objectFloorsAboveGround.1': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: '^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$'
                        },
                        'objectFloorsAboveGround.2': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: '^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$'
                        },
                        'objectFloorsUnderGround.1': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: '^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$'
                        },
                        'objectFloorsUnderGround.2': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: '^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$'
                        },
                        'objectRoomsNumber.1': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: '^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$'
                        },
                        'objectRoomsNumber.2': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: '^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$'
                        },
                        'objectFloor.1': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: '^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$'
                        },
                        'objectFloor.2': {
                            validator: this.validateInputChange,
                            trigger: 'change',
                            pattern: '^([0-9]|[1-8][0-9]|9[0-9]|[1-4][0-9]{2}|500)$'
                        },
                    },
                    datepicker: {
                        editable: true,
                        options: {
                            firstDayOfWeek: 1,
                            disabledDate: this.disabledDate
                        }
                    },
                }
            }
        },
        computed: {
            ...mapGetters({
                subjectTypes: 'getSubjectTypes',
                subjectStatuses: 'getSubjectStatuses',
                subjectCountries: 'getSubjectCountries',
                subjectOrganizationalAndLegalForms: 'getSubjectOrganizationalAndLegalForms'
            })
        },
        watch: {},
        methods: {
            getPlaceholder(field, options) {
                let placeholder = 'Укажите'; // по умолчанию

                if (field && (typeof field === 'object') && field !== null) {
                    if (field.label && (typeof field.label === 'string')) {
                        if (options && (typeof options === 'object') && options !== null) {
                            if (options.type && !options.action) {
                                if (options.type === 'input') {
                                    placeholder = 'Введите';
                                } else if (options.type === 'select') {
                                    placeholder = 'Выберите'
                                }
                            } else if (options.action && !options.type) {
                                /* капитализация (т.е. первая буква загланая) */
                                placeholder = `${options.action.charAt(0).toUpperCase() + options.action.slice(1)}`;
                            }
                        }

                        placeholder += ` ${field.label.toLowerCase()}...`;
                    }
                }

                return placeholder;
            },
            handleSubjectTypeChange(value) {
                const keyName = 'visibility';
                const visibility = this.form.triggers[keyName];

                this.resetTriggers(keyName);

                if (value) {
                    value = parseInt(value, 10);

                    /* для разных subjectType (Вид субъекта) доступен свой набор полей */
                    if ([3, 5, 6, 8, 9, 10, 14].includes(value)) {
                        visibility.subjectCountry = true;
                    }
                    if (![1, 2, 3, 7, 8, 9, 10, 11].includes(value)) {
                        visibility.subjectSurname = true;
                        visibility.subjectPersonalName = true;
                        visibility.subjectPatronymic = true;
                        visibility.subjectIdentificationNumber = true;
                        visibility.subjectBirthDate = true;
                    }
                    if (![4, 5, 6].includes(value)) {
                        visibility.subjectOrganizationName = true;
                        visibility.subjectPayersAccountNumber = true;
                        visibility.subjectRegistrationNumber = true;
                        visibility.subjectOrganizationalAndLegalForm = true;
                        visibility.subjectRegistrationDate = true;
                    }
                }
            },
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
            resetTriggers(name, value) {
                if (name && this.form.triggers[name]) {
                    Object
                        .keys(this.form.triggers[name])
                        .forEach(key => (this.form.triggers[name][key] = (value || false)));
                }
            },
            submitForm() {
            },
            resetForm() {
                this.resetTriggers('visibility');
                this.form.data = initData.call(this, fields);
            }
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
    .subjects-search-extended {
        --form-width: 800px;
        --form-item-label-width: 160px;
        --form-item-content-width: calc(var(--form-width) - var(--form-item-label-width));
        --form-item-content-popover-width: calc(var(--form-width) - var(--form-item-label-width) - 26px);
        --border-color: rgb(220, 223, 230);
    }

    .subjects-search-extended {
        width: var(--form-width);

    }

    .subjects-search-extended input {
        font-family: "Times New Roman", serif;
    }

    .subjects-search-extended .el-form-item {
        width: 100%;
        color: rgb(96, 98, 102);
    }

    .subjects-search-extended .el-form-item.two-rows-label .el-form-item__label {
        line-height: 19px;
    }

    .subjects-search-extended .el-form-item .el-form-item__label {
        width: var(--form-item-label-width);
    }

    .subjects-search-extended .el-form-item .el-form-item__content {
        margin-left: var(--form-item-label-width);
        text-align: left;
    }

    .subjects-search-extended .el-form-item .el-form-item__content .el-select, .el-input {
        width: 100% !important;
    }

    .subjects-search-extended .el-form-item .el-form-item__content .el-row {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

    .subjects-search-extended .el-form-item .el-form-item__content .el-row > .el-col.first {
        padding-left: 0 !important;
    }

    .subjects-search-extended .el-form-item .el-form-item__content .el-row > .el-col.last {
        padding-right: 0 !important;
    }

    .subjects-search-extended .el-form-item .el-form-item__content .el-input-group__prepend {
        width: 24px;
        text-align: center;
    }

    .subjects-search-extended .el-form-item.subject-address .el-form-item__content .el-input-group__append button {
        transition: color 250ms ease-in-out;
        font-size: 16px;
    }

    .subjects-search-extended .el-form-item.subject-address .el-form-item__content .el-input-group__append button.first:hover {
        color: #409eff;
    }

    .subjects-search-extended .el-form-item.subject-address .el-form-item__content .el-input-group__append button.last:hover {
        color: #f56c6c;
    }

    /* количество введённых символов и общее число доступных для ввода "0/18" */
    .subjects-search-extended .el-form-item .el-form-item__content .el-input .el-input__count {
        color: rgb(220, 220, 220);
    }

    .subjects-search-extended .el-collapse {
        margin-top: 26px;
        margin-bottom: 26px;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .subjects-search-extended .el-collapse .el-collapse-item__wrap,
    .subjects-search-extended .el-collapse .el-collapse-item__header:not(.is-active) {
        border-bottom: 1px solid var(--border-color);
    }

    .subjects-search-extended .el-collapse .el-collapse-item__wrap {
        padding-bottom: 2px;
    }

    .subjects-search-extended .el-collapse .el-collapse-item__header {
        display: inline-block;
        font-weight: bold;
        padding-top: 12px;
        padding-bottom: 12px;
        transition: none;
    }

    .subjects-search-extended .el-collapse .el-collapse-item__header i {
        margin-left: 10px;
    }

    .subjects-search-extended .el-collapse .el-collapse-item__content {
        padding-bottom: 0;
    }

    .el-select-dropdown.object-purpose {
        width: 380px;
    }

    .el-tooltip__popper.search-extended-tooltip > div:first-child > strong {
        color: #66b1ff;
    }

    @-webkit-keyframes shake {
        0%, to {
            -webkit-transform: translateZ(0);
            transform: translateZ(0)
        }

        10%, 30%, 50%, 70%, 90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0)
        }

        20%, 40%, 60%, 80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0)
        }
    }

    @keyframes shake {
        0%, to {
            -webkit-transform: translateZ(0);
            transform: translateZ(0)
        }

        10%, 30%, 50%, 70%, 90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform: translate3d(-10px, 0, 0)
        }

        20%, 40%, 60%, 80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform: translate3d(10px, 0, 0)
        }
    }

    .shake {
        -webkit-animation-name: shake;
        animation-name: shake;
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both;
    }

    .nca-date-picker .el-date-table td.default {
        color: #66b1ff;
        font-weight: 700;
    }

</style>