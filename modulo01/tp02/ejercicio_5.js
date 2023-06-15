function analizarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) {
      console.log("La cadena está formada solo por mayúsculas");
    } else if (cadena === cadena.toLowerCase()) {
      console.log("La cadena está formada solo por minúsculas");
    } else {
      console.log("La cadena está formada por una mezcla de mayúsculas y minúsculas");
    }
  }
  
var carac = prompt("Por favor ingrese una cadena de caracteres:")
analizarCadena(carac)

// analizarCadena("Hola");
// analizarCadena("MUNDO");
// analizarCadena("Hola JUAN");