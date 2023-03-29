const initialState = {
    todos: []
};


export function reducer(state = initialState, action) {
    if (action.type === "ADD_TODO") {
        let id = 1;
        if (state.todos.length > 0) {
            id = state.todos[state.todos.length - 1].id + 1
        }
        return {
            ...state, todos: [
                ...state.todos,
                {
                    text: action.payload,
                    id,
                    status: false
                }
            ]
        }
    }

    else if(action.type === "DELETE_TODO") {
        const filteredArr = state.todos.filter(todo => +todo.id !== +action.payload);
        return {...state, todos: filteredArr}
    }

    else if(action.type === "CHANGE_STATUS") {
        const newArr = state.todos.map(todo => {
            if(+todo.id === +action.payload.id) {
                return {
                    ...todo,
                    status: action.payload.status
                }
            }
            else {
                return todo
            }
        })
        return {...state, todos: newArr}
    }

    else if(action.type === "DELETE_ALL") {
        return {...state, todos: []}
    }

    return state
}