<template>
    <div id="app">
        <br>
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
            <el-button v-on:click="handleSearch">Поиск</el-button>
        </el-form>
    </div>
</template>

<script>
    import setEvent from './mixins/SetEvent.js';
    import c1 from './components/c1.vue';
    import c2 from './components/c2.vue';
    import c3 from './components/c3.vue';
    import {mapGetters} from 'vuex';

    const formDataDefaults = {
        objectType  : {
            value : null,
            regexp: null
        },
        objectNumber: {
            size    : 18,
            raw     : '',
            detailed: {
                soato: '',
                block: '',
                order: ''
            },
            pattern : '^([1-9][0-9]{9})([0-9]{2})([0-9]{6})$'
        },
        extended    : {state: false, title: 'Показать дополнительные критерии поиска'}
    };
    const eventOptions = {
        type    : 'keydown',
        trigger : {key: 'B', modifiers: ['alt']},
        callback: null
    };

    export default {
        name      : 'App',
        components: {c1, c2, c3},
        mixins    : [setEvent],
        data() {
            return {
                formData : JSON.parse(JSON.stringify(formDataDefaults)),
                formRules: {
                    objectType: [
                        {
                            type    : 'object',
                            required: true,
                            message : 'Внимание! Не выбран «Вид объекта»!',
                            trigger : 'change',
                            fields  : {
                                code: {
                                    type    : 'number',
                                    required: true,
                                    message : 'Внимание! Не выбран «Вид объекта»!'
                                }
                            }
                        }
                    ]
                }
            }
        },
        computed  : {
            type() {
                return `c${this.formData.objectType.value}`;
            },
            ...mapGetters(['objectTypesForSearch'])
        },
        watch     : {
            //     'formData.objectNumber.raw': function (newValue) {
            //         if (newValue && (newValue.length === this.formData.objectNumber.size)) {
            //             const match = new RegExp(this.formData.objectNumber.pattern, 'g').exec(newValue);
            //
            //             if (match) {
            //                 this.formData.objectNumber.detailed.soato = match[1];
            //                 this.formData.objectNumber.detailed.block = match[2];
            //                 this.formData.objectNumber.detailed.order = match[3];
            //             }
            //         } else if (!newValue) {
            //             this.formData.objectNumber.detailed = Object.assign({}, formDataDefaults.objectNumber.detailed);
            //         }
            //     }
            'formData.extended.state'(state) {
                this.formData.extended.title = (state ? 'Скрыть' : 'Показать') + ' дополнительные критерии поиска';
            }
        },
        created() {
            this.setEvent({...eventOptions, callback: this.printState});
        },
        mounted() {
            this.printClassifiers.call(this);
        },
        methods   : {
            printState() {
                /* de-reactivate */
                console.log(JSON.parse(JSON.stringify({...this.formData})), {formDataDefaults, eventOptions});
            },

            printClassifiers() {
                let data = this.$store.state.classifiers;

                for (let key in data) {
                    let size = (data[key].defData ? data[key].defData.length : data[key].length);

                    console.log(
                        '%c%s%c%s%c%s',
                        'color:lightgray; background: inherit', 'Classifier ',
                        'color:black; background: orange; font-weight: bold', `[ ${key} ]`,
                        'color:lightgray; background: inherit', ` Successfully Loaded. ${size} Record${((size > 1) ? 's' : '')} Found.`
                    );
                }
            },
            handleSearch() {
                console.log('handle search');
            }
        }
    }
</script>

<style>
    #app {
        font-family:             "Times New Roman", serif;
        -webkit-font-smoothing:  antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align:              center;
        color:                   rgb(44, 62, 80);
    }

    p {
        color:       darkorange;
        font-weight: bold;
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