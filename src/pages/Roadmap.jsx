import React from 'react';
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Roadmap = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex flex-grow">
        <main className="flex-grow p-6">
          <h1 className="text-3xl font-bold mb-6">Roadmap</h1>
          <p className="mb-4">Your learning journey visualization will be implemented here.</p>
        </main>
        <aside className="w-80 bg-[#2f3136] text-white p-6 flex flex-col">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Select Roadmap</h2>
            <div className="flex justify-center space-x-2">
              <Button variant="default" className="bg-[#3f4bd1] hover:bg-[#3f4bd1]/80 text-white rounded-full">Algorithms</Button>
              <Button 
                variant="ghost" 
                className="text-white hover:bg-gray-700 hover:text-gray-100 rounded-full border-none"
              >
                Courses
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center mb-2">
            <div className="text-sm mb-1 font-bold">[0 / 150]</div>
            <div className="w-full flex items-center">
              <Progress value={0} className="flex-grow h-2 bg-gray-600" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Roadmap;