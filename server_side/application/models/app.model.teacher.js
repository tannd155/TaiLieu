(function () {
    'use strict';
    var db              = require('../config/app.config.db'),
        schema          = require('../config/app.config.schema'),
        counter         = require('./app.model.counter'),
        teacherSchema   = schema.teacherSchema;
    teacherSchema.statics.getListTeacher = function (callback) {
        this.model('teacher2').find(function (err, data) {
            callback(data);
        });
    };

    teacherSchema.statics.findTeacherByID = function (id, callback) {
        this.model('teacher2').find({'employee_id' : id}, function (err, data) {
            callback(data);
        });
    };

    teacherSchema.statics.addTeacher = function (employeeid,subjectid,callback) {
        counter.counterModel.getCount('teacher', function (count) {
            var TeacherModel = db.mongoose.model('teacher2', teacherSchema),
                newTeacher = new TeacherModel({
                    'user_id': count.count_number,
                    'employee_id': employeeid,
                    'subject_id': subjectid
                });
            newTeacher.save(function (err) {
                if (!err) {
                    counter.counterModel.incCount('teacher', function () {
                        callback(err);
                    });
                } else { callback(err) };
            });
        });
    };

    exports.teacherModel = db.mongoose.model('teacher2', teacherSchema);
}).call(this);