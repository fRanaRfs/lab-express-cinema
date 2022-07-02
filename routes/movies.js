

const express = require("express");
const router = express.Router();

const MovieModel = require("../models/Movie.model.js"); 

router.get("/", (req, res, next) => {
  MovieModel.find()
    .then((allMovies) => {
      res.render("movies", { allMovies });
    })
    .catch((err) => console.log("problem getting the movies data!", err));
});


router.get("/:movieId", (req, res, next) => {
  const { movieId } = req.params; 

  MovieModel.findById(movieId)
    .then((oneMovie) => {
      res.render("movie-details", { oneMovie });
    })
    .catch((err) => console.log("problem getting the movies data!", err));
});

module.exports = router;