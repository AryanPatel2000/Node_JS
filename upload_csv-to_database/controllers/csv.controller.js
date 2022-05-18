const db = require('../models');
const Capital = db.capitals;
const path = require('path');
const fs = require('fs');
const csv = require('fast-csv');

const upload = async(req, res) => {
    try{
        if(req.file == undefined)
        {
            return res.status(400).send({error:true,message:"Please upload a CSV file!"}); 
        }
    let capitals = [];
    let path = __basedir + '/upload_csv-to_database/uploads/' + req.file.filename;

    fs.createReadStream(path)
        .pipe(csv.parse({ headers : true }))
        .on("error", (error) => {
            throw error.message;
        })
        .on("data", (row) => {
            capitals.push(row)
        })
        .on("end", () => {
            Capital.bulkCreate(capitals)
            .then( () => {
                res.status(200).send({error:false, message: 'Uploaded the file successfully: ' + req.file.originalname})
            })
            .catch((error) => {
                res.status(500).send({message: "Fail to import data into database!",error: error.message});
            })
        })
   

    }catch( error) {
            console.log(error);
            res.status(400).send({error:true, message: 'Could not upload the file: ' + req.file.originalname})
        }
};

const getCapital = (req, res) => {
    Capital.findAll()
    .then( (data) => {
        res.send({res:data})
    })
    .catch( (err) => {
        res.status(500).send({error:true, message:err, message: 'Some error occurred while retrieving data'})
    })
};

module.exports = {
    upload,
    getCapital
}