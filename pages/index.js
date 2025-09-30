import { useState } from "react";

export default function Home() {
  const [nodes, setNodes] = useState([
    { id: 1, text: "Idea 1", x: 100, y: 100 },
    { id: 2, text: "Idea 2", x: 300, y: 200 },
  ]);

  const [darkMode, setDarkMode] = useState(false);

  const handleDrag = (id, e) => {
    const newNodes = nodes.map(node =>
      node.id === id
        ? { ...node, x: e.clientX - 50, y: e.clientY - 20 }
        : node
    );
    setNodes(newNodes);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "#1a1a1a" : "#ffffff",
        color: darkMode ? "#e5e5e5" : "#1a1a1a",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px"
      }}>
        <h1>Vind Planner</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            padding: "6px 12px",
            border: "none",
            borderRadius: "6px",
            background: "#4ade80",
            cursor: "pointer",
          }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Nodes */}
      {nodes.map(node => (
        <div
          key={node.id}
          style={{
            position: "absolute",
            top: node.y,
            left: node.x,
            padding: "10px 20px",
            background: "#4ade80", // green theme
            borderRadius: "8px",
            cursor: "grab",
            userSelect: "none",
          }}
          draggable
          onDrag={e => handleDrag(node.id, e)}
        >
          {node.text}
        </div>
      ))}
    </div>
  );
}
