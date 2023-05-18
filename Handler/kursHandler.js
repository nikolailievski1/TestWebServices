const Kurs = require("../pkg/Model/kursModel");

exports.create = async (req, res) => {
    try{
        console.log(req.body);
        const newKurs = await Kurs.create(req.body);
        res.status(201).json({
            status:"success",
            data: {
                newKurs,
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
        const kursevi = await Kurs.find();
        res.status(201).json({
            status:"success",
            data: {
                kursevi,
            }
        })
    } catch (err) {
        res.status(400).json({
            status: "fail",
            message: err,
        })
    }
};
exports.getKurs = async (req, res) => {
    try{
        const kurs = await Kurs.findById(req.params.id);
        Kurs.findOne({_id : req.params.id});

        res.status(201).json({
            status:"success",
            data: {
                kurs, 
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
        const kurs = await Kurs.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });

        res.status(200).json({
            status:"success",
            data: {
                kurs, 
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
        await Kurs.findByIdAndDelete(req.params.id),
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