import express from "express";
import cors from 'cors';
import mongoose from "mongoose";

const connection = mongoose.connect("mongodb+srv://fran:1234@rifas.hax0xip.mongodb.net/?retryWrites=true&w=majority")

const app = express();

const PORT = process.env.PORT || 8080
const server = app.listen(PORT,() => console.log(`Listening on ${PORT}`))

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send({message: "I'am the message"})
})