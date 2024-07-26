import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Code, FileText, Folder, Play } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#202225] text-white p-4">
      <main className="flex-grow flex space-x-4">
        {/* Left Sidebar */}
        <div className="w-64 bg-[#2f3136] rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Problems</h2>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Two Sum
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="mr-2 h-4 w-4" />
              Add Two Numbers
            </Button>
            <Button variant="ghost" className="w-full justify-start text-green-400">
              <FileText className="mr-2 h-4 w-4" />
              Longest Substring
            </Button>
          </div>
        </div>

        {/* Central Content */}
        <div className="flex-grow">
          <Card className="bg-[#2f3136] border-none">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">3. Longest Substring Without Repeating Characters</h1>
                <Button variant="outline" size="sm">
                  Submit
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="solution">Solution</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <p className="text-sm text-gray-300">
                    Given a string s, find the length of the longest substring without repeating characters.
                  </p>
                  {/* Add more description content here */}
                </TabsContent>
                <TabsContent value="solution" className="mt-4">
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <Label htmlFor="code-editor" className="text-sm font-medium">Code Editor</Label>
                      <div className="mt-1 bg-[#1e1f22] rounded-md p-4">
                        <pre className="text-sm">
                          <code>
                            {`class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Your code here
        pass`}
                          </code>
                        </pre>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <Label htmlFor="console" className="text-sm font-medium">Console</Label>
                      <div className="mt-1 bg-[#1e1f22] rounded-md p-4 h-48">
                        {/* Console output would go here */}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-end space-x-2">
                    <Button variant="secondary" size="sm">
                      <Code className="mr-2 h-4 w-4" />
                      Format
                    </Button>
                    <Button variant="secondary" size="sm">
                      <Play className="mr-2 h-4 w-4" />
                      Run
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="w-64 bg-[#2f3136] rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-4">Submissions</h2>
          <div className="space-y-2">
            <Button variant="ghost" className="w-full justify-start">
              <Folder className="mr-2 h-4 w-4" />
              Attempt 1
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Folder className="mr-2 h-4 w-4" />
              Attempt 2
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;