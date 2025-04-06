import express from 'express';
import multer from 'multer';
import path from 'path';
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
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + ext);
  },
});

const upload = multer({ storage });

catRouter.route('/').get(getCat).post(upload.single('file'), postCat, createThumbnail);

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);

export default catRouter;