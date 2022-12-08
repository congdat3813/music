const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");

router.get('/', userController.indexView);
router.get('/:name', userController.showSongsOfPlaylist);


module.exports = router;