<template>
    <!-- CTRL + ALT + G -->
    <div id="app" @keydown.ctrl.alt.71="handleSecretKeydown" tabindex="-1">
        <el-form :ref="form.name"
                 :class="form.class"
                 :model="form.data"
                 :rules="form.rules">
            <!-- Всегда видимый контент  -->
            <!-- ID Объекта -->
            <el-form-item prop="objectID"
                          v-if="form.triggers.visibility.objectID"
                          label="ID объекта">
                <el-input v-model="form.data.objectID"
                          :class="(form.triggers.visibility.objectID ? 'shake' : '')"
                          placeholder="Введите ID объекта..."
                          clearable/>
            </el-form-item>
            <!-- Вид объекта для поиска (без ПИК) -->
            <el-form-item prop="objectTypeForSearch"
                          label="Вид объекта">
                <el-select v-model="form.data.objectTypeForSearch"
                           @change="handleObjectTypeForSearchChange"
                           :class="(form.triggers.validation.objectTypeForSearch ? '' : 'shake')"
                           placeholder="Выберите вид объекта для поиска..."
                           clearable>
                    <el-option v-for="option in objectTypesForSearchList"
                               :key="option.code"
                               :value="option.code"
                               :label="option.name"/>
                </el-select>
            </el-form-item>
            <!-- Номер объекта -->
            <el-form-item prop="objectNumber"
                          label="Номер объекта">
                <el-tooltip placement="top"
                            :hide-after="2000"
                            :open-delay="250"
                            :key="form.data.objectTypeForSearch"
                            :disabled="!objectNumberTooltip"
                            popper-class="search-extended-tooltip">
                    <template v-if="!!objectNumberTooltip" #content>
                        <div v-html="objectNumberTooltip.content"></div>
                    </template>
                    <el-input v-model="form.data.objectNumber"
                              placeholder="Введите номер объекта..."

                              :minlength="objectNumberTooltip ? objectNumberTooltip.min : false"
                              :maxlength="objectNumberTooltip ? objectNumberTooltip.max : false"
                              show-word-limit
                              clearable/>
                </el-tooltip>
            </el-form-item>
            <!-- Структурированный номер объекта -->
            <el-form-item prop="objectNumberStructured"
                          v-if="form.triggers.visibility.objectNumberStructured">
                <el-row :gutter="24">
                    <el-col v-for="(groupItem, index) in objectNumberStructuredInputGroup"
                            :span="groupItem.span"
                            :key="`${form.data.objectTypeForSearch}-${(index + 1)}`"
                            :class="groupItem.class">
                        <el-tooltip :placement="groupItem.tooltip.placement"
                                    :hide-after="2000"
                                    :open-delay="250"
                                    popper-class="search-extended-tooltip">
                            <template #content>
                                <div v-html="groupItem.tooltip.content"></div>
                            </template>
                            <template v-if="groupItem.item.type === 'input'">
                                <el-input v-model="form.data.objectNumberStructured[index + 1]"
                                          :minlength="groupItem.min"
                                          :maxlength="groupItem.max"
                                          show-word-limit
                                          clearable/>
                            </template>
                            <template v-else>
                                <el-select v-model="form.data.objectNumberStructured[index + 1]"
                                           :placeholder="groupItem.placeholder"
                                           clearable>
                                    <el-option v-for="(option) in groupItem.item.options"
                                               :key="option"
                                               :value="option"
                                               :label="option"/>
                                </el-select>
                            </template>
                        </el-tooltip>
                    </el-col>
                </el-row>
            </el-form-item>
            <!-- Адрес объекта -->
            <el-form-item prop="objectAddress"
                          class="object-address"
                          label="Адрес объекта">
                <el-input v-model="form.data.objectAddress"
                          placeholder="Добавьте адрес объекта..."
                          readonly>
                    <template v-if="!form.data.objectAddress">
                        <el-tooltip slot="append"
                                    :hide-after="2000"
                                    :open-delay="250"
                                    content="Добавить адрес"
                                    placement="top-end"
                                    popper-class="search-extended-tooltip">
                            <el-button @click="form.data.objectAddress = 'Какой-то адрес...'"
                                       icon="el-icon-plus"
                                       class="first"/>
                        </el-tooltip>
                    </template>
                    <template v-else>
                        <el-tooltip slot="append"
                                    :hide-after="2000"
                                    :open-delay="250"
                                    content="Редактировать адрес"
                                    placement="top-end"
                                    popper-class="search-extended-tooltip">
                            <el-button @click="form.data.objectAddress = 'Какой-то адрес (отредактирован)'"
                                       icon="el-icon-edit"
                                       class="first"/>
                        </el-tooltip>
                        <el-tooltip slot="append"
                                    :hide-after="2000"
                                    :open-delay="250"
                                    content="Удалить адрес"
                                    placement="top-end"
                                    popper-class="search-extended-tooltip">
                            <el-button @click="form.data.objectAddress = null"
                                       icon="el-icon-delete"
                                       class="last"/>
                        </el-tooltip>
                    </template>
                </el-input>
            </el-form-item>
            <!-- Скрытый за спойлером контент -->
            <el-collapse v-model="form.collapse.value">
                <el-collapse-item :name="form.collapse.name"
                                  :title="form.collapse.title()"
                                  :disabled="form.triggers.disabled.collapse">
                    <!-- ТОР -->
                    <el-form-item prop="objectTOR"
                                  label="ТОР">
                        <el-select v-model="form.data.objectTOR"
                                   :class="(form.triggers.validation.objectTOR ? '' : 'shake')"
                                   placeholder="Укажите организацию по регистрации..."
                                   filterable
                                   clearable>
                            <el-option v-for="option in regOrgsList"
                                       :key="option.idReg"
                                       :value="option.idReg"
                                       :label="`${option.idReg} - ${option.orgShortName}`">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <!-- Объект -->
                    <el-form-item prop="objectTypeExact"
                                  v-if="form.triggers.visibility.objectTypeExact"
                                  label="Объект">
                        <el-select v-model="form.data.objectTypeExact"
                                   placeholder="Выберите (уточняющий) вид объекта..."
                                   clearable>
                            <el-option v-for="option in availableObjectTypesList"
                                       :key="option.code"
                                       :value="option.code"
                                       :label="option.name"/>
                        </el-select>
                    </el-form-item>
                    <!-- Назначение -->
                    <el-form-item prop="objectPurpose"
                                  v-if="form.triggers.visibility.objectPurpose"
                                  label="Назначение">
                        <el-select v-model="form.data.objectPurpose"
                                   placeholder="Укажите назначение объекта..."
                                   popper-class="object-purpose"
                                   filterable
                                   clearable>
                            <el-option v-for="option in availableObjectPurposesList"
                                       :key="option.code"
                                       :value="option.code"
                                       :label="option.name"
                                       :title="option.name"/>
                        </el-select>
                    </el-form-item>
                    <!-- Площадь / протяжённость -->
                    <el-form-item prop="objectSquareLength"
                                  v-if="form.triggers.visibility.objectSquareLength"
                                  :class="objectSquareLengthLabelClass.class"
                                  :label="objectSquareLengthLabelClass.label">
                        <el-row :gutter="24">
                            <el-col :span="12"
                                    class="first">
                                <el-input v-model="form.data.objectSquareLength[1]"
                                          clearable>
                                    <template #prepend>От</template>
                                </el-input>
                            </el-col>
                            <el-col :span="12"
                                    class="last">
                                <el-input v-model="form.data.objectSquareLength[2]"
                                          clearable>
                                    <template #prepend>До</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <!-- Дата создания -->
                    <el-form-item prop="objectCreationDate"
                                  v-if="form.triggers.visibility.objectCreationDate"
                                  label="Дата создания">
                        <el-row :gutter="24">
                            <el-col :span="12"
                                    class="first">
                                <el-date-picker
                                        v-model="form.data.objectCreationDate[1]"
                                        type="date"
                                        placeholder="Укажите дату начала периода..."
                                        format="dd.MM.yyyy"
                                        align="left"
                                        :editable="form.datepicker.editable"
                                        :picker-options="form.datepicker.options">
                                </el-date-picker>
                            </el-col>
                            <el-col :span="12"
                                    class="last">
                                <el-date-picker
                                        v-model="form.data.objectCreationDate[2]"
                                        type="date"
                                        placeholder="Укажите дату конца периода..."
                                        format="dd.MM.yyyy"
                                        align="right"
                                        :editable="form.datepicker.editable"
                                        :picker-options="form.datepicker.options">
                                </el-date-picker>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <!-- Статус объекта -->
                    <el-form-item prop="objectStatus"
                                  label="Статус объекта">
                        <el-select v-model="form.data.objectStatus"
                                   placeholder="Выберите статус объекта..."
                                   clearable>
                            <el-option v-for="option in objectStatusesList"
                                       :key="option.code"
                                       :value="option.code"
                                       :label="option.name"/>
                        </el-select>
                    </el-form-item>
                    <!-- Материал стен -->
                    <el-form-item prop="objectWallsMaterial"
                                  v-if="form.triggers.visibility.objectWallsMaterial"
                                  label="Материал стен">
                        <el-select v-model="form.data.objectWallsMaterial"
                                   placeholder="Укажите материал стен..."
                                   filterable
                                   clearable>
                            <el-option v-for="option in objectWallsMaterialsList"
                                       :key="option.code"
                                       :value="option.code"
                                       :label="option.name"/>
                        </el-select>
                    </el-form-item>
                    <!-- Количество комнат -->
                    <el-form-item prop="objectRoomsNumber"
                                  v-if="form.triggers.visibility.objectRoomsNumber"
                                  label="Количество комнат">
                        <el-row :gutter="24">
                            <el-col :span="12"
                                    class="first">
                                <el-input v-model="form.data.objectRoomsNumber[1]"
                                          clearable>
                                    <template #prepend>От</template>
                                </el-input>
                            </el-col>
                            <el-col :span="12"
                                    class="last">
                                <el-input v-model="form.data.objectRoomsNumber[2]"
                                          clearable>
                                    <template #prepend>До</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <!-- Этаж -->
                    <el-form-item prop="objectFloor"
                                  v-if="form.triggers.visibility.objectFloor"
                                  label="Этаж">
                        <el-row :gutter="24">
                            <el-col :span="12"
                                    class="first">
                                <el-input v-model="form.data.objectFloor[1]"
                                          minlength="1"
                                          maxlength="3"
                                          show-word-limi
                                          clearable>
                                    <template #prepend>От</template>
                                </el-input>
                            </el-col>
                            <el-col :span="12"
                                    class="last">
                                <el-input v-model="form.data.objectFloor[2]"
                                          minlength="1"
                                          maxlength="3"
                                          show-word-limi
                                          clearable>
                                    <template #prepend>До</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <!-- Этажность (надземная) -->
                    <el-form-item prop="objectFloorsAboveGround"
                                  v-if="form.triggers.visibility.objectFloorsAboveGround"
                                  label="Этажность (надземная)">
                        <el-row :gutter="24">
                            <el-col :span="12"
                                    class="first">
                                <el-input v-model="form.data.objectFloorsAboveGround[1]"
                                          :minlength="1"
                                          :maxlength="3"
                                          show-word-limit
                                          clearable>
                                    <template #prepend>От</template>
                                </el-input>
                            </el-col>
                            <el-col :span="12"
                                    class="last">
                                <el-input v-model="form.data.objectFloorsAboveGround[2]"
                                          :minlength="1"
                                          :maxlength="3"
                                          show-word-limit
                                          clearable>
                                    <template #prepend>До</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                    <!-- Этажность (подземная) -->
                    <el-form-item prop="objectFloorsUnderGround"
                                  v-if="form.triggers.visibility.objectFloorsUnderGround"
                                  label="Этажность (подземная)">
                        <el-row :gutter="24">
                            <el-col :span="12"
                                    class="first">
                                <el-input v-model="form.data.objectFloorsUnderGround[1]"
                                          :minlength="1"
                                          :maxlength="3"
                                          show-word-limit
                                          clearable>
                                    <template #prepend>От</template>
                                </el-input>
                            </el-col>
                            <el-col :span="12"
                                    class="last">
                                <el-input v-model="form.data.objectFloorsUnderGround[2]"
                                          :minlength="1"
                                          :maxlength="3"
                                          show-word-limit
                                          clearable>
                                    <template #prepend>До</template>
                                </el-input>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-collapse-item>
            </el-collapse>
            <el-form-item>
                <el-button type="primary" @click="submitForm">Create</el-button>
                <el-button type="danger" @click="resetForm">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";

    const initialData = {
        objectID               : null,
        objectTypeForSearch    : null,
        objectNumber           : null,
        objectNumberStructured : {1: null, 2: null, 3: null},
        objectAddress          : null,
        objectTOR              : 0,
        objectTypeExact        : null,
        objectPurpose          : null,
        objectSquareLength     : {1: null, 2: null},
        objectCreationDate     : {1: null, 2: null},
        objectStatus           : null,
        objectWallsMaterial    : null,
        objectRoomsNumber      : {1: null, 2: null},
        objectFloor            : {1: null, 2: null},
        objectFloorsAboveGround: {1: null, 2: null},
        objectFloorsUnderGround: {1: null, 2: null}
    };

    export default {
        name    : "the-form",
        data() {
            return {
                form: {
                    name      : 'form-search-extended',
                    class     : 'search-extended',
                    triggers  : {
                        visibility: {
                            objectID               : false,
                            objectNumberStructured : false,
                            objectTypeExact        : false,
                            objectPurpose          : false,
                            objectSquareLength     : false,
                            objectCreationDate     : false,
                            objectWallsMaterial    : false,
                            objectRoomsNumber      : false,
                            objectFloor            : false,
                            objectFloorsAboveGround: false,
                            objectFloorsUnderGround: false
                        },
                        disabled  : {
                            collapse: false
                        },
                        validation: {
                            objectTypeForSearch: true,
                            objectTOR          : true
                        }
                    },
                    data      : Object.assign({}, JSON.parse(JSON.stringify(initialData))),
                    rules     : {
                        objectTypeForSearch   : [
                            {
                                required : true,
                                validator: this.validateSelectChange,
                                trigger  : 'change',
                                message  : 'Пожалуйста, выберите вид объекта для поиска!'
                            },
                        ],
                        objectTOR             : [
                            {
                                required : true,
                                validator: this.validateSelectChange,
                                trigger  : 'change',
                                message  : 'Пожалуйста, выберите ТОР!'
                            },
                        ],
                        objectNumber          : [
                            {
                                validator: this.validateInputChange,
                                trigger  : 'change',
                                message  : 'Пожалуйста, введите корректный номер объекта, согласно указанной маске!',
                                pattern  : {
                                    1: '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$',
                                    2: '^([1-9][0-9]{2})([CcUu])([1-9][0-9]{0,29})$',
                                    3: '^([1-9][0-9]{2})([Dd])([1-9][0-9]{0,29})$'
                                }
                            }
                        ],
                        objectNumberStructured: [
                            {
                                validator: this.validateObjectNumberStructured,
                                trigger  : 'change',
                                message  : {
                                    1: {
                                        1: '^[1-9][0-9]{9}$',
                                        2: '^[0-9]{2}$',
                                        3: '^[0-9]{6}$'
                                    },
                                    2: {
                                        1: '^[1-9][0-9]{2}$',
                                        2: null,
                                        3: '^[1-9][0-9]{0,29}$'
                                    },
                                    3: {
                                        1: '^[1-9][0-9]{2}$',
                                        2: null,
                                        3: '^[1-9][0-9]{0,29}$'
                                    }
                                },
                                pattern  : {
                                    1: {
                                        1: '^[1-9][0-9]{9}$',
                                        2: '^[0-9]{2}$',
                                        3: '^[0-9]{6}$'
                                    },
                                    2: {
                                        1: '^[1-9][0-9]{2}$',
                                        2: null,
                                        3: '^[1-9][0-9]{0,29}$'
                                    },
                                    3: {
                                        1: '^[1-9][0-9]{2}$',
                                        2: null,
                                        3: '^[1-9][0-9]{0,29}$'
                                    }
                                }
                            }
                        ]
                    },
                    datepicker: {
                        editable: true,
                        options : {
                            firstDayOfWeek: 1,
                            disabledDate  : this.disabledDate
                        }
                    },
                    collapse  : {
                        name : 'expanded-content',
                        value: [],
                        title() {
                            return `${this.value.length ? 'Скрыть' : 'Показать'} дополнительные критерии поиска`;
                        }
                    },
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
            availableObjectTypesList() {
                let type = this.form.data.objectTypeForSearch ? parseInt(this.form.data.objectTypeForSearch, 10) : null;
                let objectTypeForSearch = type ? this.objectTypesForSearchList.filter(element => element.code === type).shift() : null;
                let split = objectTypeForSearch ? objectTypeForSearch['name1'].split(/,\s*/g).map(item => parseInt(item, 10)) : null;
                let availableObjectTypes = split ? this.objectTypesList.filter(element => split.includes(element.code)) : null;

                return availableObjectTypes;
            },
            availableObjectPurposesList() {
                let objectTypeExact = (this.form.data.objectTypeExact || null);
                let type = this.form.data.objectTypeForSearch;

                function merge() {
                    let object = {};

                    Array
                    .from(arguments)
                    .forEach(
                        array => array.forEach(
                            item => (!Object.prototype.hasOwnProperty.call(object, item.code)) && (object[item.code] = item)
                        )
                    );

                    return Object.values(object);
                }

                if (objectTypeExact) {
                    /* для кокретного типа */
                    switch (objectTypeExact) {
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
                            return merge.call(this, this.objectPurposesCSList, this.objectPurposesNZCSList);
                        case 3:
                            return merge.call(this, this.objectPurposesIPList, this.objectPurposesMMList);
                    }
                }

                return null;
            },
            objectNumberTooltip() {
                let objectTypeForSearch = this.form.data.objectTypeForSearch;
                let tooltip;

                if (objectTypeForSearch) {
                    switch (parseInt(objectTypeForSearch, 10)) {
                        case 1: /* Земельный участок */
                            tooltip = {
                                content: 'Маска для ввода номера объекта <strong>(18 цифр)</strong>, где:<br><hr>' +
                                    '– Первые <strong>10 цифр</strong> - Код СОАТО;<br>' +
                                    '– Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>' +
                                    '– Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке.',
                                min    : 18,
                                max    : 18
                            };
                            break;
                        case 2: /* КС (НЗКС) */
                            tooltip = {
                                content: 'Маска для ввода номера объекта, где:<br><hr>' +
                                    '– Первые <strong>3 цифры</strong> - Код ТОР;<br>' +
                                    '– Следующий <strong>1 символ C или U</strong> - Литера;<br>' +
                                    '– Последние <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>',
                                min    : 5,
                                max    : 34
                            };
                            break;
                        case 3: /* ИП (ММ) */
                            tooltip = {
                                content: 'Маска для ввода номера объекта, где:<br><hr>' +
                                    '– Первые <strong>3 цифры</strong> - Код ТОР;<br>' +
                                    '– Следующий <strong>1 символ D</strong> - Литера;<br>' +
                                    '– Последующие <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>',
                                min    : 5,
                                max    : 34
                            };
                            break;
                    }
                }

                return tooltip;
            },
            objectNumberStructuredInputGroup() {
                let objectTypeForSearch = this.form.data.objectTypeForSearch;
                let inputGroup;

                if (objectTypeForSearch) {
                    switch (parseInt(objectTypeForSearch, 10)) {
                        case 1: /* Земельный участок */
                            inputGroup = [
                                {
                                    item   : {type: 'input'},
                                    span   : 10,
                                    tooltip: {
                                        placement: 'top-start',
                                        content  : 'Код СОАТО <strong>(10 цифр)</strong>'
                                    },
                                    class  : 'first',
                                    min    : 10,
                                    max    : 10
                                },
                                {
                                    item   : {type: 'input'},
                                    span   : 6,
                                    tooltip: {
                                        placement: 'top',
                                        content  : 'Кадастровый блок земельного участка <strong>(2 цифры)</strong>'
                                    },
                                    min    : 2,
                                    max    : 2,
                                },
                                {
                                    item   : {type: 'input'},
                                    span   : 8,
                                    tooltip: {
                                        placement: 'top-end',
                                        content  : 'Порядковый номер земельного участка в соответствующем кадастровом блоке <strong>(6 цифр)</strong>'
                                    },
                                    class  : 'last',
                                    min    : 6,
                                    max    : 6,
                                }
                            ];
                            break;
                        case 2: /* КС (НЗКС) */
                            inputGroup = [
                                {
                                    item   : {type: 'input'},
                                    span   : 5,
                                    tooltip: {
                                        placement: 'top-start',
                                        content  : 'Код ТОР <strong>(3 цифры)</strong>'
                                    },
                                    class  : 'first',
                                    min    : 3,
                                    max    : 3
                                },
                                {
                                    item       : {
                                        type   : 'select',
                                        options: ['C', 'U']
                                    },
                                    span       : 4,
                                    tooltip    : {
                                        placement: 'top',
                                        content  : 'Литера <strong>(1 буква латинского алфавита)</strong>'
                                    },
                                    placeholder: ''
                                },
                                {
                                    item   : {type: 'input'},
                                    span   : 15,
                                    tooltip: {
                                        placement: 'top-end',
                                        content  : 'Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong>'
                                    },
                                    class  : 'last',
                                    min    : 1,
                                    max    : 30
                                }
                            ];
                            break;
                        case 3: /* ИП (ММ) */
                            inputGroup = [
                                {
                                    item   : {type: 'input'},
                                    span   : 5,
                                    tooltip: {
                                        placement: 'top-start',
                                        content  : 'Код ТОР <strong>(3 цифры)</strong>'
                                    },
                                    class  : 'first',
                                    min    : 3,
                                    max    : 3
                                },
                                {
                                    item       : {
                                        type   : 'select',
                                        options: ['D']
                                    },
                                    span       : 4,
                                    tooltip    : {
                                        placement: 'top',
                                        content  : 'Литера <strong>(1 буква латинского алфавита)</strong>'
                                    },
                                    placeholder: ''
                                },
                                {
                                    item   : {type: 'input'},
                                    span   : 15,
                                    tooltip: {
                                        placement: 'top-end',
                                        content  : 'Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong>'
                                    },
                                    class  : 'last',
                                    min    : 1,
                                    max    : 30
                                }
                            ];
                            break;
                    }
                }

                return inputGroup;
            },
            objectSquareLengthLabelClass() {
                let objectTypeForSearch = this.form.data.objectTypeForSearch;
                let labelClass;

                if (objectTypeForSearch) {
                    switch (parseInt(objectTypeForSearch, 10)) {
                        case 1: /* Земельный участок */
                            labelClass = {
                                label: 'Площадь, га'
                            };
                            break;
                        case 2: /* КС (НЗКС) */
                            labelClass = {
                                label: 'Площадь, кв.м.\n(Протяжённость, м.п.)',
                                class: 'two-rows-label'
                            };
                            break;
                        case 3: /* ИП (ММ) */
                            labelClass = {
                                label: 'Площадь, кв.м.'
                            };
                            break;
                    }
                }

                return labelClass;
            },
        },
        watch   : {
            'form.data.objectNumberStructured': {
                handler(newValue) {
                    /**
                     * Еесли элементы поля "Структурированный номер объекта"
                     * заполнены хоть какими-либо данными, то сворачиваем блок
                     * "Дополнительные критерии поиска" и делаем его недоступным
                     * */
                    if (Object.entries(newValue).some(([, value]) => value)) {
                        this.form.collapse.value.shift();
                        this.form.triggers.disabled.collapse = true;
                    } else {
                        this.form.triggers.disabled.collapse = false;
                    }
                },
                deep: true
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
            handleSecretKeydown() {
                this.form.triggers.visibility.objectID = !this.form.triggers.visibility.objectID;
            },
            handleObjectTypeForSearchChange(value) {
                const name = 'visibility';
                const visibility = this.form.triggers[name];

                this.resetTriggers(name);

                if (value) {
                    visibility.objectNumberStructured = true;
                    visibility.objectPurpose = true;
                    visibility.objectSquareLength = true;
                    visibility.objectCreationDate = true;

                    value = parseInt(value, 10);

                    if (value > 1) {
                        visibility.objectTypeExact = true;

                        if (value === 2) {
                            visibility.objectWallsMaterial = true;
                            visibility.objectFloorsAboveGround = true;
                            visibility.objectFloorsUnderGround = true;
                        } else if (value === 3) {
                            visibility.objectRoomsNumber = true;
                            visibility.objectFloor = true;
                        }
                    }
                }
            },
            validateSelectChange(rule, value, callback) {
                const prop = rule.field;
                let errorMessage = rule.message;

                if (prop && !errorMessage) {
                    switch (prop) {
                        case 'objectTypeForSearch':
                            errorMessage = 'Пожалуйста, выберите вид объекта для поиска!';
                            break;
                    }
                }

                if ((value === undefined) || (value === null) || (value === '')) {
                    callback(new Error(errorMessage));
                    (this.form.triggers.validation[prop] !== undefined) && (this.form.triggers.validation[prop] = false);

                    return false;
                }

                (this.form.triggers.validation[prop] !== undefined) && (this.form.triggers.validation[prop] = true);
                callback();
            },
            validateInputChange(rule, value, callback) {
                let type;

                if ((value !== undefined) && (value !== null) && (value !== '')) {
                    if (rule && rule.pattern) {
                        type = this.form.data.objectTypeForSearch;

                        if (rule.pattern[type]) {
                            if (!(new RegExp(rule.pattern[type])).test(value)) {
                                callback(new Error(rule.message));

                                return false;
                            }
                        }
                    }
                }

                callback();
            },
            validateObjectNumberStructured(rule, value, callback) {
                let type;

                if ((value !== undefined) && (value !== null)) {
                    if (rule && rule.pattern) {
                        type = this.form.data.objectTypeForSearch;

                        if (rule.pattern[type]) {

                            let test = Object.values(value).every((v, i) => {
                                const pattern = rule.pattern[type];
                                const message = rule.message[type];
                                const r = {
                                    field    : "objectNumberStructured",
                                    fullField: "objectNumberStructured.1",
                                    message  : message[(i + 1)],
                                    pattern  : (function () {
                                        let object = {};

                                        object[(i + 1)] = pattern[(i + 1)];

                                        return object;
                                    })(),
                                };

                                return this.validateInputChange(r, v, callback);
                            });

                            console.log(test);

                            // if (!(new RegExp(rule.pattern[type])).test(value)) {
                            //     callback(new Error(rule.message));
                            //
                            //     return false;
                            // }
                        }
                    }
                }

                callback();
            },
            disabledDate(date) {
                const now   = new Date(),
                      start = this.form.data.objectCreationDate[1],
                      end   = this.form.data.objectCreationDate[2];

                if (start && !end) {
                    return (date < start) || (date > now);
                } else if (end && !start) {
                    return (date > end) || (date > now);
                } else if (end && start) {
                    return (date < start) || (date > end);
                }

                return (date > now);
            },
            resetTriggers(name, value) {
                if (name && this.form.triggers[name]) {
                    Object
                    .keys(this.form.triggers[name])
                    .filter(key => ((key.toString() === 'objectID') ? false : !(this.form.triggers[name][key] = (value || false))), this);
                }
            },
            submitForm() {
                this.$refs[this.form.name].validate((valid) => {
                    if (valid) {
                        alert('Submit!');
                        console.log(JSON.parse(JSON.stringify(this.form.data)));
                    } else {
                        alert('Внимание! Заполните форму корректными данными и повторите отправку!');
                        return false;
                    }
                });
            },
            resetForm() {
                this.$refs[this.form.name].resetFields();
                this.form.collapse.value.shift();
                this.resetTriggers('visibility');
                this.resetTriggers('disabled');
                this.resetTriggers('validation', true);
                Object.assign(this.form.data, JSON.parse(JSON.stringify(initialData)));
                console.log('reset');
                console.log('initial', initialData);
                console.log('data', JSON.parse(JSON.stringify(this.form.data)));
            }
        },
        mounted() {
            this.printClassifiers.call(this);
        },
        created() {
            //todo организация по умолчанию
            this.form.data.objectTOR = 0;
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

    .search-extended {
        width: var(--form-width);

    }

    .search-extended input {
        font-family: "Times New Roman", serif;
    }

    .search-extended .el-form-item {
        width: 100%;
        color: rgb(96, 98, 102);
    }

    .search-extended .el-form-item.two-rows-label .el-form-item__label {
        line-height: 19px;
    }

    .search-extended .el-form-item .el-form-item__label {
        width: var(--form-item-label-width);
    }

    .search-extended .el-form-item .el-form-item__content {
        margin-left: var(--form-item-label-width);
        text-align:  left;
    }

    .search-extended .el-form-item .el-form-item__content .el-select, .el-input {
        width: 100% !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row {
        margin-left:  0 !important;
        margin-right: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row > .el-col.first {
        padding-left: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-row > .el-col.last {
        padding-right: 0 !important;
    }

    .search-extended .el-form-item .el-form-item__content .el-input-group__prepend {
        width:      24px;
        text-align: center;
    }

    .search-extended .el-form-item.object-address .el-form-item__content .el-input-group__append button {
        transition: color 250ms ease-in-out;
        font-size:  16px;
    }

    .search-extended .el-form-item.object-address .el-form-item__content .el-input-group__append button.first:hover {
        color: #409eff;
    }

    .search-extended .el-form-item.object-address .el-form-item__content .el-input-group__append button.last:hover {
        color: #f56c6c;
    }

    /* количество введённых символов и общее число доступных для ввода "0/18" */
    .search-extended .el-form-item .el-form-item__content .el-input .el-input__count {
        color: rgb(220, 220, 220);
    }

    .search-extended .el-collapse {
        margin-top:    26px;
        margin-bottom: 26px;
        border-top:    1px solid var(--border-color);
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
        display:        inline-block;
        font-weight:    bold;
        padding-top:    12px;
        padding-bottom: 12px;
        transition:     none;
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

    .el-tooltip__popper.search-extended-tooltip > div:first-child > strong {
        color: #66b1ff;
    }

    @-webkit-keyframes shake {
        0%, to {
            -webkit-transform: translateZ(0);
            transform:         translateZ(0)
        }

        10%, 30%, 50%, 70%, 90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform:         translate3d(-10px, 0, 0)
        }

        20%, 40%, 60%, 80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform:         translate3d(10px, 0, 0)
        }
    }

    @keyframes shake {
        0%, to {
            -webkit-transform: translateZ(0);
            transform:         translateZ(0)
        }

        10%, 30%, 50%, 70%, 90% {
            -webkit-transform: translate3d(-10px, 0, 0);
            transform:         translate3d(-10px, 0, 0)
        }

        20%, 40%, 60%, 80% {
            -webkit-transform: translate3d(10px, 0, 0);
            transform:         translate3d(10px, 0, 0)
        }
    }

    .shake {
        -webkit-animation-name:      shake;
        animation-name:              shake;
        -webkit-animation-duration:  1s;
        animation-duration:          1s;
        -webkit-animation-fill-mode: both;
        animation-fill-mode:         both;
    }
</style>