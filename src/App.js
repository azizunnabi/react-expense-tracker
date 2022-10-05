import { useState } from "react";
import Button from "./components/Button";
import Model from "./components/Model";
import Create from "./components/Create";
function App() {
  const [model, setModel] = useState(false);
  const [data, setData] = useState({
    balance: 0,
    income: 0,
    expenses: 0,
    history: [],
  });
  const addRecord = (userData) => {
    console.log(userData);
  };
  const openModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };
  return (
    <div className="max-w-screen-lg mx-auto my-10 flex justify-center">
      <Button open={openModel} />
      <Model modelState={model} close={closeModel}>
        {/* <h1>Hello rehan</h1>
        <p>Hello Aziz</p> */}
        <Create closeForm={closeModel} createRecord={addRecord} />
      </Model>
    </div>
  );
}

export default App;
