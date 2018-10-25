//import repository
const welcomeRepo = require("../repository/welcome");
const output = require("../models/output");


//methords to call in router
exports.welcome = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await welcomeRepo.welcome();
        _output.data = result;
        _output.is_success = true;
        _output.message = "success";
    } catch (error) {
        _output.data = "";
        _output.is_success = false;
        _output.message = error.message;
    }
    res.send(_output);
};