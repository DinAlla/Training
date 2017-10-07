class Rule{
	constructor(){
	this.err=new Array();
	}
	isRequired(){
		if (this.length == 0) 
		{
		this.err = this.err.push('Не существует элемента')
		console.log(this.err);
		}
		return this;
	}
	maxLength(n){
		if (this.length >= n){
			this.err = this.err.push('Превышение диапазона значений')
			console.log(this.err);
			}
		return this;
		
	}
	minLength(n){
		if(this.length <= n){this.err = this.err.push('Слишком маленькое значение')
	console.log(this.err);}
		return this;
	}
	max(n){
		if (this.length <= n){this.err = this.err.push('Слишком маленькое значение')
	console.log(this.err);}
		return this;
	} 
	min(n){
		if (this.length >= n){this.err = this.err.push('Слишком маленькоебольшое значение')
	console.log(this.err);} 
		return this;
	} 
	isEmail(){} 
	isInt(){}
}

var name = new Rule('jhbjhb').isRequired().maxLength(10).minLength(4);

class Validator {
	Validate(obj){
		return new Promise(function(resolve, reject){
			return (obj == 0) ? resolve(console.log('all good')) : reject(console.log(obj));
		})
	}
}

var p = new Validator(name.err).Validate()
.then(result => console.log('good'))
	.catch(error => console.log(error))