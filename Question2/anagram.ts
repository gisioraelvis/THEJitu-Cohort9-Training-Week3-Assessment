/**
 * ANAGRAM - An anagram is a word or phrase formed by rearranging the letters of a different word or
 * phrase, typically using all the original letters exactly once.
 * Write a function that takes two words as an argument and returns true if they are anagrams
 * and false otherwise.
 * (contain the exact same letters) and false otherwise.
 * Examples of an Anagrams
 *  (Listen and silent)
 *  (Elbow and Below)
 *  (Dusty and Study)
 *  (Inch and Chin)
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @returns {boolean}
 */

function anagram(word1: string, word2: string): boolean {
  // check if the words are the same length
  if (word1.length !== word2.length) {
    return false;
  }

  // convert both words to lowercase
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  // sort both words alphabetically and join them
  word1 = word1.split("").sort().join("");
  word2 = word2.split("").sort().join("");

  // check if the words are the same after sorting
  return word1 === word2;
}

// test cases
// true examples - Anagrams
console.log(anagram("Listen", "Silent")); // true
console.log(anagram("Elbow", "Below")); // true
console.log(anagram("Dusty", "Study")); // true

// false examples - Not Anagrams
console.log(anagram("Talk", "Silent")); // false
console.log(anagram("Elbow", "Bellow")); // false
console.log(anagram("Dusty", "Studying")); // false
