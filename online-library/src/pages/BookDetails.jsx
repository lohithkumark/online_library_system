import { useParams, Link } from "react-router-dom";
import books from "../data/books";

function BookDetails() {
  const { id } = useParams();

  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return <h2 style={{ padding: "40px" }}>Book Not Found</h2>;
  }

  return (
    <div style={{ padding: "40px" }}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      <Link to="/books" style={{ display: "inline-block", marginTop: "20px" }}>
        ← Back to Browse
      </Link>
    </div>
  );
}

export default BookDetails;
