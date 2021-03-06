var Rule = require('../src/Rule'),
	Validator = require('../src/Validator');
var validator;

describe("Testing class Validator",function(){
	describe("Testing Validate", function(){
		it("Data is good",function(done){
			let data = {name:"Name"},
				rules = {
					name: {
						validateRule: function(value) {
							return {isValid:true, errorMessage:""} 
						} 
					} 
				};
			validator = new Validator().Validate(data, rules)
			.then(function(result){
				expect(result.name).toBe("Name");
				done();
			});			
		});
		it("Data is not good",function(done){
			let data = {name:"Name"},
				rules = {
					name: {
						validateRule: function(value) {
							return {isValid:false, errorMessage:"blabla"} 
						} 
					} 
				};
			validator = new Validator().Validate(data, rules)
			.catch(function(result){
				expect(result.name).toBe("blabla");
				done();
			});	
		})
	})
})