import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpenseList = (props) => 
{
    if (props.items.length === 0) {
        return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
    }
  return (
    <ul>
        {
          props.items.map((prop) => 
          {
            return <ExpenseItem
            key={prop.id}
            title={prop.title}
            amount={prop.amount}
            date={prop.date}
            />
          })
        }
    </ul>
  );
}

export default ExpenseList;
