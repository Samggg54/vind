import { useState } from "react";

export default function Home() {
  const [nodes, setNodes] = useState([
    { id: 1, text: "Idea 1", x: 100, y: 100 },
    { id: 2, text: "Idea 2", x: 300, y: 200 },
  ]);

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
        backgroundColor: "#ffffff",
        color: "#1a1a1a",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      <h1 style={{ textAlign: "center", padding: "20px" }}>Vind Planner</h1>

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
