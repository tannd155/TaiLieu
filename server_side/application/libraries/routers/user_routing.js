(function() {
    'use strict';
    var app                 = require('../../config/app.config.server');
    var userController      = require('../../controllers/user_controllers/app.controller.user');
    var userObj             = userController.user;
    var helper              = require('../helpers/helper_library').helperObj;
    
    app.post('/user/getListUser', function (req, res) {
        userObj.getListUser(function (user) {
            res.send(user);
            res.end();
        });
    });
    
    app.post('/user/getListUserByRole', function (req, res) {
        userObj.getListUserByRole(req.body['role'], function (data){
            if(!helper.checkEmptyArray(data)) {
                res.send(JSON.stringify({
                    'result'    : true,
                    'data'      : data
                }));
                res.end();
            }
            else {
                res.send(JSON.stringify({
                    'result'    : false,
                    'message'   : 'Khong tim thay user co user_role la ' + req.body['role']
                }));
                res.end();
            }
        });
    });
    app.post('/user/getUserByID', function(req, res) {
        userObj.findUserByID(req.body['id'], function (data){
            if(!helper.checkEmptyArray(data)) {
                res.send(JSON.stringify({
                    'result'    : true,
                    'data'      : data
                }));
                res.end();
            }
            else { 
                res.end(JSON.stringify({
                    'result'    : false,
                    'message'   : 'Khong tim duoc user co ID ' + req.body['id']
                })); 
            };
        });
    });

    app.post('/user/addUser', function(req, res) {
        userObj.addUser(req.body['username'],req.body['password'],req.body['email'],req.body['user_role'], function(err,data) {
            if(!err) {
                res.send(JSON.stringify({
                    'result'    : true,
                    'data'      : data
                }));
                res.end();
            }
            else { res.end(JSON.stringify({'result' : 'false', 'message' : 'Them giao vien khong thanh cong!'})); };
        });
    });
    
    app.post('/user/updateUser', function(req, res) {
        userObj.updateUser(req.body['user_ID'], req.body['password'], req.body['email'], req.body['user_role'], req.body['status'], function(data){
            res.send(JSON.stringify(data));
            res.end();
        });
    });
}).call(this);
