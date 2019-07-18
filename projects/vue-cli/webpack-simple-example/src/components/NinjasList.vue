<template>
    <table class="table table-bordered table-hover">
        <thead class="thead-light">
            <tr>
                <th>Index</th>
                <th>Data</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(ninja, index) in ninjas.list">
                <td>{{index}}</td>
                <td>
                    <div class="input-group">
                        <input type="text" class="form-control" ref="input" v-bind:value="ninja">
                        <div class="input-group-append">
                            <button class="btn btn-outline-success" type="button" @click="edit(index, $refs.input[index].value)">Edit</button>
                            <button class="btn btn-outline-danger" type="button" @click="edit(index, null)">Clear</button>
                        </div>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    export default {
        name   : "ninjas",
        data() {
            return {
                ninjas: {
                    title: 'List of Ninjas',
                    list : ['Ryu', 'Mario', 'Yoshi']
                }
            }
        },
        methods: {
            edit(index, value) {
                this.$set(this.ninjas.list, index, (value ? value : ''));
            }
        }
    }
</script>

<style scoped>

</style>