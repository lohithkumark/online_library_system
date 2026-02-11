import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const books = useSelector((state) => state.books);

  const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Biography"];

  // Show first 6 books as popular
  const popularBooks = books.slice(0, 6);

  return (
    <>
      {/* HERO SECTION */}
      <div className="hero">
        <h1>Welcome to Online Library 📚</h1>
        <p>Discover books across different categories</p>

        {/* CATEGORY CHIPS */}
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

      {/* POPULAR BOOKS */}
      <h2 className="section-title">Popular Books</h2>

      <div className="grid">
        {popularBooks.map((book) => (
          <div key={book.id} className="card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p style={{ opacity: 0.8 }}>
              ⭐ {book.rating}
            </p>

            <Link to={`/book/${book.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
