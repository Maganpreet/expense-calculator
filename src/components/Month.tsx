import './Month.css';

const Month: React.FC<{
  month: number;
  expenses: number[];
  totalDays: number;
}> = (props) => {

    if (props.expenses.length === 0) {
        for (let i = 0; i < props.totalDays; i++) {
            props.expenses.push(0)
        }
    }

  return (
    <>
      <div className="calendar">
        {
            props.expenses.map((expense, idx) => <button color="red" key={idx} value={expense}>{expense}</button>)
        }
      </div>
    </>
  );
};

export default Month;
