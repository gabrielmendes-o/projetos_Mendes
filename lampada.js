const lampOn = document.getElementById ('lampOn');
const lampOff = document.getElementById ('lampOff');
const lamp = document.getElementById ('lamp');
const arrumarLamp = document.getElementById ('arrumarLamp');


function taQuebrada(){
	return lamp.src.indexOf ('quebrada') > -1;
}

function consertar (){
	lamp.src = 'img/desligada.jpg';
}

function lampLigar () {
	if (!taQuebrada()){
	lamp.src = 'img/ligada.jpg';
	}
}

function lampDesligar () {
	if (!taQuebrada()){
	lamp.src = 'img/desligada.jpg';
	}
}

function lampQuebrada(){
	if (!taQuebrada()){
	lamp.src = 'img/quebrada.jpg';	
	}
}


lampOn.addEventListener ('click', lampLigar);
lampOff.addEventListener ('click', lampDesligar);
lamp.addEventListener('dblclick', lampQuebrada);
arrumarLamp.addEventListener('click', consertar);
//lamp.addEventListener ('mouseover', lampLigar);
//lamp.addEventListener ('mouseleave', lampDesligar);

