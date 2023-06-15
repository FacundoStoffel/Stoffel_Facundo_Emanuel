function generarNumerosAleatorios() {
    var numeros = [];
    while (numeros.length < 100) {
      var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
      }
    }
    return numeros;
}
  
var numerosAleatorios = generarNumerosAleatorios();
  
for (var i = 0; i < numerosAleatorios.length; i++) {
    document.write(numerosAleatorios[i] + "<br>");
}