export function findShortestPath(gridArray: any[]) {
   if (gridArray.length == 0) return []
   const numRows = 15;
   const numCols = 30;
   const grid = Array.from({ length: numRows }, () => Array(numCols).fill(''));
 
   gridArray.forEach(({ position, status }: any) => {
     const { row, col } = position;
     grid[row][col] = status;
   });
 
   const movements = [
     { row: -1, col: 0 }, 
     { row: 1, col: 0 }, 
     { row: 0, col: -1 }, 
     { row: 0, col: 1 }   
   ];
 
   function isValidPosition(row: any, col: any) {
     return (
       row >= 0 &&
       row < numRows &&
       col >= 0 &&
       col < numCols &&
       grid[row][col] !== 'wall'
     );
   }
 
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
 
     return null; 
   }
 
   let startRow : any, startCol: any;
   gridArray.forEach(({ position, status }:any) => {
     if (status === 'start') {
       startRow = position.row;
       startCol = position.col;
     }
   });
 
   const shortestPath = bfs();
 
   return shortestPath;
 }
 

 
