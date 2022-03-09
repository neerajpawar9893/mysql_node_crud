const Auth = require("../models/authModel")
const connection = require("../db")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signUp = (req, res, next) => {
    var hash = bcrypt.hashSync(req.body.password, 8);
    let data = {
        name : req.body.name,
        email : req.body.email,
        password: hash,
        mobile: req.body.mobile
    }
    let signupData = new Auth(data)
    connection.query(signupData.signUp(), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message:"Please Try Again"})
        }
        res.status(200).json({message:"SignUp Success"})
    })
}

exports.login = async (req, res, next) => {
    connection.query(Auth.login(req.body.email), async(err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message:"Please Try Again"})
        }
        if(result[0].email == req.body.email){
            let passMatch = await bcrypt.compare(req.body.password, result[0].password)
            if(passMatch){
                let token = await jwt.sign({
                    email: result[0].email,
                  }, 'secret', {expiresIn: '1h'});
                  let obj = {}
                  obj.data = result;
                  obj.token = token;
                  res.status(200).json({message:"Login Success",data: obj})

            }
            res.status(400).json({message:"Password Not Match"})
        }
        res.status(400).json({message:"Email Not Found!"})
    })
}