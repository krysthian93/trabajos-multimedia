var aread;         //objeto area del html
var contexto;      //contexto del area


function btnborrar_click() {

    contexto.clearRect(0,0,aread.width,aread.height);
    ctx1.clearRect(0,0,canva1.width,canva1.height);

}

function iniciar() {

    // se inicializa variables
    
    aread = document.getElementById("area"); //area
    contexto = aread.getContext("2d");  //realizar el trazado


    aread.addEventListener("click",seleccionpuntos);
    //alert(cadena1);
	

}


function seleccionpuntos(evt){
         if(evt.button==0){//boton izquierdo
        //contexto.clearRect(0,0,400,400);
        
        var rect = aread.getBoundingClientRect();
        
        //xmouse= evt.clientX - rect.left,
        //ymouse= evt.clientY - rect.top;
	    var puntosX=[];
	    var puntosY=[];
	    var contador;
        for(contador=0;contador<=4;contador++)
			{
				puntosX[contador]=evt.clientX - rect.left;
				puntosY[contador]=evt.clientY - rect.top;
				//circunferencia(area,cx,cy,radio,ancho,color)
				circunferencia(contexto,puntosX[contador],puntosY[contador],5,5,color_aleatorio());
				
			}
			 //circunferencia(contexto,puntosX[contador],puntosY[contador],5,5,color_aleatorio());
				//contexto.bezierCurveTo()
				
			}
        // codigo para otras animaciones
		 
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
grad2=contexto.createRadialGradient(aread.width/2,aread.height/2,20,aread.width,aread.height,1000); //gradiente1
grad2.addColorStop(0,color_aleatorio()); //color punto inicial
grad2.addColorStop(0.15,color_aleatorio());
grad2.addColorStop(0.30,color_aleatorio());
grad2.addColorStop(0.45,color_aleatorio());
grad2.addColorStop(0.60,color_aleatorio());
grad2.addColorStop(0.75,color_aleatorio());
grad2.addColorStop(1,color_aleatorio()); 
contexto.fillStyle=grad2; //estilo de color=gradiente
contexto.fillRect(0,0,aread.height,aread.width); //dibujo rectángulo
	
	
}

function fun_texto()
{
	var texto1="CRISTHIAN AMPUDIA"; var X=50;var Y=50; var tamano="40px";var tipo="bold italic";var estilo="italic"
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



window.onload = iniciar;
