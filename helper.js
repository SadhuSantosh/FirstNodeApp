import {client} from "./index.js";

async function updateMovieById(id, data) {
    return await client
        .db("movies")
        .collection("movies")
        .updateOne({ id: id }, { $set: data });
}
async function addMovie(data) {
    return await client
        .db("movies")
        .collection("movies")
        .insertMany(data);
}
async function deleteMovieById(id) {
    return await client
        .db("movies")
        .collection("movies")
        .deleteOne({ id: id });
}
async function getMovieById(id) {
    return await client
        .db("movies")
        .collection("movies")
        .findOne({ id: id });
}
async function getMovies(filter) {
    return await client
        .db("movies")
        .collection("movies")
        .find(filter)
        .toArray();
}

export { getMovies, getMovieById, deleteMovieById, addMovie, updateMovieById };