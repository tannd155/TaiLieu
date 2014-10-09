(function() {
    'use strict';
    var mongooseLib = require('../../../node_modules/mongoose');

    exports.mongoose = mongooseLib.connect('mongodb://localhost/testTaiLieu');

}).call(this);