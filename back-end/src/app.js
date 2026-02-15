import express from "express"

const app = express();

//Middlewares globales
app.use(express.json());

//Ruta de prueba temporal
app.get("/",(req,res)=>{
    res.json({
        message:"API funciona correctamente"
    });
});

export default app;