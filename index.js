/* IMPORTANTE*/
/* ¡¡LEER LOS COMENTARIOS POR FAVOR PARA PODER ENTENDER!! */

const {Pool,Client}=require('pg');

const pool=new Pool({
    user:'postgres',
    password:'contraseñadebasededatospostgre',
    database: 'biblioteca',
    host:'localhost',
    port:5432
});


/* Consulta  Select*/
/* Traemos los registros de libros y con la propiedad "rows" traemos solamente las filas
las tablas */
/* pool.end() sirve para terminar la consulta. Cabe aclarar que en un proyecto no hay que utilizar pool.end() 
porque no seria correcto.Esto hay que agregarlo una sola vez mas en la ultima funcion porque si agregamos en cada
función nos arrojara un error
*/
const traerLibros= async ()=>{
const libros= await pool.query('select * from libros');
console.log(libros.rows);
}
traerLibros();

const insertarUsuarios= async ()=>{
    /* Primera forma para insertar registros */
    /* Utilizamos el try catch porque si la consulta esta bien que continue
    si no tire el error por consola
    */
   /* cuando utilizamos $1 o $2 o cualquier numero con el signo peso lo que hacemos es 
   replazar valor mencionado por el valor que queremos insertar, actualizar o eliminar */
    try {
        const consulta= "insert into usuarios VALUES ($1, $2)";
        const values= ['hernan','hernan123'];
        const insertarUsuario= await pool.query(consulta,values);
        console.log('Se a insertado un nuevo usuario');
     
    } catch (error) {
        console.log(error);
    }   
}
insertarUsuarios();

const eliminarUsuarios=async ()=>{

    try {
        const consulta='DELETE FROM usuarios WHERE nombre_de_usuario=$1';
        const value=['hernan'];
        const eliminarUsuario= await pool.query(consulta,value);
        console.log('Se a eliminado un usuario exitosamente');
    } catch (error) {
        console.log(error);
    }
}
eliminarUsuarios();

const editarUsuarios=async ()=>{
    try {
        const consulta ='UPDATE usuarios SET nombre_de_usuario= $1 ,contrasenia= $2 WHERE nombre_de_usuario=$3';
        const values=['El brashan','brashan123', 'pepito'];
        const actualizarUsuario= await pool.query(consulta,values);
        console.log('Se a actualizado correctamente el usuario');
        pool.end();
    } catch (error) {
        console.log(error);
    }
}
editarUsuarios();