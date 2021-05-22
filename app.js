/* var primerNumero = prompt('ingrese primer numero');
var segundoNumero = prompt('ingrese su segundo numero');
alert(parseInt(primerNumero) + parseInt(segundoNumero)); */ //Forma 1

//Ejercicio 1
function sumar() {
    var numero1 = document.getElementById('numero1').value;
    var numero2 = document.getElementById('numero2').value;
    var suma = parseInt(numero1) + parseInt(numero2);
    document.getElementById('resultado-1').innerHTML = 'El resultado es: ' + suma;
} // Forma 2

//Ejercicio 2
function promedio() {
    var parcial1 = document.getElementById('parcial1').value;
    var parcial2 = document.getElementById('parcial2').value;
    var parcial3 = document.getElementById('parcial3').value;
    var promedio = (parseFloat(parcial1) + parseFloat(parcial2) + parseFloat(parcial3)) / 3;
    document.getElementById('resultado-2').innerHTML = 'El promedio es: ' + promedio;
}

//Ejercicio 3
function ganancia() {
    var capital = document.getElementById('capital').value;
    var ganancia = capital * 0.2;
    document.getElementById('resultado-3').innerHTML = 'La ganancia mensual es de: $' + ganancia;
}