function Persona(nombre, apellido, dni, asiento) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
	this.reservar = function() {
		alert("funciona");
	}
}

var name = document.getElementById("nombre").value;
var lastname = document.getElementById("nombre").value;
var dni = document.getElementById("nombre").value;

var persona = new Persona(name, lastname, dni);

var reservarB = document.getElementById('reservar');
reservarB.onclick = function () {
	persona.reservar();
}
