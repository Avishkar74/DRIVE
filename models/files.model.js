const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({
    path:{
        type: String,
        required:[true,'File path is required']

    },
    originalName:{
        type: String,
        required:[true,'File original name is required']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:[true,'User is required']

    }
})

const file = mongoose.model('file',fileSchema)
module.exports = file