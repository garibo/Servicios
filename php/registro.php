<meta http-equiv="Refresh" content="2; url=../social.html">
<br><br><br><br><br><br>
<body background="img/principal.png">

<?php


	include 'config.php';

	//3. Tomar los campos provenientes del Formulario
	$NumControl = $_POST['NumControl'];

	
	//-----------------------------VALIDACION edd--------------------------------------------
	$sql = "SELECT * FROM laboratorios.lista_alumnos_social WHERE numero_control='$NumControl'";
	$result = mysql_query ($sql);
	$rows = mysql_num_rows($result);

	if (($rows<=0 || $NumControl=="")) { 
		echo " <body>
			<center>
			<audio src='../sounds/Acceso_Incorrecto.wav' autoplay></audio>
			<h1 contenteditable='true' class='3DText' style='color: rgb(240, 0, 0); font-size: 103px; font-family: Verdana, sans-serif; padding-bottom: 0px; text-shadow: rgb(158, 0, 0) 0px 0px 0px, rgb(141, 0, 0) 1px 1px 0px, rgb(124, 0, 0) 2px 2px 0px, rgb(107, 0, 0) 3px 3px 0px, rgb(90, 0, 0) 4px 4px 0px, rgb(73, 0, 0) 5px 5px 0px, rgb(56, 0, 0) 6px 6px 0px, rgb(39, 0, 0) 7px 7px 0px, rgb(22, 0, 0) 8px 8px 0px, rgb(5, 0, 0) 9px 9px 0px, rgb(0, 0, 0) 10px 10px 0px, rgb(0, 0, 0) 11px 11px 0px, rgb(0, 0, 0) 12px 12px 0px, rgb(0, 0, 0) 13px 13px 0px, rgb(0, 0, 0) 14px 14px 0px, rgb(0, 0, 0) 15px 15px 14px, rgba(0, 0, 0, 0.498039) 15px 15px 1px, rgba(0, 0, 0, 0.2) 0px 0px 14px; font-weight: bold; font-style: normal; text-decoration: none;'>
			REGISTRO <BR> INCORRECTO</h1>
			</center></body>";
		}
	else {
		$fecha = date('Y-m-d');
	    $peticion = mysql_query('SELECT * FROM registro_social WHERE numero_control = '."$NumControl".' ORDER BY id DESC LIMIT 1');
	    $datos = mysql_fetch_object($peticion);
	    $currentF = $datos->fecha;
	    $currentES = $datos->entrada_salida;
		$entrada_salida = $currentES == 'entrada' && $currentF == $fecha ? 'salida' : 'entrada';
		$insertar = mysql_query ("INSERT INTO registro_social (numero_control, nombre, apellido_paterno, apellido_materno, fecha, hora, entrada_salida) SELECT '$NumControl',nombre,apellido_paterno,apellido_materno, NOW(), NOW(), '$entrada_salida' FROM lista_alumnos_social WHERE numero_control='$NumControl'", $conexion);

		echo "<body>
			<center>
			<audio src='../sounds/Acceso_Correcto.wav' autoplay></audio>
			<h1 contenteditable='true' class='3DText' style='color: rgb(32, 240, 0); font-size: 103px; font-family: Verdana, sans-serif; padding-bottom: 0px; text-shadow: rgb(0, 158, 0) 0px 0px 0px, rgb(0, 141, 0) 1px 1px 0px, rgb(0, 124, 0) 2px 2px 0px, rgb(0, 107, 0) 3px 3px 0px, rgb(0, 90, 0) 4px 4px 0px, rgb(0, 73, 0) 5px 5px 0px, rgb(0, 56, 0) 6px 6px 0px, rgb(0, 39, 0) 7px 7px 0px, rgb(0, 22, 0) 8px 8px 0px, rgb(0, 5, 0) 9px 9px 0px, rgb(0, 0, 0) 10px 10px 0px, rgb(0, 0, 0) 11px 11px 0px, rgb(0, 0, 0) 12px 12px 0px, rgb(0, 0, 0) 13px 13px 0px, rgb(0, 0, 0) 14px 14px 0px, rgb(0, 0, 0) 15px 15px 14px, rgba(0, 0, 0, 0.498039) 15px 15px 1px, rgba(0, 0, 0, 0.2) 0px 0px 14px; font-weight: bold; font-style: normal; text-decoration: none;'>
			REGISTRO<BR>CORRECTO</h1>
			</center></body>";
		}
//--------------------------------------------------------------------------------------------------------
//4. Cerrar conexión a la Base de Datos
mysql_close($conexion);
?>