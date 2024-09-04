function StringChallenge(str) {
    // Object to store the first occurrence index of each character
    const firstOccurrence = {};
    // Variable to keep track of the maximum unique characters found
    let maxUniqueCount = 0;

    // Iterate through the string to find and process pairs of matching letters
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (firstOccurrence.hasOwnProperty(char)) {
            // Get the index of the first occurrence
            const startIdx = firstOccurrence[char];
            // Extract the substring between the two occurrences
            const substring = str.substring(startIdx + 1, i);
            // Calculate unique characters in the substring
            const uniqueChars = new Set(substring);
            // Update the maximum unique count if the current count is larger
            maxUniqueCount = Math.max(maxUniqueCount, uniqueChars.size);
        } else {
            // Store the index of the first occurrence of the character
            firstOccurrence[char] = i;
        }
    }

    return maxUniqueCount;
}

// Example test cases
console.log(StringChallenge("mmmerme")); // Output: 3
console.log(StringChallenge("abccdefghi")); // Output: 0
