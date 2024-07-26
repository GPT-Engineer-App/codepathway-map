import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import { nodeData, edges } from '../data/nodeData';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Rocket, BookOpen, Code, Map } from "lucide-react";

const Index = () => {
  const [nodes, setNodes] = useState(nodeData);
  const navigate = useNavigate();

  const onNodeClick = (event, node) => {
    navigate(`/unit/${node.id}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-6">Your Learning Journey</h1>
        <div className="bg-white rounded-lg shadow-md p-4 mb-6" style={{ height: '60vh' }}>
          <ReactFlow 
            nodes={nodes}
            edges={edges}
            onNodeClick={onNodeClick}
            fitView
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookOpen className="mr-2 h-4 w-4" /> Courses
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Explore our curated courses</p>
              <Button className="mt-4">View Courses</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-4 w-4" /> Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Sharpen your skills with coding challenges</p>
              <Button className="mt-4">Start Practicing</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="mr-2 h-4 w-4" /> Roadmap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Plan your learning path</p>
              <Button className="mt-4">View Roadmap</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <aside className="w-80 bg-white p-6 border-l">
        <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Overall Completion</h3>
            <Progress value={33} className="w-full" />
          </div>
          <div>
            <h3 className="font-medium mb-2">Current Course</h3>
            <p className="text-sm text-gray-600 mb-2">Data Structures & Algorithms</p>
            <Progress value={75} className="w-full" />
          </div>
          <div>
            <h3 className="font-medium mb-2">Next Milestone</h3>
            <p className="text-sm text-gray-600">Complete Binary Trees module</p>
          </div>
        </div>
        <Button className="w-full mt-6">
          <Rocket className="mr-2 h-4 w-4" /> Continue Learning
        </Button>
      </aside>
    </div>
  );
};

export default Index;