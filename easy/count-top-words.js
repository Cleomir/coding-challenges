// This function counts the most frequent words in a given text.
function countTopWords(text, count = 2) {
  // If the input text is not a string or is empty, return an empty array.
  if (!text || typeof text !== "string" || text.trim().length === 0) {
    return [];
  }

  // Initialize an object to store the count of each word.
  const wordsCount = {};

  // Split the input text into words.
  const splitWords = text.split(" ");

  // Iterate over each word.
  for (let word of splitWords) {
    // If the word is already in the wordsCount object, increment its count.
    if (wordsCount[word]) {
      wordsCount[word]++;
    } else {
      // If the word is not in the wordsCount object, add it with a count of 1.
      wordsCount[word] = 1;
    }
  }

  // Convert the wordsCount object into an array of entries, sort it in descending order of count,
  // and return the top 'count' entries.
  return Object.entries(wordsCount)
    .map((entry) => {
      return { [entry[0]]: entry[1] };
    })
    .sort((a, b) => b[1] - a[1])
    .slice(0, count);
}

countTopWords("hello world hello world hello world sample sample", 2); // [{ hello: 3 }, { world: 3 }]
countTopWords(" "); // []
