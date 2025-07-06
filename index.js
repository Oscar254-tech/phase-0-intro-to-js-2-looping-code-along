// Code your solutions in this file

// Function to create thank you cards using a for loop
function writeCards(names, eventName) {
  const messages = []; // Create a new, empty array to hold the messages

  // Iterate through the input array of names using a for loop
  for (let i = 0; i < names.length; i++) {
    // Build out the 'thank you' message for each name using string interpolation
    const message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
    // Add that message to the new array
    messages.push(message);
  }

  // After the loop finishes, return the new array
  return messages;
}

// Function to count down using a while loop
function countDown(number) {
  let currentNumber = number; // Initialize the counter outside the loop

  // Loop as long as currentNumber is greater than or equal to 0
  while (currentNumber >= 0) {
    console.log(currentNumber); // Log the current number
    currentNumber--; // Decrement the number inside the loop
  }
}

