var valores = [true, false, 2, "hola", "mundo", 3, "char"];

// Paso 1: Encontrar el elemento de texto más largo
var elementoMasLargo = "";
for (var i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "string") {
    if (valores[i].length > elementoMasLargo.length) {
      elementoMasLargo = valores[i];
    }
  }
}

// Paso 2: Ordenar los elementos de texto de menor a mayor longitud
var elementosDeTexto = [];
for (var i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "string") {
    elementosDeTexto.push(valores[i]);
  }
}
elementosDeTexto.sort(function(a, b) {
  return a.length - b.length;
});

// Paso 3: Realizar las operaciones matemáticas básicas
var numeros = [];
for (var i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "number") {
    numeros.push(valores[i]);
  }
}

var suma = numeros[0] + numeros[1];
var resta = numeros[0] - numeros[1];
var multiplicacion = numeros[0] * numeros[1];
var division = numeros[0] / numeros[1];

// Imprimir los resultados
console.log("Elemento de texto más largo: " + elementoMasLargo);
console.log("Elementos de texto ordenados de menor a mayor longitud: " + elementosDeTexto.join(", "));
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);