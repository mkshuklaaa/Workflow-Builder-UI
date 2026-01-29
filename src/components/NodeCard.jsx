import {
  addNode,
  updateLabel,
  deleteNode
} from "../utils/workflowActions";

export default function NodeCard({ node, setWorkflow }) {
  return (
    <div className={`node ${node.type.toLowerCase()}`}>
      
      {/* NODE TYPE BADGE */}
      <div className="node-header">
        <span className="badge">{node.type}</span>
      </div>

      {/* EDITABLE LABEL */}
      <input
        className="node-input"
        value={node.label}
        onChange={(e) =>
          updateLabel(node.id, e.target.value, setWorkflow)
        }
      />

      {/* ACTION BUTTONS */}
      <div className="node-actions">
        {node.type !== "END" && (
          <>
            <button
              className="btn action"
              onClick={() => addNode(node.id, "ACTION", setWorkflow)}
            >
              ➕ Action
            </button>

            <button
              className="btn branch"
              onClick={() => addNode(node.id, "BRANCH", setWorkflow)}
            >
              🔀 Branch
            </button>

            <button
              className="btn end"
              onClick={() => addNode(node.id, "END", setWorkflow)}
            >
              ⏹ End
            </button>
          </>
        )}

        {node.id !== "start" && (
          <button
            className="btn delete"
            onClick={() => deleteNode(node.id, setWorkflow)}
          >
            ❌ Delete
          </button>
        )}
      </div>
    </div>
  );
}
