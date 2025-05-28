const express = require('express');
const app = express();
const userRoutes = require('./routes/user.route')
const dotenv = require('dotenv');
dotenv.config();
const userModel = require('./models/user.model')
const connectToDB = require('./config/db');
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user',userRoutes)



app.set('view engine' , 'ejs');

app.listen(3000, () =>{
    console.log('Server is running on localhost:3000');
})