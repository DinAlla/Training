describe('Testing all',function(){
	var person, rules, promise;

	beforeEach(function(){
     	person = {
        	name: "Angelina",
        	age: 19,
        	phoneNumber: '+312313123145',
        	email: 'magidova.angelinamail.ru'
      	}

     	rules = {
        	name: new Rule().isRequired().maxLength(10).minLength(3),
        	age: new Rule().isRequired().isInt().max(60).min(21),
        	phoneNumber: new Rule().isRequired().minLength(13).maxLength(13),
        	email: new Rule().isRequired().isEmail()
     	}
    	promise = new Validator().Validate(person, rules)
		.then((result) => result)
			.catch((result) => result);
	});
	it("testing methods of class Rule",function(){
		var p = rules.name.validateRule(person.name);
		expect(p[0]).toBe('');
		expect(p[1]).toBe('');
		expect(p[2]).toBe('');
		p = rules.age.validateRule(person.age);
		expect(p[0]).toBe('');
		expect(p[1]).toBe('');
		expect(p[2]).toBe('');
		expect(p[3]).toBe('Значение слишком маленькое');
		p = rules.phoneNumber.validateRule(person.phoneNumber);
		expect(p[0]).toBe('');
		expect(p[1]).toBe('');
		p = rules.email.validateRule(person.email);
		expect(p[0]).toBe('');
		expect(p[1]).toBe('Неправильно введен емейл');
	})
	it("testing class Validator", function(){
		var p = promise.Validate({name: "Lina"}, {name: new Rule().isRequired()});
		expect(p).toBe(['']);
		//don't know how to write expect with promise
	});	
});