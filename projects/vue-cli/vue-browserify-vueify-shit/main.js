/**
 * Created by Fomichev Yuri on 12.07.2019
 * Contact me at : toki.stamp@gmail.com
 */

const Vue = require('vue');
const Hello = require('./components/hello.vue');

new Vue({
    el: 'body',
	components: {
		hello: Hello
	}
});