import React from 'react';
import './ExpenseForm.css';
import { useState } from 'react';


const ExpenseForm = (props) => 
{
    // Approach 1:
    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState('')
    const [date,setDate] = useState('')

    // Approach 2: Cách này phụ thuộc nhiều vào prevState
    // const [input, setInput] = useState({
    //     title: '', 
    //     amount: '',
    //     date: '', 
    // })
    const handleSubmit = (e) => 
    {
        e.preventDefault();

        const expenseData = {
            title,
            amount,
            date: new Date(date)
        }
        props.onSaveExpenseData(expenseData) // Lifting that data to NewExpense
        // Lifting that state up

        setTitle('')
        setAmount('')
        setDate('')


        // console.log(input)
    }
    const hideShowExpenseForm = () => {
        props.onCancel()
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        value={title}
                        type='text' 
                        onChange={e => setTitle(e.target.value)}
                        // onChange = {(e) => setInput(prevState => {
                        //     return {
                        //         ...prevState,
                        //         title: e.target.value,
                        //     }
                        // })}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                        value={amount}
                        type='number' 
                        min='0.01' 
                        step='0.01'
                        onChange={e => setAmount(e.target.value)}

                        // onChange = {(e) => setInput(prevState => {
                        //     return {
                        //         ...prevState,
                        //         amount: e.target.value,
                        //     }
                        // })}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                        value={date}
                        type='date' 
                        min='2019-01-01' 
                        max='2022-12-31' 
                        onChange={e => setDate(e.target.value)}

                        // onChange = {(e) => setInput(prevState => {
                        //     return {
                        //         ...prevState,
                        //         date: e.target.value,
                        //     }
                        // })}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={hideShowExpenseForm}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
} 
export default ExpenseForm