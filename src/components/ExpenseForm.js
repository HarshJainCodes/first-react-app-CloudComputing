import './ExpenseForm.css'
import { useState } from 'react'
import ExpenseItem from './ExpenseItem';

const ExpenseForm = (props) => {
    const [enteredInput, setEnteredInput] = useState("");
    const [enteredAmount, setEnteredAmount] = useState(0);
    const [enteredDate, setEnteredDate] = useState(new Date('2019-1-1'));

    const inputChangeHandler = (event) => {
        setEnteredInput(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const enteredDateHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const enteredData = {
            title : enteredInput,
            amount : enteredAmount,
            date : new Date(enteredDate)
        };

        setEnteredInput('');
        setEnteredAmount('');
        setEnteredDate('');

        // props.expenseData.push({
        //     name: enteredData.title,
        //     date: enteredData.date,
        //     price: enteredData.amount,
        // });

        // const newExpenseData = [{
        //     key : Math.random().toString(),
        //     name: enteredData.title,
        //     date: enteredData.date,
        //     price: enteredData.amount,
        // }, ...props.expenseData]

        props.setExpenseData((prev) => {
            return [
                {
                    key : Math.random().toString(),
                    name: enteredData.title,
                    date: enteredData.date,
                    price: enteredData.amount,
                },
                ...prev
            ]
        });

        props.onSaveEnteredData(enteredData);
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className='new-expense__control'>
                    <label> Title </label>
                    <input type="text" value={enteredInput} onChange={inputChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label> Amount </label>
                    <input type="number" min = "0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                </div>

                <div className='new-expense__control'>
                    <label> Date </label>
                    <input type="date" min="2019-1-1" max="2022-12-31" value={enteredDate} onChange={enteredDateHandler}/> 
                </div>
            </div>

            <div className='new-expense__actions'>
                <button type='submit'>
                    Add Expense
                </button>
            </div>
        </form>
    )
}

export default ExpenseForm;