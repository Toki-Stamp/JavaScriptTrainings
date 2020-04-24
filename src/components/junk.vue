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