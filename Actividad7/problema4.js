var opcion = prompt(`Ingresa el numero de la opcion a eligir
1.- Fahrenheit
2.- Celsius`)

if(opcion > 2){
    alert(`¡Opcion no valida!
    Por favor verifica tu opcion`) 
}

else{
var grados = prompt("Ingresa los grados")
}

if(opcion == 1){

    let formula = (grados * 9/5) + 32;
   
    console.log(`Ingresate ${grados}°c equivale a ${formula}°f`);
}


else{
   let formula = (grados - 32) * 5/9;
   console.log(`Ingresate ${grados}°f equivale a ${formula}°c`);
}
