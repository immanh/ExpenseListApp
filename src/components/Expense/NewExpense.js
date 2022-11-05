import React,{ useState} from'react'
import ExpenseForm from './ExpenseForm.js'
import './NewExpense.css'

const NewExpense = (props) => 
{
    const [showExpense, setShowExpense] = useState(true)
    const saveExpenseData = (enteredExpenseData) => 
    {
        const expenseData =
        {
            id: Math.random().toString(),
            ...enteredExpenseData,

        }
        props.onSaveExpenseData(expenseData) // Lifting that data to App.js
    }
    const hideShowExpense = () => setShowExpense(false)
    const showNewExpenseFormHandler = () => setShowExpense(true)
    let expenseForm = (<button onClick={showNewExpenseFormHandler}>Add New Expense</button>)
    
    if (showExpense)
    {
        expenseForm = <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={hideShowExpense}/>
    }
    return (
        <div className="new-expense">
            {expenseForm}
        </div>
    )
}
export default NewExpense