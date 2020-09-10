const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type : String,
        require : true
    },

    username: {
        type : String,
        require : true
    },

    password: {
        type : String,
        require : true
    },

    phone: {
        type : Number,
        require : true
    }
});

const user = mongoose.model('User',userSchema);

module.exports = user;