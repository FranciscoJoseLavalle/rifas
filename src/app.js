import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import rifasService from "./database/Rifa.js";

const connection = mongoose.connect("mongodb+srv://fran:1234@rifas.hax0xip.mongodb.net/?retryWrites=true&w=majority")

const app = express();

const PORT = process.env.PORT || 8080
const server = app.listen(PORT, () => console.log(`Listening on ${PORT}`))

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    let result = await rifasService.find({})
    res.send(result)
})
app.post('/', async (req, res) => {
    const { number, name, payed } = req.body;

    await rifasService.create({ number, name, payed })

    res.send({ message: "added succesfully" })
})
app.put('/', async (req, res) => {
    const { number } = req.body;

    await rifasService.findOneAndUpdate({ number: number }, req.body)

    res.send({ message: "updated succesfully" })
})
app.delete('/', async (req, res) => {

    await rifasService.deleteOne({ number: req.body.number})

    res.send({ message: "deleted succesfully" })
})