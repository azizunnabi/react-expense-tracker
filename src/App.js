import { useState } from "react";
import Button from "./components/Button";
import Model from "./components/Model";
function App() {
  const [model, setModel] = useState(false);
  const openModel = () => {
    setModel(true);
  };
  const closeModel = () => {
    setModel(false);
  };
  return (
    <div className="max-w-screen-lg mx-auto my-10 flex justify-center">
      <Button open={openModel} />
      <Model modelState={model} close={closeModel} />
    </div>
  );
}

export default App;
