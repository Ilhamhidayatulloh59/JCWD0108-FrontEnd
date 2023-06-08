import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1>Ini Home Page</h1>
      <Link to="/page1">Page 1</Link>
      <Link to="/page2">Page 2</Link>
    </div>
  );
}

export default HomePage;
