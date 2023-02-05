import { createStore } from 'vuex'

export default createStore ({
    state :{
        todo_lists : [],
        edit_todo : {},
        user_id : localStorage.getItem('user_logged_in'),
        all_users : localStorage.getItem('users')
    },
    mutations : {
        commitSubmitedTodos (state) {
            var todo_lists = localStorage.getItem('todo_lists')
            console.log(todo_lists)
            if (todo_lists) {
                let todos_for_this_user = []
                JSON.parse(todo_lists).forEach(function(item, key) {
                    if (state.user_id == item.user_id) {
                        todos_for_this_user.push(item)
                    }
                })
                state.todo_lists = todos_for_this_user
            } else {
                state.todo_lists = []
            }
        },

        commitEditTodo (state, data) {
            state.edit_todo = {user_id : localStorage.getItem('user_logged_in'), id : data.id, todo : data.todo}
            console.log(state.edit_todo)
        }
    },
    actions : {

    },
    modules : {

    }
})