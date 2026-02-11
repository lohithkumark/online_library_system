import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // Sync dropdown category with URL param
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("");
    }
  }, [category]);

  // Filter by category
  let filteredBooks = selectedCategory
    ? books.filter(
        (book) =>
          book.category.toLowerCase() ===
          selectedCategory.toLowerCase()
      )
    : books;

  // Search filter
  filteredBooks = filteredBooks.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sorting
  if (sortOption === "rating-high") {
    filteredBooks = [...filteredBooks].sort(
      (a, b) => b.rating - a.rating
    );
  } else if (sortOption === "rating-low") {
    filteredBooks = [...filteredBooks].sort(
      (a, b) => a.rating - b.rating
    );
  } else if (sortOption === "a-z") {
    filteredBooks = [...filteredBooks].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  return (
    <div className="container">
      <h2>Browse Books</h2>

      {/* PREMIUM CONTROLS */}
      <div className="controls-premium">
        {/* Search */}
        <div className="search-box">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) =>
            setSelectedCategory(e.target.value)
          }
        >
          <option value="">All Categories</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">
            Non-Fiction
          </option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Biography">
            Biography
          </option>
        </select>

        {/* Sort */}
        <select
          value={sortOption}
          onChange={(e) =>
            setSortOption(e.target.value)
          }
        >
          <option value="">Sort By</option>
          <option value="rating-high">
            Rating High → Low
          </option>
          <option value="rating-low">
            Rating Low → High
          </option>
          <option value="a-z">
            Title A → Z
          </option>
        </select>
      </div>

      {/* BOOK GRID */}
      <div className="grid">
        {filteredBooks.length === 0 ? (
          <p>No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <div key={book.id} className="card">
              <h3>{book.title}</h3>
              <p>
                <strong>Author:</strong>{" "}
                {book.author}
              </p>
              <p>
                <strong>Category:</strong>{" "}
                {book.category}
              </p>
              <p>
                <strong>Rating:</strong> ⭐{" "}
                {book.rating}
              </p>

              <Link to={`/book/${book.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default BrowseBooks;
