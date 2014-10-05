"use strict"; 
var lose=false;

window.onload= function(){
	$("start").onclick = startup;
    $("end").onmouseover = winOrLose;
    $("start").onmouseover=overBoundary;
	var boundaries=$$("div#maze div.boundary");
	for(var i=0; i<boundaries.length; i++){
		boundaries[i].onmouseover = overBoundary;
	}

};
function overBoundary() {
	lose=true;
	$("status").textContent="you lose :(";
	var boundaries=$$("div#maze div.boundary");
	for(var i=0; i<boundaries.length; i++){
		boundaries[i].addClassName("youlose");
	}
}
function startup(){
	lose=false;
	$("status").textContent="Find the end!";
	var boundaries=$$("div#maze div.boundary");
	for(var i=0; i < boundaries.length; i++){
		boundaries[i].removeClassName("youlose");
	}
}

function winOrLose(){
	if(!lose){
		$("status").textContent= "youth you win! :)";
	}
	
}
