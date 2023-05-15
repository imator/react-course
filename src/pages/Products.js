import { Link } from "react-router-dom";
function ProductsPage() {
  const PRODUCTS = [
    { id: "p1", title: "Product-1" },
    { id: "p2", title: "Product-2" },
    { id: "p3", title: "Product-3" },
    { id: "p4", title: "Product-4" },
  ];
  return (
    <>
      <h1>Here is Product Page</h1>
      {PRODUCTS.map((prod) => (
        <li key={prod.id}>
          <Link to={prod.id}>{prod.title}</Link>
        </li>
      ))}
    </>
  );
}

export default ProductsPage;
