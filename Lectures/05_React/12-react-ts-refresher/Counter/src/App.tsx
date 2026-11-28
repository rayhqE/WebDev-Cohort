import { Counter } from "./components/Counter.tsx";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Add Counter</button>
      <div>
        {new Array(count).fill(null).map(() => (
          <Counter />
        ))}
      </div>
    </div>
  );
};

export default App;
