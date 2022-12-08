const express = require('express');
const router = express.Router();
const playlistController = require("../controllers/playlistController");

router.get('/', playlistController.indexView);
router.get('/:name', playlistController.showSongsOfPlaylist);

module.exports = router;