const express=require('express');
const router=require('./Routes/productRouter');
const bodyParser=require('body-parser');
var cors = require('cors');
const path=require('path');

const app=express();
const dotenv=require('dotenv').config();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
  app.use('/images', express.static(path.join(__dirname, '../vite-project/src/assets/images')));
app.use('/account',router);

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is listening on ${port} http://localhost:${port}`);
})