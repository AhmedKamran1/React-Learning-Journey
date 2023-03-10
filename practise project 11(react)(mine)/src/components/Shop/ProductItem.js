import { useDispatch, useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions, productActions } from "../Cart/Store/store";

const ProductItem = (props) => {
  const { title, price, description } = props;
  // title: item.title,
  //               quantity: item.quantity,
  //               total: item.total,
  //               price: item.price,
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const item = {
      title: props.title,
      quantity: 1,
      price: props.price,
    };
    dispatch(cartActions.updateCart(item));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
