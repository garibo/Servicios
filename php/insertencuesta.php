<?php 

	include 'config.php';
	mysql_set_charset('utf8');

	$preg1 = $_POST['preg1'];
	$preg2 = $_POST['preg2'];
	$preg3 = $_POST['preg3'];
	$preg4 = $_POST['preg4'];
	$preg5 = $_POST['preg5'];
	$preg6 = $_POST['preg6'];
	$preg7 = $_POST['preg7'];
	$preg8 = $_POST['preg8'];
	$preg9 = $_POST['preg9'];
	$preg10 = $_POST['preg10'];
	$preg11 = $_POST['preg11'];
	$preg12 = $_POST['preg12'];
	$preg13 = $_POST['preg13'];
	$preg14 = $_POST['preg14'];
	$preg15 = $_POST['preg15'];
	$preg16 = $_POST['preg16'];
	$preg17 = $_POST['preg17'];
	$preg18 = $_POST['preg18'];

	$carrera = $_POST['carrera'];
	$semestre = $_POST['semestre'];
	$comentario = $_POST['comentario'];

	$sql = "INSERT INTO encuesta (preg1, preg2, preg3, preg4, preg5, preg6, preg7, preg8, preg9, preg10, preg11, preg12, preg13, preg14, preg15, preg16, preg17, preg18, carrera, semestre, comentario) VALUES ($preg1, $preg2, $preg3, $preg4, $preg5, $preg6, $preg7, $preg8, $preg9, $preg10, $preg11, $preg12, $preg13, $preg14, $preg15, $preg16, $preg17, $preg18, '$carrera', '$semestre', '$comentario')";
	mysql_query($sql);
	mysql_close($conexion);
 ?>