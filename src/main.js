import './style.css'

let botonGato1 = document.querySelector('#gato-1')
let botonGato2 = document.querySelector('#gato-2')
let botonGato3 = document.querySelector('#gato-3')
let contenedor = document.querySelector('.contenedor')

let arrayGatosActuales = []

let agregaGato = (emoji) => {
    let gato = document.createElement('span')
    gato.textContent = emoji
    contenedor.appendChild(gato)
    arrayGatosActuales.push(emoji)

    if (arrayGatosActuales.length >= 5){
        let ultimosCinco = arrayGatosActuales.slice(-5)
        if (ultimosCinco.every(g=>g === emoji)){
            let caja = document.createElement('div')
            caja.textContent = '📦'
            contenedor.prepend(caja)
            
            for (let i=0; i<5; i++) {
                let moviendoGato = contenedor.querySelector('span:last-child')
                if (moviendoGato){
                    moviendoGato.remove()
                }
            }
            arrayGatosActuales = arrayGatosActuales.slice(0,-5)
        }
    }
}

botonGato1.addEventListener('click', ()=> agregaGato('😺'))
botonGato2.addEventListener('click', ()=> agregaGato('😸'))
botonGato3.addEventListener('click', ()=> agregaGato('😹'))

