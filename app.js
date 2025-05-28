const express = require('express');
const app = express();
const userRoutes = require('./routes/user.route')
const homeRoutes = require('./routes/index.route')
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const connectToDB = require('./config/db');
connectToDB();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',homeRoutes)
app.use('/user',userRoutes)




app.set('view engine' , 'ejs');

app.listen(3000, () =>{
    console.log('Server is running on localhost:3000');
})