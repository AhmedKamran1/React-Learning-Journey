import'./ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import { useState } from 'react';

function ExpenseItem(props) {
  const [Title, setTitle] = useState(props.Title);

  function UpdateTitle(){
    setTitle('Updated!')
  }

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date = {props.Date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">{props.Amount}</div>
      </div>
      <button onClick={UpdateTitle}>Change Title</button>
    </Card>
    </li>
  );
}

export default ExpenseItem;
