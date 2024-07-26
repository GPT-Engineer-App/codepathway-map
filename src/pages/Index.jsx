import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import { nodeData, edges } from '../data/nodeData';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const nodeTypes = {
  custom: ({ data }) => (
    <div className="bg-blue-600 text-white rounded-lg px-4 py-2 shadow-md">
      <div className="font-semibold">{data.label}</div>
      <div className="h-1 bg-white/30 mt-2 rounded-full">
        <div className="h-full bg-white rounded-full" style={{ width: `${data.progress}%` }}></div>
      </div>
    </div>
  ),
};

const Index = () => {
  const [nodes, setNodes] = useState(nodeData.map(node => ({ ...node, type: 'custom' })));
  const navigate = useNavigate();

  const onNodeClick = (event, node) => {
    navigate(`/unit/${node.id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Your Learning Journey</h1>
        <div className="bg-gray-900 rounded-lg shadow-md p-4 mb-6" style={{ height: 'calc(100vh - 200px)' }}>
          <ReactFlow 
            nodes={nodes}
            edges={edges}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
            defaultEdgeOptions={{
              style: { stroke: 'white' },
              type: 'smoothstep',
            }}
          />
        </div>
      </main>
      <aside className="w-80 bg-gray-800 p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Select Roadmap</h2>
        <div className="flex space-x-2 mb-6">
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">Algorithms</Button>
          <Button variant="outline" className="text-white border-white hover:bg-gray-700">Courses</Button>
        </div>
        <div className="mb-2 text-sm">(0 / 150)</div>
        <Progress value={0} className="w-full bg-gray-600" indicatorClassName="bg-white" />
      </aside>
    </div>
  );
};

export default Index;