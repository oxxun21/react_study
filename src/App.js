import React, { useState } from "react";
import ExpenseItem from "./React완벽가이드/components/Expenses/Expenses"
import NewExpense from "./React완벽가이드/components/newExpense/NewExpense";

const DUMMT_EXPENSES = [
  {
    id: 1,
    title: 'Toilet Paper1',
    amount: 94.12,
    date: new Date(),
  },
  {
    id: 2,
    title: 'Toilet Paper2',
    amount: 94.12,
    date: new Date(),
  },
  {
    id: 3,
    title: 'Toilet Paper3',
    amount: 94.12,
    date: new Date(),
  },
  {
    id: 4,
    title: 'Toilet Paper4',
    amount: 94.12,
    date: new Date(),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMT_EXPENSES);  

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem item={expenses} />
    </div>
  );
}

export default App;