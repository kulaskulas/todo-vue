<template>
    <div class="row">
        <div class="col-12">
            <div class="card-header d-flex justify-content-between mb-3 mt-3">
                <h5 class="page-title">My TODO Lists ({{ $store.state.todo_lists.length }})</h5>
                <div class="float-end">
                    <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addTodos">Add TODO</button>
                </div>
            </div>
        </div>
        
        <div class="col-12">
            <table class="table table-bordered table-stripe">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Date Time Completed</th>
                        <th width="10%">Action</th>
                    </tr>
                </thead>
                <tbody v-for="(todo, index) in $store.state.todo_lists" :key="index">
                    <tr v-if="$store.state.todo_lists.length > 0">
                        <td>{{ todo.todo }}</td>
                        <td>{{ todo.todo }}</td>
                        <td class="text-center">
                            <button class="btn btn-sm btn-danger" @click="deleteTodos(todo.id)">
                                <i class="fa fa-trash"></i>
                            </button>&nbsp;

                            <button class="btn btn-sm btn-primary" @click="editTodos(todo)" 
                                    data-bs-toggle="modal" data-bs-target="#editTodos">
                                <i class="fa fa-pen"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <AddTodo/>
        <EditTodo/>

    </div>
    
</template>

<script>
    import AddTodo from '../Todos/AddTodo.vue'
    import EditTodo from '../Todos/EditTodo.vue'
    export default {
        data () {
            return {
                // isShowed : false
            }
        },
        components : {
            AddTodo, EditTodo
        },
        // props : ['todo_lists', 'edit_todo'],

        methods : {
            deleteTodos (id) {
                let todo_lists = localStorage.getItem('todo_lists')
                let new_todo_lists = []
                JSON.parse(todo_lists).forEach(function(key, item){
                    console.log(key.id, id)
                    if (key.id !== id) { 
                        new_todo_lists.push(key)
                    }
                })
                localStorage.setItem('todo_lists', JSON.stringify(new_todo_lists))
                this.$store.commit('commitSubmitedTodos')
            },

            editTodos(todo) {
                this.$store.commit('commitEditTodo', todo)
            }
        }
    }
</script>