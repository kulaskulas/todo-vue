<template>
    <div class="modal fade" id="addTodos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add TODO {{ todos.length }}</h5>
            </div>
            <form @submit.prevent="submitTodos">
            <!-- <form @submit.prevent="$emit('submit-todos', this.todos)"> -->
                <div class="modal-body">
                    <div class="row mb-1" v-for="(todo, index) in todos" :key="index">
                        <div class="col-10">
                            <input type="text" class="form-control" v-model="todo.todo">
                        </div>
                        <div class="col-2">
                            <button type="button" 
                                :class="{ 'btn btn-primary': index == 0, 'btn btn-danger': index > 0 }" 
                                @="index == 0 ? { click: addTodoField } : {click: () => removeTodoField(index) }">
                                <i :class="{ 'fa fa-plus': index == 0, 'fa fa-trash': index > 0 }"></i>
                            </button>

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm close-add-todos-modal" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary btn-sm">Save changes</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            todos : [{user_id : localStorage.getItem('user_logged_in'), id: this.$store.state.todo_lists.length > 0 ? this.$store.state.todo_lists.at(-1).id+1 : 1, todo : ""}],
            added_id : this.$store.state.todo_lists.length > 0 ? this.$store.state.todo_lists.at(-1).id+2 : 2
        }
    },

    // props : ['isShowed'],

    methods : {
        addTodoField () {
            this.todos.push({user_id : localStorage.getItem('user_logged_in'), id: this.added_id++, todo:""})
        },

        removeTodoField (index) {
            this.todos.splice(index, 1)
        },

        submitTodos () {
            document.querySelector('button.close-add-todos-modal').click()
            
            var todo_lists = localStorage.getItem('todo_lists')
            let todos_array = []
            if (todo_lists) {
                JSON.parse(todo_lists).forEach(function (key, item) {
                    todos_array.push(key)// push exisiting users and new users to localstorage
                })

                this.todos.forEach(function (key, item) {
                    todos_array.unshift(key)// push exisiting users and new users to localstorage
                })

                localStorage.setItem('todo_lists', JSON.stringify(todos_array))
            } else {
                localStorage.setItem('todo_lists', JSON.stringify(this.todos))
            }

            // console.log(this.$store.state.todo_lists)
            this.$store.commit('commitSubmitedTodos')
            this.todos = [{user_id : localStorage.getItem('user_logged_in'), id: this.$store.state.todo_lists ? this.$store.state.todo_lists.at(-1).id+1 : 1, todo : null}]

            
            // this.$emit('submit-todos') // trigger the data on the parent once submit
        }
    }
}
</script>