const express = require('express');
const router = express.Router();
const artistController = require("../controllers/artistController");

router.get('/', artistController.indexView);
router.get('/:name', artistController.showSpecifiedArtist);

module.exports = router;