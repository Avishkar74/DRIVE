const multer = require('multer')
const firebaseStorage = require('multer-firebase-storage')
const firebaseApp = require('./firebase.config')


const storage = firebaseStorage({
    credentials: firebaseApp.options.credential,
    bucketName : firebaseApp.options.storageBucket
})

const upload = multer({
    storage: storage 
})

module.exports = upload