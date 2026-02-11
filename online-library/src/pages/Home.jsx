import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography"];

  const popularBooks = [
    { id: 1, title: "The Alchemist", author: "Paulo Coelho" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Atomic Habits", author: "James Clear" }
  ];

  return (
    <div className="home-container">
      <h1>Welcome to Online Library 📚</h1>
      <p>Discover books across different categories</p>

      {/* Categories Section */}
      <div className="categories">
        <h2>Book Categories</h2>
        <div className="category-list">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/books/${category}`}
              className="category-item"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="popular-section">
        <h2>Popular Books</h2>
        <div className="book-grid">
          {popularBooks.map((book) => (
            <div key={book.id} className="book-card">
              <h4>{book.title}</h4>
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
