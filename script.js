var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var btn = document.getElementById("bttn");

function upPush() {
	var c1 = Math.round( Math.random() * 255);
	var c2 = Math.round( Math.random() * 255);
	var c3 = Math.round( Math.random() * 255);
	var bd = "background:rgb("+c1+", "+c2+", "+c3+");"

	body.style.background = bd + ";"
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);

color2.addEventListener("change", setGradient);

btn.addEventListener("click" , upPush);
	