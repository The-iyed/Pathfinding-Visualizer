export function transformArray(inputArray: any) {
   const gridArray = [];
 
   for (const key in inputArray) {
     const item = inputArray[key];
     const position = item.position.split('-');
     const row = parseInt(position[0]);
     const col = parseInt(position[1]);
     const transformedItem = {
       position: { row, col },
       status: item.status
     };
     gridArray.push(transformedItem);
   }
 
   return gridArray;
 }
 