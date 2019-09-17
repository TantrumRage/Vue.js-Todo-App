var app = new Vue({
	el: '#app',
	data: {
		todos: [
				
			]
	},
	methods: {
		todoToggle(todo) {
			todo.done = !todo.done;
		},
	}
});