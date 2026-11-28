import { useState } from "react";
import "./App.css";

interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [currVal, setCurrVal] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function removeHandler(id: string) {
    const result = todos.filter((e) => e.id !== id);
    setTodos(result);
  }
  function addBtnHandler() {
    const title = currVal.trim();
    if (!title) return;

    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: `${Date.now()}`,
        title,
        isCompleted: false,
      },
    ]);
    setCurrVal("");
  }

  return (
    <main className="todo-page">
      <section className="todo-card" aria-labelledby="todo-title">
        <header className="todo-header">
          <div>
            <p className="eyebrow">Today's focus</p>
            <h1 id="todo-title">My Tasks</h1>
          </div>
          <span className="task-count" aria-label={`${todos.length} tasks`}>
            {todos.length}
          </span>
        </header>

        <form
          className="todo-form"
          onSubmit={(event) => {
            event.preventDefault();
            addBtnHandler();
          }}
        >
          <input
            onChange={(e) => setCurrVal(e.target.value)}
            value={currVal}
            type="text"
            placeholder="What needs to be done?"
            aria-label="New todo"
          />
          <button type="submit" disabled={!currVal.trim()}>
            Add task
          </button>
        </form>

        <div className="todo-list-section">
          {todos.length === 0 ? (
            <div className="empty-state">
              <span className="empty-icon" aria-hidden="true">✓</span>
              <p>No tasks yet</p>
              <span>Add a task to get started.</span>
            </div>
          ) : (
            <ul className="todo-list">
              {todos.map((todo) => (
                <li className="todo-item" key={todo.id}>
                  <span className="todo-check" aria-hidden="true" />
                  <span className="todo-title">{todo.title}</span>
                  <button
                    className="remove-button"
                    type="button"
                    onClick={() => removeHandler(todo.id)}
                    aria-label={`Remove ${todo.title}`}
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
