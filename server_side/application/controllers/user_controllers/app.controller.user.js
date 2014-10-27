(function() {
    'use strict';
    var User = require('../../models/app.model.user');
    var userModel = User.userModel;
    var userClass = function () {
        
    };
    
    userClass.prototype.getListUser         = function (callback) {
        userModel.getListUser(callback);
    };
    
    userClass.prototype.getListUserByRole   = function (role,callback) {
        userModel.getListUserByRole(role,callback);
    }
    
    userClass.prototype.findUserByID        = function (id, callback) {
        userModel.findUserByID(id,callback);
    };
    
    userClass.prototype.addUser             = function(username,password,email,user_role, callback) {
        userModel.addUser(username,password,email,user_role, callback);
    };
    
    userClass.prototype.updateUser          = function(user_ID,password,email,user_role,status, callback){
        userModel.updateUser(user_ID,password,email,user_role,status,callback);
    }
    
    exports.user = new userClass();
}).call(this);