<template>
    <div class="modal fade" id="editTodos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit TODO</h5>
            </div>
            <form @submit.prevent="updateTodos">
            <!-- <form @submit.prevent="$emit('submit-todos', this.todos)"> -->
                <div class="modal-body">
                    <div class="row mb-1">
                        <div class="col-12">
                            <input type="text" class="form-control" v-model="this.$store.state.edit_todo.todo">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary btn-sm close-edit-todos-modal" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary btn-sm">Save changes</button>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

        methods : {
            updateTodos () {
                let todo_lists = localStorage.getItem('todo_lists')
                let new_todo_lists = []
                let edited_todos = {user_id : localStorage.getItem('user_logged_in'), id : this.$store.state.edit_todo.id, todo : this.$store.state.edit_todo.todo}
                let index = JSON.parse(todo_lists).find(e => e.id === edited_todos.id)
                JSON.parse(todo_lists).forEach(function(key, item){
                    if (key.id !== edited_todos.id) {
                        new_todo_lists.push(key)
                    }
                })
                new_todo_lists.unshift(edited_todos) // push in the beginning of the array
                localStorage.setItem('todo_lists', JSON.stringify(new_todo_lists))
                document.querySelector('button.close-edit-todos-modal').click()
                this.$store.commit('commitSubmitedTodos')
            }
        }
        

        // computed : {
        //     edit_id () {
        //         return this.edit_todo.id 
        //     }
        // }

        
    }
</script>