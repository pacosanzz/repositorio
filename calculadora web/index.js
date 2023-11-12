//codigo para cambiar tema de claro a oscuro y viceversa
const botonTema = document.querySelector('#botonTema')
const h1 = document.querySelector('#h1')
const h2 = document.querySelector('#h2')
const lista = document.querySelector('#lista')
const entradas = document.querySelector('#a')

let temaOriginal = 'claro' //se declara el tema predeterminado 'claro'

botonTema.addEventListener('click', ()=>{ //accion de cambio al clickar en el boton segun el tema que este puesto en ese momento
    if(temaOriginal == 'claro'){ //si el tema es 'claro', al pulsar se cambia a 'oscuro'
        document.body.style.backgroundColor = 'black'
        //h1.style.transition = 'color 0.3s'
        //h2.style.transition = 'color 0.3s'
        h1.style.color = 'white'
        h2.style.color = 'white'
        botonTema.style.color = 'black'
        botonTema.style.backgroundColor = 'white'
        lista.style.color = 'white'
        lista.style.borderColor = 'white'
        //entradas.style.transition = 'color 0.3s'
        entradas.style.color = 'white'
        temaOriginal = 'oscuro' //se declara que ahora si se esta en tema 'oscuro'
    } else { //ahora, al estar en 'oscuro', la siguiente vez que clickemos hace lo contrario de antes
        document.body.style.backgroundColor = 'white'
        //h1.style.transition = 'color 0.3s'
        //h2.style.transition = 'color 0.3s'
        h1.style.color = 'black'
        h2.style.color = 'black'
        botonTema.style.color = 'white'
        botonTema.style.backgroundColor = 'black'
        lista.style.color = 'black'
        lista.style.borderColor = 'black'
        //entradas.style.transition = 'color 0.3s'
        entradas.style.color = 'black'
        temaOriginal = 'claro' //y se vuelve a declarar que se ha vuelto al tema 'claro'
    }
    return //se usa return para volver a ejecutar el if desde arriba al terminar el else
})