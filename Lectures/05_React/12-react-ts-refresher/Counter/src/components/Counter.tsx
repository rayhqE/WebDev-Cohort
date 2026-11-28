import * as React from "react";
import "./Counter.css";

export function Counter() {
  const [count, setCount] = React.useState<number>(0);
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <main className="counter-page">
      <section className="counter-card" aria-label="Counter">
        <output className="counter-value" aria-live="polite">
          {count}
        </output>
        <div className="counter-actions">
          <button
            className="counter-button counter-button-secondary"
            onClick={handleDecrement}
          >
            Decrement
          </button>
          <button
            className="counter-button counter-button-primary"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
        </div>
      </section>
    </main>
  );
}
