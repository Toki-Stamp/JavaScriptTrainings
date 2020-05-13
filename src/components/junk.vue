<template>
    <div>
        <el-form ref="form-search-extended"
                 class="form-search-extended">
            <!-- Всегда видимый контент  -->
            <template v-if="!!formDescription.main">
                <template v-for="element in formDescription.main">
                    <template v-if="getProperty(element, 'visible')">
                        <el-form-item :key="element.prop"
                                      :prop="element.prop"
                                      :label="element.label">
                            <template v-if="(element.item.type === 'input')">
                                <template v-if="element.tooltip">
                                    <el-tooltip :placement="element.tooltip.placement">
                                        <div slot="content" v-html="element.tooltip.content"></div>
                                        <el-input
                                                v-model="formData[element.prop]"
                                                :placeholder="element.placeholder"
                                                :minlength="getProperty(element, 'min')"
                                                :maxlength="getProperty(element, 'max')"
                                                :show-word-limit="getProperty(element, 'wordLimit')"/>
                                    </el-tooltip>
                                </template>
                                <template v-else>
                                    <el-input
                                            v-model="formData[element.prop]"
                                            :placeholder="element.placeholder"
                                            :minlength="getProperty(element, 'min')"
                                            :maxlength="getProperty(element, 'max')"
                                            :show-word-limit="getProperty(element, 'wordLimit')"/>
                                </template>
                            </template>
                            <template v-else-if="(element.item.type === 'select')">
                                <el-select
                                        v-model="formData[element.prop]"
                                        :placeholder="element.placeholder">
                                    <el-option v-for="option in getProperty(element, 'options', true, true)"
                                               :key="option.code"
                                               :value="option.code"
                                               :label="option.name"/>
                                </el-select>
                            </template>
                            <template v-else>
                                {{element.prop}}
                            </template>
                        </el-form-item>
                    </template>
                </template>
            </template>
            <!-- Скрытый за спойлером контент  -->
            <template v-if="formDescription.collapsed"></template>
            <el-collapse @change="handleCollapseChange">
                <el-collapse-item :title="collapseTitle">
                    <el-button>Скрытая кнопка</el-button>
                </el-collapse-item>
            </el-collapse>
        </el-form>
        <el-form ref="formSearchExtended"
                 v-bind:model="formData"
                 class="search-extended">
            <el-form-item label="Вид объекта"
                          prop="objectType">
                <el-select v-model="formData.objectType.value"
                           placeholder="Выберите вид объекта..."
                           clearable>
                    <el-option v-for="type in objectTypesForSearch"
                               v-bind:key="type.code"
                               v-bind:value="type.code"
                               v-bind:label="type.name"/>
                </el-select>
            </el-form-item>
            <component v-bind:is="type"/>
            <transition name="fade" mode="out-in">
                <div v-if="formData.objectType.value === 1" key="1">
                    <el-form-item v-bind:label="formData.objectNumber.label">
                        <el-tooltip placement="bottom"
                                    v-bind:hide-after="3000">
                            <div slot="content">
                                Маска для ввода номера объекта <strong>(18 цифр)</strong>, где:<br>
                                <hr>
                                – Первые <strong>10 цифр</strong> - Код СОАТО;<br>
                                – Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>
                                – Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке.<br>
                            </div>
                            <el-input v-bind:placeholder="formData.objectNumber.placeholder"
                                      v-model="formData.objectNumber.value"
                                      v-bind:minlength="formData.objectNumber.objectType[formData.objectType.value].size.min"
                                      v-bind:maxlength="formData.objectNumber.objectType[formData.objectType.value].size.max"
                                      show-word-limit/>
                        </el-tooltip>
                    </el-form-item>
                    <el-form-item class="except-this-one">
                        <el-row :gutter="24">
                            <el-col :span="10">
                                <el-tooltip placement="top-start">
                                    <div slot="content">Код СОАТО <strong>(10 цифр)</strong></div>
                                    <el-input v-model="formData.objectNumberDetailed.soato.value"
                                              v-bind:maxlength="formData.objectNumberDetailed.soato.size"
                                              show-word-limit/>
                                </el-tooltip>
                            </el-col>
                            <el-col :span="6">
                                <el-tooltip placement="top">
                                    <div slot="content">Кадастровый блок земельного участка <strong>(2 цифры)</strong></div>
                                    <el-input v-model="formData.objectNumberDetailed.block.value"
                                              v-bind:maxlength="formData.objectNumberDetailed.block.size"
                                              show-word-limit/>
                                </el-tooltip>
                            </el-col>
                            <el-col :span="8">
                                <el-tooltip placement="top-end">
                                    <div slot="content">Порядковый номер земельного участка в соответствующем кадастровом блоке <strong>(6 цифр)</strong></div>
                                    <el-input v-model="formData.objectNumberDetailed.order.value"
                                              v-bind:maxlength="formData.objectNumberDetailed.order.size"
                                              show-word-limit/>
                                </el-tooltip>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </div>
                <div v-else-if="formData.objectType.value === 2" key="2">
                    <el-form-item v-bind:label="formData.objectNumber.label">
                        <el-tooltip placement="bottom"
                                    v-bind:hide-after="3000">
                            <div slot="content">
                                Маска для ввода номера объекта <strong>(от 4 до 33 цифр)</strong>, где:<br>
                                <hr>
                                – Первые <strong>3 цифры</strong> - Код ТОР;<br>
                                – Последующие <strong>от 1 до 30 цифр</strong> - Порядковый номер объекта.<br>
                            </div>
                            <el-input v-bind:placeholder="formData.objectNumber.placeholder"
                                      v-model="formData.objectNumber.value"
                                      v-bind:minlength="formData.objectNumber.objectType[formData.objectType.value].size.min"
                                      v-bind:maxlength="formData.objectNumber.objectType[formData.objectType.value].size.max"
                                      show-word-limit/>
                        </el-tooltip>
                    </el-form-item>
                    <el-form-item class="except-this-one">
                        <el-row :gutter="24">
                            <el-col :span="5">
                                <el-tooltip placement="top-start">
                                    <div slot="content">Код ТОР <strong>(3 цифры)</strong></div>
                                    <el-input v-model="formData.objectNumberDetailed.soato.value"
                                              v-bind:maxlength="3"
                                              show-word-limit/>
                                </el-tooltip>
                            </el-col>
                            <el-col :span="4">
                                <el-input v-model="formData.objectNumberDetailed.block.value" disabled/>
                            </el-col>
                            <el-col :span="15">
                                <el-tooltip placement="top-end">
                                    <div slot="content">Порядковый номер объекта <strong>(от 1 до 30 цифр)</strong></div>
                                    <el-input v-model="formData.objectNumberDetailed.order.value"
                                              v-bind:maxlength="30"
                                              show-word-limit/>
                                </el-tooltip>
                            </el-col>
                        </el-row>
                    </el-form-item>
                </div>
                <div v-else-if="formData.objectType.value === 3" key="3">
                </div>
                <div v-else-if="formData.objectType.value === 4" key="4">
                    <h1>FUCK!</h1>
                </div>
            </transition>
            <!-- Вид объекта для поиска (без ПИК) -->
            <el-form-item :prop="formDescription.objectTypeForSearch.prop"
                          :label="formDescription.objectTypeForSearch.label">
                <el-select v-model="formData.objectTypeForSearch"
                           v-bind:placeholder="formDescription.objectTypeForSearch.placeholder">
                    <el-option v-for="type in objectTypesForSearch"
                               v-bind:key="type.code"
                               v-bind:value="type.code"
                               v-bind:label="type.name"/>
                </el-select>
            </el-form-item>
            <!-- Номер объекта -->
            <el-form-item :prop="formDescription.objectNumber.prop"
                          v-bind:label="formDescription.objectNumber.label">
                <template v-if="formData.objectTypeForSearch">
                    <el-tooltip v-bind:placement="formDescription.objectNumber.placement">
                        <template v-slot:content>
                            <div v-html="formDescription.objectNumber.validation[formData.objectTypeForSearch].tooltip"></div>
                        </template>
                        <el-input v-bind:placeholder="formDescription.objectNumber.placeholder"
                                  v-model="formData.objectNumber"
                                  v-bind:minlength="formDescription.objectNumber.validation[formData.objectTypeForSearch].size.min"
                                  v-bind:maxlength="formDescription.objectNumber.validation[formData.objectTypeForSearch].size.max"
                                  show-word-limit/>
                    </el-tooltip>
                </template>
                <template v-else>
                    <el-input v-bind:placeholder="formDescription.objectNumber.placeholder"
                              v-model="formData.objectNumber"/>
                </template>
            </el-form-item>
            <!-- Структурированный номер объекта -->
            <el-form-item :prop="formDescription.objectNumberStructured.prop"
                          v-if="isVisible(formDescription.objectNumberStructured.prop)"
                          class="object-number-structured">
                <el-row :gutter="24">
                    <el-col v-for="(item, key) in formDescription.objectNumberStructured.validation[formData.objectTypeForSearch]"
                            v-bind:span="item.span"
                            v-bind:key="key"
                            v-bind:class="getObjectNumberStructuredClass(key)">
                        <template v-if="item.type === 'input'">
                            <el-input v-model="formData.objectNumberStructured[key]"
                                      v-bind:minlength="item.size.min"
                                      v-bind:maxlength="item.size.max"
                                      show-word-limit/>
                        </template>
                        <template v-else-if="item.type === 'select'">
                            <el-select v-model="formData.objectNumberStructured[key]">
                                <el-option v-for="(char, key) in item.options"
                                           v-bind:key="key"
                                           v-bind:value="char"
                                           v-bind:label="char"/>
                            </el-select>
                        </template>
                    </el-col>
                </el-row>
            </el-form-item>
            <!-- Адрес объекта -->
            <el-form-item prop="object-address"
                          v-bind:label="formDescription.objectAddress.label">
                <el-input v-bind:placeholder="formDescription.objectAddress.placeholder" disabled/>
            </el-form-item>
            <!-- Вид объекта (уточняющий) -->
            <el-form-item prop="expanded-object-type"
                          v-if="isVisible('extendedType')"
                          v-bind:label="formDescription._extended_type.label">
                <el-select v-model="formData._extended_type"
                           v-bind:placeholder="formDescription._extended_type.placeholder">
                    <el-option v-for="type in objectAvailableTypes"
                               v-bind:key="type.code"
                               v-bind:value="type.code"
                               v-bind:label="type.name"/>
                </el-select>
            </el-form-item>
            <!-- ТОР -->
            <el-form-item prop="extended-tor"
                          v-if="formData.objectTypeForSearch"
                          v-bind:label="formDescription._extended_TOR.label">
                <el-select v-model="formData._extended_tor"
                           v-bind:placeholder="formDescription._extended_TOR.placeholder">
                    <el-option v-for="org in regOrgs"
                               v-bind:key="org.idReg"
                               v-bind:value="org.idReg"
                               v-bind:label="`${org.idReg} - ${org.orgShortName}`"/>
                </el-select>
            </el-form-item>
            <!-- Назначение -->
            <el-form-item prop="extended-purpose"
                          v-if="(formData.objectTypeForSearch === 1) || (formData.objectTypeForSearch === 2) || (formData.objectTypeForSearch === 3)"
                          v-bind:label="formDescription._extended_purpose.label">
                <el-select v-model="formData._extended_purpose"
                           v-bind:placeholder="formDescription._extended_purpose.placeholder"
                           popper-class="object-purpose">
                    <el-option v-for="purpose in objectPurposes"
                               v-bind:key="purpose.code"
                               v-bind:value="purpose.code"
                               v-bind:label="purpose.name"
                               v-bind:title="purpose.name"/>
                </el-select>
            </el-form-item>
            <!-- Площадь -->
            <el-form-item prop="extended-square"
                          v-if="(formData.objectTypeForSearch === 1) || (formData.objectTypeForSearch === 3)"
                          class="extended-square"
                          v-bind:label="`${formDescription._extended_square.label}, ${formDescription._extended_square.unit}`">
                <el-row v-bind:gutter="24">
                    <el-col v-bind:span="12"
                            class="from">
                        <el-input v-model="formData._extended_square.from">
                            <template slot="prepend">{{formDescription._extended_square.from.label}}</template>
                        </el-input>
                    </el-col>
                    <el-col v-bind:span="12"
                            class="to">
                        <el-input v-model="formData._extended_square.to">
                            <template slot="prepend">{{formDescription._extended_square.to.label}}</template>
                        </el-input>
                    </el-col>
                </el-row>
            </el-form-item>
            <!-- Дата созания -->
            <el-form-item prop="extended-creation-date"
                          v-if="formData.objectTypeForSearch"
                          class="extended-creation-date"
                          v-bind:label="formDescription._extended_creationDate.label">
                <el-row v-bind:gutter="24">
                    <el-col v-bind:span="12"
                            class="from">
                        <el-input v-model="formData._extended_creationDate.from"
                                  suffix-icon="el-icon-date">
                            <template slot="prepend">{{formDescription._extended_creationDate.from.label}}</template>
                        </el-input>
                    </el-col>
                    <el-col v-bind:span="12"
                            class="to">
                        <el-input v-model="formData._extended_creationDate.to"
                                  suffix-icon="el-icon-date">
                            <template slot="prepend">{{formDescription._extended_creationDate.to.label}}</template>
                        </el-input>
                    </el-col>
                </el-row>
            </el-form-item>
            <!-- Статус объекта -->
            <el-form-item prop="extended-status"
                          v-if="(formData.objectTypeForSearch === 1) || (formData.objectTypeForSearch === 2)"
                          v-bind:label="formDescription._extended_status.label">
                <el-select v-model="formData._extended_status"
                           v-bind:placeholder="formDescription._extended_status.placeholder">
                    <el-option v-for="status in objectStatuses"
                               v-bind:key="status.code"
                               v-bind:value="status.code"
                               v-bind:label="status.name"/>
                </el-select>
            </el-form-item>
            <!-- Материал стен -->
            <el-form-item prop="extended-wall-material"
                          v-if="(formData.objectTypeForSearch === 2)"
                          v-bind:label="formDescription._extended_wallMaterial.label">
                <el-select v-model="formData._extended_wallMaterial"
                           v-bind:placeholder="formDescription._extended_wallMaterial.placeholder">
                    <el-option v-for="material in objectWallMaterials"
                               v-bind:key="material.code"
                               v-bind:value="material.code"
                               v-bind:label="material.name"/>
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import SetEvent from '../mixins/SetEvent';
    import {mapGetters} from 'vuex';

    const formDataDefaults = {
        objectType: {
            value: null,
            regexp: null
        },
        objectNumber: {
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
        name: "junk",
        mixins: [SetEvent],
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
            type() {
                return `c${this.formData.objectType.value}`;
            },
            ...mapGetters(['objectTypesForSearch']),
            availableObjectTypesList() {
                let type = parseInt(this.formData.objectTypeForSearch, 10);

                switch (type) {
                    case 1:
                }
                return type;
            },
            availableObjectPurposesList() {
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
            }
        },
        watch: {
            'formData.objectNumber.raw'(newValue) {
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
            },
            'formData.extended.state'(state) {
                this.formData.extended.title = (state ? 'Скрыть' : 'Показать') + ' дополнительные критерии поиска';
            }
        },
        methods: {
            printData() {
                /* de-reactivate */
                console.log(JSON.parse(JSON.stringify({...this.$data})));
            },
            /* getters */
            getRoot(item, root) {
                let objectType = (this.formData.objectTypeForSearch || 1);

                if (root) {
                    if (this.hasRoot(item, root)) {
                        return item[root];
                    } else if (item.depData && item.depData.objectTypeForSearch) {
                        return item.depData.objectTypeForSearch[objectType][root];
                    }
                }

                return null;
            },
            getPropertyOld(item, root, property) {
                let rootObject = this.getRoot(item, root);

                if (rootObject && property) {
                    return rootObject[property];
                }

                return null;
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
        },
        mounted() {
            this.setEvent({...eventOptions, callback: this.printData});
        }
    }
</script>

<style scoped>

</style>