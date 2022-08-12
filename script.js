// caps lock key
document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("caps-lock").addEventListener("click", function(){
		this.childNodes[0].classList.toggle("on");
	});
});