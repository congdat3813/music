const express = require('express');
const router = express.Router();
const albumController = require("../controllers/albumController");

router.get('/', albumController.indexView);
router.get('/:name', albumController.showSongByalbum);

module.exports = router;
