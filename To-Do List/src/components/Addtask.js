import { useState } from "react";
import './Addtask.css';

function Addtask() {
    const [task, setTask] = useState('');
    const [desc, setDesc] = useState('');



    const Click = (e) => {
        e.preventDefault();


        if (task === "" && desc === "") {
            alert("Enter Your Tasks 😡😡😡");
        }else{
            fetch('http://localhost:8000/todo_list', {
                method: "POST",
                headers: { "Content-Type": "Application/json", },
                body: JSON.stringify({
                    task,
                    desc
                }),
            }).then((res) => res.json());
            window.location.reload(false);
        }
    }





    return (
        <>
            <form>

                <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   Add Your  Taks ;)
                </button>

                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Enter Tasks</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <input type="text" placeholder="Add a Task...." required onChange={(e) => { setTask(e.target.value) }} value={task} />
                                <input type="text" placeholder="Add a Desc...." onChange={(e) => { setDesc(e.target.value) }} required value={desc}/>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn " data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn " onClick={Click}>Add Task</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Addtask;