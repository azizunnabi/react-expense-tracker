import { useState } from "react";
import Button from "./components/Button";
import Model from "./components/Model";
import Create from "./components/Create";
import Display from "./components/Display";
function App() {
  const [model, setModel] = useState(false);
  const [data, setData] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
    history: [],
  });
  const addRecord = (userData) => {
    let myIncome = 0;
    let myExpense = 0;
    if (Number(userData.money) > 0) {
      myIncome = Number(userData.money);
    } else {
      myExpense = Number(userData.money);
    }
    setData({
      ...data,
      balance: data.balance + Number(userData.money),
      income: data.income + myIncome,
      expenses: data.expenses + myExpense,
    });
    setModel(false);
  };
  console.log(data);
  const openModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };
  return (
    <div className="max-w-screen-lg mx-auto my-10 flex justify-center">
      <div>
        <Button open={openModel} />
        <Display myData={data} />
        <Model modelState={model} close={closeModel}>
          {/* <h1>Hello rehan</h1>
        <p>Hello Aziz</p> */}
          <Create closeForm={closeModel} createRecord={addRecord} />
        </Model>
      </div>
    </div>
  );
}

export default App;
