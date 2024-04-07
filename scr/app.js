import express from "express";
import conectaDataBase from "./config/dbConnect.js";

const conexao = await conectaDataBase();

conexao.on("error", (erro)=>{
    console.error("erro de conexa", erro)
})

conexao.once("open", ()=>{
    console.log("conexao com banco feita com suceso ")
})
const app = express();//nosso servidor 

app.get("/", (req, res)=>{
    res.status(200).send("Coda alta performance")
});

export default app;