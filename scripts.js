		
	function ControllerRadio(){

		color = document.getElementById("color__controller").value;
		size = document.getElementById("size__controller").value;

		let NodoRadio = document.getElementById("Radio");

		NodoRadio.style.background = color;
		NodoRadio.style.height = size + "px";
		NodoRadio.style.width = size + "px";
		NodoRadio.style.borderRadius = "100%";
		NodoRadio.style.opacity = "30%";
		NodoRadio.style.transition = "all ease 1s";

	}