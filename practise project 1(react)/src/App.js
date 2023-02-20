import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import axios from "axios"
import { useEffect, useState } from "react";


const detail = [{
  date: new Date(2020,0,1),
  title: 'Washing Machine',
  amount: 1000
},
{
  date: new Date(2020,1,1),
  title: 'pootty Machine',
  amount: 2000
},
{
  date: new Date(2021,2,1),
  title: 'pishi Machine',
  amount: 3000
},
{
  date: new Date(2022,3,1),
  title: 'haggu Machine',
  amount: 4000
}];


function App() {
  const [expenses, setExpenses] = useState(detail);
  
  function addExpenseHandler(expenseData){
    setExpenses(prevState => [expenseData, ...prevState]);
    console.log(expenseData);
  }

  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}></NewExpense>
      <Expenses detail = {expenses}></Expenses>
    </div>
  );
}

// function App(){
//   let [coins, setCoins] = useState([]) 

//   useEffect(() => {
//     async function fetchCoins(){
//     const response = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0')
//     const {coins} = response.data;
//     setCoins(coins);
//     console.log(coins);
//   }
//     fetchCoins();
//    }, []);
   
//   return(
//     <div>
//       {coins.map(c => <h2>{c.name}</h2>)}
//     </div>
//   )
// }

export default App;