var nombre = prompt("Escribe tu nombre")
var edad = Number(prompt("Ingresa tu edad"))

switch(nombre)
{
    case "Mario": 
    if(edad >= 18)
{
    alert("Tienes entrada Vip a la discoteca")
}
else{
    alert("No puedes Ingresar")
}
break;
case "Carlos": 
    if(edad >= 18)
{
    alert("Tienes entrada Vip a la discoteca")
}
else{
    alert("No puedes Ingresar")
}
break;
default: 

}

if(edad >= 18 && nombre != "Mario" && nombre != "Carlos")
{
    alert("Puedes ingresar a la discoteca")
}
else if(edad < 18 && nombre != "Mario" && nombre != "Carlos"){
    alert("No puedes Ingresar")
}