(function() {
    'use strict';
    var express             = require('express');
    var urlEncode           = require('urlencode');
    var app                 = new express();
    var mongoose            = require('mongoose');
    var Schema              = mongoose.Schema;
    mongoose.connect('localhost', 'tester');
    var model = mongoose.model('testtests', 
               new Schema({
            'f_manv' : String,
            'f_holot' : String,
            'f_ten' : String,
            'f_mabm' : String,
            'f_ngaysinh' : String,
            'f_phai' : String,
            'f_holotcbv' : String,
            'f_tencbv' : String,
            'f_tenbmvn' : String,
            'f_namnu' : String
    }),'testtests');
    app.listen(3000);
    app.get('/', function(req, res){
        model.find(function(err,data) {
            //res.write('');
            data.forEach(function(item){
                res.write('<br/>');
                res.write(urlEncode(item.f_holotcbv));
            });
            res.end();
        });
    });
    app.get('/:id', function(req, res){
        model.find({'f_manv' : req.params.id}, function(err,data) {
            data.forEach(function(item){
                res.send(urlEncode(item.f_holotcbv));
            });
            res.end();
        });
    });
}).call(this);