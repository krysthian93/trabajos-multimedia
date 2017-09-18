var aread;         //objeto canvas del html
var contexto;      //contexto del canvas

var canvas1;
var ctx1;

var canvas3;
var ctx3;

function btnborrar_click() {

    contexto.clearRect(0,0,aread.width,aread.height);
    ctx1.clearRect(0,0,canva1.width,canva1.height);

}

function iniciar() {

    // se inicializa variables
    //alert("iniciado 25 de octubre");
    aread = document.getElementById("area"); //canvas
    contexto = aread.getContext("2d");  //realizar el trazado

    canva1 = document.getElementById("area1"); //canvas
    ctx1 = canva1.getContext("2d");  //realizar el trazado

    //aread.addEventListener("mousemove",f_mouse_move);
    //alert(cadena1);

}

function f_mouse_move(evt){

        contexto.clearRect(0,0,400,400);
        
        var rect = aread.getBoundingClientRect();
        
        xmouse= evt.clientX - rect.left,
        ymouse= evt.clientY - rect.top;

        // codigo para otras animaciones
       
}

function fun_lineas(){

    // trazo de linea
    contexto.beginPath();  //inicializa nuevo objetos
    var ancho = 3;
    var color = "red";
    var tipo = "round";
    var x, y, xf, yf;
    x=10; y=20; xf=200; yf=150;

    linea (x, y, xf, yf, ancho, color, tipo, contexto);
    linea (10, 200, 300, 10, 20, "blue", "square", ctx1);

    // otras lineas
    contexto.beginPath();
    linea(100,20,200,100,15,"red","round",contexto);
    contexto.beginPath();
    linea(200,30,300,50,15,"blue","square",contexto);
    var puntos=[10,10,100,100,120,15,180,100];
    contexto.beginPath();
    
    for(var i=0;i<puntos.length-2;i+=2){ 

        linea(puntos[i],puntos[i+1],puntos[i+2],puntos[i+3], 15,"blue","butt",contexto);
    }

    linea(puntos[0],puntos[1],puntos[puntos.length-2], puntos[puntos.length-1,contexto], 15,"blue","butt");
    
    //circulos(200,200,50,10,"blue",contexto);
    //contexto.stroke();

    
}

function linea(x, y, xf, yf, ancho, color, tipo, ctx){

    // trazo de linea
    ctx.beginPath();  //inicializa nuevo objetos

    ctx.lineWidth = ancho;
    ctx.strokeStyle = color;
    ctx.lineCap = tipo;

    ctx.moveTo(x, y);
    ctx.lineTo(xf, yf);
    ctx.stroke();
    
}

function fun_zigzag(){

    var px=[];
    var py=[];
    var colores=['red', 'blue','orange','aqua','bisque','brown','coral','yellow','green','green'];

    for(var i = 0;i<10;i++){
        px[i]=i*50+20;
        py[i]=(i%2)*100+20;
    }
     
    for(var i=0;i<px.length-1;i++){

        contexto.beginPath();
        contexto.lineJoin = "round"; //'miter, round, bevel
        linea(px[i],py[i],px[i+1],py[i+1],10,colores[i],"butt",contexto);

    }
  
}

function fun_espiral(){

    var radius = 0;
    var angle = 0;

    contexto.lineWidth = 10;
    contexto.strokeStyle = "#0096FF"; // blue-ish color
    contexto.beginPath();
    contexto.moveTo(aread.width / 2, aread.height / 2);

    for (var n = 0; n < 150; n++) {

        radius += 0.75;

        // make a complete circle every 50 iterations
        angle += (Math.PI * 2) / 50;
        var x = aread.width / 2 + radius * Math.cos(angle);
        var y = aread.height / 2 + radius * Math.sin(angle);
        contexto.lineTo(x, y);

    }

    contexto.stroke();

}

function color_aleatorio(){

    hexadecimal = new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F") 
    color_trazo = "#"; 

    for (i=0;i<6;i++){ 

        posarray = Math.floor(Math.random()*16);
        color_trazo += hexadecimal[posarray] ;
    } 

    return color_trazo;

}

