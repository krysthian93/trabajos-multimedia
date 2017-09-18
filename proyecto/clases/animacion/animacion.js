var posx, posy;
var incx=3,incy;
var rbolita=20;
function iniciar(){
    elemento = document.getElementById("lienzo");
    lienzo = elemento.getContext("2d");
    valor = 39;
    posx=100; posy=100;incx=3; intervalo = 0.1;
    inc_angulo=1*Math.PI/360; angulo=0;
    radio = 100;
    //dibujo1();
	// dibujo2();
	posx=elemento.width/2+radio;
	posy=elemento.height/2;
    //dibujo2m();
    interval=setInterval(animacion5,intervalo); //OK
    
     //intervalo = 50, animacion 2 se repite cada 50ms
    //window.addEventListener("keypress",valores,false);
    //window.addEventListener("keypress",animacion,false); //
	// window.addEventListener("mousemove",animacion5,false); 
    //window.addEventListener("mousemove",animacion4,false);
	 //window.addEventListener("mousemove",animacion4m,false);
	 //window.addEventListener("keypress",animacion2,false);
}
function animacion(){

posx+=incx;
if(posx>=elemento.width-bolita ) incx*=(-1);
if(posx<=rbolita) incx*=(-1);
console.log(posx);
borrarcanvas();
dibujo1();

}


function borrarcanvas(){
	lienzo.clearRect(0,0,elemento.width,elemento.height);
	
}
function valores(e){
    valor=e.keyCode;
    alert(valor);
}
function animacion5(){
    angulo = angulo + inc_angulo;
    posy1=radio*Math.sin(angulo);
    posx1=radio*Math.cos(angulo);
    //lienzo.clearRect(0,0,500,300);
    posx = elemento.width/2 +posx1;
    posy = elemento.height/2+posy1 ;
    //
    //console.log(angulo);
    lienzo.clearRect(0,0,500,500);
    dibujo1();
    dibujoradio();
    
    
}


function animacion4(e){
	var rect=elemento.getBoundingClientRect();
    xmouse = e.clientX-rect.left;
    ymouse = e.clientY-rect.top;
    angulo = Math.atan(ymouse/xmouse);
    posy=radio*Math.sin(angulo);
    posx=radio*Math.cos(angulo);
    lienzo.clearRect(0,0,500,300);
    //    
    dibujo2();
    
}
function animacion4m(e){
	var rect=elemento.getBoundingClientRect();
    xmouse = e.clientX-rect.left;
    ymouse = e.clientY-rect.top;
	var dx =xmouse-(elemento.width/2);
	var dy=ymouse-(elemento.height/2);
	var tetha=Math.atan2(dy,dx);
    angulo = Math.atan(ymouse/xmouse);
    posy=radio*Math.sin(tetha)+(elemento.height/2);
    posx=radio*Math.cos(tetha)+(elemento.width/2);
    lienzo.clearRect(0,0,500,500);
    //    
    dibujo2m();
    
}



function dibujo2m(){
    lienzo.lineWidth = 10;
    // set the line color to blue
    lienzo.strokeStyle = "blue";
    //2. Position the canvas context and draw the line:
    // position the drawing cursor
    lienzo.beginPath();
    lienzo.moveTo((elemento.width)/2,(elemento.height)/2);
    // draw the line
    lienzo.lineTo(posx,posy);
    // make the line visible with the stroke color
    lienzo.stroke();
}


function dibujo1(){
    lienzo.beginPath();
    lienzo.arc(posx,posy,rbolita,0,Math.PI*2,false);
    lienzo.stroke();
   
    //alert("trazado");
}
function dibujoradio(){
    lienzo.beginPath();
    lienzo.moveTo(elemento.width/2, elemento.height/2);
    lienzo.lineTo(posx,posy);
    lienzo.stroke();
   
    //alert("trazado");
}
function animacion3(){
    //posx+=incx;
        if(valor === 97) posx-=incx; //izquierda
    if(valor === 100) posx+=incx; //derecha
    if(valor === 119) posy-=incx; //arriba
    if(valor === 115) posy+=incx; //abajo
    console.log(valor);
    lienzo.clearRect(0,0,500,300);
//    
    dibujo1();
    
}
function animacion2(e){
    valor = e.keyCode;
	console.log(valor);
    if(valor === 37) posx-=incx; //izquierda
    if(valor === 39) posx+=incx; //derecha
    if(valor === 38) posy-=incx; //arriba
    if(valor === 40) posy+=incx; //abajo
    /*
	if(valor === 97) posx-=incx; //izquierda
    if(valor === 100) posx+=incx; //derecha
    if(valor === 119) posy-=incx; //arriba
    if(valor === 115) posy+=incx; //abajo
	*/
	
    lienzo.clearRect(0,0,500,500);
    //
    dibujo1();
}
    
    


window.addEventListener("load",iniciar,false);
// JavaScript Document