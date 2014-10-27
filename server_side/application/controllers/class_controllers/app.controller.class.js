(function(){
    'use strict';
    var classes                                     = require('../../models/app.model.class'),
        classModel                                  = classes.classModel,
        classMemberModel                            = classes.classMemberModel;
    var classClass                                  = function(){
    };
    
    classClass.prototype.getListClass = function(callback){
        classModel.getListClass(callback);
    };
    
    classClass.prototype.getClassByID = function(id, callback){
        classModel.getClassByID(id, callback);
    };
    
    classClass.prototype.addClass = function(class_name, term, year, callback) {
        classModel.addClass(class_name, term, year, callback);
    };
    
    classClass.prototype.updateClass = function(class_id, class_name, term, year, status, callback){
        classModel.updateClass(class_id, class_name, term, year, status, callback);
    };
    
    classClass.prototype.getMemberByID = function(id, callback) {
        classMemberModel.getMemberByID(id, callback);
    };
    
    classClass.prototype.getMemberByClassID = function(class_id, callback){
        classMemberModel.getMemberByClassID(class_id, callback);
    };
    
    classClass.prototype.addMemberToClass = function(class_id, user_id, callback){
        classMemberModel.addMemberToClass(class_id, user_id, callback);
    };
    
    classClass.prototype.updateMember = function(user_id, class_id, status, callback){
        classMemberModel.updateMember(user_id, class_id, status, callback);
    };
    
    exports.class = new classClass();
    
}).call(this);