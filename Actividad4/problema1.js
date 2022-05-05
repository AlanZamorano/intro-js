let numero = Number(prompt("Ingresa un número"));
let i = 1;
while (i <= numero) {
    if (i % 5 == 0) {
        console.log(`El número ${numero} es divisible entre ${i}`)
    }
    i++
}
