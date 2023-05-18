const Akademija = require("../pkg/Model/akademijaModel");

exports.create = async (req, res) => {
    try{
        console.log(req.body);
        const newAkademija = await Akademija.create(req.body);
        res.status(201).json({
            status:"success",
            data: {
                newAkademija,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        })
    }
};

exports.getAll = async (req, res) => {
    try{
        const akademii = await Akademija.find();
        res.status(201).json({
            status:"success",
            data: {
                akademii,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        })
    }
};
exports.getAkademija = async (req, res) => {
    try{
        const akademija = await Akademija.findById(req.params.id);
        Akademija.findOne({_id : req.params.id});

        res.status(201).json({
            status:"success",
            data: {
                akademija, 
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        })
    }
};
exports.update = async (req, res) => {
    try {
        const akademija = await Akademija.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status:"success",
            data: {
                akademija, 
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        })
    }
};
exports.delete = async (req, res) => {
    try{
        await Akademija.findByIdAndDelete(req.params.id),
        res.status(204).json({
            status:"success",
            data: null
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        })
    }
};