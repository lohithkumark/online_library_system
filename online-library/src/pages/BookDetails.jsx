import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();
  const books = useSelector((state) => state.books);

  const book = books.find(
    (b) => b.id === Number(id)
  );

  if (!book) {
    return (
      <div className="container">
        <h2>Book Not Found</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card">
        <h2>{book.title}</h2>

        <p><strong>Author:</strong> {book.author}</p>
        <p><strong>Category:</strong> {book.category}</p>
        <p><strong>Description:</strong> {book.description}</p>
        <p><strong>Rating:</strong> ⭐ {book.rating}</p>

        <Link to="/books">
          <button style={{ marginTop: "15px" }}>
            ← Back to Browse
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BookDetails;
