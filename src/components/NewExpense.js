import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

const NewExpense = (props) => {
    const saveEnteredDataHandler = (params) => {
        const enteredData = {
            ...params,
            id : Math.random().toString()
        }

        props.onEnteredData(enteredData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveEnteredData = {saveEnteredDataHandler} expenseData = {props.expenseData} setExpenseData = {props.setExpenseData} />
    </div>
}

export default NewExpense;