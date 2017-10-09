class Validator {
	Validate(obj){
		var error ={
            	name:[],
            	password:[]
            },
         	n = 1;
		return new Promise(function(resolve, reject){         
            for(var key in obj){
			     if(obj[key].err.length == 0)  {n+=1; } 
                 else {
                    if(n == 1){
                    	error.name = obj[key].err
                	}
                    else {error.password = obj[key].err}
                    n+=1;
            	}
            }
            if(error.name.length == 0 && error.password.length == 0){resolve();}
            else{reject(error);}
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