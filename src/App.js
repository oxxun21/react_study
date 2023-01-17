import React from "react";
import ExpenseItem from "./React완벽가이드/components/Expenses/Expenses"
import NewExpense from "./React완벽가이드/components/newExpense/NewExpense";

const App = () => {
  const expense = [
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

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpenseItem item={expense} />
    </div>
  );
}

export default App;