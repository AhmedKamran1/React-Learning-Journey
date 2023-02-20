import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setExpenseYear] = useState("2022");

  function yearRecieved(data) {
    setExpenseYear(data);
  }

  const expenseYear = props.detail.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // function yearRecieved(data) {
  //   const expenseYear = props.detail.filter((expense) => {
  //     return expense.date.getFullYear().toString() === data;
  //   });
  //   setExpenseYear(expenseYear);
  // }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter Year={yearRecieved}></ExpenseFilter>

        {/* {filteredYear.map((expense) => (
          <ExpenseItem
            key={Math.random()}
            Date={expense.date}
            Title={expense.title}
            Amount={expense.amount}
          ></ExpenseItem>
        ))} */}

        <ExpensesChart expenses = {expenseYear}></ExpensesChart>
        <ExpensesList expense={expenseYear}></ExpensesList>
      </Card>
    </div>
  );
}

export default Expenses;
