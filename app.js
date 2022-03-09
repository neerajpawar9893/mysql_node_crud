const express = require("express");
var mysql = require('mysql');
var connection  = require('./db'); 
const bodyparser = require('body-parser');
const multer  = require('multer')
const path = require("path")

const user = require("./routes/user");
const employee = require("./routes/employee");
const auth = require("./routes/auth");
const category = require("./routes/category");


const app = express();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/empProfile')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname )
  }
})

var fileFilter = (req, file, cb) => {
  if(
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png'
  ) {
    cb( null , true)
  }else{
    cb(null, false)
  }
};

app.use('/empProfile',express.static(path.join(__dirname, 'empProfile')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(multer({ storage: storage , fileFilter: fileFilter, dest: './empProfile'}).single('empProfile'));

app.use(bodyparser.json());

app.use("/auth", auth)
app.use("/users", user)
app.use("/employees", employee)
app.use("/categorys", category)

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));