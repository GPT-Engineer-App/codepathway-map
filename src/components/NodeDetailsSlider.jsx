import React, { useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Star } from "lucide-react";

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

  const prerequisites = [
    { title: "Dynamic Arrays", course: "Data Structures & Algorithms for Beginners" },
    { title: "Hash Usage", course: "Data Structures & Algorithms for Beginners" },
    { title: "Hash Implementation", course: "Data Structures & Algorithms for Beginners" },
    { title: "Prefix Sums", course: "Advanced Algorithms" },
  ];

  const problems = [
    { status: false, problem: "Contains Duplicate", difficulty: "Easy", code: "Python" },
    { status: false, problem: "Valid Anagram", difficulty: "Easy", code: "Python" },
    { status: false, problem: "Two Sum", difficulty: "Easy", code: "Python" },
    { status: false, problem: "Group Anagrams", difficulty: "Medium", code: "Python" },
    { status: false, problem: "Top K Frequent Elements", difficulty: "Medium", code: "Python" },
    { status: false, problem: "Encode and Decode Strings", difficulty: "Medium", code: "Python" },
    { status: false, problem: "Product of Array Except Self", difficulty: "Medium", code: "Python" },
    { status: false, problem: "Valid Sudoku", difficulty: "Medium", code: "Python" },
    { status: false, problem: "Longest Consecutive Sequence", difficulty: "Medium", code: "Python" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-4/5 max-w-4xl sm:max-w-full bg-gray-900 text-white overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold text-white flex justify-between items-center">
            {nodeData.label}
            <Button variant="ghost" size="icon" onClick={onClose} className="text-white">
              <X className="h-6 w-6" />
            </Button>
          </SheetTitle>
          <Progress value={0} className="w-full bg-gray-700" indicatorClassName="bg-blue-500" />
          <div className="text-sm text-gray-400 mt-2">
            (0 / 9)
          </div>
        </SheetHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
            <div className="grid grid-cols-2 gap-4">
              {prerequisites.map((prereq, index) => (
                <div key={index} className="bg-gray-800 p-3 rounded-lg">
                  <h4 className="font-semibold mb-1">{prereq.title}</h4>
                  <p className="text-xs text-gray-400">{prereq.course}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Star</TableHead>
                  <TableHead className="text-white">Problem</TableHead>
                  <TableHead className="text-white">Difficulty</TableHead>
                  <TableHead className="text-white">Video Solution</TableHead>
                  <TableHead className="text-white">Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {problems.map((problem, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <input type="checkbox" checked={problem.status} readOnly />
                    </TableCell>
                    <TableCell>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </TableCell>
                    <TableCell>{problem.problem}</TableCell>
                    <TableCell className={problem.difficulty === 'Easy' ? 'text-green-500' : 'text-yellow-500'}>
                      {problem.difficulty}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <span className="sr-only">Video</span>
                        🎥
                      </Button>
                    </TableCell>
                    <TableCell>{problem.code}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NodeDetailsSlider;