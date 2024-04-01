import mongoose from "mongoose";

async function conectaDataBase(){
    mongoose.connect("mongodb+srv://diogoborbar:<password>@cluster0.x5ii9dd.mongodb.net/empregaeu?retryWrites=true&w=majority&appName=Cluster0")

    return mongoose.connection ;
}

export default conectaDataBase;