import React, { useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NodeDetailsSlider = ({ isOpen, onClose, nodeData }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!nodeData) return null;

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-[400px] sm:w-[540px] bg-gray-900 text-white">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold text-white flex justify-between items-center">
            {nodeData.label}
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </SheetTitle>
          <Progress value={nodeData.progress} className="w-full bg-gray-700" indicatorClassName="bg-blue-500" />
          <div className="text-sm text-gray-400 mt-2">
            ({Math.round(nodeData.progress)}% Complete)
          </div>
        </SheetHeader>
        
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {['Dynamic Arrays', 'Hash Usage', 'Hash Implementation', 'Prefix Sums'].map((prereq, index) => (
              <div key={index} className="bg-gray-800 p-3 rounded-lg">
                <h3 className="font-semibold mb-1">{prereq}</h3>
                <p className="text-xs text-gray-400">Data Structures & Algorithms for Beginners</p>
              </div>
            ))}
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2">Status</th>
                  <th className="text-left py-2">Problem</th>
                  <th className="text-left py-2">Difficulty</th>
                  <th className="text-left py-2">Video</th>
                  <th className="text-left py-2">Code</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample table rows - replace with actual data */}
                <tr className="border-b border-gray-800">
                  <td className="py-2">□</td>
                  <td className="py-2">Contains Duplicate</td>
                  <td className="py-2 text-green-500">Easy</td>
                  <td className="py-2">▶</td>
                  <td className="py-2">Python</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NodeDetailsSlider;