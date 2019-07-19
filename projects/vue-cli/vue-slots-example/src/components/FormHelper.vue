<template>
    <div id="form-helper">
        <h1>Form Helper Component</h1>
        <form>
            <div id="form-header">
                <slot name="form-header"></slot>
            </div>
            <div id="form-data">
                <slot name="form-data"></slot>
            </div>
            <div id="form-controls">
                <slot name="form-controls"></slot>
            </div>
            <div id="form-addendum">
                <h3>This is form addendum</h3>
                <ul>
                    <li><a href="#">Link1</a></li>
                    <li><a href="#">Link2</a></li>
                    <li><a href="#">Link3</a></li>
                    <li><a href="#">Link4</a></li>
                </ul>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "FormHelper"
    }
</script>

<style scoped>
    #form-helper {
        color: rgb(0, 91, 150);
        border: 2px solid rgb(3, 57, 108);
        border-radius: 4px;
        background-color: rgb(179, 205, 224);
        padding: 4px;
        margin: 4px;
    }

    form > div:not(:empty) {
        border: 2px solid rgb(3, 57, 108);
        border-radius: 4px;
        padding: 4px;
        margin: 4px 0;
    }

    h1 {
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin-right: 4px;
    }
</style>