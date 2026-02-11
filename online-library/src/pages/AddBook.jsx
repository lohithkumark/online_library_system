import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.author ||
      !formData.category ||
      !formData.description ||
      !formData.rating
    ) {
      setError("All fields are required!");
      return;
    }

    dispatch(addBook({
      id: Date.now(),
      ...formData,
      rating: Number(formData.rating)
    }));

    navigate("/books");
  };

  return (
    <div className="form-wrapper">
      <div className="form-card">
        <h2>Add New Book</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="title" required onChange={handleChange}/>
            <label>Book Title</label>
          </div>

          <div className="input-group">
            <input type="text" name="author" required onChange={handleChange}/>
            <label>Author Name</label>
          </div>

          <div className="input-group">
            <select name="category" required onChange={handleChange}>
              <option value="">Select Category</option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Sci-Fi</option>
              <option>Biography</option>
            </select>
          </div>

          <div className="input-group">
            <textarea name="description" required onChange={handleChange}/>
            <label>Description</label>
          </div>

          <div className="input-group">
            <input type="number" name="rating" min="1" max="5" step="0.1" required onChange={handleChange}/>
            <label>Rating (1 - 5)</label>
          </div>

          <button type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;