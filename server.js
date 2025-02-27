const express=require('express')
const app=express();
require('dotenv').config();
const db = require('./db'); 

const bodyParser=require('body-parser');
app.use(bodyParser.json());  //req.body
const PORT=process.env.PORT || 3000;


const userRoutes = require('./routes/userRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

app.use('/user',userRoutes);
app.use('/candidate',candidateRoutes);

app.listen(PORT,()=>{
    console.log("Listening on port 3000");
});
