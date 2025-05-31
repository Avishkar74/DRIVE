const express = require('express')
const router = express.Router() 
const upload = require('../config/multer.config')
const fileModel = require('../models/files.model')

router.get('/home', (req, res) => {
    res.render('home')
})

router.post('/upload-file', upload.single('file'), async (req, res) => {

    const newFile = await fileModel.create({
        path: req.file.path,
        originalName: req.file.originalname,
        user: req.user._id
    })

    
})

module.exports = router