import { useState } from "react";

function UserForm({ onSave, selectedUser, onCancel }) {
  const [user, setUser] = useState(
    selectedUser || { name: "", email: "", phone: "" }
  );

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(user);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        name="phone"
        placeholder="Phone"
        value={user.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">{selectedUser ? "Update" : "Add"}</button>
      {selectedUser && (
        <button
  type="button"
  className="cancel"
  onClick={onCancel}
>
  Cancel
</button>

      )}
    </form>
  );
}

export default UserForm;
