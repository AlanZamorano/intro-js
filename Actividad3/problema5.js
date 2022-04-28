var num1 = Number(prompt("Ingresa el primer numero"))
var num2 = Number(prompt("Ingresa el segundo numero"))
var num3 = Number(prompt("Ingresa el tercer numero"))

if(num1 > num2)
{
   if(num1 > num3){
        alert("El numero mayor es: " + num1)
    }
} 
else if(num2 > num1)
{
    if(num2 > num3)
    {
        alert("El numero mayor es: " + num2)
    }
} 
else if(num3 > num1)
{
    if(num3 > num2)
    {
        alert("El numero mayor es: " + num3)
    }
}
else if(num1 === num2) 
{
    if(num1 !== num3)
    {
    alert("El primer y segundo numero son iguales" + "\nPrimer numero: " + num1 + "\nTercer numero: " + num2)
    }
}
else if(num1 === num3)
{
    if(num1 !== num2)
    {
    alert("El primer y tercer numero son iguales" + "\nPrimer numero: " + num1 + "\nTercer numero: " + num3)
    }
}
else if(num2 === num3) 
{
    if(num2 !== num1)
    {
    alert("El segundo y tercer numero son iguales" + "\nSegundo numero: " + num2 + "Tercer numero: " + num3)
    }
}
else{
    alert("Todos son iguales")
}