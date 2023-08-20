import {useState} from "react";

function Form() {
    const [newItem, setNewItem] = useState("")
    const [todos, setToDos] = useState([])

    function handleSubmit(event) {
        event.preventDefault();
        setToDos((currentToDos) => {
            return [...currentToDos,
                {id: crypto.randomUUID(), title: newItem, completed: false},
            ]
        })
        setNewItem("")
    }

    function toggleToDo(id, completed) {
        setToDos((currentToDos) => {
            return currentToDos.map((todo) => {
                return todo.id === id ? {...todo, completed} : todo
            })
        })
    }

    function handleDelete(id) {
        setToDos((currentToDos) => {
            return currentToDos.filter((todo) => todo.id !== id)
        })
    }

    console.log(todos)
    return (
        <div>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">New Item</label>
                    <input value={newItem} type="text" id="item"
                        onChange={event => setNewItem(event.target.value)}
                    />
                </div>
                <button className="btn" >Add</button>
            </form>
            <h1>To Do List</h1>
            <ul className="list">
                {todos.map(todo => (
                    <li key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed}
                            onChange={e=> toggleToDo(todo.id, e.target.checked)}/>
                            {todo.title}
                        </label>
                        <button onClick={() => handleDelete(todo.id)} className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Form