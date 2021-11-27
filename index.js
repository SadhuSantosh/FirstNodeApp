import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { getMovies, getMovieById, deleteMovieById, addMovie, updateMovieById } from "./helper.js";
import { movieRouter } from "./Routes/movieRouter.js";

const app = express();

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

app.use(express.json());
//to convert the body from request to JSON,it acts as a middleware, jumps everywhere and converts the data to JSON.

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDB connected !!");
    return client;
}

export const client=await createConnection();

const PORT = 9000;
app.get("/", (req, res) => {
    res.send("Hello, World!!");
})

app.use("/movies",movieRouter);

app.listen(PORT, () => console.log("APP is Started on port", PORT));


