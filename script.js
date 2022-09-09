//Variables
 portal = document.getElementById('portal');
 michiball = document.getElementById('michiball');
 puntos = document.querySelector('#puntos span');
 contador = 0

//funciones para mover el portal

function moveLeft(){
  portalLeft = parseInt(window.getComputedStyle(portal).getPropertyValue('left'));
  portalLeft -= 25
  if(portalLeft >= -360){
    portal.style.left = portalLeft + 'px';
  }
}

function moveRight(){
  portalLeft = parseInt(window.getComputedStyle(portal).getPropertyValue('left'));
  portalLeft += 25
  if(portalLeft < 370){
    portal.style.left = portalLeft + 'px';
  }
}

//Mover el portal con teclas

document.addEventListener("keydown", function(e){
  if(e.key === "ArrowLeft"){
    moveLeft()
  }
  if(e.key === "ArrowRight"){
    moveRight()
  }
})

//Generar michiballs aleatoriamente

setInterval(function(){
  numeroAleatorio = Math.floor(Math.random() * 30) * 25
  michiball.style.left = numeroAleatorio + 'px'
  console.log(numeroAleatorio)
},1600)

x = setInterval(function(){
  
  puntos.innerHTML = contador

  contador++;

  michiballTop = parseInt(window.getComputedStyle(michiballTop).getPropertyValue('top'))
  portalTop = parseInt(window.getComputedStyle(portalTop).getPropertyValue('top'))
  michiballLeft = parseInt(window.getComputedStyle(michiballLeft).getPropertyValue('left'))
  portalLeft = parseInt(window.getComputedStyle(portalLeft).getPropertyValue('left'))
  
  if((michiballTop > 460) && (michiballTop < 500)){
    if(portalLeft == michiballLeft){
      
    } else {
      alert("GAME OVER");
      clearInterval(x)
      contador = 0
      michiball.style.animation = 'none';
    }
  }
},10)




