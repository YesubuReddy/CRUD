import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../models/userModel.js";

export const getUsers = (req, res) => {
  getAllUsers((err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

export const getUser = (req, res) => {
  getUserById(req.params.id, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};

export const addUser = (req, res) => {
  createUser(req.body, (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ message: "User created", id: results.insertId });
  });
};

export const editUser = (req, res) => {
  updateUser(req.params.id, req.body, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "User updated" });
  });
};

export const removeUser = (req, res) => {
  deleteUser(req.params.id, (err) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "User deleted" });
  });
};
