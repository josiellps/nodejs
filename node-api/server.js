const express = require('express');
var MongoClient = require('mongodb');
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, { useNewUrlParser: true });

const app=express();
app.get('/',(req,res)=>{
   res.send('Hello Josiel')
});

app.listen(3000);