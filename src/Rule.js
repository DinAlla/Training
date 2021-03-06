function Rule(){
    this.findError = [];
}
Rule.prototype.isRequired = function(){
    this.findError.push(function(value){
    let isValid = !(value == undefined || typeof(value) == null); 
    return {isValid: isValid, errorMessage: "Ничего не введено"};
    });
    return this;    
}
Rule.prototype.maxLength = function(maxNumber){
    this.findError.push(function(value){
        let isValid = !(value.length > maxNumber);
        return {isValid: isValid, errorMessage: "Слишком большое значение"};
    });
    return this; 
}
Rule.prototype.minLength = function(minNumber){
    this.findError.push( function(value){
        let isValid = !(value.length < minNumber);
        return {isValid: isValid, errorMessage: "Слишком маленькое значение"};
    })
    return this;
}
Rule.prototype.max = function(n){
    this.findError.push(function(value){
        let isValid = !(value > n);
        return {isValid: isValid, errorMessage:"Значение больше, чем ожидалось"};
    })
    return this;
}
Rule.prototype.min = function(n){
    this.findError.push(function(value){
        let isValid = !(value < n);
        return {isValid: isValid, errorMessage: "Значение слишком маленькое"};
    });
    return this;
}
Rule.prototype.isEmail = function(){
    this.findError.push(function(value){
        var r = value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i);
        return {isValid: !(r == null), errorMessage:"Неправильно введен емейл"}
    });
    return this; 
}
Rule.prototype.isInt = function(){
    this.findError.push(function(value){
        let valueInInt = +value;
        let isValid = !((valueInInt^0) != valueInInt); /*|| typeof(value) == 'string'*/
        return {isValid: isValid, errorMessage: "Это не целое число, наверное оно должно быть целое"}
    });
    return this;    
}
Rule.prototype.validateRule = function(value){
    let validateResult = this.findError.map(x => x(value));

    let result = {
        isValid: validateResult.every(x => x.isValid),
        errorMessage: validateResult.filter(x => !x.isValid).map(x => x.errorMessage)
    };

    return result;
}
module.exports = Rule;