* Nombre: Matias Gabriel Casiba
* Link Repo GitHub: https://github.com/MatiCasiba/eventos-y-acceso-al-DOM

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
    let gato = document.createElement('span')
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

## Estilo del contenedor
Para la clase contenedor, eh utilizado flex, con la finalidad de que al momento de mostrar los gatos en pantalla, vayan en una misma linea horizontal:
```sh
.contenedor {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
}
```

## Verificación si hay más de 5 consecutivamente iguales
Tengo que realizar una verificación que detecte cuando hay más de 5 emojis consecutivamentes iguales, luego guardarlos en una caja. Dentro de la funcion agregarGato, estaré realizando esa verificación:
```sh
#verificando si hay más de 5 gatos iguales consecutivamente
    if (arrayGatosActuales.length >= 5){
        let ultimosCinco = arrayGatosActuales.slice(-5)
        if (ultimosCinco.every((g)=>g === emoji)){
            #hago una caja para guardar los gatos
            let caja = document.createElement('div') #creo un elemento div dinamico  que tendrá el emoji de una caja
            caja.textContent = '📦'
            contenedor.prepend(caja)
        }
    }
```
* let ultimosCinco: con slice(-5) agarro los utltimos 5 elementos del array, comienza a contar desde el final del array hacia atrás.
* if (ultimosCinco.every(g=>g === emoji)): voy a recorrer los elemenetos guardados en el array (g representa cada uno de esos elementos tomados dentro del array, minetras que every los recorre), entonces pregunto si esos ultimos 5 elementos (g) dentro del array son iguales al emoji, si lo son dará true, si ve uno diferente, será false.
* método prepend: esto agrega un elemento como el primer hijo del contenedor.

## Moviendo gatos a caja
Lo que quiero lograr en esta parte del código es eliminar todos los emojis en pantalla cuando se detecten que hay 5 emojis consecutivamente iguales:
```sh
let todosGatos = contenedor.querySelectorAll('span')
todosGatos.forEach((gato)=>gato.remove())
arrayGatosActuales=[]
```
* todosGatos: uso el QSA (querySelectorAll) para seleccionar todos los elementos span que están dentro el contenedor
* todosGatos.forEach((gato)=>gato.remove()): uso el forEach() para recorrer todo los emojis en todoGatos, entonces para cada elemento span, llama al metodo remove() para eliminarlos. Entrando en detalle para que se entienda, (gato) es mi parámetro de la funcion, represeta un elemento de la lista en la cual se itera,gato es un elemento span del contenedor que tiene los emojis. Entonces para cada elemento (gato) se ejecuta gato.remove(), osea que lo elimino. 
* arrayGatosActuales=[]: vacio el array que llevaba los emojis en pantalla