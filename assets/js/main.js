var todos = [];
var asiento;
var asientoAct;



function Persona(nombre, apellido, dni) {
	this.nombre = nombre;
	this.apellido = apellido;
	this.dni = dni;
	this.asiento;
	this.reservar = function() {/*
		var nombre = document.getElementById('nombre').value;
	var apellido =  document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	alert( "Reservado con exito!" + "\n" + "Nombre: " + nombre + "\n" +  "Apellido: " + apellido + "\n"+ "DNI: " +  dni + "\n" +  "Número de Asiento: " +  asiento )
		todos.push (persona);*/



	}

}






var reservarB = document.getElementById('reservar');
reservarB.onclick = function () {
	var name = document.getElementById("nombre").value;
	var lastname = document.getElementById("apellido").value;
	var dni = document.getElementById("dni").value;
	var persona = new Persona(name, lastname, dni);
	todos.push (persona);

	//persona.reservar();
	console.log(todos);
}
