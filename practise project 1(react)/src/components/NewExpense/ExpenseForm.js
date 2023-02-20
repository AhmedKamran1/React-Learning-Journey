import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setEnteredTitle] = useState("");
  const [amount, setEnteredAmount] = useState("");
  const [date, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   amount: "",
  //   date: new Date()
  // });

  function TitleChangeHandler(event) {
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     title: event.target.value,
    //   };
    // });

    setEnteredTitle(event.target.value);
  }

  function AmountChangeHandler(event) {
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     amount: event.target.value,
    //   };
    // });

    setEnteredAmount(event.target.value);
  }

  function DateChangeHandler(event) {
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     date: new Date(event.target.value)
    //   };
    // });
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  }
  const [view, setView] = useState(false)

  function viewForm(){
    setView(true)
  }

  function removeForm(){
    setView(false)
  }

  let form = (
    <div className="new-expense__actions">
      <button type="submit" onClick={viewForm}>Add New Expense</button>
    </div>
  );

  if (view) {
    form = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" value={title} onChange={TitleChangeHandler} />
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              onChange={AmountChangeHandler}
            />
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input
              type="date"
              min="2019-12-31"
              max="2022-12-31"
              value={date}
              onChange={DateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={removeForm}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    );
  }

  return <>{form}</>;

  // return (
  //   <form onSubmit={submitHandler}>
  //     <div className="new-expense__controls">
  //       <div className="new-expense__controls">
  //         <label>Title</label>
  //         <input type="text" value={title} onChange={TitleChangeHandler} />
  //       </div>
  //       <div className="new-expense__controls">
  //         <label>Amount</label>
  //         <input
  //           type="number"
  //           min="0.01"
  //           step="0.01"
  //           value={amount}
  //           onChange={AmountChangeHandler}
  //         />
  //       </div>
  //       <div className="new-expense__controls">
  //         <label>Date</label>
  //         <input
  //           type="date"
  //           min="2019-12-31"
  //           max="2022-12-31"
  //           value={date}
  //           onChange={DateChangeHandler}
  //         />
  //       </div>
  //     </div>
  //     <div className="new-expense__actions">
  //       <button type="submit">Cancel</button>
  //       <button type="submit">Add Expense</button>
  //     </div>
  //   </form>
  // );
}

export default ExpenseForm;
