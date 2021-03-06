const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer')
const path = require('path');

const SECRET = '79e2b7b6-f5ef-4aed-ba3b-cfaa544be67a';
const SALT = 15;
const DEFAULT_TIME_EXPIRATION = 60 * 60 * 12;  //12 HORAS
const UPLOAD_FOLDER =  path.join(__dirname, 'uploads')
const storage = multer.diskStorage({
    destination: UPLOAD_FOLDER, 
    filename: function ( req, file, cb ) { //change file name
        let ext = (path.extname(file.originalname)).toLowerCase(); //get file extension
        let time = Date.now(); //get timestamp
        cb( null, `${time}_${file.originalname}`); //return renamed file
    }
});
// utiliza a storage para configurar a instância do multer
const upload = multer( { storage: storage } );


const verifyHash = (hash, content) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(content, hash, (err, same) => {
            if (err) {
                resolve(false)
            } else {
                resolve(same)
            }

        })
    })

}

const generateHash = (content) => {
    return new Promise((resolve, reject) => {
        bcrypt.hash(content, SALT, function (err, hash) {
            if (err) {
                reject(err)
            } else {
                resolve(hash)
            }
        });
    })
}


verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, SECRET, (err, result) => {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

generateToken = (data, expiration = DEFAULT_TIME_EXPIRATION) => {
    const token = jwt.sign(data, SECRET, { expiresIn: expiration });
    return Promise.resolve(token)
}





module.exports = {
    verifyHash,
    generateHash,
    verifyToken,
    generateToken,
    upload,
    UPLOAD_FOLDER
}