const express = require('express');
const app = express();
require('dotenv').config();
const connection = require('./config/db')
const path = require('path')
const cors = require('cors')

//cors

app.use(cors());


//Template engine
app.set('views',path.join(__dirname,'./views'))
app.set('view engine','ejs');

//Database
connection();

//Routes
app.use(express.json())
app.use('/api/files',require('./routes/files'))
app.use('/files',require('./routes/show'))
app.use('/files/download',require('./routes/download'))

const PORT = process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log("server is running on ",PORT);
})