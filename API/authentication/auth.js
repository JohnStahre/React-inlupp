// jwt = jason web token kolla också jwt.io 
const jwt = require('jsonwebtoken');
require ('dotenv').config();  

const secretKey = process.env.SECRET_KEY

exports.generateToken = user => {
    return jwt.sign({id: user._id}, secretKey, {expiresIn: '2h'})
}

exports.verifyToken = (req, res, next) => {

    try {
        // splittar bara för att fåå token delen, då den skickas som en beare
        const token = req.headers.authorization.split(" ")[1]
        req.userData = jwt.verify(token, secretKey)
        next();
    }


catch {
    return res.status(401).json({
        statusCode:401,
        status: false,
        message: 'Access restricte, please login'
    })
}

}
