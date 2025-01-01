import { useState } from "react";
import { INITIAL_EXPENSE_OF_YEAR } from "./utilities/constants";
import "./App.css";
import Month from "./components/Month";
import { getCurrentMonth } from "./utilities/common";

function App() {
  const [calendar, setCalendar] = useState(INITIAL_EXPENSE_OF_YEAR);

  const ExpenseUpdatedHandler = () => {
    setCalendar(INITIAL_EXPENSE_OF_YEAR);
  }

  const currentMonth = getCurrentMonth();

  return (
    <>
      <p>you cant see me</p>
      <Month
        month={currentMonth}
        expenses={calendar[currentMonth].details.expenses}
        totalDays={calendar[currentMonth].totalDays}
      ></Month>
    </>
  );
}

export default App;
