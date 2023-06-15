// Función para calcular el promedio de un array de números
function calcularPromedio(notas) {
    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
    return suma / notas.length;
  }
  
  // Función para determinar la calificación según el promedio
  function determinarCalificacion(promedio) {
    if (promedio < 5) {
      return "Reprobado";
    } else if (promedio >= 6 && promedio <= 8) {
      return "Aprobado";
    } else {
      return "Sobresaliente";
    }
  }
  
  // Obtener las notas del alumno
  var notas = [];
  for (var i = 1; i <= 4; i++) {
    var nota = parseInt(prompt("Ingrese la nota " + i + ":"));
    notas.push(nota);
  }
  
  // Calcular el promedio
  var promedio = calcularPromedio(notas);
  
  // Determinar la calificación
  var calificacion = determinarCalificacion(promedio);
  
  // Mostrar por pantalla
  console.log("El promedio es: " + promedio.toFixed(2));
  console.log("Calificación: " + calificacion);