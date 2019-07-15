/**
 * Created by Fomichev Yuri on 12.07.2019
 * Contact me at : toki.stamp@gmail.com
 */

var Vue = require('vue');
var Hello = require('vue!./components/hello-again.vue')

new Vue({
    el: 'body',
	components: {
		hello: Hello
	}
});