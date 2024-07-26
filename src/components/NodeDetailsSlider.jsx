import React, { useState, useMemo, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Progress } from "@/components/ui/progress";
import { X, ChevronUp, ChevronDown, Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

const NodeDetailsSlider = ({ isOpen, onClose, nodeData }) => {
  if (!nodeData) return null;

  const [problems, setProblems] = useState([
    { id: 1, status: true, problem: "Contains Duplicate", difficulty: "Easy", code: "Python" },
    { id: 2, status: true, problem: "Valid Anagram", difficulty: "Easy", code: "Python" },
    { id: 3, status: false, problem: "Two Sum", difficulty: "Easy", code: "Python" },
    { id: 4, status: false, problem: "Group Anagrams", difficulty: "Medium", code: "Python" },
    { id: 5, status: true, problem: "Top K Frequent Elements", difficulty: "Medium", code: "Python" },
    { id: 6, status: false, problem: "Encode and Decode Strings", difficulty: "Medium", code: "Python" },
    { id: 7, status: false, problem: "Product of Array Except Self", difficulty: "Medium", code: "Python" },
    { id: 8, status: false, problem: "Valid Sudoku", difficulty: "Medium", code: "Python" },
    { id: 9, status: false, problem: "Longest Consecutive Sequence", difficulty: "Medium", code: "Python" },
  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedProblems = useMemo(() => {
    let sortableItems = [...problems];
    if (sortConfig.key !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [problems, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const toggleStatus = (id) => {
    setProblems(problems.map(problem =>
      problem.id === id ? { ...problem, status: !problem.status } : problem
    ));
  };

  const getSortIcon = (columnName) => {
    if (sortConfig.key === columnName) {
      return sortConfig.direction === 'ascending' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />;
    }
    return <ChevronUp className="h-4 w-4 opacity-0 group-hover:opacity-100" />;
  };

  const completedProblems = problems.filter(p => p.status).length;
  const progressPercentage = (completedProblems / problems.length) * 100;

  const prerequisites = [
    { title: "Dynamic Arrays", subtitle: "Data Structures & Algorithms for Beginners" },
    { title: "Hash Usage", subtitle: "Data Structures & Algorithms for Beginners" },
    { title: "Hash Implementation", subtitle: "Data Structures & Algorithms for Beginners" },
    { title: "Prefix Sums", subtitle: "Advanced Algorithms" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-4/5 max-w-4xl sm:max-w-full bg-gray-900 text-white overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-bold text-white text-center">
            {nodeData.label}
          </SheetTitle>
          <div className="text-sm text-gray-400 text-center mt-2">
            ({completedProblems} / {problems.length})
          </div>
          <Progress 
            value={progressPercentage} 
            className="w-full h-3 bg-gray-700 mt-2" 
            indicatorClassName="bg-green-500" 
          />
        </SheetHeader>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Prerequisites</h3>
          <div className="flex flex-wrap gap-4">
            {prerequisites.map((prereq, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg flex-1 min-w-[200px]">
                <h4 className="text-md font-semibold">{prereq.title}</h4>
                <p className="text-sm text-gray-400">{prereq.subtitle}</p>
                <Checkbox className="mt-2" />
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-white">Status</TableHead>
                  <TableHead className="text-white">Star</TableHead>
                  <TableHead className="text-white cursor-pointer group" onClick={() => requestSort('problem')}>
                    Problem {getSortIcon('problem')}
                  </TableHead>
                  <TableHead className="text-white cursor-pointer group" onClick={() => requestSort('difficulty')}>
                    Difficulty {getSortIcon('difficulty')}
                  </TableHead>
                  <TableHead className="text-white">Video Solution</TableHead>
                  <TableHead className="text-white">Code</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {sortedProblems.map((problem) => (
                  <TableRow key={problem.id} className={problem.status ? 'bg-green-900' : ''}>
                    <TableCell>
                      <Checkbox
                        checked={problem.status}
                        onCheckedChange={() => toggleStatus(problem.id)}
                        className="border-gray-400"
                      />
                    </TableCell>
                    <TableCell>
                      <Star className="h-4 w-4 text-yellow-500" />
                    </TableCell>
                    <TableCell className="flex items-center">
                      {problem.problem}
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </TableCell>
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