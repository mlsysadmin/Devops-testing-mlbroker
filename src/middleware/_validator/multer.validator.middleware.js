'use strict'


const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// const MulterValidate = (req, res, next) => {
//     try {

        
        
//     } catch (error) {
//         next(error)
//     }
// }