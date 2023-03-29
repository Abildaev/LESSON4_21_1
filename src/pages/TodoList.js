import {useSelector, useDispatch} from "react-redux";
import {useState} from "react";
import {Todo} from "../components/Todo";


export default function TodoList() {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const {todos} = useSelector(state => state)

    const addTodo = () => {
        dispatch({
            type: "ADD_TODO",
            payload: input
        })

        setInput("")
    }

    const deleteAll = () => {
        dispatch({
            type: "DELETE_ALL"
        })
    }

    return (
        <>
            <input
                value={input}
                type="text"
                placeholder="todo"
                onChange={(event) => setInput(event.target.value)}
            />
            <button onClick={addTodo}>add todo</button>
            <button onClick={deleteAll}>delete all</button>
            {
                todos.length === 0
                    ?
                    <p>Задач нет</p>
                    :
                    todos.map(todo => <Todo todoInfo={todo}/>)
            }
        </>
    )
}