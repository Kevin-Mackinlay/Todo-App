import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css'

const TodoList = ({ tasks, toggleComplete, deleteTask }) => {
  return (
    <div className="todo-list">
      {tasks.map((task) => (
        <TodoItem
          key={task._id}
          task={task} // Pass the task prop
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default TodoList;
