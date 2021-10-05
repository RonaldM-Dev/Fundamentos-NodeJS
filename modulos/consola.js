// Herramientas de consola
// ejecutar en la terminal nodemon 

// Console.table
var tabla = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'Otra'
    }
]

console.table(tabla) // registro en tabla para mostrar valores

// console.group
console.group('conversacion');
console.log('Hola');
console.group('Bla');
console.log('Bla bla bla...');
console.log('Bla bla bla...');
console.log('Bla bla bla...');
console.groupEnd('Bla');
console.log('Adios');
console.groupEnd('conversacion');

console.log('Otra cosa de otra function')

// console.group

function function1() {
    console.group('function 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    console.log('Esto tambien');
    function2();
    console.log('Hemos vuelto a la 1');
    console.groupEnd('function 1');
}

function function2() {
    console.group('function 2');
    console.log('Ahora estamos en la funcion 2');
    console.groupEnd('function 2');
}

console.log('empezamos');
function1();

// Contador en consola
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces'); // recetear contador
console.count('veces');



