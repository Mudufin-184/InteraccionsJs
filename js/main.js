function circulo(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("circulo");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Circulo"
}
function rectangulo(){
    let figura = document.querySelector("#figura");
    figura.classList.toggle("rectangulo")
    
    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Rectangulo"
}
function degradado(){
    let  figura = document.getElementById("figura");
    figura.classList.toggle("degradado");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Degradado"
}
function gif(){
    let figura = document.querySelector("#figura");
    figura.classList.toggle("gif");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Gif"
}
function luna(){
    let fifura = document.getElementById("figura");
    fifura.classList.toggle("luna");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Luna"
}
function estrella(){
    let figura = document.querySelector("#figura");
    figura.classList.toggle("estrella");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Estrella";
}
function triangulo(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("triangulo");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Triangulo"
}
function moveTop(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("top")
    alert(" La figura se movera hacia arriba");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "La figura se mueve arriba"
}
function moveBotton(){
    let figura=document.querySelector("#figura");
    figura.classList.toggle("botton")
    alert("La Figura se movera hacia abajo");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "La Figura se mueve abajo"
}
function moveLeft(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("left")
    alert(" La figura se esta moviendo a la izquierda ");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "La Figura se mueve a la Izquierda"  
}
function moveRight(){
    let figura = document.getElementById("figura");
    figura.classList.toggle("right")
    alert(" La figura se esta moviendo a la derecha ");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "La Figura se mueve a la Derecha"  
}
function Diagonal(){
    let figura = document.querySelector("#figura");
    figura.classList.toggle("diagonal"); 
    alert("La Figura se encuentra en diagonal");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "La Figura se mueve en Diagonal"  
}
function fondo() {
    let figura = document.querySelector("#fondo");
    figura.classList.toggle("fondo");

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Se cambia el fondo de pantalla"  
}
function fondoUsuario(){
    let bgcolor = document.querySelector("#fondo");

    bgcolor.classList.toggle("noImg")

    color = prompt ("Ingrese por favor un color en ingles");
    document.body.style.backgroundColor = color;

    const txtFigura = document.getElementById("txtFigura");   
    txtFigura.innerText = "Se cambia el color del fondo a "+color;  
}
function panellateral(){
    let panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");
}
function panelSuperior(){
    let panel = document.getElementById("panel-superior");

    panel.classList.toggle("active");
}