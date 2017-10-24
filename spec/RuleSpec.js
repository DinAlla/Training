describe('Testing class Rule',function(){
	describe("Testing isRequired",function(){
		it("Testing isRequired - null", function(){
			let dataName = {
				name: null
			},
			dataNameRule = {
				name: new Rule().isRequired()
			};
			let result = dataNameRule.name.validateRule(dataName.name)[0];
			expect(result).toBe('Ничего не введено');
		})
		it("Testing isRequired - all good(name is Robin)",function(){
			let dataName = {
				name: "Robin"
			},
			dataNameRule = {
				name: new Rule().isRequired()
			};
			let result = dataNameRule.name.validateRule(dataName.name)[0];
			expect(result).toBe();
		})
		it("Testing isRequired - input number 123 <br/> (why not? maybe my mother tell to me 1st?)",function(){
			let dataName = {
				name: 123
			},
			dataNameRule = {
				name: new Rule().isRequired()
			};
			let result = dataNameRule.name.validateRule(dataName.name)[0];
			expect(result).toBe();
		})
	})
	describe("Testing maxLength and minLength", function(){
		it("Testing maxLength(5) - imput so big name",function(){
			let dataName = {
				name: "Asdfghjklpoiuytrewq"
			},
			dataNameRule = {
				name: new Rule().maxLength(5)
			}
			let result = dataNameRule.name.validateRule(dataName.name)[0];
			expect(result).toBe('Слишком большое значение');
		})
		it("Testing minLength(3) with standart name Robin, should be all good",function(){
			let dataName = {
				name: "Robin"
			},
			dataNameRule = {
				name: new Rule().minLength(3)
			};
			let result = dataNameRule.name.validateRule(dataName.name)[0];
			expect(result).toBe();
		})
		it("Testing maxLength(10) with standart name Robin, should be all good",function(){
			let dataName = {
				name: "Robin",
			},
			dataNameRule = {
				name: new Rule().maxLength(10)
			};
			let result = dataNameRule.name.validateRule(dataName.name)[0];
			expect(result).toBe();
		})
		it("Testing minLength(3) with so short name A", function(){
			let dataName = {
				name: "A"
			},
			dataNameRule = {
				name: new Rule().minLength(3)
			};
			let result = dataNameRule.name.validateRule(dataName.name)[0];
			expect(result).toBe('Слишком маленькое значение');
		})
	})
	describe("Testing max and min", function(){
		it("Testing max(100) with uncorrect data - 500 years old",function(){
			let dataAge = {
				age: 500
			},
			dataAgeRule = {
				age: new Rule().max(100)
			};
			let result = dataAgeRule.age.validateRule(dataAge.age)[0];
			expect(result).toBe('Значение больше, чем ожидалось');
		})
		it("Testing mina(18) with uncorrect data - 14 years old",function(){
			let dataAge = {
				age: 14
			},
			dataAgeRule = {
				age: new Rule().min(18)
			};
			let result = dataAgeRule.age.validateRule(dataAge.age)[0];
			expect(result).toBe('Значение слишком маленькое');
		})
		it("Testing max(100) with correct data", function(){
			let dataAge = {
				age3: 23
			},
			dataAgeRule = {
				age: new Rule().max(100)
			};
			let result = dataAgeRule.age.validateRule(dataAge.age)[0];
			expect(result).toBe();
		})
		it("Testing min(18) with correct data", function(){
			let dataAge = {
				age: 23
			},
			dataAgeRule = {
				age: new Rule().min(18)
			}
			let result = dataAgeRule.age.validateRule(dataAge.age)[0];
			expect(result).toBe();
		})
	})
	describe("Testing isEmail", function(){
		it("Testing isEmail with correct data",function(){
			let dataEmail = {
				email: "magidova.angelina@mail.ru"
			},
			dataEmailRule = {
				email: new Rule().isEmail()
			};
			let result = dataEmailRule.email.validateRule(dataEmail.email)[0];
			expect(result).toBe();
		})
		it("Testing isEmail with data without domen(mail.ru, gmail.com etc.)", function(){
			let dataEmail = {
				email: "magidova.angelina@"
			},
			dataEmailRule = {
				email: new Rule().isEmail()
			};
			let result = dataEmailRule.email.validateRule(dataEmail.email)[0];
			expect(result).toBe('Неправильно введен емейл');
		})
		it("Testing isEmail with data without name under hotdog",function(){
			let dataEmail = {
				email: "@mail.ru"
			},
			dataEmailRule = {
				email: new Rule().isEmail()
			};
			let result = dataEmailRule.email.validateRule(dataEmail.email)[0];
			expect(result).toBe('Неправильно введен емейл');			
		})
		it("Testing isEmail with data without point in domen", function(){
			let dataEmail = {
				email: "magidova.angelina@mailru"
			},
			dataEmailRule = {
				email: new Rule().isEmail()
			};
			let result = dataEmailRule.email.validateRule(dataEmail.email)[0];
			expect(result).toBe('Неправильно введен емейл');
		})
	})
	describe("Testing isInt", function(){
		it("Testing isInt with correct data",function(){
			let dataInt = {
				age: 14
			},
			dataIntRule = {
				age: new Rule().isInt()
			}
			let result = dataIntRule.age.validateRule(dataInt.age)[0];
			expect(result).toBe();
		})
		it("Testing isInt with data with type Double, not Int",function(){
			let dataInt = {
				age: 14.5
			},
			dataIntRule = {
				age: new Rule().isInt()
			};
			let result = dataIntRule.age.validateRule(dataInt.age)[0];
			expect(result).toBe('Это не целое число, наверное оно должно быть целое');
		})
		it("Testing isInt with data with type String, but Int",function(){
			let dataInt = {
				age: '14'
			},
			dataIntRule = {
				age: new Rule().isInt()
			};
			let result = dataIntRule.age.validateRule(dataInt.age)[0];
			expect().toBe();
		})
		it("Testing isInt with data with type String, but Double", function(){
			let dataInt = {
				age: '14.5'
			},
			dataIntRule = {
				age: new Rule().isInt()
			};
			let result = dataIntRule.age.validateRule(dataInt.age)[0];
			expect(result).toBe('Это не целое число, наверное оно должно быть целое');
		})	
	})
});