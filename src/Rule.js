class Rule {
    constructor(){
        this.findError = [];
    }
    isRequired() {
        this.findError.push(function(value){
            if(value == undefined)  return "Ничего не введено"; 
            else return "";
        });
        return this;
    }

    maxLength(maxNumber){
        this.findError.push(function(value){
            if(value.length > maxNumber) return "Слишком большое значение";
            else return "";
        });
        return this;
    }

    minLength(minNumber){
        this.findError.push( function(value){
            if (value.length < minNumber) return "Слишком маленькое значение";
            else return "";
        })
        return this;
    }

    max(n){
    	this.findError.push(function(value){
    		if(value > n) return "Значение больше, чем ожидалось";
    		else return "";
    	})
    	return this;
    }

    min(n){
    	this.findError.push(function(value){
    		if(value < n) return "Значение слишком маленькое";
    		else return "";
    	});
    	return this;
    }

    isEmail(){
    	this.findError.push(function(value){
	    	let hotdog = value.indexOf('@');
			if (hotdog != -1){
				let underHotdog = value.substring(hotdog);
				let ufterHotdog = value.substring(0, hotdog);
                console.log(ufterHotdog)
				if((underHotdog.indexOf('.') == -1) || (ufterHotdog == '' )  ){
					return "Неправильно введен емейл";
				}else return "";
			}else return "";
    	});
		return this; 
    }

    isInt(){
    	this.findError.push(function(value){
    		let valueInInt = +value;
			if((valueInInt^0) != valueInInt || typeof(value) == 'string'){
				return ("Это не целое число, наверное оно должно быть целое");
			}else return "";
    	});

        return this;	
	}

    validateRule(value) {
        var err=[];
        for(var key in this.findError){
                err.push(this.findError[key](value));
            }
        return err;  
    }
}	