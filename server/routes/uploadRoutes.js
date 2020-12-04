import path from 'path'
import express from 'express'
import multer from 'multer'
import multerS3 from 'multer-s3'
import AWS from 'aws-sdk'
import dotenv from 'dotenv'
const router = express.Router()

dotenv.config()

console.log('A_K_ID: ', process.env.ACCESS_KEY_ID)

const s3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
})

const uploadS3 = multer({
  storage: multerS3({
    s3: s3,
    // acl: 'public-read',
    bucket: 'naif',
    metadata: (req, file, cb) => {
      cb(null, {fieldName: file.fieldname})
    },
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + '-' + file.originalname)
    }
  })
});


router.post('/', uploadS3.single('image'),(req, res) => {
  console.log(req.file);
  console.log(req.file.location);
  res.send(`/${req.file.location}`)
});


export default router