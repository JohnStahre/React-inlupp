const mongodb = require('mongoose');

const userSchema = mongodb.Schema({

    firstName:      {type: String, required: true},
    lastName:       {type: String, required: true},
    email:          {type: String, required: true, unique: true},
    passwordHash:   {type: String, required: true},

    created:        { type: Date, default: Date.now },
    modified:       { type: Date, default: Date.now }
})

module.exports = mongodb.model('User',userSchema);