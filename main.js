
(function(){

//variables

	var lista 	  = document.getElementById("lista"),
	tareaInput 	  = document.getElementById("tareaInput"),
	btnNuevaTarea = document.getElementById("btn-agregar");

	//Funciones

	var agregarTarea = function(){
		var tarea 		= tareaInput.value;
			nuevaTarea 	= document.createElement("li"),
			enlace 	= document.createElement("a"), 
			//utiliza los nuevos enlaces
			contenido	= document.createTextNode(tarea); 
			//se agrega la tarea
		
		if (tarea === "") {
			tareaInput.setAttribute("placehoder", " agregar una tarea valida ");
			tareaInput.className = "error";
			return false;
		};

		//agregamos contenido al enlace
		enlace.appendChild(contenido);
		//le establecemos un atributo href 
		enlace.setAttribute("href", "#");
		//agregamos el enlace (a) ala nueva tarea  (li)
		nuevaTarea.appendChild(enlace);
		//agregamos nueva tarea ala lista
		lista.appendChild(nuevaTarea);
		//con esto estamos validando datos

		tareaInput.value = "";
		//con esto se esta eliminado encanto de texto

		//este for sirve para que despues de agregar la tarea siga apareciendo el msj
		for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", function(){
			this.parentNode.removeChild(this);
		});
	};


};

	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placehoder", "agrega tu tarea");
	};

	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
		//estamos eliminando pero primero ingresamos a ul que es el padre despues 
		//nos vamos a li y si funciona
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