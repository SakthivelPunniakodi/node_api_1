const templateRepo = require("../repository/template");
const output = require("../../_models/output");

exports.getAllTemplate = async function (req, res, next) {
    var _output = new output();
    try {
        let result = await templateRepo.getAllTemplate();
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

exports.getTemplateDetails = async function (req, res, next) {
    var _output = new output();
    try {
        let templateId = req.query.templateId
        if (templateId == undefined || templateId == 0) { throw { message: "templateId must be provided." } }
        let result = await templateRepo.getTemplateDetails(templateId);
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

exports.deleteTemplate = async function (req, res, next) {
    var _output = new output();
    try {
        let templateId = req.query.templateId
        if (templateId == undefined || templateId == 0) { throw { message: "templateId must be provided." } }
        let result = await templateRepo.deleteTemplate(templateId);
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

exports.createTemplate = async function (req, res, next) {
    var _output = new output();
    try {
        let templateId = 0
        //let userId = req.body.userId
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided." } }
        let templateContent = req.body.templateContent
        if (templateContent == undefined || templateContent == '') { throw { message: "templateContent must be provided." } }
        let templateName = req.body.templateName
        if (templateName == undefined || templateName == '') { throw { message: "templateName must be provided." } }
        let result = await templateRepo.addEditTemplate(templateId, templateName, templateContent, userId);
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

exports.updateTemplate = async function (req, res, next) {
    var _output = new output();
    try {
        let templateId = req.body.templateId
        if (templateId == undefined || templateId == 0) { throw { message: "templateId must be provided." } }
        //let userId = req.body.userId
        const jwtDecode = require("../../_helpers/jwtDecode");
        let Payload = await jwtDecode.decodeJWT(req)
        let userId = Payload.userId
        if (userId == undefined || userId == 0) { throw { message: "userId must be provided." } }
        let templateContent = req.body.templateContent
        if (templateContent == undefined || templateContent == '') { throw { message: "templateContent must be provided." } }
        let templateName = req.body.templateName
        if (templateName == undefined || templateName == '') { throw { message: "templateName must be provided." } }
        let result = await templateRepo.addEditTemplate(templateId, templateName, templateContent, userId);
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