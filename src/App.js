import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Card from "./components/Card";
import NewExpense from "./components/NewExpense";
import { useState } from "react";

function App() {

  var expenseData = [
    {
      	name: "Car Insurance",
      	date: new Date(2023, 7, 5),
      	price: 10000,
    },
    {
      	name: "Train Insurance",
      	date: new Date(2023, 8, 12),
      	price: 20000,
    },
    {
      	name: "Bus Insurance",
      	date: new Date(2023, 9, 14),
      	price: 30000,
    },
    {
      	name: "Bike Insurance",
      	date: new Date(2023, 10, 15),
      	price: 40000,
    },
  ];

  const [expenseDataState, setExpenseDataState] = useState([]);

  const onEnteredDataHandler = (params) => {
	console.log(params);
  }

  return (
	<Card className="expenses">

		<NewExpense onEnteredData = {onEnteredDataHandler} expenseData = {expenseDataState} setExpenseData = {setExpenseDataState} />

		{
			
			expenseDataState.map(
				element => (<ExpenseItem key = {element.key} expenseName = {element.name} expenseDate = {element.date} expensePrice = {element.price} />)
			)
		}

		{/* <ExpenseItem
			expenseName={expenseData[0].name}
			expenseDate={expenseData[0].date}
			expensePrice={expenseData[0].price}
		/>

		<ExpenseItem
			expenseName={expenseData[1].name}
			expenseDate={expenseData[1].date}
			expensePrice={expenseData[1].price}
		/>

		<ExpenseItem
			expenseName={expenseData[2].name}
			expenseDate={expenseData[2].date}
			expensePrice={expenseData[2].price}
		/>

		<ExpenseItem
			expenseName={expenseData[3].name}
			expenseDate={expenseData[3].date}
			expensePrice={expenseData[3].price}
		/> */}
	</Card>
	);
}

export default App;
