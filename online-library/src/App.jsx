import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();

  // Valid routes where Navbar should be visible
  const validPaths = [
    "/",
    "/books",
    "/add-book"
  ];

  const isBooksRoute = location.pathname.startsWith("/books");
  const isBookDetailsRoute = location.pathname.startsWith("/book");

  const showNavbar =
    validPaths.includes(location.pathname) ||
    isBooksRoute ||
    isBookDetailsRoute;

  return (
    <>
      {showNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BrowseBooks />} />
        <Route path="/books/:category" element={<BrowseBooks />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
