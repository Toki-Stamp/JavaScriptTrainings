<template>
    <div class="land-plot">
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
        <!--            <el-divider/>-->
        <el-form-item label="Номер объекта">
            <el-tooltip placement="bottom"
                        v-bind:hide-after="3000">
                <div slot="content">
                    Маска для ввода номера объекта <strong>(18 цифр)</strong>, где:<br>
                    <hr>
                    – Первые <strong>10 цифр</strong> - Код СОАТО;<br>
                    – Следующие <strong>2 цифры</strong> - Кадастровый блок земельного участка;<br>
                    – Последние <strong>6 цифр</strong> - Порядковый номер земельного участка в соответствующем кадастровом блоке.<br>
                </div>
                <el-input placeholder="Введите номер объекта..."
                          v-model="formData.objectNumber.raw"
                          clearable
                          v-bind:minlength="formData.objectNumber.size"
                          v-bind:maxlength="formData.objectNumber.size"
                          show-word-limit
                          v-bind:disabled="formData.objectNumber.disabled"/>
            </el-tooltip>
        </el-form-item>
        <el-form-item class="except-this-one">
            <el-row :gutter="24">
                <el-col :span="10">
                    <el-tooltip placement="top-start">
                        <div slot="content">Код СОАТО <strong>(10 цифр)</strong></div>
                        <el-input v-model="formData.objectNumber.detailed.soato"
                                  clearable
                                  minlength="10"
                                  maxlength="10"
                                  show-word-limit/>
                    </el-tooltip>
                </el-col>
                <el-col :span="6">
                    <el-tooltip placement="top">
                        <div slot="content">Кадастровый блок земельного участка <strong>(2 цифры)</strong></div>
                        <el-input v-model="formData.objectNumber.detailed.block"
                                  clearable
                                  minlength="2"
                                  maxlength="2"
                                  show-word-limit/>
                    </el-tooltip>
                </el-col>
                <el-col :span="8">
                    <el-tooltip placement="top-end">
                        <div slot="content">Порядковый номер земельного участка в соответствующем кадастровом блоке <strong>(6 цифр)</strong></div>
                        <el-input v-model="formData.objectNumber.detailed.order"
                                  clearable
                                  minlength="6"
                                  maxlength="6"
                                  show-word-limit/>
                    </el-tooltip>
                </el-col>
            </el-row>
        </el-form-item>
        <!--            <el-divider/>-->
        <el-form-item label="Адрес объекта">
            <el-input disabled/>
        </el-form-item>
        <el-collapse v-on:change="changeCollapse">
            <el-collapse-item v-bind:title="formData.expanded.title"
                              name="extended-search-params">
                <el-form-item label="Ещё какая-то строка 1">
                    <el-input disabled/>
                </el-form-item>
                <!--                    <el-divider/>-->
                <el-form-item label="Ещё какая-то строка 2">
                    <el-input disabled/>
                </el-form-item>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name   : "land-plot",
        props  : ['data', 'types'],
        data() {
            return {
                formData            : this.data,
                objectTypesForSearch: this.types
            }
        },
        methods: {
            changeCollapse() {
                this.formData.extended.state = !this.formData.extended.state;
            }
        }
    }
</script>

<style scoped>

</style>