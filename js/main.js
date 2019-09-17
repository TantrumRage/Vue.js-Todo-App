var app = new Vue({
	el: '#app',
	data: {
		todos: [],
		addButtonVisible: true,
		addTodoText: '',

	},
	methods: {
		todoToggle(todo) {
			todo.done = !todo.done;
		},
		addTodo() {
			this.todos.push({'text': this.addTodoText, 'done': false});
			this.addTodoText = '';
			this.addButtonVisible = !this.addButtonVisible;
		},
		deleteTodo(todo) {
			let itemIndex = this.todos.indexOf(todo);
			
			this.todos.splice(itemIndex, 1);
		}
	}
});