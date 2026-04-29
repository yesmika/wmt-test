import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddItemPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    imageUrl: "",
    manufactureDate: "" 
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post("http://localhost:5000/api/items", formData);
      navigate("/");
    } catch (err) {
      console.error("Error adding item:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <input name="name" placeholder="Item Name" className="form-control mb-2" onChange={handleChange} required />
        <input name="category" placeholder="Category" className="form-control mb-2" onChange={handleChange} required />
        <input name="price" type="number" placeholder="Price" className="form-control mb-2" onChange={handleChange} required />
        
        {/* 2. Manufacture Date Input Field e
        <div className="mb-3">
          <label className="form-label">Manufacture Date</label>
          <input 
            name="manufactureDate" 
            type="date" 
            className="form-control" 
            onChange={handleChange} 
            required 
          />
        </div>

        <textarea name="description" placeholder="Description" className="form-control mb-2" onChange={handleChange} required />
        <input name="imageUrl" placeholder="Image URL" className="form-control mb-2" onChange={handleChange} />
        
        <button type="submit" className="btn btn-success">Save Item</button>
      </form>
    </div>
  );
};

export default AddItemPage;