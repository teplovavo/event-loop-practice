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

// Recursive function to flatten an array of nested arrays
const flattenArray = (arr, result = []) => {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        return () => flattenArray(arr[i], result); // Return function for trampolining
      } else {
        result.push(arr[i]); // Push the non-array element to the result
      }
    }
    return result;
  };

// Trampoline function to handle recursive calls without blowing up the stack
const trampoline = (fn, ...args) => {
    let result = fn(...args); 
    while (typeof result === "function") {
      result = result(); // Keep invoking the returned function until we have the final result
    }
    return result;
  };

