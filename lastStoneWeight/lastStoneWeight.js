/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    
  // heap question
  // turn the stones into a maxheap
  // we can then pop the two max values
  // if equal, we do nothing
  // else insert back itno the heap the difference between the two
  // until the stone heap length is 1
  // else return 0
  
  // we can sort the array
  // grab the top two, and then insert whatever is back in
  
  stones.sort((a, b) => a - b)
  
  while (stones.length > 1) {
      let stoneY = stones.pop();
      let stoneX = stones.pop();
      
      if (stoneX != stoneY) {
          let newStone = stoneY - stoneX;
          stones.push(newStone);
          stones.sort((a, b) => a - b);
      }
  }
  
  return stones[0] ? stones[0] : 0;
  
};

module.exports = lastStoneWeight;