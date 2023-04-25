const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const  PORT = 3001;

app.use(cors());
app.use(express.json());

app.listen(PORT, ()=>{
  console.log(`Server is running on http://localhost/${PORT}/`);
});

app.get("/", (req,res)=>{
  res.send("Hello");
});

// Route to get all posts
app.get("/menu", (req,res)=>{
  db.query("SELECT * FROM menu", (err,result)=>{
    if(err) {
      console.log(err)
    } 
    res.send(result)
  });   
});