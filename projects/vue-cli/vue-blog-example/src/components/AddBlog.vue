<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>
        <form action="">
            <label>Blog Title (input):<input type="text" required v-model.lazy="blog.title"></label>
            <label>Blog Content (text area):<textarea cols="30" rows="3" v-model.lazy="blog.content"></textarea></label>
        </form>
        <div id="checkboxes">
            <label>Ninja<input type="checkbox" value="Ninjas" v-model="blog.categories"></label>
            <label>Wizard<input type="checkbox" value="Wizards" v-model="blog.categories"></label>
            <label>Mario<input type="checkbox" value="Mario" v-model="blog.categories"></label>
            <label>Cheese<input type="checkbox" value="Cheese" v-model="blog.categories"></label>
        </div>
        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog Title: {{blog.title}}</p>
            <p>Blog Content:</p>
            <p>{{blog.content}}</p>
            <p>Blog Categories:</p>
            <ul>
                <li v-for="category in blog.categories">{{category}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddBlog",
        data() {
            return {
                blog: {
                    title     : '',
                    content   : '',
                    categories: []
                }
            }
        }
    }
</script>

<style scoped>
    #add-blog {
        margin:     20px auto;
        max-width:  500px;
        border:     1px solid lightgrey;
        padding:    10px;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    }

    #add-blog h2, #preview h3 {
        text-align: center;
    }

    #add-blog label {
        display: block;
        margin:  20px 0 10px;
    }

    #add-blog input[type="text"], #add-blog textarea {
        display: block;
        width:   100%;
        padding: 8px;
        border:  1px solid grey;
    }

    #add-blog input {
        font-weight: bold;
    }

    #add-blog textarea {
        resize: none;
    }

    #checkboxes {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    #checkboxes input {
        margin-left: 4px;
        margin-right: 0;
    }

    #checkboxes label {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px dotted grey;
        padding: 4px;
        cursor: pointer;
    }

    #preview {
        padding:     10px 20px;
        border:      1px dotted grey;
        margin:      30px 0;
        user-select: none;

        background:  repeating-linear-gradient(
                             -45deg,
                             rgba(200, 200, 200, .3),
                             rgba(200, 200, 200, .3) 20px,
                             rgba(150, 150, 150, .3) 20px,
                             rgba(150, 150, 150, .3) 40px
                     );

    }

    #preview h3 {
        margin-top: 10px;
    }
</style>