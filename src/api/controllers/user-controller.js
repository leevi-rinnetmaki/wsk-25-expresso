import bcrypt from 'bcrypt';
import {addUser, findUserById, listAllUsers} from "../models/user-model.js";
import e from 'express';

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

const postUser = async (req, res) => {
  //const result = addUser(req.body);
  req.body.password = bcrypt.hashSync(req.body.password, 10);
  const newUser = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const result = addUser(newUser);

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