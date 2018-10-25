const output = require("../../_models/output");
const coursesRepo = require("../repository/courses");

exports.getAllCourses = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await coursesRepo.getAllCourses();
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

exports.getAllCourseVideo = async function (req, res, next) {
    var _output = new output();
    try {
        let bookId = req.query.bookId
        if (bookId == undefined || bookId == 0) { throw { message: 'bookId must be provided.' } }
        let result = await coursesRepo.getAllCourseVideo(bookId);
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