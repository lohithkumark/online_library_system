import { Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function BrowseBooks() {
  return <h2>Browse Books</h2>;
}

function AddBook() {
  return <h2>Add Book</h2>;
}

function NotFound() {
  return <h2>404 Page Not Found</h2>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BrowseBooks />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
