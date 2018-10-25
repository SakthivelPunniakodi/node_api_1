const output = require("../../_models/output");
const courseHomeRepo = require("../repository/courseHome");

exports.getCourseHome = async function (req, res, next) {
    var _output = new output();
    try {
        let bookCode = req.query.bookCode
        if (bookCode == undefined || bookCode == '') { throw { message: 'bookCode must be provided.' } }
        let result = await courseHomeRepo.getCourseHome(bookCode);
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

exports.getCourseDetail = async function (req, res, next) {
    var _output = new output();
    try {
        let bookId = req.query.bookId
        if (bookId == undefined || bookId == '') { throw { message: 'bookId must be provided.' } }
        let result = await courseHomeRepo.getCourseDetail(bookId);
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

exports.updateCourseHome = async function (req, res, next) {
    var _output = new output();
    try {
        let bookId = req.body.bookId
        if (bookId == undefined || bookId == 0) { throw { message: 'bookId must be provided.' } }
        let customContent = req.body.customContent
        if (customContent == undefined || customContent == '') { throw { message: 'customContent must be provided.' } }
        let templateId = req.body.templateId
        if (templateId == undefined) { templateId = 0; }
        //let userId = req.body.userId
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: 'userId must be provided.' } }
        let isActive = req.body.isActive
        if (userId == undefined) { throw { message: 'isActive must be provided.' } }
        let result = await courseHomeRepo.addEditCourseHome(bookId, customContent, templateId, userId, isActive)
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
