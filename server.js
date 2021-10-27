const express = require("express");
const app = express();
const PORT = 5000;
const quizData = require('./src/data/quiz.json');
const cors = require('cors')
app.use(cors())




app.get("/Question",(req,res)=>{
    res.send(quizData.data);
    console.log('Question')
});

app.listen(PORT,()=>{
    console.log("server is running")
});