const mongoose = require('mongoose')

const userSchema =new mongoose.Schema({
    id:{
        type: mongoose.ObjectId,
    },
    username:{
        type: String,
        allowNull: true
    },
    firstName:{
        type: String,
        require: true
    },
    lastName:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    password:{
        type: String,
        require: true
    },
    date:{
        type: Date
    },
    address:{
        type: String,
        require: true
    },
    answer:{
        type: String,
        require: true
    },
    phone:{
        type: String,
        require: true
    },
    googleID: {
        type: String,
        allowNULL: true
    },
    picture:{
        type: String,
        allowNULL: true
    }
},{timestamps: true});

module.exports = mongoose.model('Users', userSchema);