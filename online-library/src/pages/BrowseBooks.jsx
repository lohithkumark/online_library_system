import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import books from "../data/books";

function BrowseBooks() {
  const { category } = useParams();
  const [searchTerm, setSearchTerm] = useState("");

  // Filter by category
  let filteredBooks = category
    ? books.filter((book) => book.category === category)
    : books;

  // Filter by search
  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: "40px" }}>
      <h2>Browse Books {category && ` - ${category}`}</h2>

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

      {/* Book List */}
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
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
