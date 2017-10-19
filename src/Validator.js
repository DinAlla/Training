class Validator {
	Validate(obj){
		var error ={},
			hasError = false;
		return new Promise(function(resolve, reject){         
            for(var key in obj){
			    if(obj[key].err.length != 0){
            		error[key] = obj[key].err;
            		hasError	=	true;
            	}
            }
            if(!hasError) {
            	resolve();
            }
            else {
            	reject(error);
            }
		})
	}
}
/*
describe("Jasmine", function(){
	it("makes testing JavaScript awesome!", function(){
		*/
		
		

		
/*
		expect(
			new Validator().Validate(validatedObject)
			.then(result => true)
				.catch(error => error)
		).toBe(true);

		expect(
			new Validator().Validate(validatedObject1)
			.then(result => true)
				.catch(error => error)
		).toBe(error);
	});
});*/