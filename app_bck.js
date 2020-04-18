const express = require('express');
const mongoose = require('mongoose');




mongoose.connect('mongodb://localhost/hospitalDB',
                {useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology: true},
                (err, res) => {

    if (err) throw err;
    console.log('Database Online');
});

const app = express();

//Rutas
app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(3000,() =>{
  console.log('Server AdminPro is Running....');
});
