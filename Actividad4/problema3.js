let contador = 0;

for(let i = 1; i <=50; i++){
    if(i % 2 != 0){
        contador += 1;
        console.log(`${i} es un número impar`);
    } 
}
console.log(`En total hay ${contador} números impares hasta el 50`);