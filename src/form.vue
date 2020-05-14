<template>
    <!-- CTRL + ALT + G -->
    <div id="app" @keydown.ctrl.alt.71="handleSecretKeydown" tabindex="-1">
        <el-form ref="form-search-extended"
                 :model="formData"
                 class="search-extended">
            <!-- Всегда видимый контент  -->
            <template v-if="!!formDescription.main">
                <!-- ID Объекта -->
                <template v-if="controls.isObjectIDVisible">
                    <el-form-item :prop="formDescription.main[0].prop"
                                  :label="formDescription.main[0].label">
                        <el-input v-model="formData[formDescription.main[0].prop]"
                                  :placeholder="formDescription.main[0].placeholder"
                                  :class="formDescription.main[0].class"/>
                    </el-form-item>
                </template>
                <!-- Вид объекта для поиска (без ПИК) -->
                <el-form-item :prop="formDescription.main[1].prop"
                              :label="formDescription.main[1].label">
                    <el-select v-model="formData[formDescription.main[1].prop]"
                               :placeholder="formDescription.main[1].placeholder"
                               clearable>
                        <el-option v-for="item in getOptions(formDescription.main[1].item.options)"
                                   :key="item.code"
                                   :value="item.code"
                                   :label="item.name"/>
                    </el-select>
                </el-form-item>
                <!-- Номер объекта -->
                <el-form-item :prop="formDescription.main[2].prop"
                              :label="formDescription.main[2].label">
                    <template v-if="!!formData[formDescription.main[2].depData.depProp]">
                        <el-tooltip :placement="formDescription.main[2].depData.depValues[formData[formDescription.main[2].depData.depProp]].tooltip.placement">
                            <template #content>
                                <div v-html="formDescription.main[2].depData.depValues[formData[formDescription.main[2].depData.depProp]].tooltip.content"></div>
                            </template>
                            <el-input v-model="formData[formDescription.main[2].prop]"
                                      :placeholder="formDescription.main[2].placeholder"
                                      :minlength="formDescription.main[2].depData.depValues[formData[formDescription.main[2].depData.depProp]].validation.min"
                                      :maxlength="formDescription.main[2].depData.depValues[formData[formDescription.main[2].depData.depProp]].validation.max"
                                      :show-word-limit="formDescription.main[2].depData.depValues[formData[formDescription.main[2].depData.depProp]].validation.wordLimit"/>
                        </el-tooltip>
                    </template>
                    <template v-else>
                        <el-input v-model="formData[formDescription.main[2].prop]"
                                  :placeholder="formDescription.main[2].placeholder"/>
                    </template>
                </el-form-item>
                <!-- Структурированный номер объекта -->
                <template v-if="!!formData[formDescription.main[3].depData.depProp]">
                    <el-form-item :prop="formDescription.main[3].prop"
                                  :class="formDescription.main[3].class">
                        <el-row :gutter="24">
                            <el-col v-for="(groupItem, index) in formDescription.main[3].depData.depValues[formData[formDescription.main[3].depData.depProp]].item.group"
                                    :span="groupItem.span"
                                    :key="index"
                                    :class="groupItem.class">
                                <template v-if="groupItem.item.type === 'input'">
                                    <el-tooltip :placement="groupItem.tooltip.placement">
                                        <template #content>
                                            <div v-html="groupItem.tooltip.content"></div>
                                        </template>
                                        <el-input v-model="formData[formDescription.main[3].prop][(index + 1)]"
                                                  :minlength="groupItem.validation.min"
                                                  :maxlength="groupItem.validation.max"
                                                  :show-word-limit="groupItem.validation.wordLimit"/>
                                    </el-tooltip>
                                </template>
                                <template v-else>
                                    <el-select v-model="formData[formDescription.main[3].prop][(index + 1)]"
                                               :placeholder="groupItem.placeholder">
                                        <el-option v-for="char in groupItem.item.options"
                                                   :key="char"
                                                   :value="char"
                                                   :label="char"/>
                                    </el-select>
                                </template>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </template>
                <!-- Адрес объекта -->
                <el-form-item :prop="formDescription.main[4].prop"
                              :label="formDescription.main[4].label">
                    <el-input :placeholder="formDescription.main[4].placeholder"
                              :disabled="formDescription.main[4].item.disabled"/>
                </el-form-item>
            </template>
            <!-- Скрытый за спойлером контент  -->
            <template v-if="!!formDescription.collapsed">
                <el-collapse @change="handleCollapseChange">
                    <el-collapse-item :title="collapseTitle">
                        <!-- ТОР -->
                        <el-form-item :prop="formDescription.collapsed[0].prop"
                                      :label="formDescription.collapsed[0].label">
                            <el-select v-model="formData[formDescription.collapsed[0].prop]"
                                       :placeholder="formDescription.collapsed[0].placeholder"
                                       clearable>
                                <el-option v-for="org in regOrgsList"
                                           :key="org.idReg"
                                           :value="org.idReg"
                                           :label="`${org.idReg} - ${org.orgShortName}`"/>
                            </el-select>
                        </el-form-item>
                        <!-- Объект -->
                        <template v-if="formData.objectTypeForSearch && (formData.objectTypeForSearch > 1)">
                            <el-form-item :prop="formDescription.collapsed[1].prop"
                                          :label="formDescription.collapsed[1].label">
                                <el-select v-model="formData[formDescription.collapsed[1].prop]"
                                           :placeholder="formDescription.collapsed[1].placeholder"
                                           clearable>
                                    <el-option v-for="option in getOptions(formDescription.collapsed[1].item.options)"
                                               :key="option.code"
                                               :value="option.code"
                                               :label="option.name"/>
                                </el-select>
                            </el-form-item>
                        </template>
                        <div v-evaluate="formDescription.collapsed[1].expression">
                            HHOORAY!
                        </div>
                        <div v-if="evaluateExpression(formDescription.collapsed[1].expression)">
                            HHOORAY!
                        </div>
                        <!-- Назначение -->
                        <template v-if="!!formData.objectTypeForSearch">
                            <el-form-item :prop="formDescription.collapsed[2].prop"
                                          :label="formDescription.collapsed[2].label">
                                <el-select v-model="formData[formDescription.collapsed[2].prop]"
                                           :placeholder="formDescription.collapsed[2].placeholder"
                                           clearable>
                                    <el-option v-for="option in getOptions(formDescription.collapsed[2].item.options)"
                                               :key="option.code"
                                               :value="option.code"
                                               :label="option.name"/>
                                </el-select>
                            </el-form-item>
                        </template>
                        <!-- Площадь / протяжённость -->
                        <template v-if="!!formData.objectTypeForSearch">
                            <el-form-item :prop="formDescription.collapsed[3].prop"
                                          :class="formDescription.collapsed[3].depData.depValues[formData[formDescription.collapsed[3].depData.depProp]].class"
                                          :label="formDescription.collapsed[3].depData.depValues[formData[formDescription.collapsed[3].depData.depProp]].label">
                                <template v-if="formDescription.collapsed[3].item.group">
                                    <el-row :gutter="24">
                                        <el-col v-for="(item, index) in formDescription.collapsed[3].item.group"
                                                :key="index"
                                                :span="item.span"
                                                :class="item.class">
                                            <el-input v-model="formData[formDescription.collapsed[3].prop][(index + 1)]">
                                                <template v-if="!!item.prepend" #prepend>{{item.prepend}}</template>
                                            </el-input>
                                        </el-col>
                                    </el-row>
                                </template>
                            </el-form-item>
                        </template>
                        <!-- Дата создания -->
                        <el-form-item :prop="formDescription.collapsed[4].prop"
                                      :label="formDescription.collapsed[4].label">
                            <template v-if="formDescription.collapsed[4].item.group">
                                <el-row :gutter="24">
                                    <el-col v-for="(item, index) in formDescription.collapsed[4].item.group"
                                            :key="index"
                                            :span="item.span"
                                            :class="item.class">
                                        <el-input v-model="formData[formDescription.collapsed[4].prop][(index + 1)]"
                                                  :disabled="item.item.disabled">
                                            <template v-if="!!item.prepend" #prepend>{{item.prepend}}</template>
                                        </el-input>
                                    </el-col>
                                </el-row>
                            </template>
                        </el-form-item>
                        <!-- Статус объекта -->
                        <el-form-item :prop="formDescription.collapsed[5].prop"
                                      :label="formDescription.collapsed[5].label">
                            <el-select v-model="formData[formDescription.collapsed[5].prop]"
                                       :placeholder="formDescription.collapsed[5].placeholder"
                                       clearable>
                                <el-option v-for="item in getOptions(formDescription.collapsed[5].item.options)"
                                           :key="item.code"
                                           :value="item.code"
                                           :label="item.name"/>
                            </el-select>
                        </el-form-item>
                    </el-collapse-item>
                </el-collapse>
            </template>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import Vue from 'vue';

    const setDefaultValue = (object) => {
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
    };
    const initValues = (context) => {
        console.log(context);

        if (context.formDescription) {
            for (let key in context.formDescription) {
                context.formDescription[key].forEach(item => {
                    Vue.set(context.formData, item.prop, setDefaultValue(item));
                }, context);
            }
        }
    };

    export default {
        name: "the-form",
        data() {
            return {
                some: -5,
                formDescription: {
                    main: [
                        {
                            prop: 'objectID',
                            item: {
                                type: 'input'
                            },
                            label: 'ID объекта',
                            placeholder: 'Введите ID объекта...',
                            class: 'shake animated'
                        },
                        {
                            prop: 'objectTypeForSearch',
                            item: {
                                type: 'select',
                                options: 'objectTypesForSearchList'
                            },
                            label: 'Вид объекта',
                            placeholder: 'Выберите вид объекта для поиска...'
                        },
                        {
                            prop: 'objectNumber',
                            item: {
                                type: 'input',
                                visible: true
                            },
                            label: 'Номер объекта',
                            placeholder: 'Введите номер объекта...',
                            depData: {
                                depProp: 'objectTypeForSearch',
                                depValues: {
                                    1: /* Земельный участок */ {
                                        tooltip: {
                                            placement: 'bottom',
                                            content: 'Маска для ввода номера объекта <strong>(18 цифр)</strong>, где:<br><hr>' +
                                                '– Первые <strong>10 цифр</strong> - Код СОАТО;<br>' +
                                                '– Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>' +
                                                '– Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке.'
                                        },
                                        validation: {
                                            min: 18,
                                            max: 18,
                                            pattern: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$',
                                            wordLimit: true
                                        }
                                    },
                                    2: /* КС (НЗКС) */ {
                                        tooltip: {
                                            placement: 'bottom',
                                            content: 'Маска для ввода номера объекта, где:<br><hr>' +
                                                '– Первые <strong>3 цифры</strong> - Код ТОР;<br>' +
                                                '– Следующий <strong>1 символ C или U</strong> - Литера;<br>' +
                                                '– Последние <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>'
                                        },
                                        validation: {
                                            min: 5,
                                            max: 34,
                                            pattern: '^([1-9][0-9]{2})([CcUu])([1-9][0-9]{0,29})$',
                                            wordLimit: true
                                        }
                                    },
                                    3: /* ИП (ММ) */ {
                                        tooltip: {
                                            placement: 'bottom',
                                            content: 'Маска для ввода номера объекта, где:<br><hr>' +
                                                '– Первые <strong>3 цифры</strong> - Код ТОР;<br>' +
                                                '– Следующий <strong>1 символ D</strong> - Литера;<br>' +
                                                '– Последующие <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>'
                                        },
                                        validation: {
                                            min: 5,
                                            max: 34,
                                            pattern: '^([1-9][0-9]{2})([Dd])([1-9][0-9]{0,29})$',
                                            wordLimit: true
                                        }
                                    }
                                }
                            }
                        },
                        {
                            prop: 'objectNumberStructured',
                            item: {
                                type: 'input-group'
                            },
                            depData: {
                                depProp: 'objectTypeForSearch',
                                depValues: {
                                    1: /* Земельный участок */ {
                                        item: {
                                            group: [
                                                {
                                                    item: {type: 'input'},
                                                    span: 10,
                                                    validation: {
                                                        min: 10,
                                                        max: 10,
                                                        pattern: '^[1-9][0-9]{9}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip: {
                                                        placement: 'top-start',
                                                        content: 'Код СОАТО <strong>(10 цифр)</strong>'
                                                    },
                                                    class: 'from'
                                                },
                                                {
                                                    item: {type: 'input'},
                                                    span: 6,
                                                    validation: {
                                                        min: 2,
                                                        max: 2,
                                                        pattern: '^[0-9]{2}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip: {
                                                        placement: 'top',
                                                        content: 'Кадастровый блок земельного участка <strong>(2 цифры)</strong>'
                                                    }
                                                },
                                                {
                                                    item: {type: 'input'},
                                                    span: 8,
                                                    validation: {
                                                        min: 6,
                                                        max: 6,
                                                        pattern: '^[0-9]{6}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip: {
                                                        placement: 'top-end',
                                                        content: 'Порядковый номер земельного участка в соответствующем кадастровом блоке <strong>(6 цифр)</strong>'
                                                    },
                                                    class: 'to'
                                                }
                                            ]
                                        }
                                    },
                                    2: /* КС (НЗКС) */ {
                                        item: {
                                            group: [
                                                {
                                                    item: {type: 'input'},
                                                    span: 5,
                                                    validation: {
                                                        min: 3,
                                                        max: 3,
                                                        pattern: '^[1-9][0-9]{2}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip: {
                                                        placement: 'top-start',
                                                        content: 'Код ТОР <strong>(3 цифры)</strong>'
                                                    },
                                                    class: 'from'
                                                },
                                                {
                                                    item: {
                                                        type: 'select',
                                                        options: ['C', 'U']
                                                    },
                                                    span: 4,
                                                    validation: {
                                                        min: 1,
                                                        max: 1,
                                                        pattern: '^[CcUu]$',
                                                    },
                                                    tooltip: {
                                                        placement: 'top',
                                                        content: 'Литера <strong>(1 буква латинского алфавита)</strong>'
                                                    },
                                                    placeholder: ''
                                                },
                                                {
                                                    item: {type: 'input'},
                                                    span: 15,
                                                    validation: {
                                                        min: 1,
                                                        max: 30,
                                                        pattern: '^[1-9][0-9]{0,29}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip: {
                                                        placement: 'top-end',
                                                        content: 'Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong>'
                                                    },
                                                    class: 'to'
                                                }
                                            ]
                                        }
                                    },
                                    3: /* ИП (ММ) */ {
                                        item: {
                                            group: [
                                                {
                                                    item: {type: 'input'},
                                                    span: 5,
                                                    validation: {
                                                        min: 3,
                                                        max: 3,
                                                        pattern: '^[1-9][0-9]{2}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip: {
                                                        placement: 'top-start',
                                                        content: 'Код ТОР <strong>(3 цифры)</strong>'
                                                    },
                                                    class: 'from'
                                                },
                                                {
                                                    item: {
                                                        type: 'select',
                                                        options: ['D']
                                                    },
                                                    span: 4,
                                                    validation: {
                                                        min: 1,
                                                        max: 1,
                                                        pattern: '^[Dd]$',
                                                    },
                                                    tooltip: {
                                                        placement: 'top',
                                                        content: 'Литера <strong>(1 буква латинского алфавита)</strong>'
                                                    },
                                                    placeholder: ''
                                                },
                                                {
                                                    item: {type: 'input'},
                                                    span: 15,
                                                    validation: {
                                                        min: 1,
                                                        max: 30,
                                                        pattern: '^[1-9][0-9]{0,29}$',
                                                        wordLimit: true
                                                    },
                                                    tooltip: {
                                                        placement: 'top-end',
                                                        content: 'Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong>'
                                                    },
                                                    class: 'to'
                                                }
                                            ]
                                        }
                                    }
                                }
                            },
                            class: 'object-number-structured'
                        },
                        {
                            prop: 'objectAddress',
                            item: {
                                type: 'input',
                                disabled: true
                            },
                            label: 'Адрес объекта',
                            placeholder: 'Укажите адрес объекта...'
                        },
                    ],
                    collapsed: [
                        {
                            prop: 'tor',
                            item: {
                                type: 'select',
                                options: 'regOrgsList'
                            },
                            label: 'ТОР',
                            placeholder: 'Выберите ТОР...'
                        },
                        {
                            prop: 'objectType',
                            item: {
                                type: 'select',
                                options: 'availableObjectTypesList'
                            },
                            label: 'Объект',
                            placeholder: 'Выберите (уточняющий) вид объекта...',
                            // expression: 'formData.objectTypeForSearch && (formData.objectTypeForSearch > 1)'
                            expression: 'this.formDescription.main[0].prop === "objectID"'
                        },
                        {
                            prop: 'objectPurpose',
                            item: {
                                type: 'select',
                                options: 'availableObjectPurposesList'
                            },
                            label: 'Назначение',
                            placeholder: 'Выберите назначение объекта...'
                        },
                        {
                            prop: 'objectSquareLength',
                            item: {
                                type: 'input-group',
                                group: [
                                    {
                                        item: {type: 'input'},
                                        span: 12,
                                        prepend: 'От',
                                        class: 'from'
                                    },
                                    {
                                        item: {type: 'input'},
                                        span: 12,
                                        prepend: 'До',
                                        class: 'to'
                                    },
                                ]
                            },
                            depData: {
                                depProp: 'objectTypeForSearch',
                                depValues: {
                                    1: {
                                        label: 'Площадь, га'
                                    },
                                    2: {
                                        label: 'Площадь, кв.м.\n(Протяжённость, м.п.)',
                                        class: 'object-length'
                                    },
                                    3: {
                                        label: 'Площадь, кв.м.'
                                    }
                                }
                            }
                        },
                        {
                            prop: 'objectCreationDate',
                            item: {
                                type: 'input-group',
                                group: [
                                    {
                                        item: {
                                            type: 'input',
                                            disabled: true
                                        },
                                        span: 12,
                                        prepend: 'C',
                                        class: 'from'
                                    },
                                    {
                                        item: {
                                            type: 'input',
                                            disabled: true
                                        },
                                        span: 12,
                                        prepend: 'По',
                                        class: 'to'
                                    },
                                ]
                            },
                            label: 'Дата создания'
                        },
                        {
                            prop: 'objectStatus',
                            item: {
                                type: 'select',
                                options: 'objectStatusesList'
                            },
                            label: 'Статус объекта',
                            placeholder: 'Выберите статус объекта...'
                        },
                        {
                            prop: 'objectWallsMaterial',
                            item: {
                                type: 'select',
                                options: 'objectWallsMaterialsList'
                            },
                            label: 'Материал стен',
                            placeholder: 'Выберите материал стен...'
                        },
                        {
                            prop: 'objectRoomsNumber',
                            item: {
                                type: 'input-group',
                                group: [
                                    {
                                        item: {type: 'input'},
                                        span: 12,
                                        prepend: 'От'
                                    },
                                    {
                                        item: {type: 'input'},
                                        span: 12,
                                        prepend: 'До'
                                    },
                                ]
                            },
                            label: 'Количество комнат'
                        },
                        {
                            prop: 'objectFloor',
                            item: {
                                type: 'input-group',
                                group: [
                                    {
                                        item: {type: 'input'},
                                        span: 12,
                                        prepend: 'От'
                                    },
                                    {
                                        item: {type: 'input'},
                                        span: 12,
                                        prepend: 'До'
                                    },
                                ]
                            },
                            label: 'Этаж'
                        }
                    ],
                },
                formData: {},
                controls: {
                    isExpanded: false,
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
            },
            availableObjectTypesList() {
                let type = this.formData.objectTypeForSearch ? parseInt(this.formData.objectTypeForSearch, 10) : null;
                let objectTypeForSearch = type ? this.objectTypesForSearchList.filter(element => element.code === type).shift() : null;
                let split = objectTypeForSearch ? objectTypeForSearch['name1'].split(/,\s*/g).map(item => parseInt(item, 10)) : null;
                let availableObjectTypes = split ? this.objectTypesList.filter(element => split.includes(element.code)) : null;

                return availableObjectTypes;
            },
            availableObjectPurposesList() {
                let objectType = (this.formData.objectType || null);
                let type = this.formData.objectTypeForSearch;

                if (objectType) {
                    /* для кокретного типа */
                    switch (objectType) {
                        case 1:
                            return this.objectPurposesCSList;
                        case 2:
                            return this.objectPurposesIPList;
                        case 4:
                            return this.objectPurposesNZCSList;
                        case 5:
                            return this.objectPurposesMMList;
                    }
                } else {
                    /* без деления на типы */
                    switch (type) {
                        case 1:
                            return this.objectPurposesLPList;
                        case 2:
                            //todo убрать дубли, 120 и 149
                            return [...this.objectPurposesCSList, ...this.objectPurposesNZCSList];
                        case 3:
                            return [...this.objectPurposesIPList, ...this.objectPurposesMMList];
                    }
                }

                return null;
            }
        },
        watch: {
            'formData.objectTypeForSearch'(newValue, preValue) {
                console.log(`change objectTypeForSearch from ${preValue} to ${newValue}`);
                if (newValue) {
                    console.log('init values');
                } else {
                    console.log('skip');
                }
            }
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
            getOptions(key) {
                return this[key];
            },
            evaluateExpression(expression) {
                console.log(this, expression);

                let res = (function fn(expr) {
                    console.log(this);

                    return eval(expr);
                }).call(this, expression);

                console.log('methods => evaluateExpression', res);
            },
            /* events handlers */
            handleCollapseChange() {
                this.controls.isExpanded = !this.controls.isExpanded;
            },
            handleSecretKeydown() {
                this.controls.isObjectIDVisible = !this.controls.isObjectIDVisible;
            },
        },
        directives: {
            evaluate: {
                bind(el, binding, vnode, oldVnode) {
                    console.log(vnode.context);

                    let res = (function fn(expr) {
                        console.log(this);

                        return eval(expr);
                    }).call(vnode.context, '5 + this.some');

                    console.log('directives.evaluate.bind', res);
                    console.log({el, binding, vnode, oldVnode});
                }
            }
        },
        mounted() {
            this.printClassifiers.call(this);
        },
        created() {
            initValues.call(null, this);
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
        --form-width: 800px;
        --form-item-label-width: 160px;
        --form-item-content-width: calc(var(--form-width) - var(--form-item-label-width));
        --form-item-content-popover-width: calc(var(--form-width) - var(--form-item-label-width) - 26px);
        --border-color: rgb(220, 223, 230);
    }

    .search-extended {
        width: var(--form-width);

    }

    .search-extended input,
    .search-extended button {
        font-family: "Times New Roman", serif;
    }

    .search-extended .el-form-item {
        width: 100%;
        color: rgb(96, 98, 102);
    }

    .search-extended .el-form-item.object-length .el-form-item__label {
        line-height: 19px;
    }

    .search-extended .el-form-item .el-form-item__label {
        width: var(--form-item-label-width);
    }

    .search-extended .el-form-item .el-form-item__content {
        margin-left: var(--form-item-label-width);
        text-align: left;
    }

    .search-extended .el-form-item .el-form-item__content .el-select, .el-input {
        width: 100% !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row {
        margin-left: 0 !important;
        margin-right: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row > .el-col.from {
        padding-left: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row > .el-col.to {
        padding-right: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-input-group__prepend {
        width: 24px;
        text-align: center;
    }

    /* количество введённых символов и общее число доступных для ввода "0/18" */
    .search-extended .el-form-item .el-form-item__content .el-input .el-input__count {
        color: rgb(220, 220, 220);
    }

    .search-extended .el-collapse {
        margin-top: 26px;
        margin-bottom: 26px;
        border-top: 1px solid var(--border-color);
        border-bottom: 1px solid var(--border-color);
    }

    .search-extended .el-collapse .el-collapse-item__wrap,
    .search-extended .el-collapse .el-collapse-item__header:not(.is-active) {
        border-bottom: 1px solid var(--border-color);
    }

    .search-extended .el-collapse .el-collapse-item__wrap {
        padding-bottom: 2px;
    }

    .search-extended .el-collapse .el-collapse-item__header {
        display: inline-block;
        font-weight: bold;
        padding-top: 12px;
        padding-bottom: 12px;
        transition: none;
    }

    .search-extended .el-collapse .el-collapse-item__header i {
        margin-left: 10px;
    }

    .search-extended .el-collapse .el-collapse-item__content {
        padding-bottom: 0;
    }

    .el-select-dropdown.object-purpose {
        width: 380px;
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
        animation-name: shake
    }

    .animated {
        -webkit-animation-duration: 1s;
        animation-duration: 1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode: both
    }
</style>