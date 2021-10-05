function otraFunction() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi funcion asincrona');
            cb(err)
        }

    })
}

try {
    // otraFunction();
    seRompeAsincrona(function (err) {
        console.log(err.message);
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto de qui esta al final');