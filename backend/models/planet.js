const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema({
    pl_hostname: String,
    pl_name: String,
    pl_radj: Number
});

const Planet = mongoose.model('Planet', planetSchema);
module.exports = Planet;