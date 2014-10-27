(function () {
    'use strict';
    var db                  = require('../config/app.config.db'),
        schema              = require('../config/app.config.schema'),
        counter             = require('./app.model.counter'),
        userSchema          = schema.userSchema;
    
    userSchema.statics.getListUser          = function (callback) {
        this.model('user').find(function (err, data) {
            callback(data);
        });
    };
    
    userSchema.statics.getListUserByRole = function (role, callback) {
        this.model('user').find({'user_role' : role},function (err, data) {
            callback(data);
        });
    };

    userSchema.statics.findUserByID = function (id, callback) {
        this.model('user').find({'user_ID' : id}, function (err, data) {
            callback(data);
        });
    };

    userSchema.statics.addUser = function (username,password,email,user_role,callback) {
        counter.counterModel.getCount('user', function (count) {
            var userModel       = db.mongoose.model('user', userSchema),
                newUser         = new userModel({
                    'user_ID'       : count.count_number,
                    'username'      : username,
                    'password'      : password,
                    'email'         : email,
                    'user_role'     : user_role,
                    'created_at'    : Date()
                });
            newUser.save(function (err, data) {
                if (!err) {
                    counter.counterModel.incCount('user', function () {
                        callback(err,data);
                    });
                } else { callback(err) };
            });
        });
    };
    
    userSchema.statics.updateUser = function (user_ID,password,email,user_role,status,callback) {
        this.model('user').findOneAndUpdate({'user_ID' : user_ID}, {
                    'password'      : password,
                    'email'         : email,
                    'user_role'     : user_role,
                    'updated_at'    : Date(),
                    'status'        : status
                }, function(err,data){
            callback(data);
        });
    };
    
    exports.userModel = db.mongoose.model('user', userSchema);
}).call(this);