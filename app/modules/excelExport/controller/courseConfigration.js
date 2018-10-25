const output = require("../../_models/output");
const coursesRepo = require("../repository/courseConfigration");

exports.exportCourseSetting = async function (req, res, next) {
    var _output = new output();
    try {
        let bookId = req.query.bookId
        if (bookId == undefined || bookId == '') { throw { message: 'bookId must be provided.' } }
        let result = await coursesRepo.exportCourseSetting(bookId);
        _output.data = result;
        _output.isSuccess = true;
        _output.message = "success";
        res.setHeader('Content-type', "application/octet-stream");
        res.setHeader('Content-disposition', 'attachment; filename=CourseSetting.xls');
        res.send(result);
    } catch (error) {
        next(error)
    }
};

