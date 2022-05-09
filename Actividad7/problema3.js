function palindrome(word){
    let array = word.split(''); //split es un separador de cadenas
    let back = array.reverse(); //reverse invierte el orden de los elementos

    if(word == back.join('')){ //join une todos los elementos de una matriz
        console.log("Es un palindromo");
    }
    else{
        console.log("No es un palindromo");
    }
}
console.log(palindrome (prompt("Ingresa una palabra")))