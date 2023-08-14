const express = require('express');
const app = express();

require('dotenv').config();
require('./config/database').dbConnect();

app.use(express.json());
const PORT = process.env.process || 4000;

app.listen(PORT,()=>{
    console.log(`server is listening at ${PORT}`);
})

 


