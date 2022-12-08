const express = require('express');
const router = express.Router();
const genreController = require("../controllers/genreController");

router.get('/', genreController.indexView);
router.get('/:name', genreController.showSongByGenre);

module.exports = router;