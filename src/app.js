var indexless = require('./less/index.less'),
	secondless = require('./less/second.less');
var module1 = require('./components/module1');
var module2 = require('./components/module2');

var Vue = require('vue');
var VueRouter = require('vue-router');
Vue.use(VueRouter);

var App = Vue.extend({});

var router = new VueRouter();

router.map({
	'/' : {
		component : module1 
	},
	'/path1' : {
		component : module1
	},
	'/path2' : {
		component : module2
	}
});

router.start(App, '#app');