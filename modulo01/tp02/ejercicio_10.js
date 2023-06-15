function obtenerCantidadDias(mes) {
    var cantidadDias;
  
    switch (mes) {
      case 1: // Enero
      case 3: // Marzo
      case 5: // Mayo
      case 7: // Julio
      case 8: // Agosto
      case 10: // Octubre
      case 12: // Diciembre
        cantidadDias = 31;
        break;
      case 4: // Abril
      case 6: // Junio
      case 9: // Septiembre
      case 11: // Noviembre
        cantidadDias = 30;
        break;
      case 2: // Febrero
        cantidadDias = "28 o 29";
        break;
      default:
        cantidadDias = "mes inválido";
    }
  
    return cantidadDias;
}
  
// Obtener el número del mes
var mes = parseInt(prompt("Ingrese el número del mes:"));
  
// Obtener la cantidad de días
var cantidadDias = obtenerCantidadDias(mes);
  
// Mostrar por pantalla
if(mes < 13 && mes > 0){
    console.log("El mes " + mes + " tiene " + cantidadDias + " días.");
    alert("El mes " + mes + " tiene " + cantidadDias + " días.");
}else{
    alert(cantidadDias)
}