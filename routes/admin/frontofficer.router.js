const express = require('express');
const { create, list, update, deleteTeam  } = require('../../controllers/admin/frontofficer.controllers')
const router = express.Router();


router.post("/create", create);
router.get("/list", list);
router.patch("/update/:id", update);
router.delete("/delete/:id", deleteTeam)
module.exports = router;