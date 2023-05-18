const mongoose = require ("mongoose");

const kursSchema = new mongoose.Schema({
    ime: {
        type: String,
        required: [true, "Mora da ima ime na akademija"],
    },
    adresa: {
        type: String,
        required: [true, "Mora da ima adresa na akademija"],
    },
    oblast: {
        type: String,
        required: [true, "Mora da ima oblast za koja e nameneta akademijata"]
    }
});

const Kurs = mongoose.model('Kurs', kursSchema);

module.exports = Kurs;