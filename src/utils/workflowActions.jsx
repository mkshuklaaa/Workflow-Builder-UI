export function addNode(parentId, type, setWorkflow) {
  setWorkflow((prev) => {
    const id = crypto.randomUUID();

    const newNode = {
      id,
      type,
      label:
        type === "ACTION"
          ? "New Action"
          : type === "BRANCH"
          ? "Condition"
          : "End",
      children: []
    };

    return {
      ...prev,
      nodes: {
        ...prev.nodes,
        [id]: newNode,
        [parentId]: {
          ...prev.nodes[parentId],
          children: [...prev.nodes[parentId].children, id]
        }
      }
    };
  });
}

export function updateLabel(nodeId, newLabel, setWorkflow) {
  setWorkflow((prev) => ({
    ...prev,
    nodes: {
      ...prev.nodes,
      [nodeId]: {
        ...prev.nodes[nodeId],
        label: newLabel
      }
    }
  }));
}

export function deleteNode(nodeId, setWorkflow) {
  setWorkflow((prev) => {
    const nodes = { ...prev.nodes };
    const deletedNode = nodes[nodeId];

    delete nodes[nodeId];

    Object.values(nodes).forEach((node) => {
      node.children = node.children.flatMap((child) =>
        child === nodeId ? deletedNode.children : child
      );
    });

    return { ...prev, nodes };
  });
}

