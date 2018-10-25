var sqlType = require('mssql');
const db_library = require('../../_helpers/db_library')
const param = require('../../_models/parameter_input');

exports.getAllTemplate = async () => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        db_library
            .execute("[dbo].[GetAllTemplate]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.getTemplateDetails = async (templateId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('templateId', sqlType.BigInt, templateId);
        parameters.push(para);
        db_library
            .execute("[dbo].[GetTemplateDetails]", parameters, db_library.query_type.SP).then((value) => {
                var results = value.recordsets[0][0];
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.deleteTemplate = async (templateId) => {
    return await new Promise((resolve, reject) => {
        let parameters = [];
        let para = new param('templateId', sqlType.BigInt, templateId);
        parameters.push(para);
        db_library
            .execute("[dbo].[DeleteTemplate]", parameters, db_library.query_type.SP).then((value) => {
                var results = 'Deleted Successfully.';
                resolve(results);
            }).catch(err => {
                reject(err)
            });
    });
}

exports.addEditTemplate = async (templateId, templateName, templateContent, userId) => {
    return await new Promise(async (resolve, reject) => {
        let parameters = [];
        let para = new param('userId', sqlType.BigInt, userId);
        parameters.push(para);
        para = new param('templateId', sqlType.BigInt, templateId);
        parameters.push(para);
        para = new param('templateName', sqlType.NVarChar, templateName);
        parameters.push(para);
        para = new param('templateContent', sqlType.NVarChar, templateContent);
        parameters.push(para);
        db_library
            .execute("[dbo].[AddEditTemplate]", parameters, db_library.query_type.SP).then((value) => {
                if (value.recordsets[0][0].status == 0) {
                    reject(value.recordsets[0][0].message);
                }
                resolve('Successfully Updated.');
            }).catch(err => {
                reject(err)
            });
    });
}