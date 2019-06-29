Vue.component('app-user', {
    data    : function () {
        return {
            users: [
                {username: 'Max'},
                {username: 'Chris'},
                {username: 'Jack'},
                {username: 'Anna'}
            ]
        }
    },
    template: '<div><div class="card" v-for="user in users"><div class="card-body"><h5 class="card-title">User name</h5><p class="card-text">{{ user.username }}</p></div></div></div>'
});

new Vue({
    el  : '#vue-basics-app',
    data: {
        title: 'Users app'
    }
});