let i = 0
let intervalo = setInterval(function () {
    console.log('Hola');
    if (i === 3) {
        clearInterval(intervalo);
    }
    i++;
}, 1000);

// modulos del sistema

setImmediate(function() {
    console.log('Hola');
});

console.log(__filename)
console.log(__dirname)

global.miVariable = 'elValor';

console.log(miVariable);