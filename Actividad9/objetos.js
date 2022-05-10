// Ejercicios de Objetos y sus métodos básicos:



//   Del siguiente objeto:
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
  
//    1. Muestra en pantalla el valor de la propiedad name mediante dot notation
    console.log(student.name);
//    2. Muestra en pantalla el valor de la propiedad age mediante bracket notation
    console.log(student['age']);
//   3. Modifica el valor de la propiedad name y que el nuevo valor sea: "Steve Jobs"
    student.name = "Steve Jobs";
    console.log(student.name);




  /*Escriba un programa de JavaScript para enumerar las propiedades de un objeto de JavaScript.
    Objeto de muestra:*/

    function enumerar (object){
        let i = 0;
        for(let property  in object){
            if(object.hasOwnProperty(property)){
                i++;
            }
        }
        return i;
    }
    var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
 
    console.log(`${enumerar(student)}`)



 // Verifica si la propiedad name se encuentra dentro del siguiente objeto:
     var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };

    console.log(student.name);


/** Escriba un programa de JavaScript para eliminar la propiedad rollno del siguiente objeto. 
 * Imprima también el objeto antes o después de eliminar la propiedad. 
 * Objeto para usar: */
  var student = {
        name: "David Rayy",
        sclass: "VI",
        rollno: 12
    };
    console.log(student);
    delete student.rollno;
    console.log(student);



// Escriba un programa para modificar el valor de la segunda propiedad del siguiente objeto:
  
    var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };
//La nueva edad debe ser 35.
 
student.age = 35;
console.log(student)




// Escriba un programa para añadir una nueva propiedad al siguiente objeto:
 var student = {
        name: "David Rayy",
        age: 34,
        job: "engineer",
        hobbies: ['Sky', 'football', 'walking my dog']
    };

//    La nueva propiedad debe ser: pet y agregue un valor, ejemplo: cat, dog.

student.pet = "cat";
console.log(student);



/**
 * Crea un código para llenar un objecto vacio:
 * 
 *const objeto = {}
 * 
 * Con las siguiente propiedades:
    * color
    * tamaño
    * peso
    * cantidad
    * 
*/
const objeto = {}

objeto['color'] = "Negro";
objeto['tamaño'] = "M";
objeto['peso'] = 65;
objeto['cantidad'] = 3;

console.log(objeto);