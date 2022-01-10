const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mascotaSchema = new Schema({
    nombre: String,
    desc: String
});
//crear el modelo
const Mascota = mongoose.model('Mascota', mascotaSchema);
module.exports = Mascota;