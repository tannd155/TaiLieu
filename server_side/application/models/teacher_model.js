(function() {
    'use strict';
    var db = require('../config/dbconfig');

//    var counter = require('./counter_model');

    var schema = db.mongoose.Schema;

    var teacherSchema = new schema({
        'user_id' : {
            type : Number,
            unique : true,
            required : true

        },
        'employee_id' : {
            type : String,
            required : true,
            unique : true
        },
        'subject_id' : {
            type : String,
            required : true
        }
    })

    teacherSchema.statics.listTeacher = function(){
        this.model('teacher2').find(function(err,teacher){
            console.log(teacher);
        });
    };

    exports.teacherModel = db.mongoose.model('teacher2',teacherSchema);
}).call(this);