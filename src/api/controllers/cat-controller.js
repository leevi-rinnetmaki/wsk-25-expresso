import {addCat, findCatById, listAllCats} from "../models/cat-model.js";

const getCat = (req, res) => {
  res.json(listAllCats());
};

const getCatById = (req, res) => {
  const cat = findCatById(req.params.id);
  if (cat) {
    res.json(cat);
  } else {
    res.sendStatus(404);
  }
};

const postCat = (req, res) => {
  //const result = addCat(req.body);
  const {originalname: cat_name, mimetype: owner, destination: birthdate, filename, size: weight} = req.file;
  const kisu = {
    cat_name,
    owner,
    birthdate,
    filename,
    weight,
  };
  const result = addCat(kisu);

  console.log(1);
  console.log(req.body);
  console.log(req.file);
  console.log(2);
  if (result.cat_id) {
    res.status(201);
    res.json({message: 'New cat added.', result});
  } else {
    res.sendStatus(400);
  }
};

const putCat = (req, res) => {
  res.json({message: 'Cat item updated.'});
};

const deleteCat = (req, res) => {
  res.json({message: 'Cat item deleted.'});
};

export {getCat, getCatById, postCat, putCat, deleteCat};