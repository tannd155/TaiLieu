(function() {
    'use strict';
    var document                                    = require('../../models/app.model.document'),
        documentModel                               = document.documentModel,
        documentCatModel                            = document.documentCatModel,
        documentContentModel                        = document.documentContentModel;
    
    var documentClass                               = function () {
    };
    
    documentClass.prototype.getListCategory = function (callback) {
        documentCatModel.getListCategory(callback);
    };
    
    documentClass.prototype.getDocCatByID           = function (id, callback) {
        documentCatModel.getDocCatByID(id, callback);
    };
    
    documentClass.prototype.addCategory             = function(category_name, callback) {
        documentCatModel.addCategory(category_name, callback);
    };
    
    documentClass.prototype.updateCategory          = function(category_id, category_name, callback) {
        documentCatModel.updateCategory(category_id, category_name, callback);
    };
    
    documentClass.prototype.getListDocument         = function(callback) {
        documentModel.getListDocument(callback);
    };
    
    documentClass.prototype.getDocByID              = function(id, callback) {
        documentModel.getDocByID(id,callback);
    };
    
    documentClass.prototype.addDocument             = function(content_id, category_id, callback) {
        documentModel.addCategory(content_id, category_id, callback);
    };
    
    documentClass.prototype.updateDocument          = function(document_id, content_id, category_id, callback) {
        documentModel.updateCategory(document_id, content_id, callback);
    };
    
    documentClass.prototype.getContentByID          = function(id, callback) {
        documentContentModel.getContentByID(id, callback);
    };
    
    documentClass.prototype.addContent              = function(title, content, callback) {
        documentContentModel.addContent(title, content, callback);
    };
    
    documentClass.prototype.updateContent           = function(content_id, title, content, status, callback) {
        documentContentModel.updateContent(content_id, title, content, status, callback);
    };
    
    exports.document = new documentClass();
    
}).call(this);