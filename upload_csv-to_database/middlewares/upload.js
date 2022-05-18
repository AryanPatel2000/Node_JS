const multer = require('multer');
//const path = require('e://aryan/nodeJS/upload_csv-to_database/uploads')
const path = require('path');
const csvFilter = (req, file, cb) => {

    if(file.mimetype.includes("csv"))
    {
        cb(null, true);
    }
    else
    {
        cb('Please upload only csv file.',false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
       // cb(null, __basedir + "../uploads/");
        cb(null, path.join(__basedir, 'upload_csv-to_database/uploads/'));
    },
    filename : (req, file, cb) => {
        console.log(file.originalname);
        cb(null, ` ${file.originalname}`);
    },
});

const uploadFile = multer({storage: storage, fileFilter: csvFilter});
module.exports = uploadFile;