import { useState } from "react";
import { Calculate } from "./Calculate";
import useCounter from "./counter";
import { List } from "./ListUSer";
import { Stopwatch } from "./Stopwatch";

function App() {
  const [counter, setCounter] = useState(0)
  const [count, increment, decrement] = useCounter(0, 2)

  const onDecrement = () => {
    if (counter === 0) {
      setCounter(0)
      alert("Gaboleh kurang dari 0")
    } else {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="App">
      <h1>Counter = {count}</h1>
      <button onClick={decrement} >Decrement</button>
      <button style={{marginBottom: "30px"}} onClick={increment} >Increment</button>
      <Calculate />
      <Stopwatch />
      <List />
    </div>
  );
}

export default App;
