/* Creo la base de datos */
create database biblioteca;
/* Aclaración despues de cada consulta siempre agregar punto y coma ";" porque
postgre no toma la consulta y no termina la ejecución  */

/* Creamos las tablas */
/* Para los registros fui breve y puse text nomas y no varchar por las dudas */
create table libros(
    seccion int,
    titulo text,
    autor text
);
/* Insertamos un solo valor */
insert into libros values
(1,'Lo que el viento se llevo', 'Erika Leticia Ortiz');


/* Mostramos en pantalla */
select * from libros;

/* Insertamos multiples valores */
insert into libros values
(2,'La guerra de los mundos', 'Brian Britez'),
(3, 'El patito Juan', 'Bipper');

/* Creamos la tabla de usuarios */
/* Aclaración puse contrasenia en ves de contraseña para evitar conflictos con la base de datos */
create table usuarios(
    nombre_de_usuario text,
    contrasenia text
);
/* Insertamos un solo usuario */
insert into usuarios values 
('joe','joe123');

/* Instertamos varios usuarios */
insert into usuarios values 
('pepe','pepe123'),
('pablo','pablo1234');

/* Mostramos los usuarios en pantalla */
select * from usuarios;