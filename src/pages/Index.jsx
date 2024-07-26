import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, { Background, Controls, MarkerType } from 'reactflow';
import 'reactflow/dist/style.css';
import { nodeData, edges } from '../data/nodeData';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

const nodeTypes = {
  custom: ({ data }) => (
    <div className="bg-white border-2 border-blue-600 text-blue-600 rounded-lg px-4 py-2 shadow-md w-48">
      <div className="font-semibold">{data.label}</div>
      <Progress value={data.progress} className="mt-2" />
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
      <main className="flex-grow">
        <div className="bg-gray-100 h-full" style={{ height: 'calc(100vh - 64px)' }}>
          <ReactFlow 
            nodes={nodes}
            edges={edges}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            fitView
            minZoom={0.5}
            maxZoom={1.5}
            defaultEdgeOptions={{
              style: { stroke: '#3b82f6', strokeWidth: 2 },
              type: 'smoothstep',
              animated: true,
              markerEnd: {
                type: MarkerType.ArrowClosed,
                color: '#3b82f6',
                width: 20,
                height: 20,
              },
            }}
          >
            <Background color="#e5e7eb" gap={16} />
            <Controls />
          </ReactFlow>
        </div>
      </main>
      <aside className="w-80 bg-white p-6 border-l border-gray-200">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Select Roadmap</h2>
        <div className="flex space-x-2 mb-6">
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">Algorithms</Button>
          <Button variant="outline" className="text-blue-500 border-blue-500 hover:bg-blue-50">Courses</Button>
        </div>
        <div className="mb-2 text-sm text-gray-600">(0 / 150)</div>
        <Progress value={0} className="w-full" />
      </aside>
    </div>
  );
};

export default Index;