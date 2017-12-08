var info = [["Belen","Alegre","30"],
			["Gia","Castello","25"],
			["Luciana","Mendez","27"]]; 

function loadTable(){
	for(var i = 0 ; i < info.length ; i++){
		var tr = '<tr id="rg_'+i+'">'+'<td>'+'<input type="text" id="name1" class="disable fila'+i+'" value="'+info[i][0]+'" disabled>'+'</td>'+'<td>'+'<input type="text" id="name1" class="disable fila'+i+'" value="'+info[i][1]+'" disabled>'+'</td>'+'<td>'+'<input type="text" id="name1" class="disable fila'+i+'" value="'+info[i][2]+'" disabled>'+'</td>'+'<td>'+'<button class="btnEdit" id="btn1" data-rg=".fila'+i+'">'+ '&#9999;' +'</button>'+'<button class="btnErase" id="1" data-rg="#rg_'+i+'">'+'x'+'</button>'+'</td>'+'</tr>';
	$('#tabla-imp').append(tr);
	}
}			

$(document).ready(function(){

	loadTable();

	$('.btnErase').on('click',function(){ 
		var data =  $(this).data("rg"); 	 
		$(data).hide(100,function(){
			alert("El registro se borró correctamente!");
		});
	});

	$('.btnEdit').on('click',function(){
		var btnData =  $(this).data("rg");
		$('input').prop("disabled",true);
		$(btnData).prop("disabled",false);
	});

	$('#add').on('click',function(){
		var nuevo = [];
		var n = $('#nn').val();
		nuevo.push(n);
		nuevo.push($('#ap').val());
		nuevo.push($('#ed').val());
		console.log(nuevo);
		info.push(nuevo);
		console.log(info);
		loadTable();
	});
	
});