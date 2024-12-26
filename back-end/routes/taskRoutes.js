const express = require('express');
const Task = require('../models/task.js');

const router = express.Router();

// Creater a new task
router.post('/tasks', async (req, res) => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//get all tasks
router.get('/tasks', async (req, res) => {
  
  try {
    const tasks = await Task.find();
    console.log('Tasks fetched:', tasks);
    res.status(200).json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: error.message });
  }
});

//update a task
router.patch('/tasks/:id', async (req, res) => {
  
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//delete a task
router.delete("/tasks/:id", async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(200).json(task);

    }catch (error){
        res.status(500).json({error: error.message})
    }
})

module.exports = router;
