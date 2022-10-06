document.getElementById('player').addEventListener("mouseover",sumarPuntos);

points = 0;
time = 60;
needed = 30;
function sumarPuntos(){
   points++;
   document.getElementById("points").innerHTML = "Puntos: <b>" + points + "/" + needed + "  </b>";
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (points == 30) {
   	alert("¡Ganaste!");
   }
}


function restarTiempo() {
	time--;
	document.getElementById("time").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: "+time; 
	if (time == 0) {
		alert("=(");
		time = 0;
		points = 0;
	}
}

setInterval(restarTiempo,1000);