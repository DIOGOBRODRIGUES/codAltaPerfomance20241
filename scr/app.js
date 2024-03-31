import express from "express";

const app = express();//nosso servidor 

app.get("/", (req, res)=>{
    res.status(200).send("Coda alta performance")
});

export default app;