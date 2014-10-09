(function() {
    'use strict';
    var db      = require('../config/app.config.db');

    var schema  = db.mongoose.Schema;

    exports.teacherSchema = new schema({
        'user_id' : {
            type : Number,
            unique : true,
            required : true
        },
        'employee_id' : {
            type : String,
            required : true,
            unique : true
        },
        'subject_id' : {
            type : String,
            required : true
        },
        'deleted' : {
            type : Number,
            default : 0
        }
    });
    
    exports.documentSchema = new schema({
        '_id': {
            type : Number,
            unique : true,
            required : trie
        },
        'doc_title' : {
            type : String,
            required : true
        },
        'author' : {
            type : String,
            required : true
        },
        'publish_date' : {
            type : Date,
            required : true
        },
        'deleted' : {
            type : Number,
            default : 0
        }
    });
    
    exports.counterSchema = new schema({
        '_id' : {
            type : String,
            unique : true,
            required : true
        },
        'count_number' : {
            type : Number,
            required : true
        }
    });
    
    

}).call(this);