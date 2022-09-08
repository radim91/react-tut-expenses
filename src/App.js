import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: 1,
    date: new Date(2020, 4, 30),
    title: "Car insurance",
    amount: 297.56,
  },
  {
    id: 2,
    date: new Date(2021, 5, 18),
    title: "Nursery",
    amount: 20,
  },
  {
    id: 3,
    date: new Date(2022, 0, 15),
    title: "Children's day",
    amount: 555,
  },
  {
    id: 4,
    date: new Date(2022, 8, 20),
    title: "Vacation",
    amount: 1215.6,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <Expenses items={expenses} />
      <NewExpense onAddExpense={addExpenseHandler} />
    </div>
  );
};

export default App;
