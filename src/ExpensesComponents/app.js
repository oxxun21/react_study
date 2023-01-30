import React, { useState } from "react";
import ExpenseItem from "./ExpensesComponents/Expenses/Expenses"
import NewExpense from "./ExpensesComponents/newExpense/NewExpense";

const DUMMT_EXPENSES = [];

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