(function () {
    'use strict';
    var db              = require('../config/app.config.db'),
        schema          = require('../config/app.config.schema'),
        counter         = require('../app.model.counter'),
        documentSchema  = schema.documentSchema;
    documentSchema.statics.getListDoc = function (callback) {
        this.model('doc1').find(function (err, data) {
            callback(data); 
        });
    }
    
    documentSchema.statics.findDocByID = function (id, callback) {
        this.model('doc1').find({'doc_id' : id}, function (err, data) {
            callback(data);
        });
    });
    
    
}.call(this);