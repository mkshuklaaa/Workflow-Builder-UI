import { useState } from "react";
import WorkflowCanvas from "./components/WorkflowCanvas";
import "./App.css";

export default function App() {
  const [workflow, setWorkflow] = useState({
    rootId: "start",
    nodes: {
      start: {
        id: "start",
        type: "START",
        label: "Start",
        children: []
      }
    }
  });

  return (
    <div className="app">
      <h1>Workflow Builder</h1>
      <WorkflowCanvas workflow={workflow} setWorkflow={setWorkflow} />
    </div>
  );
}



