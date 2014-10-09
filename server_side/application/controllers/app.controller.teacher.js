(function() {
    'use strict';
    var Teacher = require('../models/app.model.teacher');
    var teacherModel = Teacher.teacherModel;
    var teacherClass = function () {
        
    };
    
    teacherClass.prototype.getListTeacher = function (callback) {
        teacherModel.getListTeacher(callback);
    };
    
    teacherClass.prototype.findTeacherByID = function (id, callback) {
        teacherModel.findTeacherByID(id,callback);
    };
    
    teacherClass.prototype.addTeacher = function(employeeid, subjectid, callback) {
        teacherModel.addTeacher(employeeid, subjectid, callback);
    };
    
    exports.teacher = new teacherClass();
}).call(this);