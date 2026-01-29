import NodeRenderer from "./NodeRenderer";

export default function WorkflowCanvas({ workflow, setWorkflow }) {
  return (
    <div className="canvas">
      <NodeRenderer
        nodeId={workflow.rootId}
        workflow={workflow}
        setWorkflow={setWorkflow}
      />
    </div>
  );
}
