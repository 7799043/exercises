/*  Count duplicate characters in the string. Output can be a HashMap<String, Integer> or whatever container you like)  */ 

function countDuplicateChars(str) { 
    const charCount = {}; 
    for (let char of str) { 
      charCount[char] = (charCount[char] || 0) + 1; 
    }
    const duplicates = {};
    for (let char in charCount) {
      if (charCount[char] > 1) {
        duplicates[char] = charCount[char];
      }
    }
    return duplicates;
  }

const str = "programming";
const duplicates = countDuplicateChars(str);
console.log(duplicates);