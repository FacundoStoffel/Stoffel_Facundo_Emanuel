function determinarParidad(numero) {
    if (numero % 2 === 0) {
        document.write("El numero es par");
        console.log("El numero es par")
    } else {
        document.write("El numero es impar");
        console.log("El numero es impar")
    }
  }

  var num = prompt("Por favor ingrese un numero")
  determinarParidad(num)