export const nodeData = [
  {
    id: '1',
    type: 'custom',
    position: { x: 250, y: 5 },
    data: { label: 'Arrays & Hashing', progress: 75 }
  },
  {
    id: '2',
    type: 'custom',
    position: { x: 100, y: 100 },
    data: { label: 'Two Pointers', progress: 50 }
  },
  {
    id: '3',
    type: 'custom',
    position: { x: 400, y: 100 },
    data: { label: 'Stack', progress: 25 }
  },
  {
    id: '4',
    type: 'custom',
    position: { x: 250, y: 200 },
    data: { label: 'Trees', progress: 60 }
  },
  {
    id: '5',
    type: 'custom',
    position: { x: 100, y: 300 },
    data: { label: 'Heap / Priority Queue', progress: 40 }
  },
  {
    id: '6',
    type: 'custom',
    position: { x: 400, y: 300 },
    data: { label: 'Backtracking', progress: 30 }
  },
  // Add more nodes as needed
];

export const edges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e4-6', source: '4', target: '6' },
  // Add more edges as needed
];