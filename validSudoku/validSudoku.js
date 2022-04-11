/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
  // input: a board (an array of arrays);
  // output: boolean value to check whether the filled values are valid or not
      
  
  // we can check for duplicates by using set data structure because sets will only hold unique values by default 

  // we can identify each element in the box by identfying row / col / square 
  // e.g. if there's a 5 in index[0,0];
  // then we identify that as (5)0 indicating a 5 in the zero row
  // we identify 0(5) indicating a 5 in the zero col
  // we identify 0(5)0 indicating a 5 in the 0,0 box (indices 0 - 2 would reduce to 0)

  let set = new Set();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === '.') continue;

      let value = `(${board[row][col]})`;
      let rowVal = val + row;
      let colVal = col + val;
      let squareVal = Math.floor(row / 3) + val + Math.floor(col / 3);

      if (set.has(rowVal) ||
          set.has(colVal) ||
          set.has(squareVal)) {
            return false;
          }

      set.add(rowVal);
      set.add(colVal);
      set.add(squareVal);
    }
  }

  return true;
};