$(document).ready(function(){

});

/*

    $("#btn_agregar").on('click',function(){

        var array=[];
    	array.push($('#lista').val());
        console.log(array);
        for (var i=0; i<array.length; i++) {
        var li= "<li><a>"+ array[i]+ "</a><button class='borrar' type='button'> X </button>"+"</li>";
	        $('#myUL').append(li);
	        $('#lista').val("");
	        if ($('.check').is(':checked')){

	          	$('a').last().addClass('rojo');
	         }
	     }
        $('a').on('click',function(event){
            // event.preventDefault( ); // se pone primero para evitar el recargo de la pagina

            $(this).toggleClass('sobrelinea');
        });

        

        $('.check').prop('checked',false)

        


        $('.borrar').on('click',function(){ // toda esta funcion funciona porque 
            //esta dentro de la funcion de arriba 
        	$(this).parent().remove();//$(this).remove() me
        	//tengo .parent o para los hijos .children

        }); // => cierra function .borrar 
     
    }); //=> cierra function .btn_agregar 

});// prop('checked',false);

// para traer algo de afuera $(document).on('click','.borrar',function())
*/

/*
    SIN FOR
$(document).ready(function(){
    $("#btn_agregar").on('click',function(){
         var li= "<li>"+ array[i]+ "<button class='borrar' type='button'> X </button>"+"</li>";
        
         if ($('#check').is(':checked')){
	          	$('li').last().Class('rojo');
	         }
	    $('#myUL').append(li);   
        $('.borrar').on('click',function(){
        	$(this).parent().remove();//$(this).remove() me
        	//tengo .parent o para los hijos .children
       
        });
     
   
});// prop('checked',false);
*/
