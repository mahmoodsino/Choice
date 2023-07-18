import { NewsMainSection } from "@/components";
import React from "react";
// import ReactFlow from "reactflow";
// import { Handle, Position } from "reactflow";

// import "reactflow/dist/style.css";

// const CustomNode = ({ data }: any) => {
//   return (
//     <div
//       style={{ backgroundColor: "white" }}
//       className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400"
//     >
//       <span className="!border">{data.name}</span>
//       <span>{data.label}</span>
//       <Handle
//         type="target"
//         position={Position.Top}
//         className="w-16 !bg-teal-500 !border"
//       />
//       <Handle
//         type="source"
//         position={Position.Bottom}
//         className="w-16 !bg-teal-500 !border"
//       />
//     </div>
//   );
// };

// const nodeTypes = {
//   custom: CustomNode,
// };

// const initialNodes = [
//   {
//     id: "1",
//     position: { x: 100, y: 0 },
//     data: { label: "1", name: "mahmood" },
//     type: "custom",
//   },
//   { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
//   { id: "3", position: { x: 200, y: 100 }, data: { label: "3" } },
//   { id: "4", position: { x: -100, y: 200 }, data: { label: "4" } },
//   { id: "5", position: { x: 100, y: 200 }, data: { label: "5" } },
//   { id: "6", position: { x: 300, y: 200 }, data: { label: "6" } },
//   { id: "7", position: { x: 500, y: 200 }, data: { label: "6" } },
// ];
// const initialEdges = [
//   { id: "e1-2", source: "1", target: "2" },
//   { id: "e2-2", source: "1", target: "3" },
//   { id: "e2-2", source: "2", target: "4" },
//   { id: "e2-2", source: "2", target: "5" },
//   { id: "e2-2", source: "3", target: "6" },
//   { id: "e2-2", source: "3", target: "7" },
// ];

export default function App() {
  return (
    // <div style={{ width: "500px", height: "100vh" }}>
    //   <ReactFlow
    //     nodeTypes={nodeTypes}
    //     nodes={initialNodes}
    //     edges={initialEdges}
    //   />
    // </div>
    <div>
      <NewsMainSection />
    </div>
  );
}
