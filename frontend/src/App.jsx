import { useEffect, useState } from "react";
import api from "./api";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (user) => {
    if (editingUser) {
      await api.put(`/users/${editingUser.id}`, user);
      setEditingUser(null);
    } else {
      await api.post("/users", user);
    }
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div className="container">
      <h1>CRUD APPLICATION</h1>

      {/* Form Section */}
      <UserForm
        onSave={addUser}
        selectedUser={editingUser}
        onCancel={() => setEditingUser(null)}
      />

      {/* Table Section — aligned perfectly with form */}
      <div className="table-container">
        <UserList
          users={users}
          onEdit={setEditingUser}
          onDelete={deleteUser}
        />
      </div>
    </div>
  );
}

export default App;
