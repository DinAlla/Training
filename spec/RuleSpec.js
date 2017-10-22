describe('Testing class Rule',function(){

	it("Testing isRequired", function(){
		let dataName = {
			name: null,
			name2: "Robin",
			name3: 123
		}
		let dataNameRule = {
			name: new Rule().isRequired(),
			name2: new Rule().isRequired(),
			name3: new Rule().isRequired()
		}
		expect(dataNameRule.name.validateRule(dataName.name)[0]).toBe('Ничего не введено');
		expect(dataNameRule.name2.validateRule(dataName.name2)[0]).toBe('');
		expect(dataNameRule.name3.validateRule(dataName.name3)[0]).toBe('');
	})
	it("Testing maxLength and minLength", function(){
		let dataName = {
			name: "Asdfghjklpoiuytrewq",
			name2: "Robin",
			name3: "A"
		}
		let dataNameRule = {
			name: new Rule().maxLength(5),
			name2: new Rule().minLength(3).maxLength(10),
			name3: new Rule().minLength(3)
		}
		expect(dataNameRule.name.validateRule(dataName.name)[0]).toBe('Слишком большое значение');
		expect(dataNameRule.name2.validateRule(dataName.name2)[0]).toBe('');
		expect(dataNameRule.name2.validateRule(dataName.name2)[1]).toBe('');
		expect(dataNameRule.name3.validateRule(dataName.name3)[0]).toBe('Слишком маленькое значение');
	})
	it("Testing max and min", function(){
		let dataAge = {
			age: 500,
			age2: 14,
			age3: 23
		}
		let dataAgeRule = {
			age: new Rule().max(100),
			age2: new Rule().min(18),
			age3: new Rule().max(100).min(18)
		}
		expect(dataAgeRule.age.validateRule(dataAge.age)[0]).toBe('Значение больше, чем ожидалось');
		expect(dataAgeRule.age2.validateRule(dataAge.age2)[0]).toBe('Значение слишком маленькое');
		expect(dataAgeRule.age3.validateRule(dataAge.age3)[0]).toBe('');
	})
	it("Testing isEmail", function(){
		let dataEmeil = {
			email: "magidova.angelina@mail.ru",
			email2: "magidova.angelina@",
			email3: "@mail.ru",
			email4: "magidova.angelina@mailru"
		}
		let dataEmailRule = {
			email: new Rule().isEmail(),
			email2: new Rule().isEmail(),
			email3: new Rule().isEmail(),
			email4: new Rule().isEmail()
		}
		expect(dataEmailRule.email.validateRule(dataEmeil.email)[0]).toBe('');
		expect(dataEmailRule.email2.validateRule(dataEmeil.email2)[0]).toBe('Неправильно введен емейл');
		expect(dataEmailRule.email3.validateRule(dataEmeil.email3)[0]).toBe('Неправильно введен емейл');
		expect(dataEmailRule.email4.validateRule(dataEmeil.email4)[0]).toBe('Неправильно введен емейл');
	})
	it("Testing isInt", function(){
		let dataInt = {
			age: 14,
			age2: 14.5,
			age3: '14',
			age4: '14.5'
		}
		let dataIntRule = {
			age: new Rule().isInt(),
			age2: new Rule().isInt(),
			age3: new Rule().isInt(),
			age4: new Rule().isInt()
		}
		expect(dataIntRule.age.validateRule(dataInt.age)[0]).toBe('');
		expect(dataIntRule.age2.validateRule(dataInt.age2)[0]).toBe('Это не целое число, наверное оно должно быть целое');
		expect(dataIntRule.age3.validateRule(dataInt.age3)[0]).toBe('Это не целое число, наверное оно должно быть целое');
		expect(dataIntRule.age4.validateRule(dataInt.age4)[0]).toBe('Это не целое число, наверное оно должно быть целое');
	})
});