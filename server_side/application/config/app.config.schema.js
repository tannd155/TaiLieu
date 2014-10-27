(function() {
    'use strict';
    var db                          = require('../config/app.config.db');
    var schema                      = db.mongoose.Schema;
    
    exports.userSchema              = new schema({
        'user_ID'                   : {
            type                    : Number,
            unique                  : true,
            required                : true
        },
        'username'                  : {
            type                    : String,
            unique                  : true,
            required                : true
        },
        'password'                  : {
            type                    : String,
            required                : true
        },
        'email'                     : {
            type                    : String,
            required                : true,
            unique                  : true
        },
        'user_role'                 : {
            type                    : String,
            required                : true
        },
        'created_at'                : {
            type                    : Date,
            required                : true
        },
        'updated_at'                : {
            type                    : Date
        },
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    
    exports.documentCatSchema       = new schema({
        'category_ID'               : {
            type                    : Number,
            required                : true,
            unique                  : true
        },
        'category_Name'             : {
            type                    : String,
            required                : true,
            unique                  : true
        },
        'created_at'                : {
            type                    : Date,
            required                : true
        },
        'updated_at'                : {
            type                    : Date
        },
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    exports.documentSchema          = new schema({
        'document_ID'               : {
            type                    : Number,
            unique                  : true,
            required                : true
        },
        'content_ID'                : {
            type                    : Number,
            required                : true,
        },
        'category_ID'               : {
            type                    : Number,
            required                : true,
        },
        'created_at'                : {
            type                    : Date,
            required                : true
        },
        'updated_at'                : {
            type                    : Date
        },
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    exports.documentContentSchema   = new schema({
        'content_ID'                : {
            type                    : Number,
            required                : true,
            unique                  : true
        },
        'title'                     : {
            type                    : String,
            required                : true
        },
        'content'                   : {
            type                    : String,
            required                : true
        },
        'created_at'                : {
            type                    : Date,
            required                : true
        },
        'updated_at'                : {
            type                    : Date
        },
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    exports.fileSchema              = new schema({
        'file_ID'                   : {
            type                    : Number,
            required                : true,
            unique                  : true
        },
        'document_ID'               : {
            type                    : Number,
            required                : true
        },
        'user_ID'                   : {
            type                    : Number,
            required                : true
        },
        'src'                       : {
            type                    : String,
            required                : true
        },
        'created_at'                : {
            type                    : Date,
            required                : true
        },
        'updated_at'                : {
            type                    : Date
        },
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    exports.classSchema             = new schema({
        'class_ID'                  : {
            type                    : Number,
            required                : true,
            unique                  : true
        },
        'class_name'                : {
            type                    : String,
            required                : true,
            unique                  : true
        },
        'term'                      : {
            type                    : Number,
            required                : true
        },
        'year'                      : {
            type                    : Number,
            required                : true
        },
        'created_at'                : {
            type                    : Date,
            required                : true
        },
        'updated_at'                : {
            type                    : Date
        },
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    exports.classMemberSchema       = new schema({
        'class_ID'                  : {
            type                    : Number,
            required                : true
        },
        'user_ID'                   : {
            type                    : Number,
            required                : true
        },
        'created_at'                : {
            type                    : Date,
            required                : true
        },
        'updated_at'                : {
            type                    : Date
        },
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    exports.exerciseSchema          = new schema({
        'exercise_ID'               : {
            type                    : Number,
            required                : true,
            unique                  : true
        },
        'content_ID'                : {
            type                    : Number,
            required                : true
        },
        'class_ID'                  : {
            type                    : Number,
            required                : true,
        },
        'date_expired'              : {
            type                    : Date,
            required                : true
        },
        'created_at'                : {
            type                    : Date,
            required                : true
        },
        'updated_at'                : {
            type                    : Date
        },
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    exports.commentSchema           = new schema({
        'comment_ID'                : {
            type                    : Number,
            required                : true,
            unique                  : true
        }, 
        'exercise_ID'               : {
            type                    : Number,
            required                : true
        }, 
        'content'                   : {
            type                    : String,
        }, 
        'metadata'                  : {
            type                    : String
        }, 
        'created_at'                : {
            type                    : Date,
            required                : true
        }, 
        'updated_at'                : {
            type                    : Date
        }, 
        'status'                    : {
            type                    : Number,
            required                : true,
            default                 : 0
        }
    });
    exports.counterSchema           = new schema({
        '_id'                       : {
            type                    : String,
            unique                  : true,
            required                : true
        },
        'count_number'              : {
            type                    : Number,
            required                : true
        }
    });
    
    

}).call(this);