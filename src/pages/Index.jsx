import { useState, useCallback } from 'react';
import ReactFlow, { 
  Background, 
  Controls, 
  MarkerType,
  BaseEdge,
  getStraightPath
} from 'reactflow';
import 'reactflow/dist/style.css';
import { nodeData, edges } from '../data/nodeData';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import NodeDetailsSlider from '../components/NodeDetailsSlider';

const nodeTypes = {
  custom: ({ data }) => (
    <div className="bg-blue-600 text-white rounded-lg px-4 py-2 shadow-md">
      <div className="font-semibold">{data.label}</div>
      <div className="h-1 bg-white/30 mt-2 rounded-full">
        <div className="h-full bg-green-500 rounded-full" style={{ width: `${data.progress}%` }}></div>
      </div>
    </div>
  ),
};

const CustomEdge = ({ 
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  style = {},
  markerEnd
}) => {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <BaseEdge
      id={id}
      path={edgePath}
      style={style}
      markerEnd={markerEnd}
    />
  );
};

const edgeTypes = {
  custom: CustomEdge,
};

const Index = () => {
  const [nodes, setNodes] = useState(nodeData.map(node => ({ ...node, type: 'custom' })));
  const [flowEdges, setEdges] = useState([
    ...edges.map(edge => ({ ...edge, type: 'custom' })),
    // Add a new edge to demonstrate the connection line
    {
      id: 'demo-edge',
      source: '1', // ID of the source node (Arrays & Hashing)
      target: '7', // ID of the target node (Trees)
      type: 'custom',
      animated: true,
      style: { stroke: '#FF5733', strokeWidth: 5 }, // Custom style for demonstration
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#FF5733',
        width: 30,
        height: 30,
      },
    }
  ]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setIsSliderOpen(true);
  }, []);

  const closeSlider = useCallback(() => {
    setIsSliderOpen(false);
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-grow">
        <div className="bg-gray-900 h-full" style={{ height: 'calc(100vh - 64px)' }}>
          <ReactFlow 
            nodes={nodes}
            edges={flowEdges}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            fitView
            defaultEdgeOptions={{
              style: { stroke: '#ffffff', strokeWidth: 3 },
              type: 'custom',
              animated: true,
              markerEnd: {
                type: MarkerType.ArrowClosed,
                color: '#ffffff',
                width: 25,
                height: 25,
              },
            }}
          >
            <Background color="#aaa" gap={16} />
            <Controls />
          </ReactFlow>
        </div>
      </main>
      <aside className="w-80 bg-gray-800 p-6 text-white">
        <h2 className="text-xl font-semibold mb-4">Select Roadmap</h2>
        <div className="flex space-x-2 mb-6">
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600">Algorithms</Button>
          <Button variant="outline" className="text-white border-white hover:bg-gray-700">Courses</Button>
        </div>
        <div className="mb-2 text-sm">(0 / 150)</div>
        <Progress value={0} className="w-full bg-gray-600" indicatorClassName="bg-green-500" />
      </aside>
      <NodeDetailsSlider 
        isOpen={isSliderOpen}
        onClose={closeSlider}
        nodeData={selectedNode?.data}
      />
    </div>
  );
};

export default Index;