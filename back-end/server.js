const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();


//middleware
app.use(express.json());
app.use(cors());

//connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Connected to MongoDB"))
.catch((err) => console.log("could not connect to MongoDB",err));

//start the server 
const Port = 5000;
app.listen(Port, () => console.log(`Server running on port ${Port}`));


//import routes
const taskRoutes = require("./routes/taskRoutes.js");
app.use("/api", taskRoutes);