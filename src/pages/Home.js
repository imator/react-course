import { Link, useNavigate } from "react-router-dom";
function HomePage() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    setTimeout(() => {
      navigate("products");
    }, 1000);
  };
  return (
    <>
      <h1>Home Page</h1>
      <p>
        Go to <Link to="products">Product Lists</Link>.
      </p>
      <button onClick={navigateHandler}>Navigate</button>
    </>
  );
}

export default HomePage;
