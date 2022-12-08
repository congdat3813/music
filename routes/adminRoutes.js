const express = require('express');
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get('/', adminController.indexView);
router.get('/events', adminController.eventView);
router.get('/events/:id', adminController.eventArtistView);
router.get('/albums', adminController.albumView);
router.get('/albums/:id', adminController.albumSongView);
router.get('/song', adminController.songView);
router.get('/artist', adminController.artistView);
router.get('/account', adminController.accountView);

router.post('/addSong', adminController.addSong);
router.post('/editSong', adminController.editSong);
router.post('/deleteSong', adminController.deleteSong);

router.post('/addSolo', adminController.addSolo);
router.post('/editSolo', adminController.editSolo);
router.post('/deleteSolo', adminController.deleteSolo);

router.post('/addAlbum', adminController.addAlbum);
router.post('/editAlbum', adminController.editAlbum);
router.post('/deleteAlbum', adminController.deleteAlbum);

router.post('/addEvent', adminController.addEvent);
router.post('/editEvent', adminController.editEvent);
router.post('/deleteEvent', adminController.deleteEvent);

router.post('/addSongAlbum', adminController.addSongAlbum);
router.post('/deleteSongAlbum', adminController.deleteSongAlbum);

router.post('/addEventArtist', adminController.addEventArtist);
router.post('/deleteEventArtist', adminController.deleteEventArtist);
module.exports = router;
