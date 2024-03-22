const express = require("express");
const router = express.Router();
const { connectDB } = require("./db.js");
const Movie = require("./schema.js");

router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies); // corrected to return movies
  } catch (err) {
    res.json({ error: "an error occurred" }); // corrected typo
  }
});

router.get("/:id", async (req, res) => {
  try {
    const movieFound = await Movie.findById(req.params.id);
    res.json(movieFound); // corrected variable name
  } catch (err) {
    res.json({ error: "An error occurred" }); // corrected typo
  }
});

router.post("/add-movies", async (req, res) => {
  const newMovie = new Movie({
    Movie_Title: req.body.Movie_Title,
    Director: req.body.Director,
    Release_Year: req.body.Release_Year,
    Genre: req.body.Genre,
    Rating: req.body.Rating,
  });
  try {
    const savedMovie = await newMovie.save();
    res.json(savedMovie);
  } catch (err) {
    res.json({ error: "An error occurred" });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const foundMovie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!foundMovie) {
      return res.status(404).json({ error: "Movie Not Found" });
    }
    res.json(foundMovie);
  } catch (err) {
    res.status(500).send("Error:" + err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const foundMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!foundMovie) {
      return res.status(404).json({ error: "Movie Not Found" });
    }
    res.send("Movie Deleted");
  } catch (err) {
    res.status(500).send("Error:" + err);
  }
});

module.exports = router;
