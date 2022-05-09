var numbers = [1, 2, 3, 4, 10, 11];
let suma = 0;

function sumArray() {
    for(let i = 0; i < numbers.length; i++){
        suma += numbers[i];   
    }     
}
sumArray()
console.log(suma);

