class Rule{
    constructor(value) {
        this.value = value;
        this.err = [];
    }
	isRequired(){
		if (this.value.length == 0){this.err.push('Не существует элемента')}
		return this;
	}
	maxLength(n){
		if (this.value.length >= n){this.err.push('Превышение диапазона значений')}
		return this;
		
	}
	minLength(n){
		if(this.value.length <= n){this.err.push('Слишком маленькое значение')}
		return this;
	}
	max(n){
		if (this.value.length <= n){this.err.push('Слишком большое значение')}
		return this;
	} 
	min(n){
		if (this.value.length >= n){this.err.push('Слишком маленькое значение')} 
		return this;
	} 
	isEmail(){
		var k = this.value.indexOf('@');
		if (k != -1){
			var p = this.value.substring(k);
			var t = this.value.substring(0, k);
			if((p.indexOf('.') == -1) || (t.length == 0 )){
				this.err.push('Неправильно введен емейл');
			}
		}
		return this;
	} 
	isInt(){
		var t = +this.value;
		if(!t.isInteger){
			this.err.push('Это не целое число, наверное оно должно быть целое');
		}
		return this;
	}
}

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
let credentials = {
    name: 'Annn@mail.ru',
    password: '1234567'
}
let credentials1 = {
    name: 'Annn',
    password: '1234567jnijbnijbiubiu'
}
let validatedObject = {
    name: new Rule(credentials.name).isRequired().isEmail(),
    password: new Rule(credentials.password).isRequired()
} 
let validatedObject1 = {
    name: new Rule(credentials1.name).isRequired().isEmail(),
    password: new Rule(credentials1.password).isRequired().isInt().maxLength(5)
}   
new Validator().Validate(validatedObject)
.then(result => console.log('good'))
	.catch(error => console.log(error.name, error.password))


new Validator().Validate(validatedObject1)
.then(result => console.log('good'))
	.catch(error => console.log(error.name, error.password))
