<?php 
	
	include 'config.php';
	mysql_set_charset('utf8');

	$carrera = $_POST['carrera'];
	$semestre = $_POST['semestre'];
	$telefono = $_POST['telefono'];
	$objetivo = $_POST['objetivo'];
	$ncontrol = $_POST['ncontrol'];
	$correo = $_POST['correo'];
	$comentario = $_POST['comentario'];


	$sql = "INSERT INTO buzon (carrera, semestre, telefono, objetivo, numero_control, correo, comentario, fecha, hora) VALUES ('$carrera', '$semestre', '$telefono', '$objetivo', '$ncontrol', '$correo', '$comentario', NOW(), NOW())";
	mysql_query ($sql); 
	
	mysql_close($conexion);


 ?>