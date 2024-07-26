import { useState, useCallback } from 'react';
import ReactFlow, { 
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
import { useTheme } from "@/components/theme-provider";

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
      style={{
        ...style,
        strokeWidth: 2,
        stroke: '#ffffff',
      }}
      markerEnd={markerEnd}
    />
  );
};

const edgeTypes = {
  custom: CustomEdge,
};

const Roadmap = () => {
  const [nodes, setNodes] = useState(nodeData.map(node => ({ ...node, type: 'custom' })));
  const [flowEdges, setEdges] = useState([
    ...edges.map(edge => ({ 
      ...edge, 
      type: 'custom',
      animated: true,
      style: { stroke: '#ffffff', strokeWidth: 2 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#ffffff',
        width: 20,
        height: 20,
      },
    })),
    {
      id: 'demo-edge',
      source: '1',
      target: '7',
      type: 'custom',
      animated: true,
      style: { stroke: '#FF5733', strokeWidth: 3 },
      markerEnd: {
        type: MarkerType.ArrowClosed,
        color: '#FF5733',
        width: 25,
        height: 25,
      },
    }
  ]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [isSliderOpen, setIsSliderOpen] = useState(false);
  const { theme } = useTheme();

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setIsSliderOpen(true);
  }, []);

  const closeSlider = useCallback(() => {
    setIsSliderOpen(false);
  }, []);

  const bgColor = theme === 'light' ? '#bdcfe2' : '#202225';

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-grow">
        <main className="flex-grow">
          <div style={{ height: 'calc(100vh - 64px)', backgroundColor: bgColor }}>
            <ReactFlow 
              nodes={nodes}
              edges={flowEdges}
              onNodeClick={onNodeClick}
              nodeTypes={nodeTypes}
              edgeTypes={edgeTypes}
              fitView
              defaultEdgeOptions={{
                type: 'custom',
                animated: true,
                style: { stroke: '#ffffff', strokeWidth: 2 },
                markerEnd: {
                  type: MarkerType.ArrowClosed,
                  color: '#ffffff',
                  width: 20,
                  height: 20,
                },
              }}
            >
              <Controls />
            </ReactFlow>
          </div>
        </main>
        <aside className={`w-80 ${theme === 'light' ? 'bg-white text-gray-800' : 'bg-gray-800 text-white'} p-6 flex flex-col`}>
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Select Roadmap</h2>
            <div className="flex justify-center space-x-2">
              <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">Algorithms</Button>
              <Button 
                variant="ghost" 
                className={`${
                  theme === 'light' 
                    ? 'text-gray-800 hover:bg-white hover:text-gray-900' 
                    : 'text-white hover:bg-gray-800 hover:text-gray-100'
                } rounded-full border-none`}
              >
                Courses
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center mb-2">
            <div className="text-sm mb-1 font-bold">[4 / 150]</div>
            <div className="w-full flex items-center">
              <Progress value={2.67} className="flex-grow h-2 bg-gray-600" />
            </div>
          </div>
        </aside>
        <NodeDetailsSlider 
          isOpen={isSliderOpen}
          onClose={closeSlider}
          nodeData={selectedNode?.data}
        />
      </div>
    </div>
  );
};

export default Roadmap;