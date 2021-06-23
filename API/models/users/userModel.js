const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth')

exports.registerUser = (req, res) => {

    User.exists({ email: req.body.email }, (err, result) => {
        if(err) {
            return res.status(400).json({
                statusCode: 400,
                status: false,
                message: 'you made a bad request',
                err
            })
        }

        if(result) {
            return res.status(400).json({
                statusCode:400,
                status: false,
                message: 'email is allready taken',

            })
        }

        const salt = bcrypt.genSaltSync(10);

        bcrypt.hash(req.body.password, salt, (err, hash) => {
            
            if(err) {
                return res.status(500).json({
                    statusCode: 500,
                    status: false,
                    message: 'failed when encrypting user password',
                    err
                })
            }

            const newUser = new User({
                firstName:      req.body.firstName,
                lastName:       req.body.lastName,
                email:          req.body.email,
                passwordHash:   hash
            })

            newUser.save()
            .then(() => {
                res.status(201).json({ 
                statusCode: 201,
                status: true,
                message: 'User was created successfully'
            })
        })
        .catch(err => {
             res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'failed to create  user',
                err
            })

        })

     
        })
    })
}

exports.loginUser = (req, res) => {
    User.findOne({ email: req.body.email })
    .then(user => {
        if(!user) {
            return res.status(404).json({
                statusCode: 404,
                status: false,
                message: 'Incorrect email or password'

            })
        }

        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
            if(err) {
                return res.status(400).json({
                    statusCode: 400,
                    status: false,
                    message: ' You made a bad request',
                    err
                })
            }
    
            if(result) {
                    res.status(200).json({
                        statusCode: 200,
                        status: true,
                        message: 'User updated successfuly',
                        token: auth.generateToken(user)
                    })
                }else{
                    res.status(401).json({
                        statusCode: 401,
                        status: false,
                        message: 'Incorrect email or password'
                    })
                }
            
        })
    })
}
       