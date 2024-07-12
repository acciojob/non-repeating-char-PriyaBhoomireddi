function firstNonRepeatedChar(str) {
  // Create a frequency map to count occurrences of each character
  const frequencyMap = {};
  
  // Populate the frequency map
  for (let char of str) {
    if (frequencyMap[char]) {
      frequencyMap[char]++;
    } else {
      frequencyMap[char] = 1;
    }
  }
  
  // Find the first character with a frequency of 1
  for (let char of str) {
    if (frequencyMap[char] === 1) {
      return char;
    }
  }
  
  // If no non-repeated character is found, return null
  return null;
}

// Prompt user for input and display the result
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
