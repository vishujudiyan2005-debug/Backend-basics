import multer from "multer"



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp")
  },
  filename: function (req, file, cb) {
   
    cb(null, file.originalname)  // not a good practice to save the original name as user can have multiple files with same name , Use uniqueSuffix
  }
})

export const upload = multer({ storage, })