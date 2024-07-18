
import './TodoList.css';
import { useEffect, useState } from "react";
import Addtask from "./Addtask";

function TodoList() {
    const [todos, setTodos] = useState([]);

    const GetAllTasks = () => {
        fetch('http://localhost:8000/todo_list')
            .then((res) => res.json())
            .then((data) => setTodos(data))
    }

    useEffect(() => {
        GetAllTasks();
    }, [])

    const DeleteBtn = (todo) => {
        fetch(`http://localhost:8000/todo_list/${todo.id}`, {
            method: "DELETE"
        })
            .then((res) => res.json())
            .then((data) => {
                GetAllTasks();
            })
    }







    return (
        <>
            <div className='todo-list container d-flex-column w-50 mt-5 pb-3 '>
                <Addtask />

                {todos.map((todo) => {
                    return (
                        <ul key={todo.id} className='todos'>
                            <div className='header-btn'>
                            <li>{todo.task}</li>
                            <button className='btn' onClick={() => DeleteBtn(todo)}>Delete</button>
                            <p>{todo.desc}</p>
                            </div>
                        </ul>
                    )
                })}

            </div>



        </>
    )
}
export default TodoList;