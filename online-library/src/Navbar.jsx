import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>📚 Online Library</h2>
      <div>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/books">Browse Books</Link>
        <Link style={styles.link} to="/add-book">Add Book</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    background: "#1e3c72",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    color: "white",
    textDecoration: "none",
    marginLeft: "20px",
    fontWeight: "500"
  }
};

export default Navbar;
