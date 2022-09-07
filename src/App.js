import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      date: new Date(2022, 4, 30),
      title: "Car insurance",
      amount: 297.56,
    },
    {
      date: new Date(2022, 5, 18),
      title: "Nursery",
      amount: 20,
    },
    {
      date: new Date(2022, 6, 1),
      title: "Children's day",
      amount: 5,
    },
  ];

  return (
    <div>
      <h1>Let's get started</h1>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
