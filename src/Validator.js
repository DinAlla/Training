function Validator(){}
Validator.prototype.Validate = function(data, rules){
        return new Promise(function(resolve, reject){
        	var valid = {};
        	for(key in rules){
        		let result = rules[key].validateRule(data[key]);
	        	if (result.isValid != true) valid[key] = result.errorMessage;
        	}
        	if(Object.keys(valid).length == 0) return resolve(data);
        	else return reject(valid);
        });
}
module.exports = Validator;