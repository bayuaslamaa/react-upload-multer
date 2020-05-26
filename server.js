const express = require("express")
const app = express()
const multer = require('multer')
const cors = require('cors')
const ImgurStorage = require('multer-storage-imgur')


app.use(cors())


let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

let upload = multer({ storage: ImgurStorage({ clientId: 'a5aa26dffc3a3c0' }) }).single('file')

app.post('/upload', (req, res, next) => {
    upload(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        return res.status(200).send(req.file)
    })
})

app.listen(8000, () => console.log('listern on port', 8000))