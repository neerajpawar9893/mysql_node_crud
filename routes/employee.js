const express = require("express")
const employeeController = require("../controllers/employeeController")
// const multer  = require('multer')
// const upload = multer({ dest: './public/empProfile/' })

const router = express.Router();

router.post("/addEmp", employeeController.addEmp)
router.get("/getAllEmp", employeeController.getAllEmp)
router.post("/getEmpById", employeeController.getEmpById)
router.post("/updateEmp", employeeController.updateEmp)
router.post("/deleteEmp", employeeController.deleteEmp)


module.exports = router;