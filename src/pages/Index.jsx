import React from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow flex items-center justify-between px-12 py-16">
        <div className="max-w-xl">
          <h1 className="text-6xl font-bold mb-4">NeetCode</h1>
          <p className="text-2xl mb-8">A better way to prepare for coding interviews.</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full text-lg">
            Get Pro
          </Button>
        </div>
        <div className="w-1/2">
          <div className="bg-gray-800 w-full h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Mind Map Placeholder</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;