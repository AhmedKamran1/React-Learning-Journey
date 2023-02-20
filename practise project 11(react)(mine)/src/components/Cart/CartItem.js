import { useDispatch } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from './Store/store';

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  const dispatch = useDispatch()
  
  const itemIncrementHandler = () =>{
    dispatch(cartActions.increment(title))
  }

  const itemDecrementHandler = () =>{
    dispatch(cartActions.decrement(title))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={itemDecrementHandler}>-</button>
          <button onClick={itemIncrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
