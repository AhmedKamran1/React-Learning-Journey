import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItemList);
  let totalAmount = 0;
  cartItems.forEach((element) => {
    totalAmount += element.quantity * element.price;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <CartItem
              item={{
                title: item.title,
                quantity: item.quantity,
                total: item.quantity * item.price,
                price: item.price,
              }}
              key={Math.random()}
            ></CartItem>
          ))
        ) : (
          <h3>Your cart is empty!</h3>
        )}
        {/* <CartItem
          item={{
            title: "Test Item",
            quantity: itemQuantity,
            total: 18,
            price: 6,
          }}
        /> */}
      </ul>
      <h1>Total Amount: {totalAmount}$</h1>
    </Card>
  );
};

export default Cart;
