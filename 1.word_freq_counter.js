

// Statement: Count how many times each word appears in a sentence and return the result as an object.
// Rules:
// Ignore case differences
// Ignore extra spaces



function wordFrequency (sentence) {
    let words = sentence.split(" ");
    // console.log(words);
    let wordsCount = {};


    for (let word of words) {
        let lowerCaseWord = word.toLowerCase();
        // console.log(lowerCaseWord);

        if (wordsCount.hasOwnProperty(lowerCaseWord)) {
            wordsCount[lowerCaseWord]++;}
        else {
            wordsCount[lowerCaseWord] = 1;
        }
    }
    return wordsCount;
}


let output = wordFrequency("I love JS and I love coding and JS is fun and Fun");
console.log(output); 









