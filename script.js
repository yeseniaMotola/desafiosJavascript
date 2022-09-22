//Variables
let portal = document.getElementById('portal');
let michiball = document.getElementById('michiball');
let puntos = document.querySelector('#puntos span');
let contador = 0

//funciones para mover el portal

function moveLeft() {
    let portalLeft = parseInt(window.getComputedStyle(portal).getPropertyValue('left'));
    portalLeft -= 25
    if (portalLeft >=0) {
        portal.style.left = portalLeft + 'px';
    }
}

function moveRight() {
    portalLeft = parseInt(window.getComputedStyle(portal).getPropertyValue('left'));
    portalLeft += 25
    if (portalLeft < 715) {
        portal.style.left = portalLeft + 'px';
    }
}

//Mover el portal con teclas

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveLeft()
    }
    if (e.key === "ArrowRight") {
        moveRight()
    }
})

//Generar michiballs aleatoriamente

setInterval(function () {
    let numeroAleatorio = Math.floor(Math.random() * 760)
    michiball.style.left = numeroAleatorio + 'px'
    console.log(numeroAleatorio)
}, 1700)

//Contar puntos y terminar el juego cuando no se atrape

let contarPuntos = setInterval(function () {

    puntos.innerHTML = contador

    contador++;

    let michiballTop = parseInt(window.getComputedStyle(michiball).getPropertyValue('top'))
    //let portalTop = parseInt(window.getComputedStyle(portal).getPropertyValue('top'));
    let portalLeft = parseInt(window.getComputedStyle(portal).getPropertyValue('left'));
    let michiballLeft = parseInt(window.getComputedStyle(michiball).getPropertyValue('left'));
    

    let portalRight = portalLeft + 100;
    let michiballRight = michiballLeft + 35;
    console.log("portalLeft: " + portalLeft);
    console.log("portalRight: " + portalRight);
    console.log("michiballRight: " + michiballRight);
    console.log("michiballLeft: " + michiballLeft);

    if (michiballTop > 450) {
        if (portalLeft > michiballLeft || portalRight < michiballRight) {
            contador = 0;
            alert("Game over");
            //michiball.style.animation = 'none';
        }
    }
}, 50)




