import app from "./scr/app.js"

const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`servidor escutando acesse o endereco http://localhost:${PORT}`)
})