import express from 'express';
import multer from 'multer';
import path from 'path'; // Import path to handle file extensions
import {createThumbnail} from "../../middlewares.js";
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat,
} from '../controllers/cat-controller.js';

const catRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files in the 'uploads/' directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Extract the original file extension
    cb(null, file.fieldname + '-' + uniqueSuffix + ext); // Save with a unique name and original extension
  },
});

const upload = multer({ storage });

catRouter.route('/').get(getCat).post(upload.single('file'), postCat, createThumbnail);

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRouter;