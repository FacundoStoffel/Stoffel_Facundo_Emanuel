var num = prompt("Ingrese el numero para el factorial")
var factorial = 1
for(let i=1; i<=num; i++){
    factorial *= i;
}

console.log(`El factorial de ${num} es ${factorial}`)