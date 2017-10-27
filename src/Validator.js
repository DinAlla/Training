function Validator(){}
Validator.prototype.Validate = function(){
        for(var key in rules){
            err.push(rules[key].validateRule(data[key]));
        }
        return new Promise(function(resolve, reject){
            var checkErrors=[], i=0;
            for (var key in err){
                if (err[key] == ''){
                    i++; 
                    checkErrors.push(i); 
                    //i++;
                }
            }
            if(checkErrors.length == 0) resolve();
            else reject(err);
        });
}
module.exports = Validator;