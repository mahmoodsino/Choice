import { NewsMainSection } from "@/components";

// import "reactflow/dist/style.css";
// interface CustomNodeProps extends NodeProps {
//   draggable?: boolean;
//   selectable?: boolean;
// }

// const initNodes = [
//   {
//     id: "1",
//     type: "custom",
//     data: { name: "Jane Doe", job: "CEO", emoji: "😎" },
//     position: { x: 0, y: 50 },
//   },
//   {
//     id: "2",
//     type: "custom",
//     data: { name: "Tyler Weary", job: "Designer", emoji: "🤓" },

//     position: { x: -200, y: 200 },
//   },
//   {
//     id: "3",
//     type: "custom",
//     data: { name: "Kristi Price", job: "Developer", emoji: "🤩" },
//     position: { x: 200, y: 200 },
//   },
// ];

// const initEdges = [
//   {
//     id: "e1-2",
//     source: "1",
//     target: "2",
//   },
//   {
//     id: "e1-3",
//     source: "1",
//     target: "3",
//   },
// ];
// const CustomNode = ({ data, draggable, selectable }: CustomNodeProps) => {
//   // Replace with your custom node component implementation
//   return (
//     <div style={{ background: "lightblue", padding: 10 }}>{data.name}</div>
//   );
// };

// const nodeTypes = {
//   default: CustomNode,
// };
const news = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges);

//   const onConnect = useCallback(
//     (params) => setEdges((eds) => addEdge(params, eds)),
//     [setEdges]
//   );

  return (
   
    <div>
      <NewsMainSection/>
    </div>
  );
};

export default news;
