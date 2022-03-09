const connection = require("../db")
const Category = require("../models/categoryModel")

exports.addCategory = async (req, res, next) => {
    connection.query('SHOW tables', async function(err, tables){ 
        for(i=0; i< tables.length; i++){
            console.log(tables[i].Tables_in_test,"<=========tttt")
            if(tables[i].Tables_in_test != "category1"){
                console.log("yessss........")
                // return 0;
                let tableName = "category";
                let query = `CREATE TABLE ${tableName} (id INT AUTO_INCREMENT PRIMARY KEY, categoryName VARCHAR(100))`
                let table = await connection.query(query)
                if(!table){
                    return res.status(400).send("Please Try Again")
                }
            }
        }
        console.log(tables);
        return 0;
    });

    let data = {
        categoryName: req.body.categoryName 
    }
    let catData = new Category(data)

    let cData = await connection.query(catData)
    if(cData){
        console.log("success.......")
    }
}