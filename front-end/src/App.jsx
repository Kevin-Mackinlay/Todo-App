import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getTasks, addTask, updateTask, deleteTask } from './services/services.js';
import TodoInput from './components/TodoInput.jsx';
import TodoList from './components/TodoList.jsx';

// Styled container
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: yellow;
  font-family: Arial, sans-serif;
`;

const App = () => {
  const [tasks, setTasks] = useState([]);

 useEffect(() => {
   const fetchTasks = async () => {
     try {
       const fetchedTasks = await getTasks();
       console.log('Fetched tasks:', fetchedTasks); // Check if tasks are being fetched correctly
       setTasks(fetchedTasks);
     } catch (error) {
       console.error('Error fetching tasks:', error);
     }
   };

   fetchTasks();
 }, []);

  const addTodo = async (taskData) => {
    try {
      const newTask = await addTask(taskData);
      setTasks((prevTasks) => [...prevTasks, newTask]);
    } catch (error) {
      console.log('Error adding task:', error);
    }
  };

  const toggleComplete = async (taskId, completed) => {
    try {
      const updatedTask = await updateTask(taskId, { completed });
      setTasks((prevTasks) => prevTasks.map((task) => (task._id === taskId ? updatedTask : task)));
    } catch (error) {
      console.log('Error updating task:', error);
    }
  };

  const onDeleteTask = async (taskId) => {
    try {
      await deleteTask(taskId);
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    } catch (error) {
      console.log('Error deleting task:', error);
    }
  };

  return (
    <AppContainer>
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList tasks={tasks} toggleComplete={toggleComplete} deleteTask={onDeleteTask} />
    </AppContainer>
  );
};

export default App;
