import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const Product = useSelector((state) => state.product.itemList);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Product.map((itemList) => (
          <ProductItem
            title={itemList.title}
            price={itemList.price}
            description={itemList.description}
            key={Math.random()}
          ></ProductItem>
        ))}
      </ul>
      {/* <ul>
        <ProductItem
          title='Test'
          price={6}
          description='This is a first product - amazing!'
        />
      </ul> */}
    </section>
  );
};

export default Products;
