import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { nodeData } from '../data/nodeData';

const Index = () => {
  const [nodes, setNodes] = useState(nodeData);
  const navigate = useNavigate();

  const onNodeClick = (event, node) => {
    navigate(`/unit/${node.id}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow relative">
        <div style={{ width: '100%', height: '80vh' }}>
          <ReactFlow 
            nodes={nodes}
            onNodeClick={onNodeClick}
            fitView
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;