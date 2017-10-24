class Rule {
    constructor(){
        this.findError = [];
    }
    isRequired() {
        this.findError.push(function(value){
            if(value == undefined)  return {isValid: false, errorMessage: "Ничего не введено"}
            else return {isValid: true, errorMessage: ""};
        });
        return this;
    }
    // return {boolean errmes}
    maxLength(maxNumber){
        this.findError.push(function(value){
            if(value.length > maxNumber) return {isValid:false, errorMessage: "Слишком большое значение"}
            else return {isValid:true, errorMessage: ""};
        });
        return this;
    }

    minLength(minNumber){
        this.findError.push( function(value){
            if (value.length < minNumber) return {isValid: false, errorMessage: "Слишком маленькое значение"}
            else return {isValid:true, errorMessage: ""};
        })
        return this;
    }

    max(n){
    	this.findError.push(function(value){
    		if(value > n) return {isValid:false, errorMessage:"Значение больше, чем ожидалось"}
    		else return {isValid:true, errorMessage: ""};
    	})
    	return this;
    }

    min(n){
    	this.findError.push(function(value){
    		if(value < n) return {isValid: false, errorMessage: "Значение слишком маленькое"}
    		else return {isValid: true, errorMessage: ""}
    	});
    	return this;
    }

    isEmail(){
    	this.findError.push(function(value){
	    	let hotdog = value.indexOf('@');
			if (hotdog != -1){
				let underHotdog = value.substring(hotdog);
				let ufterHotdog = value.substring(0, hotdog);
				if((underHotdog.indexOf('.') == -1) || (ufterHotdog == '' )  ){
					return {isValid: false, errorMessage: "Неправильно введен емейл"}
				}else return {isValid:true, errorMessage: ""};
			}else return "";
    	});
		return this; 
    }

    isInt(){
    	this.findError.push(function(value){
    		let valueInInt = +value;
			if((valueInInt^0) != valueInInt /*|| typeof(value) == 'string'*/){
				return {isValid: false, errorMessage: "Это не целое число, наверное оно должно быть целое"}
			}else return {isValid: true, errorMessage: ""}
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