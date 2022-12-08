const express = require('express');
const router = express.Router();
const rankController = require("../controllers/rankController");

router.get('/', rankController.indexView);
router.get('/:name', rankController.showRankByCountry);

module.exports = router;