import React from 'react';
import Chart from '../Chart/Chart'

const ExpenseChart = (props) => {
    const dataPoints = [
        { id: 1, label: 'January', value: 0},
        { id: 2, label: 'February', value: 0},
        { id: 3, label: 'March', value: 0},
        { id: 4, label: 'April', value: 0},
        { id: 5, label: 'May', value: 0},
        { id: 6, label: 'June', value: 0},
        { id: 7, label: 'July', value: 0},
        { id: 8, label: 'August', value: 0},
        { id: 9, label: 'September', value: 0},
        { id: 10, label: 'October', value: 0},
        { id: 11, label: 'November', value: 0},
        { id: 12, label: 'December', value: 0},
    ]
    // for (const expense of props.expenses) {
    //     const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    //     dataPoints[expenseMonth].value += expense.amount;
    //   }
    props.expenses.forEach((expense) => 
        {
            const expenseMonth = expense.date.getMonth();
            dataPoints[expenseMonth].value += expense.amount
        })
    return (
        <div className="expense-chart">
            <Chart dataPoints={dataPoints} />
        </div>
    );
};

export default ExpenseChart;