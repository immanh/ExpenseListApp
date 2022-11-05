import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  // console.log('ExpenseItem evaluated by React');s
  
  const clickHandler = () => {
    setTitle('Updated!');
    // console.log(title);
  };
  // console.log('re-render');

  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          {/* <input type='text' className='expense-item'></input> */}
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>

  );
}

export default ExpenseItem;
