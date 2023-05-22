export function findShortestPath(gridArray: any[]) {
   if (gridArray.length == 0) return []
   // Create a grid with the specified size
   const numRows = 15;
   const numCols = 30;
   const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));
 
   // Set start, end, and wall positions on the grid
   gridArray.forEach(({ position, status }: any) => {
     const { row, col } = position;
     grid[row][col] = status;
   });
 
   // Define possible movements: up, down, left, right
   const movements = [
     { row: -1, col: 0 }, // up
     { row: 1, col: 0 },  // down
     { row: 0, col: -1 }, // left
     { row: 0, col: 1 }   // right
   ];
 
   // Check if a position is valid (within grid boundaries and not a wall)
   function isValidPosition(row: any, col: any) {
     return (
       row >= 0 &&
       row < numRows &&
       col >= 0 &&
       col < numCols &&
       grid[row][col] !== 'wall'
     );
   }
 
   // Breadth-first search algorithm to find the shortest path
   function bfs() {
     const queue = [{ row: startRow, col: startCol, path: [] }];
     const visited = new Set();
     visited.add(`${startRow}-${startCol}`);
 
     while (queue.length > 0) {
       const { row, col, path }: any = queue.shift();
 
       if (grid[row][col] === 'end') {
         return path.concat([{ position: `${row}-${col}`, status: 'green' }]);
       }
 
       for (const { row: dr, col: dc } of movements) {
         const newRow = row + dr;
         const newCol = col + dc;
 
         if (isValidPosition(newRow, newCol) && !visited.has(`${newRow}-${newCol}`)) {
           visited.add(`${newRow}-${newCol}`);
           const newPath = path.concat([{ position: `${row}-${col}`, status: 'green' }]);
           queue.push({ row: newRow, col: newCol, path: newPath });
         }
       }
     }
 
     return null; // No path found
   }
 
   // Find the start and end positions
   let startRow : any, startCol: any;
   gridArray.forEach(({ position, status }:any) => {
     if (status === 'start') {
       startRow = position.row;
       startCol = position.col;
     }
   });
 
   // Find the shortest path using BFS
   const shortestPath = bfs();
 
   return shortestPath;
 }
 
 // Example usage:

 
