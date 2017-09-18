var micanvas;
var lienzo;
var xib = 0, yib = 0, xc1b= 0, yc1b=0, xfb = 0, yfb = 0, xc2b= 0, yc2b=0,xib = 50, yib = 50, xc1b= 450, yc1b=50, xfb = 50, yfb = 350, xc2b= 450, yc2b=350;
	
// variables globales para verificación del mouse
var mousepresionado=false;	
function iniciar(){
	micanvas = document.getElementById("lienzo");
	lienzo = micanvas.getContext("2d");
	fun_curvabezier();
	micanvas.addEventListener("mousemove",f_mouse_move,false);
	micanvas.addEventListener("mouseup",f_mouse_up,false);
	micanvas.addEventListener("mousedown",f_mouse_down,false);
	
}
function f_mouse_down(){
	mousepresionado=true;
	

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
			console.log(dis2);
			console.log(dis3);
			console.log(dis4);
			
			if (dis1===1){
				lienzo.clearRect(0,0,500,400);
				
				fun_curvabezier();
				//lienzo.style.cursor="move";
				xib = xmouse; yib = ymouse;
				circulos(lienzo,xib,yib,10,3,"blue");
				
			/*	
			}

			if (dis2===1){
				lienzo.clearRect(0,0,500,400);
				fun_curvabezier();
				xc1b = xmouse; yc1b = ymouse;
				//lienzo.style.cursor="move";
			}
			
			if (dis3===1){
				lienzo.clearRect(0,0,500,400);
				fun_curvabezier();
				xfb = xmouse; yfb = ymouse;
				//lienzo.style.cursor="move";
			}

			if (dis4===1){
				lienzo.clearRect(0,0,500,400);
				fun_curvabezier();
				xc2b = xmouse; yc2b = ymouse;
				//lienzo.style.cursor="move";
			}*/
			else {
				lienzo.style.cursor="move ";
			}
			
	}
}
}

	function dist(xa, ya,xb,yb, umbral){
		var distancia= Math.sqrt((xb-xa)*(xb-xa)+(yb-ya)*(yb-ya));
		
		if (distancia < umbral){
			return 1; 
		}else{
			return 0;
		}
	}

function fun_borrar(){
	//borrar canvas clearrect
	lienzo.clearRect(0,0, micanvas.width, micanvas.height);
}

function dibujar_rectangulo(area,x,y,alto,ancho, color,anchoborde,colorborde){
	area.rect(x, y, alto, ancho)
	area.fillStyle = color;
	area.fill();
	area.lineWidth = anchoborde;
	area.strokeStyle = colorborde
	area.stroke();
};



function linea(area, x,y,xf,yf,ancho,color,tipo){
    area.beginPath();
	area.lineWidth = ancho;
    area.strokeStyle = color;
    area.lineCap = tipo;
    area.moveTo(x,y);
    area.lineTo(xf,yf);
    area.stroke();
    
}

	function fun_curvabezier(){
	
		traza_bezier(lienzo,xib,yib,xc1b,yc1b,xc2b,yc2b,xfb,yfb,"red",10);
		
		
		
	}
	
	function traza_bezier(ctx,xi,yi,xc1,yc1,xc2,yc2,xf,yf,color,ancho){
		ctx.beginPath();
		ctx.moveTo(xi,yi);
		ctx.bezierCurveTo(xc1,yc1,xc2,yc2,xf,yf);
		ctx.lineWidth = ancho;
		ctx.strokeStyle = color;
    	ctx.stroke();
		
		// circulos(area,cx,cy,radio,ancho,color)
		circulos(ctx,xi,yi,10,3,"black");
		circulos(ctx,xf,yf,10,3,"red");
		circulos(ctx,xc1,yc1,10,3,"blue");
		circulos(ctx,xc2,yc2,10,3,"yellow");
		ctx.closePath();
		
	}


	
function linea2(area, x,y,xf,yf,ancho,color,tipo){
    
	area.lineWidth = ancho;
    area.strokeStyle = color;
    area.lineCap = tipo;
    area.moveTo(x,y);
    area.lineTo(xf,yf);
    area.stroke();
    
}


function linea(area, x, y, xf, yf, ancho, color, tipo){
	// area contexto donde se trabaja
	//x, y posicion inicial
	//xf, yf posicion final
	//ancho linea en pixeles
	//color color linea
	//tipo
	area.lineWidth = ancho;
	area.lineCap = tipo;	
	area.strokeStyle = color;
	area.moveTo(x, y);
	area.lineTo(xf, yf);
	area.stroke();
}

function circulos(area,cx,cy,radio,ancho,color){
    area.beginPath();
	area.lineWidth = ancho;
    area.strokeStyle = color;
    area.arc(cx,cy,radio,0,2*Math.PI);
    area.stroke();
	area.closePath();
	
}

window.addEventListener("load", iniciar, false); 
