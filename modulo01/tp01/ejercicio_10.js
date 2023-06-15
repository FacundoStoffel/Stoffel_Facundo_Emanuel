var meses=["Enero","Febreo","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

var mes = prompt("Ingrese el numero del mes que quiere saber:")
switch (mes){
    case "1":
        document.writeln(meses[0])
        break;
    case "2":
        document.writeln(meses[1])
        break;
    case "3":
        document.writeln(meses[2])
        break;
    case "4":
        document.writeln(meses[3])
        break;
    case "5":
        document.writeln(meses[4])
        break;
    case "6":
        document.writeln(meses[5])
        break;
    case "7":
        document.writeln(meses[6])
        break;
    case "8":
        document.writeln(meses[7])
        break;
    case "9":
        document.writeln(meses[8])
        break;
    case "10":
        document.writeln(meses[9])
        break;
    case "11":
        document.writeln(meses[10])
        break;
    case "12":
        document.writeln(meses[11])
        break;
    default:
        document.writeln("El numero es invalido")
        break;                   
}
