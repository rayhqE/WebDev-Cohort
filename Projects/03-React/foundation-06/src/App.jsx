import { useState } from "react";

import "./App.css";
import ManualForm from "./ManualForm";
import HookForm from "./HookForm";

function App() {
  const [tab, setTab] = useState("manual");

  return (
    <>
      <div>
        <div className="shell">
          <h1>Job Application</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error,
            adipisci?
          </p>
        </div>
        <div className="tab">
          <button onClick={() => setTab("manual")}>Controlled - Manual</button>
          <button onClick={() => setTab("rhf")}>React Hook form</button>
        </div>
        <h1>Getting started with react</h1>
        {/* conditional rendering */}
        {tab === "manual" ? <ManualForm /> : <HookForm />}
      </div>
    </>
  );
}

export default App;
