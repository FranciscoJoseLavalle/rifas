import mongoose from "mongoose";

const collection = "Rifas";

const rifasSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    products: Array
})

const rifasService = mongoose.model(collection,rifasSchema);

export default rifasService;