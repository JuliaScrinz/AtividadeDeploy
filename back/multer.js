const multer = require('multer')

let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        return cb(null, "./back/public") 
    },
    filename: function(req, file, cb) {
        let nome_sem_espacos = file.originalname.trim()
        let nome_array = nome_sem_espacos.split(' ')
        let nome_underline = nome_array.join('_')
        return cb(null, `${Date.now()}_${nome_underline}`)
    }

})

let upload = multer({storage})

module.exports = upload