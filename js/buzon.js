(function(){
	$(document).ready(function(){
		

	var enunciadoError = "";
	var contadorError = 0;

	$('#enviar').click(function(){

		$('.alert').remove();
		enunciadoError = "";
		contadorError = 0;
		$('#carrera').css("border-color", "#ccc");
		$('#telefono').css("border-color", "#ccc");
		$('#correo').css("border-color", "#ccc");
		$('#ncontrol').css("border-color", "#ccc");
		$('#objetivo').css("border-color", "#ccc");
		$('#semestre').css("border-color", "#ccc");
		$('#comentario').css("border-color", "#ccc");
		var datos =
		{
			carrera    : $('#carrera').val(),
			telefono   : $('#telefono').val(),
			correo     : $('#correo').val(),
			ncontrol   : $('#ncontrol').val(),
			objetivo   : $('#objetivo').val(),
			semestre   : $('#semestre').val(),
			comentario : $('#comentario').val()
		};
		
		var parametros =
		{
			url		: 'php/alumnos.php',
			type	: 'POST',
			async	: false,
			data	: datos
		};

		$.ajax(parametros)
		.done(function(e){
			(e == "Noencontrado") && errorControl();
		}).
		fail(function(){
			$('.alert').remove();
			$('#contenido').prepend('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Ha ocurrido un error :(</strong><p id="info" >Parece que ha ocurrido un error interno prueba intentandolo otra vez o recarga la pagina</p><button type="button" class="btn btn-danger" id="recargar">Recargar</button><button type="button" class="btn btn-default" id="cerrar">Cerrar</button></div>');

		});

		datos.carrera || errorHandler('carrera');
		datos.semestre || errorHandler('semestre');
		datos.objetivo || errorHandler('objetivo');
		(isNaN(datos.telefono) || datos.telefono.length == 0) && errorHandler('telefono');
		datos.comentario == "" && errorHandler('comentario');
		!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(datos.correo)) && errorHandler('correo');
		finalError(datos);

	});

	$('#recargar').click(function(){
		location.reload('buzon.html');		
	});

	$('#cerrar').click(function(){
		$('.alert').remove();
	});

	function errorHandler(x)
	{
		contadorError++;
		enunciadoError += x+", ";
		$('#'+x).css( "border-color", "red" );
	}

	function errorControl()
	{
		contadorError++;
		enunciadoError += "Numero de control (incorrecto), ";
		$('#ncontrol').css("border-color","red");
	}
	
	function finalError(datos)
	{
		if(contadorError>0)
		{
			enunciadoError = enunciadoError.replaceAt(enunciadoError.lastIndexOf(','), '.');
			$('.alert').remove();
			enunciadoError = "Error :( verifique los campos de <strong>"+enunciadoError+"</strong>";
			$('#contenido').prepend('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button> '+enunciadoError+'</div>');
		}
		else
		{
			var parametros =
			{
				url		: 	'php/insertbuzon.php',
				type	: 	'POST',
				async 	: 	true,
				data 	: 	datos
			};

			$.ajax(parametros).
			done(function(e){
				$('#myModal').modal('show');
				$('#comentario').val('');
				$('#telefono').val('');
				$('#correo').val('');
				$('#ncontrol').val('');
				$('#objetivo').val('Objetivo del escrito');
				$('#semestre').val('Semestre');
				$('#carrera').val('Carrera');

			}).
			fail(function(){
				$('.alert').remove();
				$('#contenido').prepend('<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button><strong>Ha ocurrido un error :(</strong><p id="info" >Parece que ha ocurrido un error interno prueba intentandolo otra vez o recarga la pagina</p><button type="button" class="btn btn-danger" id="recargar">Recargar</button><button type="button" class="btn btn-default" id="cerrar">Cerrar</button></div>');
			});


		}
	}

	String.prototype.replaceAt=function(index, character)
	{
	    return this.substr(0, index) + character + this.substr(index+character.length);
	}
	

	});
})();