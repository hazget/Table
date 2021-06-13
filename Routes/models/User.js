const {Schema, model} = require('mongoose');

const schema = new Schema({
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    date:{type: Date, default: Date.now},
    status: { type: Boolean, required: false }
});

module.exports = model('User', schema);