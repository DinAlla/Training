class Rule {
    constructor(){
        this.findError = [];
    }
    isRequired() {
        this.findError.push(function(value){
            let isValid = !(value == undefined);
            return {isValid: isValid, errorMessage: "Ничего не введено"};
        });
        return this;
    }
    // return {boolean errmes}
    maxLength(maxNumber){
        this.findError.push(function(value){
            let isValid = !(value.length > maxNumber);
            return {isValid: isValid, errorMessage: "Слишком большое значение"};
        });
        return this;
    }

    minLength(minNumber){
        this.findError.push( function(value){
            let isValid = !(value.length < minNumber);
            return {isValid: isValid, errorMessage: "Слишком маленькое значение"};
        })
        return this;
    }

    max(n){
    	this.findError.push(function(value){
            let isValid = !(value > n);
    		return {isValid: isValid, errorMessage:"Значение больше, чем ожидалось"};
    	})
    	return this;
    }

    min(n){
    	this.findError.push(function(value){
            let isValid = !(value < n);
    		return {isValid: isValid, errorMessage: "Значение слишком маленькое"};
    	});
    	return this;
    }

    isEmail(){
    	this.findError.push(function(value){
	    	let hotdog = value.indexOf('@');
			if (hotdog != -1){
				let underHotdog = value.substring(hotdog);
				let ufterHotdog = value.substring(0, hotdog);
                var isValid = !((underHotdog.indexOf('.') == -1) || (ufterHotdog == '' ));
			}
            return {isValid: isValid, errorMessage: "Неправильно введен емейл"}
    	});
		return this; 
    }

    isInt(){
    	this.findError.push(function(value){
    		let valueInInt = +value;
            let isValid = !((valueInInt^0) != valueInInt); /*|| typeof(value) == 'string'*/
			return {isValid: isValid, errorMessage: "Это не целое число, наверное оно должно быть целое"}
    	});

        return this;	
	}

    validateRule(value) {
        var err=[];
        for(var key in this.findError){
            if (!this.findError[key](value).isValid) err.push(this.findError[key](value).errorMessage);
        }
        return err;  
    }
}	