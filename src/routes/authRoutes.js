const express = require('express');
const {registerController, loginController, currentController, forgotPasswordController} = require('../controllers/authControllers')
const {requireSignIn} = require('../middleware/authMiddleware')
const router = express.Router();

// routing
//REGISTER || Method POST
router.post('/register', registerController);

//LOGIN || Method POST
router.post('/login', loginController);

//CURRENT || Method GET
router.get('/current',requireSignIn ,currentController);

//FORGOT || Method GET
router.put('/forgot-password', forgotPasswordController);


module.exports = router;