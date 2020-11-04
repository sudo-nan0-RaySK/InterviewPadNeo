
const utils = {
    checkNulls: function(obj){
        for(var key in obj){
            if(!obj[key]){
                return false;
            }
        }
        return true;
    },
    stringifyVals: function(obj){
        retObj = {}
        for(var key in obj){
            if(obj[key]){
                retObj[key] = obj[key].toString();
            }
        }
        return retObj;
    }
};

module.exports = utils;