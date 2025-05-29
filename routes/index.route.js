const express = require('express')
const router = express.Router() 
const upload = require('../config/multer.config')

router.get('/home', (req, res) => {
    res.render('home')
})

router.post('/upload-file', upload.single('file'), (req, res) => {
    if (!req.file) {
        console.log("No file was uploaded")
        return res.status(400).json({ 
            success: false,
            message: "No file was uploaded" 
        })
    }

    console.log("File uploaded successfully:", req.file.originalname)
    res.status(200).json({
        success: true,
        message: "File uploaded successfully",
        file: req.file
    })
})

module.exports = router