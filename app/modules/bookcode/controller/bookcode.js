const bookcodeRepo = require("../repository/bookcode");
const output = require("../../_models/output");

exports.deleteBookcode = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        let result = await bookcodeRepo.deleteBookcode(userId, bookId);
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

exports.addBookcode = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let bookId = 0//req.body.bookId;
        //if (bookId == undefined || bookId != 0) { throw { message: "bookId must be 0" } };
        let bookCode = req.body.bookCode;
        if (bookCode == undefined || bookCode == '') { throw { message: "bookCode must be provided" } };
        let title = req.body.title;
        if (title == undefined || title == 0) { throw { message: "title must be provided" } };
        let isActive = req.body.isActive;
        if (isActive == undefined) { throw { message: "isActive must be provided" } };
        let result = await bookcodeRepo.addEditBookcode(userId, bookId, bookCode, title, isActive);
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

exports.updateBookcode = async function (req, res, next) {
    var _output = new output();
    try {
        //let userId = req.body.userId;
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided" } };
        let bookId = req.body.bookId;
        if (bookId == undefined || bookId == 0) { throw { message: "bookId must be provided" } };
        let bookCode = req.body.bookCode;
        if (bookCode == undefined || bookCode == '') { throw { message: "bookCode must be provided" } };
        let title = req.body.title;
        if (title == undefined || title == 0) { throw { message: "title must be provided" } };
        let isActive = req.body.isActive;
        if (isActive == undefined) { throw { message: "isActive must be provided" } };
        let result = await bookcodeRepo.addEditBookcode(userId, bookId, bookCode, title, isActive);
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

exports.getAllBookcode = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await bookcodeRepo.getAllBookcode();
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