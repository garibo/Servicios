(function(){
	$(document).ready(function(){

		var enunciado1 = "";
		var enunciado2 = "";
		var enunciado3 = "";
		var enunciado4 = "";
		var enunciadoForm = "";

		var errorCount1 = 0;
		var errorCount2 = 0;
		var errorCount3 = 0;
		var errorCount4 = 0;
		var errorCountForm = 0;
		
		$('#head1').click(function(){
			$('#sect1').slideToggle('slow');
		});

		$('#head2').click(function(){
			$('#sect2').slideToggle('slow');
		});

		$('#head3').click(function(){
			$('#sect3').slideToggle('slow');
		});

		$('#head4').click(function(){
			$('#sect4').slideToggle('slow');
		});

		$('#enviar').click(function(){

			$('#carrera').css('border-color','#ccc');
			$('#semestre').css('border-color','#ccc');

			enunciado1 = "";
			enunciado2 = "";
			enunciado3 = "";
			enunciado4 = "";
			enunciadoForm = "";

			errorCount1 = 0;
			errorCount2 = 0;
			errorCount3 = 0;
			errorCount4 = 0;
			errorCountForm = 0;

			$('#head1').removeClass('alert-danger').addClass('alert-info');
			$('#head2').removeClass('alert-danger').addClass('alert-info');
			$('#head3').removeClass('alert-danger').addClass('alert-info');
			$('#head4').removeClass('alert-danger').addClass('alert-info');
			$('#head5').removeClass('alert-danger').addClass('alert-info');

			$('#head1').html('<strong>Acerca del</strong> Mobiliario y del equipo.');
			$('#head2').html('<strong>Acerca de</strong> La eficiencia.');
			$('#head3').html('<strong>Acerca de</strong> La usabilidad.');
			$('#head4').html('<strong>Acerca del</strong> soporte tecnico.');
			$('#head5').html('<strong>Datos del usuario</strong>.');

			$('#sect1 > div:nth-child(1)').css('color','#333');
			$('#sect1 > div:nth-child(2)').css('color','#333');
			$('#sect1 > div:nth-child(3)').css('color','#333');
			
			$('#sect2 > div:nth-child(1)').css('color','#333');
			$('#sect2 > div:nth-child(2)').css('color','#333');
			$('#sect2 > div:nth-child(3)').css('color','#333');
			$('#sect2 > div:nth-child(4)').css('color','#333');

			$('#sect3 > div:nth-child(1)').css('color','#333');
			$('#sect3 > div:nth-child(2)').css('color','#333');
			$('#sect3 > div:nth-child(3)').css('color','#333');

			$('#sect4 > div:nth-child(1)').css('color','#333');
			$('#sect4 > div:nth-child(2)').css('color','#333');
			$('#sect4 > div:nth-child(3)').css('color','#333');
			$('#sect4 > div:nth-child(4)').css('color','#333');
			$('#sect4 > div:nth-child(5)').css('color','#333');
			$('#sect4 > div:nth-child(6)').css('color','#333');
			$('#sect4 > div:nth-child(7)').css('color','#333');
			$('#sect4 > div:nth-child(8)').css('color','#333');

			var datos =
			{
				carrera: 		$('#carrera').val(),
				semestre: 		$('#semestre').val(),
				comentario: 	$('#comentario').val()

			};

			var seccion1 =
			{
				pregunta1: $("input[name=pregunta1]:checked").val(),
				pregunta2: $("input[name=pregunta2]:checked").val(),
				pregunta3: $("input[name=pregunta3]:checked").val()
			};

			var seccion2 =
			{
				pregunta1: $("input[name=pregunta4]:checked").val(),
				pregunta2: $("input[name=pregunta5]:checked").val(),
				pregunta3: $("input[name=pregunta6]:checked").val(),
				pregunta4: $("input[name=pregunta7]:checked").val()
			};

			var seccion3 = 
			{
				pregunta1: $("input[name=pregunta8]:checked").val(),
				pregunta2: $("input[name=pregunta9]:checked").val(),
				pregunta3: $("input[name=pregunta10]:checked").val()
			};

			var seccion4 =
			{	
				pregunta1: $("input[name=pregunta11]:checked").val(),
				pregunta2: $("input[name=pregunta12]:checked").val(),
				pregunta3: $("input[name=pregunta13]:checked").val(),
				pregunta4: $("input[name=pregunta14]:checked").val(),
				pregunta5: $("input[name=pregunta15]:checked").val(),
				pregunta6: $("input[name=pregunta16]:checked").val(),
				pregunta7: $("input[name=pregunta17]:checked").val(),
				pregunta8: $("input[name=pregunta18]:checked").val()
			};

		
			datos.carrera || errorHandler.errorForm('carrera');
			datos.semestre || errorHandler.errorForm('semestre');

			seccion1.pregunta1 || errorHandler.error1('1');
			seccion1.pregunta2 || errorHandler.error1('2');
			seccion1.pregunta3 || errorHandler.error1('3');

			seccion2.pregunta1 || errorHandler.error2('1');
			seccion2.pregunta2 || errorHandler.error2('2');
			seccion2.pregunta3 || errorHandler.error2('3');
			seccion2.pregunta4 || errorHandler.error2('4');


			seccion3.pregunta1 || errorHandler.error3('1');
			seccion3.pregunta2 || errorHandler.error3('2');
			seccion3.pregunta3 || errorHandler.error3('3');

			seccion4.pregunta1 || errorHandler.error4('1');
			seccion4.pregunta2 || errorHandler.error4('2');
			seccion4.pregunta3 || errorHandler.error4('3');
			seccion4.pregunta4 || errorHandler.error4('4');
			seccion4.pregunta5 || errorHandler.error4('5');
			seccion4.pregunta6 || errorHandler.error4('6');
			seccion4.pregunta7 || errorHandler.error4('7');
			seccion4.pregunta8 || errorHandler.error4('8');

			successFinal();


		});

		var errorHandler = 
		{
			error1: function(x)
			{
				errorCount1++;
				enunciado1 += x + ', ';
				$('#sect1 > div:nth-child('+x+')').css('color','red');
			},

			error2: function(x)
			{
				errorCount2++;
				enunciado2 += x + ', ';
				$('#sect2 > div:nth-child('+x+')').css('color','red');
			},

			error3: function(x)
			{
				errorCount3++;
				enunciado3 += x + ', ';
				$('#sect3 > div:nth-child('+x+')').css('color','red');
			},

			error4: function(x)
			{
				errorCount4++;
				enunciado4 += x + ', ';
				$('#sect4 > div:nth-child('+x+')').css('color','red');
			},
			
			errorForm: function(x)
			{
				errorCountForm++;
				enunciadoForm += x + ', ';
				$('#'+x).css( "border-color", "red" );
			}
		};

		function successFinal()
		{
			if((errorCount1 == 0)  && (errorCount2 == 0)  &&  (errorCount3 == 0)   &&  (errorCount4 == 0)  &&  (errorCountForm == 0)) 
			{
				var datoPreguntas =
				{
					preg1 		: 	$("input[name=pregunta1]:checked").val(),
					preg2 		: 	$("input[name=pregunta2]:checked").val(),
					preg3 		: 	$("input[name=pregunta3]:checked").val(),
					preg4 		: 	$("input[name=pregunta4]:checked").val(),
					preg5 		: 	$("input[name=pregunta5]:checked").val(),
					preg6 		: 	$("input[name=pregunta6]:checked").val(),
					preg7 		: 	$("input[name=pregunta7]:checked").val(),
					preg8 		: 	$("input[name=pregunta8]:checked").val(),
					preg9 		: 	$("input[name=pregunta9]:checked").val(),
					preg10		: 	$("input[name=pregunta10]:checked").val(),
					preg11		: 	$("input[name=pregunta11]:checked").val(),
					preg12		: 	$("input[name=pregunta12]:checked").val(),
					preg13		: 	$("input[name=pregunta13]:checked").val(),
					preg14		: 	$("input[name=pregunta14]:checked").val(),
					preg15		: 	$("input[name=pregunta15]:checked").val(),
					preg16		: 	$("input[name=pregunta16]:checked").val(),
					preg17		: 	$("input[name=pregunta17]:checked").val(),
					preg18		: 	$("input[name=pregunta18]:checked").val(),
					carrera		: 	$('#carrera').val(),
					semestre 	: 	$('#semestre').val(),
					comentario 	: 	$('#comentario').val()
				};

				console.log(datoPreguntas);

				var valores =
				{
					url		: 	'php/insertencuesta.php',
					type	: 	'POST',
					async 	: 	true,
					data 	: 	datoPreguntas
				};

				$.ajax(valores)
				.done(function(){
					$('#myModal').modal('show');

					$('input[name="pregunta1"]').attr('checked', false);
					$('input[name="pregunta2"]').attr('checked', false);
					$('input[name="pregunta3"]').attr('checked', false);
					$('input[name="pregunta4"]').attr('checked', false);
					$('input[name="pregunta5"]').attr('checked', false);
					$('input[name="pregunta6"]').attr('checked', false);
					$('input[name="pregunta7"]').attr('checked', false);
					$('input[name="pregunta8"]').attr('checked', false);
					$('input[name="pregunta9"]').attr('checked', false);
					$('input[name="pregunta10"]').attr('checked', false);
					$('input[name="pregunta11"]').attr('checked', false);
					$('input[name="pregunta12"]').attr('checked', false);
					$('input[name="pregunta13"]').attr('checked', false);
					$('input[name="pregunta14"]').attr('checked', false);
					$('input[name="pregunta15"]').attr('checked', false);
					$('input[name="pregunta16"]').attr('checked', false);
					$('input[name="pregunta17"]').attr('checked', false);
					$('input[name="pregunta18"]').attr('checked', false);
					$('#correo').val('');
					$('#semestre').val('');
					$('#comentario').val('');
				})
				.fail(function(){
					alert('Algo salio mal');
				});

			}
			else
			{
				if(errorCount1 > 0)
				{
					enunciado1 = enunciado1.replaceAt(enunciado1.lastIndexOf(','), '.');
					$('#head1').removeClass('alert-info').addClass('alert-danger');
					var str1 = '<strong>Acerca del</strong> Mobiliario y del equipo. Verifique las preguntas: <strong>'+enunciado1+'</strong>';
					$('#head1').html(str1);
				}

				if(errorCount2 > 0)
				{
					enunciado2 = enunciado2.replaceAt(enunciado2.lastIndexOf(','), '.');
					$('#head2').removeClass('alert-info').addClass('alert-danger');
					var str2 = '<strong>Acerca de</strong> La eficiencia. Verifique las preguntas: <strong>'+enunciado2+'</strong>';
					$('#head2').html(str2);
				}

				if(errorCount3 > 0)
				{
					enunciado3 = enunciado3.replaceAt(enunciado3.lastIndexOf(','), '.');
					$('#head3').removeClass('alert-info').addClass('alert-danger');
					var str3 = '<strong>Acerca de</strong> La usabilidad. Verifique las preguntas: <strong>'+enunciado3+'</strong>';
					$('#head3').html(str3);
				}

				if(errorCount4 > 0)
				{
					enunciado4 = enunciado4.replaceAt(enunciado4.lastIndexOf(','), '.');
					$('#head4').removeClass('alert-info').addClass('alert-danger');
					var str4 = '<strong>Acerca del</strong> soporte tecnico. Verifique las preguntas: <strong>'+enunciado4+'</strong>';
					$('#head4').html(str4);
				}

				if(errorCountForm > 0)
				{
					enunciadoForm = enunciadoForm.replaceAt(enunciadoForm.lastIndexOf(','), '.');
					$('#head5').removeClass('alert-info').addClass('alert-danger');
					var str5 = '<strong>Datos del usuario</strong>. Verifique los campos: <strong>'+enunciadoForm+'</strong>';
					$('#head5').html(str5);
				}
			}
		}

		String.prototype.replaceAt=function(index, character)
		{
		    return this.substr(0, index) + character + this.substr(index+character.length);
		}


// Aqui termina el pedo NO TOCAR

	});
})();
