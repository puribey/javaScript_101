//json={"nombre":"pepe", "apellido":"perez", "edad":35, "casado":true, "tuvieja":null}

//console.log(json);

// "nombre"(clave):"pepe"(valor)


$(document).ready(function(){
	var datosForm;
	var myJson;
	$('#btn').on('click',function(e){ // e es un parametro blef porque si o si 
		// necesito un parametro para que funcione el preventDefault
		e.preventDefault(); // prevenir eventos 
		
		var nombre = $('#name').val();
		var mail = $('#mail').val();
		var ul= $('#errores');
		var msj;

		validarNombre(nombre);
		validarEmail(mail);
		validar(nombre,mail);

		if(validar()==true){
			datosForm = {"nombre":$("#name").val(),"apellido":$("#lastname").val(),"edad":$("#age").val()}
			myJson = JSON.stringify(datosForm);
			console.log(datosForm);
			console.log(myJson);
		}
		



		/*datosForm = {"nombre":$("#name").val(),"apellido":$("#lastname").val(),"edad":$("#age").val()}
		myJson = JSON.stringify(datosForm);
		console.log(datosForm);
		console.log(myJson);*/
	});
	
});




function validarNombre(campo){
	//campo.trim();//saca todos los espacios vacios de los campos 
	if(campo.legth == 0){
		return false;
	}
	return true;
}

function validarEmail(mail){
	//mail.trim();//saca todos los espacios vacios de los campos 
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(re.test(mail)){
		return false;
	}
	return true;
}

function validar(nombre,mail,ul,msj){

	var valido = true;
	if(validarNombre((nombre)==false)){
		msj='<li style="color:red;">Debe ingresar nombre valido!</li>';
		ul.append(msj);
		valido = false;
	}

	if(validarNombre((mail)==false)){
		msj='<li style="color:red;">Debe ingresar mail valido!</li>';
		ul.append(msj);
		valido = false;
	} else {
		if (validarEmail((mail)==false)) {
		msj='<li style="color:red;">Debe ingresar mail valido!</li>';
		ul.append(msj);
		valido = false;
		}
	}
}

