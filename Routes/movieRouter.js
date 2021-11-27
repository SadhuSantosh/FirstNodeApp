import express from "express";
import { getMovies, getMovieById, deleteMovieById, addMovie, updateMovieById } from "../helper.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const filter = req.query;
    console.log(filter);
    if(filter.rating)
    {
        filter.rating= +filter.rating ;
    }
    
    let moviesAll = await getMovies(filter);

    console.log(moviesAll);
    res.send(moviesAll);
   
})
router.get("/:id",async (req, res) => {
    const { id } = req.params;
    console.log("Movie ID is", id);

    const client=await createConnection();

    let movie = await getMovieById(id);
    const notfound = {
        message: `The movie ID with ${id} doesn't exist !!`,
    }
    movie ? res.send(movie) : res.status(404).send(notfound);
})
router.delete("/:id",async (req, res) => {
    const { id } = req.params;
    const client=await createConnection();

    let movie = await deleteMovieById(id);
    
    const notfound = {
        message: `The movie ID with ${id} doesn't exist !!`,
    }
    movie ? res.send(movie) : res.status(404).send(notfound);
})
router.post("/", async (req, res) => {    
    const client=await createConnection();
    const data=req.body;
    let movies = await addMovie(data);
    
    res.send(movies);
})
router.put("/:id", async (req, res) => {  
    const { id } = req.params;  
    const client=await createConnection();
    const data=req.body;
    let movies = await updateMovieById(id, data);
    
    res.send(movies);
})

export const movieRouter = router;