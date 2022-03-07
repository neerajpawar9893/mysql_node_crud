const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/getAllUsers", userController.getAllUsers);
router.get("/getAllUsers", userController.getAllUsers);
router.post("/addUser", userController.addUser);
router.post("/updateUser", userController.updateUser);
router.post("/deleteUser", userController.deleteUser);




module.exports = router;