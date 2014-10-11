(function () {
    'use strict';
    var mongoose = require('../../../node_modules/mongoose');
    mongoose.connect('localhost', 'tester');

    var fs = require('fs');
    var lineList = fs.readFileSync('./canbo.csv').toString().split('\n');
    lineList.shift(); // Shift the headings off the list of records.

    var schemaKeyList = ['f_manv','f_holot','f_ten','f_mabm','f_ngaysinh','f_phai','f_holotcbv','f_tencbv','f_tenbmvn','f_namnu'];

    var RepOppSchema = new mongoose.Schema({
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
    });
    var RepOppDoc = mongoose.model('testtest', RepOppSchema);

    function queryAllEntries () {
        RepOppDoc.aggregate(
            {$group: {_id: '$f_manv', oppArray: {$push: {
                'f_manv' : '$f_manv',
                'f_holot' : '$f_holot',
                'f_ten' : '$f_ten',
                'f_mabm' : '$f_mabm',
                'f_ngaysinh' : '$f_ngaysinh',
                'f_phai' : '$f_phai',
                'f_holotcbv' : '$f_holotcbv',
                'f_tencbv' : '$f_tencbv',
                'f_tenbmvn' : '$f_tenbmvn',
                'f_namnu' : '$f_namnu'
                }}
            }}, function(err, qDocList) {
            console.log(util.inspect(qDocList, false, 10));
            process.exit(0);
        });
    }

    // Recursively go through list adding documents.
    // (This will overload the stack when lots of entries
    // are inserted.  In practice I make heavy use the NodeJS 
    // "async" module to avoid such situations.)
    function createDocRecurse (err) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        if (lineList.length) {
            var line = lineList.shift();
            var doc = new RepOppDoc();
            line.split(',').forEach(function (entry, i) {
                doc[schemaKeyList[i]] = entry;
            });
            doc.save(createDocRecurse.toString('utf8'));
        } else {
            // After the last entry query to show the result.
            queryAllEntries();
        }
    }

    createDocRecurse(null);
}).call(this);