// JavaScript Document
//variables globales
var micanvas;
var lienzo;
var xib = 0, yib = 0, xc1b= 0, yc1b=0, 
	xfb = 0, yfb = 0, xc2b= 0, yc2b=0,
	xib = 50, yib = 50, xc1b= 450, yc1b=50, 
	xfb = 50, yfb = 350, xc2b= 450; yc2b=350;
	
// variables globales para verificación del mouse
var mousepresionado=false;	
function iniciar(){
	micanvas = document.getElementById("lienzo");
	lienzo = micanvas.getContext("2d");
	circulos(lienzo,xib,yib,10,3,"blue");
	
	//fun_curvabezier();
	micanvas.addEventListener("mousemove",f_mouse_move,false);
	micanvas.addEventListener("mouseup",f_mouse_up,false);
	micanvas.addEventListener("mousedown",f_mouse_down,false);
	
}
function f_mouse_down(){
	mousepresionado=true;
	micanvas.style.cursor="default";

}
function f_mouse_up(){
	mousepresionado=false;
	
	
}
function f_mouse_move(evt){
	
    // poscion de mouse en canvas
	var rect = micanvas.getBoundingClientRect();
    xmouse= evt.clientX - rect.left;
    ymouse= evt.clientY - rect.top;
	//console.log(xmouse+", "+ymouse);
	// verifica que el mpuse esté presionado
	if (mousepresionado===true){
		//console.log(mousepresionado);
		
		if (evt.button === 0){
			//console.log("mouse presionado");
			var dis1= dist(xmouse, ymouse,xib,yib,10);
			var dis2= dist(xmouse, ymouse, xc1b,yc1b,10);
			var dis3= dist(xmouse, ymouse,xfb,yfb,10);
			var dis4= dist(xmouse, ymouse, xc2b, yc2b,10); 
			console.log(dis1);
			/*console.log(dis2);
			console.log(dis3);
			console.log(dis4); */
			
			if (dis1===1){
				lienzo.clearRect(0,0,500,500);
				
				fun_curvabezier();
				lienzo.style.cursor="move";
				xib = xmouse; yib = ymouse;
				//circulos(lienzo,xib,yib,10,3,"blue");
			}else{
				//lienzo.style.cursor="default";
			}

			 if (dis2===1){
				lienzo.clearRect(0,0,500,400);
				fun_curvabezier();
				xc1b = xmouse; yc1b = ymouse;
			}
			
			if (dis3===1){
				lienzo.clearRect(0,0,500,400);
				fun_curvabezier();
				xfb = xmouse; yfb = ymouse;
			}

			if (dis4===1){
				lienzo.clearRect(0,0,500,400);
				fun_curvabezier();
				xc2b = xmouse; yc2b = ymouse;
			} 
	}
}
}

function dist(xa, ya,xb,yb, umbral){
		var distancia= (xb-xa)*(xb-xa)+(yb-ya)*(yb-ya);
		
		if (distancia <10*umbral*umbral){
			return 1; 
		}else{
			return 0;
		}
	}

	
	function circulos(area,cx,cy,radio,ancho,color){
    //traza circulo en cx,xy de rario radio, con ancho de linea y color
	area.beginPath();
	area.lineWidth = ancho;
    area.strokeStyle = color;
    area.arc(cx,cy,radio,0,2*Math.PI);
    area.stroke();
	area.closePath();
	
}
window.addEventListener("load", iniciar, false); 


