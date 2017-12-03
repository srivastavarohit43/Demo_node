'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    image: {
        type: Object
    }
}, {
    timestamps: {
        createdAt: 'created',
        updatedAt: 'updated'
    }
});

module.exports = mongoose.model('userModel', userSchema);