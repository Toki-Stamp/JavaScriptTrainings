<template>
    <article>
        <ul>
            <li v-for="ninja in list" v-on:click="ninja.show = !ninja.show">
                <h2>{{ninja.name}}</h2>
                <h3 v-show="ninja.show">{{ninja.speciality}}</h3>
            </li>
        </ul>
    </article>
</template>

<script>
    export default {
        name : "Ninjas",
        props: {
            'list': {
                type    : Array,
                required: true
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>
    article {
        margin:        20px 0;
        box-sizing:    border-box;
        background:    #f5f5f5;
        padding:       10px;
        border:        10px solid #364f6b;
        border-radius: 20px;
    }

    h2 {
        text-transform: uppercase;
        color:          #fc5185;
    }

    h3 {
        color: #3fc1c9;
    }

    ul {
        display:         flex;
        flex-wrap:       wrap;
        list-style-type: none;
        padding:         0;
    }

    li {
        flex-grow:     1;
        flex-basis:    300px;
        text-align:    center;
        padding:       30px;
        border:        5px solid #364f6b;
        border-radius: 10px;
        margin:        10px;
        cursor:        pointer;
    }
</style>