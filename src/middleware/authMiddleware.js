const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

const requireSignIn = async (req, res,next)=>{
    try {
        const decode = await jwt.verify(req.headers.authorization,process.env.SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error)
    }
};


module.exports = {requireSignIn};