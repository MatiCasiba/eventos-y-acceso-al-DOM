* Nombre: Matias Gabriel Casiba
* Link Repo GitHub:

# Desafio 10: eventos y acceso al DOM
En este desafio se pidio crear 3 botones con 3 emoticones distinto de la cara de un gato, y debajo de ellos un elemento contenedor que represente, en el mismo renglón, tres tipos de caras de gatos distintos, que se irán mostrando uno al lado del otro al ir accionando cada uno de los botones (cada botón inyecta una cara distinta en la misma línea). Para crear esto, en index.html hice:
```sh
<body>
    <button id="gato-1" type="submit">Agregar Gato 😺</button>
    <button id="gato-2" type="submit">Agregar Gato 😸</button>
    <button id="gato-3" type="submit">Agregar Gato 😹</button>
    <div class="contenedor"></div>
</body>
```
En javaScript, lo primero que hice fue la selección de botons y el contenedor:
```sh
let botonGato1 = document.querySelector('#gato-1')
let botonGato2 = document.querySelector('#gato-2')
let botonGato3 = document.querySelector('#gato-3')
let contenedor = document.querySelector('.contenedor')

let arrayGatosActuales = [] # con la finalidad de reastrear gatos consecutivos
```

## Funcion para agregar el gato
Tengo que mostrar en pantalla las cara de los emojis del gato cuando el usuario haga click sobre los botones. Para darle dicha funcion, lo realizé de la siguiente manera:
```sh
#creando funcion para agregar un gato
let agregaGato = (emoji) => {
    #creando un elemento para el emojin
    let gato = document.createElement('p')
    gato.textContent = emoji

    #agregando el gato al contenedor y al array
    contenedor.appendChild(gato)
    arrayGatosActuales.push(emoji)

}

# Utilizo eventos para los botones, se van a encargar de ejecutar ya el código hecho de let agregaGato
botonGato1.addEventListener('click', ()=> agregaGato('😺'))
botonGato2.addEventListener('click', ()=> agregaGato('😸'))
botonGato3.addEventListener('click', ()=> agregaGato('😹'))
```
