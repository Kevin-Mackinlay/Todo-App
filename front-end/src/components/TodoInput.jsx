import React, { useState } from 'react';
import './TodoInput.css'

const TodoInput = ({ addTodo }) => {
  const [taskName, setTaskName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTodo({ name: taskName, completed: false }); //send task data to parent
      setTaskName(''); //reset input
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input type="text" placeholder="Add a new task..." value={taskName} onChange={(e) => setTaskName(e.target.value)} className="input-field" />

      <button type="submit" className="add-button">
        add Task
      </button>
    </form>
  );
};


export default TodoInput;