import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  
  manufactureDate: { 
    type: Date, 
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);
export default Item;