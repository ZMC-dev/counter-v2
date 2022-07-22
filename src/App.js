import "./App.css";
import { useState } from "react";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";

function App() {
  const [addCounter, setAddCounter] = useState(0);
 
  return (
    <div className="App">
    <Counter1/>
 
      <button 

      disabled={addCounter === 3 ? true : false}

      onClick={() => {
        setAddCounter(addCounter + 1)
    
        if (setAddCounter === 1) {
          <Counter2/>
          }
        if(setAddCounter === 2) {
          <Counter3/>
          }
        }

      }>Add Counter</button>
    </div>
  );
};

export default App;
