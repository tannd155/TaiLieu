(function() {
    'use strict';
    var express             = require('express');
    var app                 = new express();
    var teacherController   = require('./application/controllers/app.controller.teacher');
    var teacherObj          = teacherController.teacher;
    var routeApp;

    app.listen(3000);
    
    app.get('/', function(req, res) {
        res.send('Trang chủ');
        res.end();
    });

    app.get('/teacher/getListTeacher', function (req, res) {
        teacherObj.getListTeacher(function (teacher) {
            res.send(JSON.stringify(teacher));
            res.end();
        });
    });

    app.get('/teacher/:id/', function(req, res) {
        teacherObj.findTeacherByID(req.params.id, function (data){
            if(data != null) {
                res.send(JSON.stringify(data));
                res.end();
            }
            else { res.end('Khong tim duoc giao vien co ID' + req.params.id); };
        });
    });

    app.get('/teacher/addTeacher/:employID/:subID', function(req, res) {
        teacherObj.addTeacher(req.params.employID, req.params.subID, function(err) {
            if(!err) {
                res.end(JSON.stringify({'result' : 'true', 'message' : 'Them giao vien thanh cong'}));
            }
            else { res.end(JSON.stringify({'result' : 'false', 'message' : 'Them giao vien khong thanh cong!'})); };
        });
    });
    
    app.get('/document/getListDoc/', function(req, res) {
    
    });
    
}).call(this);


