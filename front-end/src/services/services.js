import axios from 'axios';

//Base URL for backend API
const API_BASE_URL = 'http://localhost:5000/api';


//fetch all tasks
export const getTasks = async () => {
    try{
        const response = await axios.get(`${API_BASE_URL}/tasks`);
        return response.data;
    }catch(error){
        console.log('Error fetching tasks:', error);
        throw error;
    }
}


//create a new task
export const addTask = async (taskData) => {
    try{
        const response = await axios.post(`${API_BASE_URL}/tasks`, taskData);
        return response.data;
    }catch(error){
        console.log('Error creating task:', error);
        throw error;
    }
}

//update a task
export const updateTask = async (taskId, taskData) => {
    try{
        const response= await axios.patch(`${API_BASE_URL}/tasks/${taskId}`, taskData);
        return response.data;
    }catch(error){
        console.log('Error updating task:', error);
        throw error;
    }
}

//delete task
export const deleteTask = async (taskId) => {
    try{
    const response = await axios.delete(`${API_BASE_URL}/tasks/${taskId}`);
    return response.data;
}catch(error){
    console.log('Error deleting task:', error);
    throw error;
}
}