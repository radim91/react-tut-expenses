import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../UI/ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");
  const filteredData = props.items.filter((item) => {
    return selectedYear === item.date.getFullYear().toString();
  });

  const selectFilter = (filterYear) => {
    setSelectedYear(filterYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onSelectingFilter={selectFilter}
          selectedYear={selectedYear}
        />
        <ExpensesChart expenses={filteredData} />
        <ExpensesList items={filteredData} />
      </Card>
    </div>
  );
};

export default Expenses;
