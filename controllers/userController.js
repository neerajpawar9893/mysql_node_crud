var connection  = require('../db');
const User = require('../models/userModel')


exports.addUser = async (req, res, next) => {
    let data = {
        userId : req.body.userId,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        password : req.body.password
    }
    const user = new User(data);
     connection.query(user.addUser(), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({ message: "Please Try Again"})
        }
        connection.query(User.getUserById(data.userId),(err,userData) =>{
            if(err){
                console.log(err)
                res.status(400).json({ message: "Please Try Again"})
            }
            console.log(userData[0],"<=========udata")
            res.status(200).json({message:"data add Success...", data: userData[0]})
        })
        
    })
}

exports.getAllUsers = async (req, res, next) => {
    connection.query(User.getAllUsers(), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message:"Please Try Again",data: {}})
        }
        console.log(result,"<==========result")
        res.status(200).json({message:"Data Get Success", data: result})
    })
}

exports.updateUser = async (req, res, next) => {
    let data = {
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        password : req.body.password
    }

    let user = new User(data)
    connection.query(user.updateUser(req.body.userId), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message: "Please Try Again..."})
        }
        connection.query(User.getUserById(req.body.userId), (err, updatedData) => {
            if(err){
                console.log(err)
                res.status(400).json({message: "Please Try Again"})
            }
            res.status(200).json({message:"User Updated Success", data: updatedData})
        })
    })
}

exports.deleteUser = async (req, res, next) => {
    let userId = req.body.userId;
    connection.query(User.deleteUser(userId), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message:"Please Try Again"})
        }
        res.status(200).json({message:"User Delete Success", data: {}})
    })
}

