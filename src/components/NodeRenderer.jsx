import NodeCard from "./NodeCard";

export default function NodeRenderer({ nodeId, workflow, setWorkflow }) {
  const node = workflow.nodes[nodeId];

  return (
    <div className="node-container">
      <NodeCard node={node} setWorkflow={setWorkflow} />

      <div className="children">
        {node.children.map((child) => (
          <NodeRenderer
            key={child}
            nodeId={child}
            workflow={workflow}
            setWorkflow={setWorkflow}
          />
        ))}
      </div>
    </div>
  );
}
