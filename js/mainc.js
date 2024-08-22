var cantidadDeGatos = parseInt(prompt('Ingrese la cantidad de gatos'))
var cantidadDePasos = parseInt(prompt('Ingrese la cantidad de pasos'))


for (var i = 1; i <= cantidadDeGatos; i++) {
    var pasos = '';
    
    for (var j = 0; j < cantidadDePasos; j++) {
        pasos += '🐾';
    }
    
    var gato = (i % 2 === 0) ? '🐈‍⬛' : '🐈';
    console.log('Gato #' + i + ': ' + gato + ' ' + pasos);
}
