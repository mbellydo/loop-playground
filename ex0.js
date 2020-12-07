/**
 * Un buen caso para usar switch
 * 
 * Queremos escribir un script que, dado un mes del año, nos diga en que trimestre nos encomtramos.
 * 
 * Por ejemplo, si mes = 4, deberíamos mostrar por el terminal "Nos encontramos en el segundo cuatrimestre"  
 * 
 * Explra esta información para averiguar como usar el condicional 'switch'; y cómo se pueden agrupar varios casos: https://javascript.info/switch#grouping-of-case
 * 
 */

let mes = 4;

// Escribir a partir de aquí
let trimestre;
switch(mes){
    case 1:
    case 2:
    case 3:
    case 4:
        trimestre = "primer";
        break;
    case 5:
    case 6:
    case 7:
    case 8:
        trimestre = "segundo";
        break;
    case 9:
    case 10:
    case 11:
    case 12:
        trimestre = "tercer";
        break;
}

console.log(`Estamos en el ${trimestre} trimestre`)