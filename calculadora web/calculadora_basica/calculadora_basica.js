//codigo para cambiar tema de claro a oscuro y viceversa
const botonTema = document.querySelector('#botonTema')
const h1 = document.querySelector('#h1')
const operaciones = document.querySelector('#operaciones')
const botonInicio = document.querySelector('#botonInicio')

let temaOriginal = 'claro' //se declara el tema predeterminado 'claro'

botonTema.addEventListener('click', ()=>{ //accion de cambio al clickar en el boton segun el tema que este puesto en ese momento
    if(temaOriginal == 'claro'){ //si el tema es 'claro', al pulsar se cambia a 'oscuro'
        document.body.style.backgroundColor = 'black'
        //h1.style.transition = 'color 0.3s'
        h1.style.color = 'white'
        //operaciones.style.transition = 'color 0.3s'
        operaciones.style.color = 'white'
        operaciones.style.borderColor = 'white'
        botonTema.style.color = 'black'
        botonTema.style.backgroundColor = 'white'
        //botonInicio.style.transition = 'color 0.3'
        botonInicio.style.color = 'black'
        botonInicio.style.backgroundColor = 'white'
        temaOriginal = 'oscuro' //se declara que ahora si se esta en tema 'oscuro'
    } else { //ahora, al estar en 'oscuro', la siguiente vez que clickemos hace lo contrario de antes
        document.body.style.backgroundColor = 'white'
        //h1.style.transition = 'color 0.3s'
        h1.style.color = 'black'
        //operaciones.style.transition = 'color 0.3s'
        operaciones.style.color = 'black'
        operaciones.style.borderColor = 'black'
        botonTema.style.color = 'white'
        botonTema.style.backgroundColor = 'black'
        //botonInicio.style.transition = 'color 0.3s'
        botonInicio.style.color = 'white'
        botonInicio.style.backgroundColor = 'black'
        temaOriginal = 'claro' //y se vuelve a declarar que se ha vuelto al tema 'claro'
    }
    return //se usa return para volver a ejecutar el if desde arriba al terminar el else
})


//codigo para la suma de 2 numeros
const suma1 = document.querySelector('#suma1')
const suma2 = document.querySelector('#suma2')
const botonSuma = document.querySelector('#botonSuma')
const sumatorio = document.querySelector('#sumatorio')

botonSuma.addEventListener('click', ()=>{ //operar al pulsar el boton de resultado
    sumando1 = Number(suma1.value)
    sumando2 = Number(suma2.value)
    let resultadoSuma = sumando1 + sumando2
    console.log(`${resultadoSuma}`) //imprimir resultado en consola
    var objetivo1 = document.getElementById('sumatorio')
    objetivo1.innerHTML = resultadoSuma //mostrar resultado en pantalla
})
suma1.addEventListener('click', ()=>{
    suma1.value = '' //vaciar hueco para el numero
    sumatorio.innerHTML = '' //vaciar hueco del resultado
})
suma2.addEventListener('click', ()=>{
    suma2.value = '' //vaciar hueco para el numero
    sumatorio.innerHTML = '' //vaciar hueco del resultado
})


//codigo para la resta de 2 numeros
const resta1 = document.querySelector('#resta1')
const resta2 = document.querySelector('#resta2')
const botonResta = document.querySelector('#botonResta')
const restatorio = document.querySelector('#restatorio')

botonResta.addEventListener('click', ()=>{ //operar al pulsar el boton de resultado
    restando1 = Number(resta1.value)
    restando2 = Number(resta2.value)
    let resultadoResta = restando1 - restando2
    console.log(`${resultadoResta}`) //imprimir resultado en consola
    var objetivo2 = document.getElementById('restatorio')
    objetivo2.innerHTML = resultadoResta //mostrar resultado en pantalla
})

resta1.addEventListener('click', ()=>{
    resta1.value = '' //vaciar hueco para el numero
    restatorio.innerHTML = '' //vaciar hueco del resultado
})
resta2.addEventListener('click', ()=>{
    resta2.value = '' //vaciar hueco para el numero
    restatorio.innerHTML = '' //vaciar hueco del resultado
})


//codigo para la multiplicacion de 2 numeros
const producto1 = document.querySelector('#producto1')
const producto2 = document.querySelector('#producto2')
const botonProducto = document.querySelector('#botonProducto')
const productorio = document.querySelector('#productorio')

botonProducto.addEventListener('click', ()=>{ //operar al pulsar el boton de resultado
    multiplicando1 = Number(producto1.value)
    multiplicando2 = Number(producto2.value)
    let resultadoProducto = multiplicando1 * multiplicando2
    console.log(`${resultadoProducto}`) //imprimir resultado en consola
    var objetivo3 = document.getElementById('productorio')
    objetivo3.innerHTML = resultadoProducto //mostrar resultado en pantalla
})

producto1.addEventListener('click', ()=>{
    producto1.value = '' //vaciar hueco para el numero
    productorio.innerHTML = '' //vaciar hueco del resultado
})
producto2.addEventListener('click', ()=>{
    producto2.value = '' //vaciar hueco para el numero
    productorio.innerHTML = '' //vaciar hueco del resultado
})


//codigo para la division de 2 numeros
const division1 = document.querySelector('#division1')
const division2 = document.querySelector('#division2')
const botonDivision = document.querySelector('#botonDivision')
const divisorio = document.querySelector('#divisorio')

botonDivision.addEventListener('click', ()=>{ //operar al pulsar el boton de resultado
    dividiendo1 = Number(division1.value)
    dividiendo2 = Number(division2.value)
    let resultadoDivision = dividiendo1 / dividiendo2
    console.log(`${resultadoDivision}`) //imprimir resultado en consola
    var objetivo4 = document.getElementById('divisorio')
    objetivo4.innerHTML = resultadoDivision //mostrar resultado en pantalla
})

division1.addEventListener('click', ()=>{
    division1.value = '' //vaciar hueco para el numero
    divisorio.innerHTML = '' //vaciar hueco del resultado
})
division2.addEventListener('click', ()=>{
    division2.value = '' //vaciar hueco para el numero
    divisorio.innerHTML = '' //vaciar hueco del resultado
})



const limpiarTodo = document.querySelector('#limpiarTodo')

limpiarTodo.addEventListener('click', ()=>{ //limpiar todos los campos al pulsar "LIMPIAR TODO"
    suma1.value =''
    suma2.value =''
    resta1.value =''
    resta2.value =''
    producto1.value =''
    producto2.value =''
    division1.value =''
    division2.value =''
    sumatorio.innerHTML = ''
    restatorio.innerHTML = ''
    productorio.innerHTML = ''
    divisorio.innerHTML = ''
})
