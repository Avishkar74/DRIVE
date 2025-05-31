const express = require('express')
const router = express.Router() 
const upload = require('../config/multer.config')
const authMiddleware = require('../middlewares/auth')
const fileModel = require('../models/files.model')
const firebase = require('../config/firebase.config')

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

router.get('/download/:path', authMiddleware ,async (req, res) => {
    const loggedInUserId = req.user.userId
    const path = req.params.path
    const file = await fileModel.findOne({
        path: path,
        user: loggedInUserId
    })
    if (!file) {
        return res.status(401).json({ error: "unauthorized" });
    }
    
    const signedUrl = await firebase.storage().bucket().file(path).getSignedUrl({
        action: 'read',
        expires: Date.now() + 60 * 1000
    })
    res.redirect(signedUrl[0])
})

module.exports = router