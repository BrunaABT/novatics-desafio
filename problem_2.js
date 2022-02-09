// 2. Sudoku Validation

board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

let sudokuValidation = (board) => {
  // inserting board numbers for comparison
  const rows = [],
    columns = [],
    boxes = [];

  for (let i = 0; i < board.length; i++) {
    rows.push(new Set());
    columns.push(new Set());
    boxes.push(new Set());
  }

  //validating items
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const item = board[i][j];
      if (item === ".") continue;
      const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      if (
        //testing if rows, columns and boxes don't have duplicates
        // and if number is integer from 1 to 9
        rows[i].has(item) ||
        columns[j].has(item) ||
        boxes[boxNumber].has(item) ||
        !Number.isInteger(Number(item)) ||
        item < 1 ||
        item > 9
      )
        return false;
      rows[i].add(item);
      columns[j].add(item);
      boxes[boxNumber].add(item);
    }
  }
  return true;
};

console.log(sudokuValidation(board));
