const mongodb = require('mongoose');

const productSchema = mongodb.Schema({

    name:       { type: String, required: true, unique: true },
    short:      { type: String, required: true },
    desc:       { type: String, required: true },
    price:      {type: Number, required:true },
    image:      {type: String, required: true},

    created:    { type: Date, default: Date.now },
    modified:   {type: Date, default: Date.now }
})

// inom parantesen döper vi collection i MongoDB exempelvis product
module.exports = mongodb.model('product', productSchema);