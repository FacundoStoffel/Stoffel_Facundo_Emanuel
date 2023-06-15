function esVocal(caracter) {
    var vocales = ['a', 'e', 'i', 'o', 'u'];
    return vocales.includes(caracter.toLowerCase());
}

function obtenerPosicionPrimeraVocal(texto) {
    for (var i = 0; i < texto.length; i++) {
      if (esVocal(texto[i])) {
        return i + 1; 
      }
    }
    return -1; 
}
  
var texto = prompt("Introduce un texto:");

var posicion = obtenerPosicionPrimeraVocal(texto);

if (posicion !== -1) {
    console.log("La primera vocal en el texto es la letra Nº" + posicion);
} else {
    console.log("No se encontró ninguna vocal en el texto");
}