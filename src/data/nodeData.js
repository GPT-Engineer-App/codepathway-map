export const nodeData = [
  {
    id: '1',
    type: 'input',
    position: { x: 250, y: 5 },
    data: { label: 'Arrays & Hashing', progress: 75 }
  },
  {
    id: '2',
    type: 'default',
    position: { x: 100, y: 100 },
    data: { label: 'Two Pointers', progress: 50 }
  },
  {
    id: '3',
    type: 'default',
    position: { x: 400, y: 100 },
    data: { label: 'Stack', progress: 25 }
  },
  {
    id: '4',
    type: 'default',
    position: { x: 50, y: 200 },
    data: { label: 'Binary Search', progress: 60 }
  },
  {
    id: '5',
    type: 'default',
    position: { x: 250, y: 200 },
    data: { label: 'Sliding Window', progress: 40 }
  },
  {
    id: '6',
    type: 'default',
    position: { x: 450, y: 200 },
    data: { label: 'Linked List', progress: 30 }
  },
  {
    id: '7',
    type: 'default',
    position: { x: 250, y: 300 },
    data: { label: 'Trees', progress: 20 }
  },
  {
    id: '8',
    type: 'default',
    position: { x: 100, y: 400 },
    data: { label: 'Tries', progress: 10 }
  },
  {
    id: '9',
    type: 'default',
    position: { x: 250, y: 400 },
    data: { label: 'Heap / Priority Queue', progress: 15 }
  },
  {
    id: '10',
    type: 'default',
    position: { x: 400, y: 400 },
    data: { label: 'Backtracking', progress: 5 }
  },
  {
    id: '11',
    type: 'default',
    position: { x: 100, y: 500 },
    data: { label: 'Graphs', progress: 0 }
  },
  {
    id: '12',
    type: 'default',
    position: { x: 250, y: 500 },
    data: { label: '1-D DP', progress: 0 }
  },
  {
    id: '13',
    type: 'default',
    position: { x: 400, y: 500 },
    data: { label: 'Intervals', progress: 0 }
  },
  {
    id: '14',
    type: 'default',
    position: { x: 100, y: 600 },
    data: { label: 'Greedy', progress: 0 }
  },
  {
    id: '15',
    type: 'default',
    position: { x: 250, y: 600 },
    data: { label: 'Advanced Graphs', progress: 0 }
  },
  {
    id: '16',
    type: 'default',
    position: { x: 400, y: 600 },
    data: { label: '2-D DP', progress: 0 }
  },
  {
    id: '17',
    type: 'default',
    position: { x: 400, y: 700 },
    data: { label: 'Bit Manipulation', progress: 0 }
  },
  {
    id: '18',
    type: 'output',
    position: { x: 250, y: 800 },
    data: { label: 'Math & Geometry', progress: 0 }
  },
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
  { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
  { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
  { id: 'e2-5', source: '2', target: '5', type: 'smoothstep' },
  { id: 'e3-6', source: '3', target: '6', type: 'smoothstep' },
  { id: 'e4-7', source: '4', target: '7', type: 'smoothstep' },
  { id: 'e5-7', source: '5', target: '7', type: 'smoothstep' },
  { id: 'e6-7', source: '6', target: '7', type: 'smoothstep' },
  { id: 'e7-8', source: '7', target: '8', type: 'smoothstep' },
  { id: 'e7-9', source: '7', target: '9', type: 'smoothstep' },
  { id: 'e7-10', source: '7', target: '10', type: 'smoothstep' },
  { id: 'e10-11', source: '10', target: '11', type: 'smoothstep' },
  { id: 'e10-12', source: '10', target: '12', type: 'smoothstep' },
  { id: 'e9-13', source: '9', target: '13', type: 'smoothstep' },
  { id: 'e9-14', source: '9', target: '14', type: 'smoothstep' },
  { id: 'e11-15', source: '11', target: '15', type: 'smoothstep' },
  { id: 'e12-16', source: '12', target: '16', type: 'smoothstep' },
  { id: 'e15-17', source: '15', target: '17', type: 'smoothstep' },
  { id: 'e16-17', source: '16', target: '17', type: 'smoothstep' },
  { id: 'e17-18', source: '17', target: '18', type: 'smoothstep' },
];