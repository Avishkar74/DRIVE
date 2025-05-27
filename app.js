const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.render('index');
})

app.set('view engine' , 'ejs');

app.listen(3000, () =>{
    console.log('Server is running on localhost:3000');
})