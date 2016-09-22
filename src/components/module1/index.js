var template = require('./module1.html');

var MyComponent = Vue.extend({
	template : template,
	data : function(){
		return {text : 'hello world ok'}
	}
});
module.exports = MyComponent;
// Vue.component('my-component', MyComponent);

// new Vue({
// 	el : '#rootExample'
// });
