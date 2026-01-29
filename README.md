# Workflow Builder UI

A **visual workflow builder** built with React that allows users to create, edit, and manage workflow trees interactively — without using any external UI or workflow/diagram libraries.

🔗 **Repository**: https://github.com/mkshuklaaa/Workflow-Builder-UI.git

---

## 🚀 Overview

Workflow Builder UI is a **single-page application** designed to visually represent workflows as a connected set of nodes.  
Users can dynamically add, edit, and delete steps while maintaining a continuous flow.

This project focuses on evaluating:
- Data modeling
- Component architecture
- State management
- User experience (UX)
- Core React and CSS skills

> ⚠️ No UI libraries (Material UI, Chakra, etc.)  
> ⚠️ No workflow/diagram libraries (React Flow, GoJS, etc.)

---

## ✨ Features

### 🧩 Workflow Canvas
- Starts with a **root “Start” node**
- Nodes are displayed in a centered, vertical flow layout
- Recursive rendering supports unlimited depth

### 🧱 Supported Node Types

| Node Type | Description | Outgoing Connections |
|----------|------------|----------------------|
| **Start** | Root of workflow | 1 |
| **Action** | Single task/step | 1 |
| **Branch** | Conditional decision point | Multiple |
| **End** | Final step | 0 |

### ✏️ Editing & Interaction
- Add **Action**, **Branch**, or **End** nodes
- Inline editing of node labels
- Delete nodes with automatic reconnection
- Smooth animations and hover effects
- Modern, eye-catching UI using pure CSS

---

## 🧠 Architecture

src/
├── components/
│ ├── WorkflowCanvas.jsx # Canvas container
│ ├── NodeRenderer.jsx # Recursive tree renderer
│ └── NodeCard.jsx # Node UI & actions
│
├── utils/
│ └── workflowActions.js # Add, update, delete logic
│
├── App.jsx # Root component
├── main.jsx # Entry point
└── styles.css # Global styles


---

## 📊 Data Model

The workflow is stored as a **normalized structure**:

```js
{
  rootId: "start",
  nodes: {
    start: {
      id: "start",
      type: "START",
      label: "Start",
      children: []
    }
  }
}
```
## 🛠️ Installation & Setup
# Clone the repository
git clone https://github.com/mkshuklaaa/Workflow-Builder-UI.git

# Navigate into the project
cd Workflow-Builder-UI

# Install dependencies
npm install

# Start development server
```npm run dev```
#Open in browser:
```http://localhost:5173```
