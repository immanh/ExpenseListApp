import React,{useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';
import Card from '../UI/Card';
import './Expenses.module.css';

const Expenses = (props) => 
{
  const [filteredYear, setFilteredYear] = useState('2020');
  
  
  const filterChangeHandler = selectedYear => {
    
      setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((prop) => 
  {
    return prop.date.getFullYear().toString() === filteredYear
  })
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
