const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:[3,'Username must be at least 3 characters']
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        minLength:[13,'Email must be at least 13 characters']
       
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minLength:[5,'Password must be at least 5 characters']
    }
})

module.exports = mongoose.model('User',userSchema)