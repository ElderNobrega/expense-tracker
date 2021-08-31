import React, {useState} from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'

import './Expenses.css'

function Expenses(props) {

  const [filteredYear, setfilteredYear] = useState('2022')

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(date => { return date.date.getFullYear().toString() === filteredYear})
  
  let expensesContent = <p>No expenses found.</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(expense => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear}/>
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses