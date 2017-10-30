var Rule = require('../src/Rule'),
	Validator = require('../src/Validator');
var validator;

describe("Testing class Validator",function(){
	describe("Testing Validate", function(){
		it("Data is good",function(){
			setTimeout(function(){
				var data = {name:"Name"},
					rules = {name: new Rule().isRequired()};
				validator = new Validator().Validate(data, rules)
				.then(function(result){
					expect(result).toBe(true);
				});
			},5000);
			
		})
	})
})