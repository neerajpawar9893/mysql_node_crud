var connection  = require('../db');
const Employee = require("../models/employeeModel")

exports.addEmp = async (req, res, next) => {
    console.log("hello........")
    console.log(req.file,"<========file")
    let profile = 'http://localhost:8080/empProfile/'+req.file.filename;
    let data = {
        empName : req.body.empName,
        empId   : req.body.empId,
        empProfile: profile
    }
    const empData = new Employee(data);
    
    connection.query(empData.addEmp(), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message:"Please Try Again", data: {}})
        }
        connection.query(Employee.getEmpById(data.empId), (err, emps) => {
            if(err){
                console.log(err)
                res.status(200).json({message:"Please Try Again...", data: {}})
            }
            res.status(200).json({message:"Emp Add Success", data: emps})
        })
    })
}

exports.getAllEmp = async (req, res, next) => {
    connection.query(Employee.getAllEmp(), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message:"Please Try Again", data: {}})
        }
        res.status(200).json({message:"Data Get Successfully", data: result})
    })
}

exports.getEmpById = async (req, res, next) => {
    connection.query(Employee.getEmpById(req.body.empId), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message:"Please Try Again", data: {}})
        }
        res.status(200).json({message:"Employee Data Fatch Successfully...", data: result})
    })
}

// exports.updateEmp = async (req, res, next) => {
//     console.log(req.file,"<========file")
//     let profile = 'http://localhost:8080/empProfile/'+req.file.filename;
//     let data = {
//         empName : req.body.empName,
//         empProfile: profile
//     }
//     let empData = new Employee(data)
//     connection.query(empData.updateEmp(req.body.empId), (err,result) => {
//         if(err){
//             console.log(err)
//             res.status(400).json({message:"Please Try Again"})
//         }
//         // connection.query(Employee.getEmpById(req.body.empId), (err, updatedEmp) => {
//         //     if(err){
//         //         console.log(err)
//         //         res.status(400).json({message:"Please Try Again"})
//         //     }
//             res.status(200).json({message:"Employee Update Succefully", data:result})

//         // })
//     })
// }

exports.updateEmp = async (req, res, next) => {
    console.log(req.file,"<========file")
    let profile = 'http://localhost:8080/empProfile/'+req.file.filename;
    let data = {
        empName : req.body.empName,
        empProfile: profile
    }

    let emps = new Employee(data)
    connection.query(emps.updateEmp(req.body.empId), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message: "Please Try Again..."})
        }
        connection.query(Employee.getEmpById(req.body.empId), (err, updatedData) => {
            if(err){
                console.log(err)
                res.status(400).json({message: "Please Try Again"})
            }
            res.status(200).json({message:"Employee Updated Success", data: updatedData})
        })
    })
}

exports.deleteEmp = async (req, res, next) => {
    console.log("Check.....")
    let empId = req.body.empId;
    connection.query(Employee.deleteEmp(empId), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message:"Please Try Again"})
        }
        res.status(200).json({message:"Employee Delete Successfully"})
    })
}