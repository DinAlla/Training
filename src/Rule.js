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