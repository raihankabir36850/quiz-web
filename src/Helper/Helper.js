export const addElementRandomly = (arr, newElement) => {
  // Step 1: Generate a random index
  var randomIndex = Math.floor(Math.random() * (arr.length + 1));

  // Step 2: Create the new element
  arr.push(null);

  // Step 3: Shift the elements to the right
  for (var i = arr.length - 1; i > randomIndex; i--) {
    arr[i] = arr[i - 1];
  }

  // Step 4: Insert the new element
  arr[randomIndex] = newElement;

  return arr;
};
