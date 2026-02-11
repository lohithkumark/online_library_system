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

    const newBook = {
      id: Date.now(),
      ...formData,
      rating: Number(formData.rating)
    };

    dispatch(addBook(newBook));

    navigate("/books");
  };

  return (
    <div className="container">
      <h2>Add New Book</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "450px" }}
      >
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category (Fiction, Sci-Fi...)"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Book Description"
          rows="4"
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating (1 - 5)"
          min="1"
          max="5"
          step="0.1"
          onChange={handleChange}
        />

        <button type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
