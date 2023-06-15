let dato, resultado;
val1 = window.prompt("Introduce tu nombre", "...");
val2 = window.prompt("Introduce tu apellido", "...");
resultado = `Concatenado tu nombre y apellido es: ${val1} ${val2} ` ;
document.write(resultado);

// lo que hace este codigo es crear dos variables y que al iniciar la pagina te salta un ventana de 
// alerta pidiendo tu nombre y luego otra pidiendo tu apellido, y luego lo concatena 
// imprimiendolo en la pantalla de inicio 