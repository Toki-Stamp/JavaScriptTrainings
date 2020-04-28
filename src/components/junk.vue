<template>
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
        <el-button>Поиск</el-button>
        <el-form-item v-bind:label="formData.objectType.label"
                      prop="objectType">
            <el-select v-model="formData.objectType.value"
                       v-bind:placeholder="formData.objectType.placeholder"
                       clearable>
                <el-option v-for="type in objectTypesForSearch"
                           v-bind:key="type.code"
                           v-bind:value="type.code"
                           v-bind:label="type.name"/>
            </el-select>
        </el-form-item>
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
    </el-form>
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
            ...mapGetters(['objectTypesForSearch'])
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
        },
        mounted() {
            this.setEvent({...eventOptions, callback: this.printData});
        }
    }
</script>

<style scoped>

</style>