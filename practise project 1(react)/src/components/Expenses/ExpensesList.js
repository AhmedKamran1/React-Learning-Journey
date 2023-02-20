import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  let allExpenses;
  if (props.expense.length > 0) {
    return (
      <ul className="expenses-list">
        {
          (allExpenses = props.expense.map((expense) => (
            <ExpenseItem
              key={Math.random()}
              Date={expense.date}
              Title={expense.title}
              Amount={expense.amount}
            ></ExpenseItem>
          )))
        }
      </ul>
    );
  }
  return (allExpenses = <h2>No expenses found.</h2>);
}

export default ExpensesList;
