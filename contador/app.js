//iniciarlizar el contador

let cont =  0;

//traer el elemento

let value = document.getElementById('contador');

//metodo del evento a incrementar

function incrementar(){
    cont++  
    value.textContent = cont;
}
function decrementar(){
    if(cont > 0){
    cont--
    value.textContent = cont;}
    else{
        null;
    }
}
function resetear(){
    cont = 0
    value.textContent = cont;
}