#!/usr/bin/env bash

# ============================================================
# Workflow Builder UI
# Frontend Intern Take-Home Assignment
# ============================================================

# ------------------------------------------------------------
# Overview
# ------------------------------------------------------------
# Workflow Builder UI is a single-page React application that
# allows users to visually create, edit, and manage workflows.
#
# The application represents workflows as a tree of nodes
# where each node can be an Action, Branch, or End.
#
# The focus of this project is:
# - Data modeling
# - Component architecture
# - State management
# - User experience (UX)
#
# No UI libraries or workflow/diagram libraries are used.
# All layout, styling, and interactions are built from scratch.
# ------------------------------------------------------------


# ------------------------------------------------------------
# Tech Stack
# ------------------------------------------------------------
# - React (Functional Components + Hooks)
# - JavaScript (ES6+)
# - Vite (Development Server)
# - CSS (Pure CSS, no frameworks)
# ------------------------------------------------------------


# ------------------------------------------------------------
# Features
# ------------------------------------------------------------
# - Visual workflow canvas
# - Start node initialized by default
# - Supports three node types:
#     1. Action  -> single outgoing connection
#     2. Branch  -> multiple outgoing connections
#     3. End     -> no outgoing connections
#
# - Add nodes dynamically
# - Delete nodes with automatic reconnection
# - Edit node labels inline
# - Recursive rendering for unlimited depth
# - Centered canvas layout
# - Smooth UI transitions and animations
# - Glassmorphism, modern UI design
# ------------------------------------------------------------


# ------------------------------------------------------------
# Project Structure
# ------------------------------------------------------------
# src/
# ├── components/
# │   ├── WorkflowCanvas.jsx   # Canvas wrapper
# │   ├── NodeRenderer.jsx     # Recursive tree renderer
# │   └── NodeCard.jsx         # Node UI and interactions
# │
# ├── utils/
# │   └── workflowActions.js   # Add, delete, update logic
# │
# ├── App.jsx                  # Root component
# ├── main.jsx                 # App entry point
# └── styles.css               # Global styling
# ------------------------------------------------------------


# ------------------------------------------------------------
# Data Model
# ------------------------------------------------------------
# The workflow is stored as a normalized object:
#
# {
#   rootId: "start",
#   nodes: {
#     start: {
#       id: "start",
#       type: "START",
#       label: "Start",
#       children: []
#     }
#   }
# }
#
# This approach avoids deep nesting and allows efficient updates.
# ------------------------------------------------------------


# ------------------------------------------------------------
# Core Concepts
# ------------------------------------------------------------
# - Recursive Rendering:
#   Nodes are rendered using recursion to support infinite depth.
#
# - Centralized State:
#   Workflow state is stored at the App level and passed down.
#
# - Pure State Updates:
#   All mutations are handled using functional updates.
#
# - UX-First Design:
#   Clean layout, centered flow, subtle animations.
# ------------------------------------------------------------


# ------------------------------------------------------------
# Installation & Setup
# ------------------------------------------------------------
# 1. Clone the repository
#    git clone https://github.com/mkshuklaaa/Workflow-Builder-UI.git
#
# 2. Navigate to the project directory
#    cd Workflow-Builder-UI
#
# 3. Install dependencies
#    npm install
#
# 4. Start development server
#    npm run dev
#
# 5. Open in browser
#    http://localhost:5173
# ------------------------------------------------------------


# ------------------------------------------------------------
# How Node Deletion Works
# ------------------------------------------------------------
# - When a node is deleted:
#   - The node is removed from the workflow
#   - Its parent automatically connects to its children
#   - This preserves workflow continuity
#
# This logic ensures the flow never breaks.
# ------------------------------------------------------------


# ------------------------------------------------------------
# Design Decisions
# ------------------------------------------------------------
# - No external UI libraries to demonstrate core CSS skills
# - No workflow libraries to show understanding of rendering logic
# - Normalized data structure for scalability
# - Clear separation between UI and business logic
# ------------------------------------------------------------


# ------------------------------------------------------------
# Future Improvements
# ------------------------------------------------------------
# - True/False branch labeling
# - SVG curved connection lines
# - Zoom and pan support
# - Save/load workflow as JSON
# - Keyboard shortcuts
# ------------------------------------------------------------


# ------------------------------------------------------------
# Author
# ------------------------------------------------------------
# Manish Kumar Shukla
# Frontend / Full Stack Developer
# ------------------------------------------------------------

echo "Workflow Builder UI README loaded successfully"
