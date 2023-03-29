import {useDispatch} from "react-redux";


export function Todo ({todoInfo}) {

    console.log(todoInfo)
    const dispatch = useDispatch()

    const deleteTodo = () => {
        dispatch({
            type: "DELETE_TODO",
            payload: todoInfo.id
        })
    }

    const checkedTodo = (event)  => {
        dispatch({
            type:"CHANGE_STATUS",
            payload: {
                id: todoInfo.id,
                status: event.target.checked
            }
        })
    }

    return (
        <div className="todo">
            <input type="checkbox" onChange={checkedTodo}/>
            <span className={todoInfo.status && "done"}>{todoInfo.text}</span>
            <button onClick={deleteTodo}>Delete</button>
        </div>
    )
}