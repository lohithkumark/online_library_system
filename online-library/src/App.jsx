import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";


function App() {
  return (
    <>
      <Navbar />
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
