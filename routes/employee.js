const express = require("express")
const employeeController = require("../controllers/employeeController")
const isAuth = require("../middleware/isAuth")
// const multer  = require('multer')
// const upload = multer({ dest: './public/empProfile/' })

const router = express.Router();

router.post("/addEmp", isAuth, employeeController.addEmp)
router.get("/getAllEmp", isAuth, employeeController.getAllEmp)
router.post("/getEmpById", isAuth, employeeController.getEmpById)
router.post("/updateEmp", isAuth, employeeController.updateEmp)
router.post("/deleteEmp", isAuth, employeeController.deleteEmp)


module.exports = router;