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
                {item.stock !== 0 ? 
                    <><strong>{item.price.toLocaleString()}</strong>원</>
                    :
                    <strong style={{ "color" : "#eb5757" }}>품절</strong>
                }
              </span>
            </Product>
          );
        })}
        <section ref={props.observer}></section>
      </Container>
  );
}
