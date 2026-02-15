import sqlite3 from "sqlite3"
import { promisify } from "util";
import dotenv from "dotenv"


dotenv.config()

//leer ruta desde .env
const DB_PATH = process.env.DB_PATH || "./database/inventario.sqlite";

//crear la conexion a SQLite
const db = new sqlite3.Database(DB_PATH, (err) =>{

    if(err){
        console.error("Error al conectar a SQLite: ", err.message);
    }else{
        console.log("Conectado a SQLite correctamente");

        //se puede configurar la creación automatica de las tablas en caso se requiera
    }
});

db.runAsync = promisify(db.run.bind(db));
db.getAsync = promisify(db.get.bind(db));
db.allAsync = promisify(db.all.bind(db));

export default db;