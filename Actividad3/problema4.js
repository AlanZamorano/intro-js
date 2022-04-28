var num1 = Number(prompt("Ingresa el primer numero"))
var num2 = Number(prompt("Ingresa el segundo numero"))

if(num1 < num2)
{
    document.write("El numero menor es: " + num1)
} 
else if(num2 < num1)
{
    document.write("El numero menor es: " + num2)
} 
else{
    document.write("Ambos numeros son iguales")
}