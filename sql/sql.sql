CREATE DATABASE laboratorios;

CREATE TABLE if not exists registro_social
(
	id int NOT NULL AUTO_INCREMENT,
	numero_control int NOT NULL,	
	nombre varchar(50) character set utf8 collate utf8_spanish_ci,
    apellido_paterno varchar(50) character set utf8 collate utf8_spanish_ci,
    apellido_materno varchar(50) character set utf8 collate utf8_spanish_ci,
    fecha date NOT NULL,
    hora time NOT NULL,
	entrada_salida varchar(8) character set utf8 collate utf8_spanish_ci,
	PRIMARY KEY(id)
)engine=myisam character set utf8 collate utf8_spanish_ci;

CREATE TABLE if not exists lista_alumnos_social
(
    numero_control int NOT NULL,
    nombre varchar(50) character set utf8 collate utf8_spanish_ci,
    apellido_paterno varchar(50) character set utf8 collate utf8_spanish_ci,
    apellido_materno varchar(50) character set utf8 collate utf8_spanish_ci,
    actividad varchar(50) character set utf8 collate utf8_spanish_ci,
    PRIMARY KEY(numero_control)
)engine=myisam character set utf8 collate utf8_spanish_ci;

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('10560529','Emnuela','Jimenez','Mendoza','Administración de laboratorio 4');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('10560414','Gonzalo','Urbina','Solis','Administración de laboratorio 4');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('11560134','Felipe','Campos','Áviles','Administración de laboratorio 4');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('09560292','David Erick','Garcia','Villaseñor','Administración de laboratorio 4');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('09560233','Jose Antonio','Ahumada','Rodriguez','Administración de laboratorio 4');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('10560451','Douglas Daniel','Serna','Gomez','Mantenimiento');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('11560128','Kevin Esteban','Garibo','Bracamontes','Administración de laboratorio 4');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('10560261','Alberto','Barrueta','Sánchez','Mantenimiento');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('11560112','David','Gálvez','Espinosa','Investigación');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('11560563','Minerva','Basurto','Peñaloza','Investigación');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('10560364','Jorge Iván','Morales','Marroquin','Redes');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('10380453','Luis','Antonio','Bahena','Residencia');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('10560443','Alina','Toledo','Campos','Residencia');

INSERT INTO lista_alumnos_social(numero_control, nombre, apellido_paterno, apellido_materno, actividad) VALUES
('09560659','Brian','Mártinez','Paroam','Residencia');

SELECT * FROM registro_social WHERE numero_control = 11560128 ORDER BY id DESC LIMIT 1