
const [formData, setFormData] = useState({
  name: "",
  category: "",
  price: "",
  description: "",
  manufactureDate: "", 
  imageUrl: "",
});


<div className="form-group">
  <label>Manufacture Date</label>
  <input
    type="date"
    name="manufactureDate"
    className="form-control"
    value={formData.manufactureDate}
    onChange={handleChange}
    required
  />
</div>