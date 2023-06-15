function invertirTexto(texto) {
    var textoInvertido = "";
    for (var i = texto.length - 1; i >= 0; i--) {
      textoInvertido += texto[i];
    }
    return console.log(textoInvertido);
  }
  
var text = prompt("Ingrese el texto que desee invertir:")
invertirTexto(text)