<template>
    <footer>
        <h2>{{title}}</h2>
        <h3>{{message}}</h3>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                title  : 'This is footer component',
                message: 'This is footer little message'
            }
        }
    }
</script>

<style scoped>
    footer {
        background:    #f5f5f5;
        padding:       10px;
        border:        10px solid #364f6b;
        border-radius: 20px;
    }

    h2 {
        color:          #fc5185;
        text-align:     center;
        text-transform: uppercase;
    }

    h3 {
        color:      #3fc1c9;
        text-align: center;
    }
</style>