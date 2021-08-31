import React, {useState} from 'react'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'
 

import './Expenses.css'

function Expenses(props) {

  const [filteredYear, setfilteredYear] = useState('2021')

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear)
  }

  const filteredExpenses = props.items.filter(date => { return date.date.getFullYear().toString() === filteredYear})

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onChangeFilter={filterChangeHandler} selectedYear={filteredYear}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  )
}

export default Expenses