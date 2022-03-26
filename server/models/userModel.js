const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "user"
    },
    cart: {
        type: Array,
        default: []
    },
    avatar:{
        type: String,
        default: 'https://res.cloudinary.com/devatchannel/image/upload/v1602752402/avatar/avatar_cugq40.png'
    },
    mobile: {type: String, default: ''},
    address: {type: String, default: ''},
},{
    timestamps: true
})
module.exports = mongoose.model('Users', userSchema)