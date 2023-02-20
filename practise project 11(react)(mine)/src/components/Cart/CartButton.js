import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "./Store/store";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItemList);
  const cartViewHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={cartViewHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartItems.length}</span>
    </button>
  );
};

export default CartButton;
