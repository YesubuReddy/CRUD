import db from "../config/db.js";

// ✅ Get all users
export const getAllUsers = (callback) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, results) => {
    callback(err, results);
  });
};

// ✅ Get single user by ID
export const getUserById = (id, callback) => {
  const sql = "SELECT * FROM users WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    callback(err, results);
  });
};

// ✅ Create new user
export const createUser = (data, callback) => {
  const { name, email, phone } = data;

  // Validation check to avoid null inserts
  if (!name || !email || !phone) {
    return callback(new Error("Missing required fields"));
  }

  const sql = "INSERT INTO users (name, email, phone) VALUES (?, ?, ?)";
  db.query(sql, [name, email, phone], (err, results) => {
    callback(err, results);
  });
};

// ✅ Update user
export const updateUser = (id, data, callback) => {
  const { name, email, phone } = data;
  const sql = "UPDATE users SET name=?, email=?, phone=? WHERE id=?";
  db.query(sql, [name, email, phone, id], (err, results) => {
    callback(err, results);
  });
};

// ✅ Delete user
export const deleteUser = (id, callback) => {
  const sql = "DELETE FROM users WHERE id=?";
  db.query(sql, [id], (err, results) => {
    callback(err, results);
  });
};
