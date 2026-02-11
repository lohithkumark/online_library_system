import { useLocation, Link } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="card">
        <h1>404 - Page Not Found ❌</h1>
        <p>Invalid URL: {location.pathname}</p>

        <Link to="/">
          <button style={{ marginTop: "20px" }}>
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
