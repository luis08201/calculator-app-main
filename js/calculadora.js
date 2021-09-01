//obtener los numeros
function number(num){
    var result = document.getElementById("calculadora__display");
    result.value += num;
}

//obtener resultado
function result(){
    var result = document.getElementById("calculadora__display");
    result.value = eval(result.value);
}

//Limpiar resultado
function clearResult(){
     var result = document.getElementById("calculadora__display");   
     result.value= "";
}

//Borrar numero
function deleteNumber(){
    var number = document.getElementById("calculadora__display");   
    var remove = number.value;
    remove=remove.slice(0,-1); //elimina el ultimo caracter 
    number.value = remove;
}