console.log("Start practice!");





//////////////////////////////////////////////////////////////////////////
console.log("Part 1: Stack Overflow");

// Declare a counter to track the number of recursive calls
let count = 0;

// Recursive function to cause stack overflow
const overflowTest = () => {
    count++; // Increment the counter on each call
    overflowTest(); // Call the function 
  };

// Use try/catch to catch the stack overflow error
try {
    overflowTest(); // This will keep calling until it hits the maximum stack size
  } catch (error) {
    console.log(`Stack overflow after ${count} calls`); // Log the error and how many calls happened
  }




  //////////////////////////////////////////////////////////////////////////
console.log("Part 2: Trampolines");
