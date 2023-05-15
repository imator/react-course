import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="/products">Product Lists</Link>.
      </p>
    </>
  );
}

export default Home;
