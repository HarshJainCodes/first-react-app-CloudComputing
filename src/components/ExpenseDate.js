import './ExpenseDate.css'

function ExpenseDate(props){
    const month = props.expenseDate.toLocaleString('en-IN', { month : 'long'});
    const year = props.expenseDate.getFullYear();
    const day = props.expenseDate.toLocaleString('en-IN', { day : '2-digit'});

    return (
        <div className="expense-date">
            <div className='expense-date__month'>
                {month}
            </div>

            <div className='expense-date__year'>
                {year}
            </div>

            <div className='expense-date__day'>
                {day}
            </div>
        </div>
    );
}

export default ExpenseDate;