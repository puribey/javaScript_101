$(document).ready(function() {
    /*
    Incorporo JSON
     */

    var jdatos = {
        "Nombre": "Juan",
        "Apellido": "Perez",
        "Edad": "35",
    }

    var jdatosJson = JSON.stringify(jdatos);
    console.log(jdatosJson);
    var a = " <a href = index.html?x="  + jdatosJson + "> </a>";
    $('body').append(a);
   
//FIN JSON
    var items = [];
    $('#agregar').on('click', function() {

        if ($('input#urgente').is(':checked')) {
            var texto = $('#texto').val();
            var li = '<li id="' + items.length + '"><a href="#" class="urgente">' + texto + '</a><button class="borrar" data-id="' + items.length + '">Eliminar</button></li>';
            $('#todo').append(li);
            items.push(li);
        } else {
            var texto = $('#texto').val();
            var li = '<li id="' + items.length + '"><a href="#">' + texto + '</a><button class="borrar">Eliminar</button></li>';
            $('#todo').append(li);
            items.push(li);
        }
        $('#texto').val("");

        $('a').on('click', function() {
            //evito el normal funcionamiento del evento, e intervengo con 
            // lo que quiero que haga. En este caso, evito que el a recargue
            // la página, en vez de eso simplemente le agrego la clase.
            event.preventDefault();
            $(this).toggleClass('linea');
        });

        $('.borrar').on('click', function() {

            alert("Item borrado.");
            $(this).parent('li').addClass('borrado');
            console.log($(this).parent());
            //$(this).remove();
        });

    });
});