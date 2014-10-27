(function() {
    'use strict';
    var db                      = require('../config/app.config.db'),
        schema                  = require('../config/app.config.schema'),
        counter                 = require('../app.model.counter'),
        classSchema             = schema.classSchema,
        classMemberSchema       = schema.classMemberSchema;
    
    classSchema.statics.getListClass = function (callback) {
        this.model('class').find(function (err, data) {
            callback(data);
        });
    };
    
    classSchema.statics.getClassByID = function (id, callback) {
        this.model('class').find({'class_ID' : id}, function (err, data) {
            callback(data);
        });    
    };
    
    classSchema.statics.addClass = function (class_name, term, year, callback) {
        counter.counterModel.getCount('class', function (count) {
            var classModel                  = db.mongoose.model('class', classSchema),
                newClass                    = new classModel({
                    'class_ID'              : count.count_number,
                    'class_Name'            : class_name,
                    'term'                  : term,
                    'year'                  : year,
                    'created_at'            : Date()
                });
            newCategory.save(function (err, data) {
                if (!err) {
                    counter.counterModel.incCount('class', function () {
                        callback(err,data);
                    });
                } else { callback(err) };
            });
        });    
    };
    
    classSchema.statics.updateClass = function (class_id, class_name, term, year, status, callback) {
        this.model('class').findOneAndUpdate(
                    {'category_ID'  : class_id}, 
                    {
                        'class_name'    : class_name,
                        'term'      : term,
                        'year'      : year,
                        'updated_at'    : Date(),
                        'status'        : status
                    }, function(err,data){
            callback(data);
        });
    };
    
    classMemberSchema.statics.getMemberByID = function (id, callback) {
        this.model('class_member').find({'user_ID' : id}, function (data){
            callback(data);
        });
    };
    
    classMemberSchema.statics.getMemberByClassID = function (class_id, callback) {
        this.model('class_member').find({'class_ID' : class_id}, function (data){
            callback(data);
        });
    };
    
    classMemberSchema.statics.addMemberToClass  = function (class_id, user_id, callback) {
        var classMemberModel                    = db.mongoose.model('class_member', classMemberSchema),
            newClassMember                      = new classMemberModel({
                'class_ID'                      : class_id,
                'user_ID'                       : user_id,
                'created_at'                    : Date()
            });
        newClassMember.save(function (err, data) {
            if(!err) {
                callback(err, data);
            } else { callback(err) };
        });
    };
    
    classMemberSchema.statics.updateMember      = function (user_id, class_id, status, callback) {
        this.model('class_member').findOneAndUpdate({'user_ID' : user_id}, {
                    'class_ID'      : class_id,
                    'updated_at'    : Date(),
                    'status'        : status
                }, function(err,data){
            callback(data);
        });
    };
    
    exports.classModel              = db.mongoose.model('class', classSchema);
    exports.classMemberModel        = db.mongoose.model('class_member', classMemberSchema);
}).call(this);