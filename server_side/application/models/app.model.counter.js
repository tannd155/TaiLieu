(function () {
    'use strict';

    var db = require('../config/app.config.db');

    var schema  = require('../config/app.config.schema');
    //Create Counter Schema
    var counterSchema = schema.counterSchema;

    // Date Excel Luu image txt
    //getData static method
    counterSchema.statics.getCount = function (name, callback){
        this.model('teacher1s').findOne({'_id': name}).exec(function(err,data){
            callback(data);
        });
    }
    //Count Increment static method
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
