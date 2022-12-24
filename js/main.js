
let ingresarEdad = parseInt(prompt("Ingresa tu edad"))
if (ingresarEdad >= 18){
    alert("Sos mayor de edad");
}else{
    alert("No sos mayor de edad");
}

for(var i = 1; i <= 10; i++){
    alert(i)
}


var nombresUsuarios;
nombresUsuarios = prompt("Escribir su nombre de usuario")
alert("su nombre de usuario es : " + nombresUsuarios)

let resultado = 0;
function sumar(primerNumero, segundoNumero){
  resultado = primerNumero + segundoNumero
}
function mostrar(mensaje){
    console.log(mensaje)
}
sumar(6, 3);
mostrar(resultado);