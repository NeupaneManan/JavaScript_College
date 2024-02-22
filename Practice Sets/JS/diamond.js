function printDiamond(rows) {
  if (rows % 2 === 0) {
    // Adjust rows to make it odd for a symmetric diamond
    rows++;
  }

  const midPoint = Math.floor(rows / 2);

  // Upper part of the diamond
  for (let i = 0; i < midPoint; i++) {
    let str = "";
    for (let j = 0; j < rows; j++) {
      if (j >= midPoint - i && j <= midPoint + i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }

  // Lower part of the diamond
  for (let i = midPoint; i >= 0; i--) {
    let str = "";
    for (let j = 0; j < rows; j++) {
      if (j >= midPoint - i && j <= midPoint + i) {
        str += "*";
      } else {
        str += " ";
      }
    }
    console.log(str);
  }
}

// Example: Print a diamond with 5 rows
printDiamond(6);
