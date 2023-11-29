function calculateMinCost() {
  // Get the input value and convert it to an array of integers
  const inputElement = document.getElementById("inputRopes");
  const inputValues = inputElement.value.split(',').map(value => parseInt(value.trim()));

  // Sort the array of rope lengths
  inputValues.sort((a, b) => a - b);

  // Initialize the total cost variable
  let totalCost = 0;

  // Connect ropes with minimum cost
  while (inputValues.length > 1) {
    // Take the two smallest ropes
    const firstRope = inputValues.shift();
    const secondRope = inputValues.shift();

    // Calculate the cost and add it to the total
    const cost = firstRope + secondRope;
    totalCost += cost;

    // Insert the new rope length into the sorted array
    inputValues.push(cost);
    inputValues.sort((a, b) => a - b);
  }

  // Print the result inside the result div
  const resultElement = document.getElementById("result");
  resultElement.innerText = `Minimum Cost: ${totalCost}`;
}

