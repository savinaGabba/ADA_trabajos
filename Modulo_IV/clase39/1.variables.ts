//Ejemplo de var: Alcence y Hoisting
function ejemploVar() {
    //@ts-ignore   ///para sacar el error
    console.log(variableVar);//undefined por hoisting
    var variableVar = 'Soy una variable var';
    console.log(variableVar);//log normal
}
ejemploVar();

//ejemplo de let: alcance de bloque y sin hoisting
function ejemploLet() {
    //console.log(variableLet);  // Error no hay acceso a la variable
    let variableLet = 'soy una variable let';
    console.log(variableLet);
}
ejemploLet();

//ejemplo de const: valor constante y alcence de bloque
function ejemploConst() {
    
}
