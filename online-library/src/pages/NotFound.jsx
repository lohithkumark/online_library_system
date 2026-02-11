import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h1>404 - Page Not Found ❌</h1>
      <p>Invalid URL: {location.pathname}</p>

      <Link to="/" style={{ marginTop: "20px" }}>
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
