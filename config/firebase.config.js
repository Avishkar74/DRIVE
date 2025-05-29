const admin = require("firebase-admin");

const serviceAccount = require("../drive-firebase.json");

const firebaseApp = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "drive-324a4.firebasestorage.app"
})

//drive-324a4.firebasestorage.app

module.exports = firebaseApp;