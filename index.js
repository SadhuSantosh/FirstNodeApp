import express from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { getMovies, getMovieById, deleteMovieById, addMovie, updateMovieById } from "./helper.js";
import { movieRouter } from "./Routes/movieRouter.js";
import { userRouter } from "./Routes/userRouter.js";
import cors from "cors";

const app = express();

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;

app.use(cors());
app.use(express.json());
//to convert the body from request to JSON,it acts as a middleware, jumps everywhere and converts the data to JSON.

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDB connected !!");
    return client;
}

export const client=await createConnection();

const PORT = process.env.PORT || 9000;//Heroku will auto assign port 

app.get("/", (req, res) => {
    res.send("Hello, World ****");
})

app.use("/movies",movieRouter);
app.use("/user",userRouter);

app.listen(PORT, () => console.log("APP is Started on port", PORT));

const data = [
    {
        name: "Spaghetti",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2021%2F09%2F23%2Fspaghetti-and-spinach-with-sun-dried-tomato-cream-sauce.jpg&q=85",
        time: "30 mins",
        serves: "2"
    },
    {
        name: "Fusilli",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/4/30/0/ei1017_fusilli.jpg.rend.hgtvcom.616.462.suffix/1398787149575.jpeg",
        time: "20 mins",
        serves: "1"
    },
    {
        name: "Ravioli",
        image: "https://www.kitchensanctuary.com/wp-content/uploads/2021/06/Creamy-Tomato-Ravioli-Sauce-square-FS-30.jpg",
        time: "25 mins",
        serves: "2"
    },
    {
        name: "Fettuccine",
        image: "https://pinchofyum.com/wp-content/uploads/Mushroom-Fettuccine-Recipe.jpg",
        time: "15 mins",
        serves: "2"
    }

]

app.get("/recipies",(req,res)=>{
    res.send(data);
})
