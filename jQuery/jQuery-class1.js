$(document).ready(function(){
	$('.btnEdit').on('click',function(){ // se usa una clase para poder reusar el html
		var btnID =  $(this).prop('id'); // forma vieja = $(this).attr('id');
		var btnData =  $(this).data("rg");
		
		// $(this).toggleClass('pink');
		alert(`El id de este boton es: ${btnID}`);
		$('input').prop("disabled",true);
		$(btnData).prop("disabled",false);
		
	});

	$('.btnErase').on('click',function(){ // se usa una clase para poder reusar el html
		var btnData =  $(this).data("rg"); // forma vieja = $(this).attr('id');
		//var trID = "#fila" + btnID;
		$(btnData).hide(100,function(){
			alert("El registro se borró correctamente!");
		});
	}); 
});