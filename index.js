/**
 * If you can reach a "0" then you can win.
 * To play the game, look at the value at index
 * If the value is zero, you win.
 * If the value is not zero, you can go left or right that number of spaces and check again
 * The array does not wrap around.
 *
 * @param [] input
 * @param number index
 */
const canWin = (input, index) => {
  // If we have an empty array or undefined or null, return false
  if (!input || input.length === 0 || index > input.length) {
    return false;
  }

  const nodes = [index]; // An array with the first index to start
  const visited = new Set();
  while (nodes.length > 0) {
    const idx = nodes.pop();
    const value = input[idx];

    visited.add(idx);
    if (input[idx] === 0) {
      return true;
    }

    // Left
    const left = idx - value;
    if (left >= 0 && !visited.has(left)) {
      nodes.push(left);
    }

    const right = idx + value;
    if (right < input.length && !visited.has(right)) {
      nodes.push(right);
    }
  }

  return false;
};

module.exports = canWin;
