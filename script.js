console.log("Start practice!")


console.log("Part 1: Stack Overflow")

// Declare a counter to track the number of recursive calls
let count = 0;

// Recursive function to cause stack overflow
const overflowTest = () => {
    count++; // Increment the counter on each call
    overflowTest(); // Call the function 
  };