(function () {
    var helper = function() {
    };
    
    helper.prototype.checkEmptyArray = function(array) {
        if(array[0] == null)
        {
            return true;
        }
        else {
            return false;
        }
    };
    
    helper.prototype.toTimeStamp = function (date) {
    
    };
    
    exports.helperObj = new helper();
}).call(this);