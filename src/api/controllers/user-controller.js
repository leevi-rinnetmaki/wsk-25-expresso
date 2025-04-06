import {addUser, findUserById, listAllUsers} from "../models/user-model.js";

const getUser = (req, res) => {
  res.json(listAllUsers());
};

const getUserById = (req, res) => {
  const user = findUserById(req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
};

const postUser = (req, res) => {
  //const result = addUser(req.body);
  const {originalname: user_name, destination: birthdate, filename, size: weight} = req.file;
  const uusiUser = {
    user_name,
    birthdate,
    filename,
    weight,
  };
  const result = addUser(uusiUser);

  console.log(1);
  console.log(req.body);
  console.log(req.file);
  console.log(2);
  if (result.user_id) {
    res.status(201);
    res.json({message: 'New user added.', result});
  } else {
    res.sendStatus(400);
  }
};

const putUser = (req, res) => {
  res.json({message: 'User item updated.'});
};

const deleteUser = (req, res) => {
  res.json({message: 'User item deleted.'});
};

export {getUser, getUserById, postUser, putUser, deleteUser};