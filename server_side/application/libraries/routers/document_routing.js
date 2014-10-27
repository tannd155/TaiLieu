(function () {
    'use strict';
    var app                 = require('../../config/app.config.server'),
        helper              = require('../helpers/helper_library').helperObj;
        documentController  = require('../../controllers/document_controllers/app.controller.document'),
        documentObj         = documentController.docuement;
    app.post('document/getListCategory', function(req, res) {
        documentObj.getListCategory( function(data) {
            res.send(JSON.stringify(data));
            res.end();
        });
    });
    
    app.post('document/getDocCatByID', function(req, res) {
        documentObj.getDocCatByID(req.body['category_id'], function(data) {
            if(! helper.checkEmptyArray(data))
            {
                res.send({'result' : true, 'data' : data});
                res.end();
            }
            else { res.end({'result' : false, 'message' : 'Khong tim thay category co id ' + req.body['category_id']}); }
        });
    });
    
    app.post('document/addCategory', function(req, res) {
        documentObj.addCategory(req.body['category_name'], function(err,data) {
            if(!err) {
                res.send(JSON.stringify({
                    'result'    : true,
                    'data'      : data
                }));
                res.end();
            }
            else { res.end(JSON.stringify({'result' : 'false', 'message' : 'Them danh muc khong thanh cong!'})); };
        });    
    });
    
    app.post('document/updateCategory', function(req, res){
        documentObj.updateCategory(req.body['category_id'], req.body['category_name'], function(data){
            res.send(JSON.stringify(data));
            res.end();
        });    
    });
    
    app.post('document/getListDocument', function(req, res){
        documentObj.getListDocument( function(data) {
            res.send(JSON.stringify(data));
            res.end();
        });
    });
    
    app.post('document/getDocByID', function(req, res){
        documentObj.getDocByID(req.body['document_id'], function(data) {
            if(! helper.checkEmptyArray(data))
            {
                res.send({'result' : true, 'data' : data});
                res.end();
            }
            else { res.end({'result' : false, 'message' : 'Khong tim thay tai lieu co id ' + req.body['document_id']}); }
        });    
    });
    
    app.post('document/addDocument'), function(req, res){
        documentObj.addDocument(req.body['content_id'], req.body['category_id'], function(err,data) {
            if(!err) {
                res.send(JSON.stringify({
                    'result'    : true,
                    'data'      : data
                }));
                res.end();
            }
            else { res.end(JSON.stringify({'result' : 'false', 'message' : 'Them tai lieu khong thanh cong!'})); };
        });       
    });
    
    app.post('document/updateDocument', function(req, res){
        documentObj.updateDocument(req.body['document_id'], req.body['content_id'],req.body['category_id'], function(data){
            res.send(JSON.stringify(data));
            res.end();
        });    
    });
    
    app.post('document/getContentByID', function(req, res){
        documentObj.getContentByID(req.body['content_id'], function(data) {
            if(! helper.checkEmptyArray(data))
            {
                res.send({'result' : true, 'data' : data});
                res.end();
            }
            else { res.end({'result' : false, 'message' : 'Khong tim thay noi dung co id ' + req.body['content_id']}); }
        });        
    });
    
    app.post('document/addContent', function(req, res){
        documentObj.addContent(req.body['title'], req.body['content'], function(err,data) {
            if(!err) {
                res.send(JSON.stringify({
                    'result'    : true,
                    'data'      : data
                }));
                res.end();
            }
            else { res.end(JSON.stringify({'result' : 'false', 'message' : 'Them noi dung khong thanh cong!'})); };
        });      
    });
    
    app.post('document/updateContent', function(req, res){
        documentObj.updateContent(req.body['category_id'], req.body['category_name'], function(data){
            res.send(JSON.stringify(data));
            res.end();
        });      
    });
    
}).call(this);