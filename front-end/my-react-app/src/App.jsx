// src/App.js
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "http://localhost:5001/api/users";
function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", age: "" });
  const [editingId, setEditingId] = useState(null);
  const fetchUsers = async () => {
    const res = await axios.get(API_URL);
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, form);
        setEditingId(null);
      } else {
        await axios.post(API_URL, form);
      }
      setForm({ name: "", email: "", age: "" });
      console.log("=>(HELLO WORLD)<=");
      fetchUsers();
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleEdit = (user) => {
    setForm({ name: user.name, email: user.email, age: user.age });
    setEditingId(user._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      await axios.delete(`${API_URL}/${id}`);
      fetchUsers();
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>User CRUD App</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          type="email"
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <input
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          type="number"
          style={{ display: "block", marginBottom: "10px", width: "100%" }}
        />
        <button type="submit">
          {editingId ? "Update User" : "Create User"}
        </button>
      </form>
      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>{" "}
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