function fun_espiral2(){

    //limpieza del canvas
    contexto.clearRect(0,0,aread.width,aread.height);
    
    var radius = 0;
    var angle = 0;

    contexto.moveTo(aread.width / 2, aread.height / 2);
    var xa=aread.width / 2;
    var ya= aread.height / 2;

    for (var n = 0; n < 150; n++) {

        radius += 0.75;

        // make a complete circle every 50 iterations
        angle += (Math.PI * 2) / 50;
        var x = aread.width / 2 + radius * Math.cos(angle);
        var y = aread.height / 2 + radius * Math.sin(angle);
        linea(xa,ya,x,y,10,color_aleatorio(),"round",contexto);
        xa=x; ya=y;

    }
    
}

function fun_rectangulo(){

    //solo grafica el borde exterior
    //context.strokeRect(x,y,width,height);
    contexto.strokeRect(20,30,50,20);

    //grafica rectangulo sin borde
    contexto.fillStyle='yellow';
    contexto.rect(100,100,100,20);
    contexto.fill();
    contexto.beginPath();

    //uso de la funciones
    dibujar_rectangulo(contexto, 100,200,50,50,'green',10,'red');

}


function dibujar_rectangulo(area,x,y,alto,ancho, color,anchoborde,colorborde){

    area.rect(x, y, alto, ancho);
    area.fillStyle = color;
    area.fill();
    area.lineWidth = anchoborde;
    area.strokeStyle = colorborde;
    area.stroke();

}

function fun_circunferencia(){

    var centros=[120,120,180,300,250,100];
    var radios=[20,50,80];
    var anchos=[5,10,15];
    var colores=["blue","red","green"];

    alert("longitud de radios="+radios.length);
    
    for(var i=0;i<radios.length;i++){

        contexto.beginPath();
        circunferencia(contexto,centros[i*2],centros[i*2+1],radios[i],anchos[i],colores[i]);

    }
    
}

function circunferencia(area,cx,cy,radio,ancho,color){

    area.lineWidth = ancho;
    area.strokeStyle = color;
    area.arc(cx,cy,radio,0,2*Math.PI);
	area.fillStyle="yellow";
	area.fill();
    area.stroke();
	

}

function fun_degradado(){
contexto.beginPath() ;//figura 1: rectángulo
grad2=contexto.createRadialGradient(100,50,1,100,50,100); //gradiente1
grad2.addColorStop(0,"#00f"); //color punto inicial
grad2.addColorStop(0.5,"#0f0"); //color punto medio
grad2.addColorStop(1,"#f00"); //color punto final
contexto.fillStyle=grad2; //estilo de color=gradiente
contexto.fillRect(10,10,200,90); //dibujo rectángulo

contexto.beginPath() ;//figura2: círculo
grad3=contexto.createRadialGradient(60,160,5,60,160,60); //gradiente2
grad3.addColorStop(0,"#f00"); //colores para gradiente 2
grad3.addColorStop(0.5,"#0f0");
grad3.addColorStop(1,"#00f");
contexto.fillStyle=grad3; // color=gradiente
contexto.arc(60,160,50,0,2*Math.PI); //dibujo círculo
contexto.fill();

contexto.beginPath(); //figura 3: cuadrado
grad4=contexto.createRadialGradient(150,150,60,180,180,5); //gradiente3
grad4.addColorStop(1,"#f00"); //colores para gradiente 3
grad4.addColorStop(0.5,"#0f0");
grad4.addColorStop(0,"#00f");
contexto.fillStyle=grad4; //color=gradiente
contexto.fillRect(120,120,90,90); //dibujar cuadrado
	
	
contexto.beginPath(); //figura 4: cuadrado degradado lineal 
grad5=contexto.createLinearGradient(10,200,200,250);//gradiente 5
grad5.addColorStop(0,"red"); //colores para gradiente 5
grad5.addColorStop(0.25,"blue");
grad5.addColorStop(0.67,"yellow");
grad5.addColorStop(1,"green");
contexto.fillStyle=grad5; //color=gradiente
contexto.fillRect(10,250,190,50); //dibujar cuadrado
	
contexto.fillRect(200,300,100,100); //dibujar cuadrado solo verde
contexto.fillRect(15,350,80,80); //dibujar cuadrado azul y verde
	
	
	
	
}

