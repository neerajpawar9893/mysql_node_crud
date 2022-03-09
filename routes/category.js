const express = require("express")
const router = express.Router();
const categorController = require("../controllers/categoryController")

router.post("/addCategory", categorController.addCategory)


module.exports = router;