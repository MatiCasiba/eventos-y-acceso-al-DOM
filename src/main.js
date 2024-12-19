import './style.css'

let botonGato1 = document.querySelector('#gato-1')
let botonGato2 = document.querySelector('#gato-2')
let botonGato3 = document.querySelector('#gato-3')
let contenedor = document.querySelector('.contenedor')

let arrayGatosActuales = []

let agregaGato = (emoji) => {
    let gato = document.createElement('p')
    gato.textContent = emoji
    contenedor.appendChild(gato)
    arrayGatosActuales.push(emoji)

}

botonGato1.addEventListener('click', ()=> agregaGato('😺'))
botonGato2.addEventListener('click', ()=> agregaGato('😸'))
botonGato3.addEventListener('click', ()=> agregaGato('😹'))




