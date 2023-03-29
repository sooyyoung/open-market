import { Link } from "react-router-dom";
import { Container, Product } from "./ProductCard.style";

export default function ProductCard(props) {
  return (
      <Container>
        {props.products.map((item, index) => {
          return (
            <Product key={index}>
              <Link
                to={{
                  pathname: `/productDetails`,
                  search: `${item.product_id}`,
                }}
              >
                <img src={item.image} alt="" />
              </Link>
              <span>{item.store_name}</span>
              <p>{item.product_name}</p>
              <span className="price">
                <strong>{item.price.toLocaleString()}</strong>원
              </span>
            </Product>
          );
        })}
        <section ref={props.observer}></section>
      </Container>
  );
}
