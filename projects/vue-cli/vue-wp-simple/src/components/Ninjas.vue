<template>
    <article>
        <ul>
            <li v-for="ninja in list" v-on:click="ninja.show = !ninja.show">
                <h2>{{ninja.name}}</h2>
                <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
            </li>
        </ul>
        <button v-on:click="deleteNinja">Delete Ninja</button>
    </article>
</template>

<script>
    export default {
        name   : "Ninjas",
        props  : {
            'list': {
                type    : Array,
                required: true
            }
        },
        data() {
            return {}
        },
        methods: {
            deleteNinja() {
                (this.list.length) && this.list.pop();
            }
        },
        /* lifecycle hooks */
        beforeCreate() {
            console.log('1: Before Create Lifecycle Hook');
        },
        created() {
            console.log('2: Created Lifecycle Hook. Best stage to fetch needed data from data source');
        },
        beforeMount() {
            console.log('3: Before Mount Lifecycle Hook');
        },
        mounted() {
            console.log("4: Mounted Lifecycle Hook. Best stage to manipulate DOM once this component been mounted");
        },
        beforeUpdate() {
            console.log("5: Before Update Lifecycle Hook");
        },
        updated() {
            console.log("6: Updated Lifecycle Hook");
        }
    }
</script>

<style scoped>
    article {
        margin: 20px 0;
        box-sizing: border-box;
        background: #f5f5f5;
        padding: 10px;
        border: 10px solid #364f6b;
        border-radius: 20px;
    }

    h2 {
        text-transform: uppercase;
        color: #fc5185;
    }

    h3 {
        color: #3fc1c9;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0;
    }

    li {
        flex-grow: 1;
        flex-basis: 300px;
        text-align: center;
        padding: 30px;
        border: 5px solid #364f6b;
        border-radius: 10px;
        margin: 10px;
        cursor: pointer;
    }
</style>