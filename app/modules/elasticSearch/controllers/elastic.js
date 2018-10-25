const output = require("../../_models/output");
const elasticRepo = require("../repository/elastic");

let pingHost = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await elasticRepo.pingHost();
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};

let search = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await elasticRepo.search(req.body);
        _output.data = result.hits.hits;
        _output.isSuccess = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.isSuccess = false;
        _output.message = error.message;
    }
    res.send(_output);
};


module.exports = {
    pingHost,
    search
};