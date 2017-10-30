function Validator(){}
Validator.prototype.Validate = function(data, rules){
        return new Promise(function(resolve, reject){
            if (rules[key].validateRule(data[key]).isValid == true) return resolve(true);
            else return reject(false);
        });
}
module.exports = Validator;