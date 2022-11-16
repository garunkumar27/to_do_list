import React, { useState } from 'react'
import './Style.css'

const AddTask = ({ addTask }) => {
    const [data, setData] = useState("")

    const inputHandler = (e) => {
        setData(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (data !== "") {
            addTask(data);
            setData("");
        }

    }

    return (
        <div>
            <form onSubmit={submitHandler} className='inpt_div'>
                <div className='inpt'>
                    <input type="text" value={data} placeholder='Enter Your Task' onChange={inputHandler} />
                </div>
                <div>
                    <button type='submit' className="btt">Add</button>
                </div>


            </form>
        </div>
    )

};
function List1() {

    const addTask = text => setTask([...task, { text }]);
    const [task, setTask] = useState([
        {
            text: "Wake up",
            isCompleted: false
        },
        {
            text: "Fresh up",
            isCompleted: false
        },
        {
            text: "Have Breakfast ",
            isCompleted: false
        }
    ])
    // toggleTask is used to strike out this after completing, it identify them based on the index position using {index}
    const toggleTask = (index) => {
        const newTask = [...task];
        if (newTask[index].isCompleted) {
            newTask[index].isCompleted = false;
        }
        else {

            newTask[index].isCompleted = true;
        }
        setTask(newTask);
    }

    const removeTask = (index) => {
        const newTask = [...task]
        newTask.splice(index, 1);
        setTask(newTask);
    }
    return (
        <div className='list_to_do'>
            <h1>React To do List</h1>
            {task.map((work, index) => {
                return (
                    <div className='container'>
                        <div className='whole'>
                            {/* Task-name &completed-task is for css style names */}
                            {/* work.isCompleted? */}
                            <div>
                                <p onClick={() => toggleTask(index)} className={work.isCompleted ? "task-name` completed-task" : "task-name"}>
                                    <h5>
                                        {/* {index} */}
                                        {work.text}
                                    </h5>
                                </p>
                            </div>
                            <div className='button'>
                                <button onClick={() => removeTask(index)} className="bt">Del</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <AddTask addTask={addTask} />
        </div>
    )
}

export default List1