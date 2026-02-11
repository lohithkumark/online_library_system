import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function BrowseBooks() {
  // Get category from URL
  const { category } = useParams();

  // Get books from Redux store
  const books = useSelector((state) => state.books);

  // Local state for search
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by category (if exists)
  let filteredBooks = category
    ? books.filter(
        (book) =>
          book.category.toLowerCase() === category.toLowerCase()
      )
    : books;

  // Filter by search (title or author)
  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "40px" }}>
      <h2>
        Browse Books {category && ` - ${category}`}
      </h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          margin: "20px 0"
        }}
      />

      {/* Books List */}
      <div style={{ display: "grid", gap: "20px" }}>
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <div
              key={book.id}
              style={{
                padding: "20px",
                background: "#1e3c72",
                borderRadius: "10px"
              }}
            >
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>

              <Link to={`/book/${book.id}`}>
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
