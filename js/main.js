(function(){
//variables

	var lista 	  = document.getElementById("lista"),
	tareaInput 	  = document.getElementById("tareaInput"),
	btnNuevaTarea = document.getElementById("btn-agregar");

	//Funciones
	var agregarTarea = function(){
		var tarea 		= tareaInput.value;
			NuevaTarea 	= document.createElement("li"),
			enlace 	= document.createElement("a"), //utiliza los nuevos enlaces
			contenido	= document.createTextNode(tarea); //seagrega la tarea
		
		if (tarea == "") {
			tareaInput.setAttribute(" placehoder "," agregar tus  Tareas ");
			tareaInput.className = "error";
			return false;
		};
	};

	var comprobarInput = function(){

	};

	var eliminarTarea = function(){

	};

	//Eventos

	//agrega las tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	//comprobar el input

	tareaInput.addEventListener("click", comprobarInput);

	//borrando elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	};

	//lista.children.length sirve para contar dinamicamentes

}());