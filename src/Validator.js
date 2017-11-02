function Validator(){}
Validator.prototype.Validate = function(data, rules){
        return new Promise(function(resolve, reject){
        	var valid = {
        		isValid: true,
        		errorMessage: []
        	};
        	for(key in rules){
        		let result = rules[key].validateRule(data[key]);
	            if (result.isValid != true) valid.errorMessage.push(result.errorMessage);
        	}
        	if(valid.errorMessage.length == 0) return resolve(data);
        	else return reject(valid.errorMessage);
        });
}
module.exports = Validator;