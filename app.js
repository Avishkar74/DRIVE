const express = require('express');
const app = express();
const userRoutes = require('./routes/user.route')

app.use('/user',userRoutes)



app.set('view engine' , 'ejs');

app.listen(3000, () =>{
    console.log('Server is running on localhost:3000');
})