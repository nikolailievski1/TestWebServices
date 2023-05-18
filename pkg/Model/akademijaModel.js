const mongoose = require ("mongoose");

const akademijaSchema = new mongoose.Schema({
    ime: {
        type: String,
        required: [true, "Mora da ima ime na akademija"],
    },
    adresa: {
        type: String,
        required: [true, "Mora da ima adresa na akademija"],
    },
});

const Akademija = mongoose.model('Akademija', akademijaSchema);

module.exports = Akademija;