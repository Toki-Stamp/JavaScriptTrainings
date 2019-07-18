<template>
    <header>
        <h2>{{title}}</h2>
        <h3>{{message}}</h3>
    </header>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                title  : 'This is header component',
                message: 'This is header little message'
            }
        }
    }
</script>

<style scoped>
    header {
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