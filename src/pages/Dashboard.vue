<template>
    <Header/>
    <!-- <TodoList :todo_lists="todo_lists" @submit-todos="triggerTodos"/> -->
    <TodoList/>

</template>
<script>
    import Header from '../layout/Header.vue'
    import TodoList from '../pages/Todos/TodoList.vue'
    export default {
        data () {
            return {
                // todo_lists : []
            } 
        },

        components : {
            Header, TodoList
        },

        methods : {
            // triggerTodos() {
            //     console.log("emited")
            //     var todo_lists = localStorage.getItem('todo_lists')
            //     this.todo_lists = JSON.parse(todo_lists)
            // }
        },

        created () {

            var todo_lists = localStorage.getItem('todo_lists')
            var user_id = localStorage.getItem('user_logged_in')
            if (todo_lists) {
                let todos_for_this_user = []
                JSON.parse(todo_lists).forEach(function(item, key) {
                    if (user_id == item.user_id) {
                        todos_for_this_user.push(item)
                    }
                })
                this.$store.state.todo_lists = todos_for_this_user
            } else {
                this.$store.state.todo_lists = []
            }

            this.$store.commit('commitSubmitedTodos')
            // var todo_lists = localStorage.getItem('todo_lists')
            // if (todo_lists) {
            //     this.$store.state.todo_lists = JSON.parse(todo_lists)
            // }
        },
    }
</script>