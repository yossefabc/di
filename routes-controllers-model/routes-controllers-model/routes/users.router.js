const express = require("express");
const { getAllUsers } = require("../controllers/users.controller.js");
const router = express.Router();

router.get("/api/users", getAllUsers);

router.get("/api/users/:id", (req, res) => {});

module.exports = router;




