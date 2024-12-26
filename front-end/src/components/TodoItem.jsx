import React from 'react'
import './TodoItem.css'

const TodoItem = ({task, toggleComplete, deleteTask}) => {
  return (
    <div className='todo-item'>
        <input
        type='checkbox'
        checked={task.completed}
        onChange={()=> toggleComplete(task._id, !task.completed)}/>

<span className={task.completed ? "task-comppleted" : ""}> {task.name}   </span>
<button onClick={() => deleteTask(task._id)} className="delete-button">Delete</button>


    </div>
  )
}

export default TodoItem;