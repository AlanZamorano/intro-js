let array = [];
let userInput;
let contador = 0;

while(contador < 5){
    userInput = prompt('Ingresa algo');
    array.push(userInput);
     contador++
}
console.log(`Introduciste los siguientes valores ${array}`);