import { useState } from 'react';
import './ExpenseItem.css'
import Card from './Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.expenseName);

    function clickHandler(){
        setTitle("Updated");
    }

    return (
    <Card className='expense-item'>
        <ExpenseDate expenseDate = {props.expenseDate}></ExpenseDate>

        <div className='expense-item__description'>
            <h2> {title} </h2>
            <div className='expense-item__price'> {props.expensePrice} </div>
        </div>
 
        <button onClick={clickHandler}>
            Click me
        </button>
    </Card>
    );  
}

export default ExpenseItem;