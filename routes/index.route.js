const express = require('express')
const router = express.Router() 
const upload = require('../config/multer.config')
const authMiddleware = require('../middlewares/auth')
const fileModel = require('../models/files.model')

router.get('/home',authMiddleware, async(req, res) => {
    const userFiles = await fileModel.find({
        user: req.user.userId
    })
    console.log(userFiles)
    res.render('home',{
        files: userFiles
    })
})

router.post('/upload-file', authMiddleware, upload.single('file'), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    try {
 
        const newFile = await fileModel.create({
            path: req.file.path,
            originalName: req.file.originalname,
            user: req.user.userId
        });        res.json(newFile);
    } catch (error) {
        console.error("Error creating file record:", error);
        res.status(500).json({ 
            error: "Failed to upload file",
            message: error.message
        });
    }
})

module.exports = router