(function () {
    'use strict';
    var db                      = require('../config/app.config.db'),
        schema                  = require('../config/app.config.schema'),
        counter                 = require('../app.model.counter'),
        documentSchema          = schema.documentSchema,
        documentCatSchema       = schema.documentCatSchema,
        documentContentSchema   = schema.documentContentSchema;
    
    documentCatSchema.statics.getListCategory = function (callback) {
        this.model('document_category').find(function (err, data) {
            callback(data); 
        });
    }
    
    documentCatSchema.statics.getDocCatByID = function (id, callback) {
        this.model('document_category').find({'category_ID' : id}, function (err, data) {
            callback(data);
        });
    };
    
    documentCatSchema.statics.addCategory = function (category_name, callback) {
        counter.counterModel.getCount('document_category', function (count) {
            var categoryModel       = db.mongoose.model('document_category', documentCatSchema),
                newCategory                 = new categoryModel({
                    'category_ID'           : count.count_number,
                    'category_Name'         : category_name,
                    'created_at'            : Date()
                });
            newCategory.save(function (err, data) {
                if (!err) {
                    counter.counterModel.incCount('document_category', function () {
                        callback(err,data);
                    });
                } else { callback(err) };
            });
        });
    };
    
    documentCatSchema.statics.updateCategory = function (category_id, category_name, status, callback) {
        this.model('document_category').findOneAndUpdate(
                    {'category_ID' : category_iD}, 
                    {
                    'category_Name' : category_name,
                    'updated_at'    : Date(),
                    'status'        : status
                    }, function(err,data){
            callback(data);
        });
    };
    
    documentSchema.statics.getListDocument = function (callback) {
        this.model('document').find(function (err, data) {
            callback(data);
        });
    };
    
    documentSchema.statics.getDocByID = function (id, callback) {
        this.model('document').find({'document_ID' : id}, function (err,data) {
            callback(data);
        });
    };
    
    documentSchema.statics.addDocument = function (content_id, category_id, callback) {
        counter.counterModel.getCount('document', function (count) {
            var documentModel       = db.mongoose.model('document', documentSchema),
                newDocument                 = new documentModel({
                    'document_ID'           : count.count_number,
                    'content_ID'            : content_id,
                    'created_at'            : Date()
                });
            newCategory.save(function (err, data) {
                if (!err) {
                    counter.counterModel.incCount('document', function () {
                        callback(err,data);
                    });
                } else { callback(err) };
            });
        });    
    };
    
    documentSchema.statics.updateDocument = function (document_id, content_id, category_id, status, callback) {
        this.model('document').findOneAndUpdate(
                    {'document_ID'  : document_id}, 
                    {
                    'content_ID'    : content_id,
                    'category_ID'   : category_id,
                    'updated_at'    : Date(),
                    'status'        : status
                    }, function(err,data){
            callback(data);
        });    
    };
    
    documentContentSchema.statics.getContentByID = function (id, callback) {
        this.model('document_content').find({'content_ID' : id}, function (err,data) {
            callback(data);
        });
    };
    
    documentContentSchema.statics.addContent = function (title, content, callback) {
        counter.counterModel.getCount('document_content', function (count) {
            var contentModel       = db.mongoose.model('document_content', documentContentSchema),
                newContent                  = new contentModel({
                    'content_ID'            : count.count_number,
                    'title'                 : title,
                    'content'               : content,
                    'created_at'            : Date()
                });
            newCategory.save(function (err, data) {
                if (!err) {
                    counter.counterModel.incCount('document_content', function () {
                        callback(err,data);
                    });
                } else { callback(err) };
            });
        });      
    };
    
    documentContentSchema.statics.updateContent = function (content_id, title, content, status, callback) {
        this.model('document_content').findOneAndUpdate(
                    {'content_ID'   : content_id}, 
                    {
                        'title'         : title,
                        'content'       : content,
                        'updated_at'    : Date(),
                        'status'        : status
                    }, function(err,data){
            callback(data);
        });        
    };
    
    exports.documentModel           = db.mongoose.model('document', documentSchema);
    exports.documentCatModel        = db.mongoose.model('document_category', documentCatSchema);
    exports.documentContentModel    = db.mongoose.model('document_content', documentContentSchema);
}.call(this);