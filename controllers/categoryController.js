const connection = require("../db")
const Category = require("../models/categoryModel")

exports.addCategory = async (req, res, next) => {
    console.log("working......")

    connection.query(`SHOW tables`, function(err, tables){ 
        for(i =0; i< tables.length; i++){
            console.log(tables[i].Tables_in_test,"<========try")
            if(tables[i].Tables_in_test != "category")
            console.log("inside if<====")
        }
    });
    // return 0;
    let tableName = 'category';
    let query =await `CREATE TABLE ${tableName} (name VARCHAR(255), address VARCHAR(255))`;
    if(query){
        console.log("table already exists")
    }
    console.log("Check......")
    connection.query(query, (err, rows) => {
    if(err){console.log(err)  
        res.status(500)
    .json({message:"Table Creation Failed}"})};

    return res.send(
    `Successfully Created Table - ${tableName}`);
    })
    // });

    let data = {
        categoryName : req.body.categoryName
    }
    const catData = new Category(data)
    connection.query(catData.addCategory(), (err, result) => {
        if(err){
            console.log(err)
            res.status(400).json({message: "Please Try Again"})
        }
        res.status(400).json({message: "Category Add Succefully"})
    })
}

// exports.getE

// mp = async