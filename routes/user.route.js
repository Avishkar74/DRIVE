const express = require('express')
const router = express.Router();
const userModel = require('../models/user.model')
const { body , validationResult } = require('express-validator');


router.get('/register' , (req,res) => {
    res.render('register')
})

router.post('/register',
    body('username').not().isEmpty().isLength({min:3}),
    body('email').not().isEmpty().isEmail().isLength({min:13}),
    body('password').not().isEmpty().isLength({min:3}),
    
    async (req,res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()})
        }
    const {username,email,password} = req.body
    const newUser = await userModel.create({
        username: username ,
        email : email,
        password : password
    })
    console.log(newUser)
    res.json(newUser)
})

module.exports = router