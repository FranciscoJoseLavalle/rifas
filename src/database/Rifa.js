import mongoose from "mongoose";

const collection = "Rifas";

const rifasSchema = new mongoose.Schema({
    number: Number,
    name: String,
    payed: Boolean
})

const rifasService = mongoose.model(collection,rifasSchema);

export default rifasService;