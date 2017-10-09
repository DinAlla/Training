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