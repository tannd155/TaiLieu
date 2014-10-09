(function () {
    'use strict';
    //Require dbconfig
    var db = require('../config/app.config.db');
    var schema = db.mongoose.Schema;
    //Create Counter Schema
    var counterSchema = new schema({
        '_id' : {
            type : String,
            unique : true,
            required : true
        },
        'count_number' : {
            type : Number,
            required : true
        }
    });
    // Date Excel Luu image txt
    //getData static method
    counterSchema.statics.getCount = function (name, callback){
        this.model('teacher1s').findOne({'_id': name}).exec(function(err,data){
            callback(data);
        });
    }
    //getCount static method
    counterSchema.statics.incCount = function (name, callback){
        this.model('teacher1s').findOneAndUpdate({
            '_id' : name},
            {$inc : {'count_number' : 1}},
            function(){
                callback();
            }
        );
    };
    //Export model
    exports.counterModel = db.mongoose.model('teacher1s',counterSchema);

}).call(this);