function generar_degradado(contexto, colores,posiciones,tipo,x1,y1,r1,x2,y2,r2 ){
	//propósito--> generar degradados
	//contexto---> contexto de trazado
	//colores----> arreglo de colores para el degradado ej ("#ff0000", "#ffff00", ... )
	//posiciones-> arreglo  de posiciones para addColorStop ej (0 , 0.4, 0.8, 1.0)
	//             el numero de elementos en los dos arreglos debe ser el mismo
	//tipo-------> tipo de degradado: 'lineal' o 'radial'
	//x1,x2,r1---> para tipo lineal son coordenadas iniciales del degradado, r1=0;
	// 			   para tipo radial son el centro y r1 es el radio interno
	//x1,x2,r1---> para tipo lineal son coordenadas finales del degradado, r2=0;
	//			   para tipo radial son el centro afuera y r2 es el radio externo
	//
	//creacion del degradado
	if (tipo==='lineal'){
		degradado=contexto.createLinearGradient(x1,y1,x2,y2);
	} else{
		degradado=contexto.createRadialGradient(x1,y1,r1,x2,y2,r2);
	}
	// añadir colores
	for (var i=0;i<colores.length;i++){
		degradado.addColorStop(posiciones[i],colores[i]);
	}
	return degradado;
}

function fun_texto()
{
	var texto1="HOLA"; var X=200;var Y=200; var tamano="100px";var tipo="bold italic";var estilo="italic"
	trazartexto(contexto,texto1,X,Y,tamano,tipo,estilo);
	
	
}
function trazartexto(ctx,texto,x,y,tamano,tipo,miestilo)
{
	ctx.font=miestilo +" "+ tamano +" "+ tipo ;
	ctx.strokeStyle="red";
	ctx.fillStyle="blue"; 
	ctx.fontStyle=miestilo;
	ctx.lineWidth=5;
	
	
	
	
	ctx.strokeText(texto,x,y);
	ctx.fillText(texto, x , y );
	
	
	
	
	
}

function fun_texto3d(){
    draw3dText(contexto,"hola a todos",100,100,10,"yellow","green");
}

    function draw3dText(context, text, x, y, textDepth,color1, color2){
var n;
// draw bottom layers
		
		context.font="bold 100px arial";
		context.fillStyle="red";
    for (n = 0; n < textDepth; n++) {
        context.fillText(text, x - n, y - n);
		
    }
    // draw top layer with shadow casting over
    // bottom layers

    context.fillStyle = color1;
    context.shadowColor = color2;
    context.shadowBlur = 20;
    context.shadowOffsetX =  20;
    context.shadowOffsetY = 20;
    context.fillText(text, x - n, y - n);
    
}

function fun_curvabezier()
{
	traza_bezier(contexto,50,50,70,120,180,40,200,200,"red",10);
	traza_bezier(contexto,150,150,70,120,80,140,200,200,"blue",10);

}
function traza_bezier(ctx,xi,yi,xc1,yc1,xc2,yc2,xf,yf,color,ancho){
		ctx.beginPath();
		ctx.moveTo(xi,yi);
		ctx.bezierCurveTo(xc1,yc1,xc2,yc2,xf,yf);
		ctx.lineWidth = ancho;
		ctx.strokeStyle = color;
    	ctx.stroke();
		
	}

function fun_triangulo(){
	estilo='red';
	trazar_triangulo(contexto,100,100,100,75,estilo);
	//creacion de degradado
	grd = contexto.createLinearGradient(200,100,200,175);
	grd.addColorStop(0, 'red'); // light blue
	grd.addColorStop(1, 'blue'); // dark blue
	trazar_triangulo(contexto,200,100,100,75,grd);
	grd2=contexto.createLinearGradient(200,100,200,175);
}
function trazar_triangulo(context, x, y, ancho, alto, estilo){
context.beginPath();
context.moveTo(x, y);
context.lineTo(x + ancho / 2, y + alto);
context.lineTo(x - ancho / 2, y + alto);
context.closePath();
context.fillStyle = estilo;
context.fill();
context.stroke(); //dolo lineas 
}


window.onload = iniciar;