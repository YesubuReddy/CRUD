import React from "react";

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="userlist-card">
      <h2 className="userlist-title">Registered Users</h2>
      <table className="userlist-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className="actions">
                <button className="edit" onClick={() => onEdit(user)}>
                  Edit
                </button>
                <button className="delete" onClick={() => onDelete(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
