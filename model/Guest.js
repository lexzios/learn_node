const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const guestSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Guest', guestSchema);