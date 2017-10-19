class Rule {
    isRequired() {
        require(){
            if(!this.value){
                this.err.push('Ничего не введено'); 
            }
        }
        return this;
    }

    isInt() {
        return this;
    }

    validateRule(value) {
        return this(value);
    }
}


class Validator {
    Validate(data, rules){
        var err={};
        return new Promise(function(resolve, reject){
            for(var key in rules){
                rules[key].validateRule(data[key]);
            }
        });
    }
}



let person = {
    name: 'Vasya',
    age: 23,
    phoneNumber: '+3123131231'
}

let rules = {
    name: new Rule().isRequired(),
    age: new Rule().isRequired(),
    phoneNumber: new Rule().isRequired()
}



var promise = new Validator.Validate(person, rules);