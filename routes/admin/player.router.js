
const express = require('express');
const { getAllPlayers, searchPlayres, createPlayerProfile, getPlayerById, editPlayer, deletePlayer } = require('../../controllers/admin/player.controllers');
const router = express.Router();


router.post("/createPlayerProfile", createPlayerProfile);
router.get("/getPlayerById/:id", getPlayerById);
router.patch("/editPlayer/:id", editPlayer);
router.delete("/deletePlayer/:id", deletePlayer)
router.get("/getAllPlayers", getAllPlayers);
router.get("/searchPlayer", searchPlayres);


module.exports = router;
