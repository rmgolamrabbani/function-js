// Problem 7: Text Stats Generator
// Function name: textStats(text)
// Statement:
//  Return an object containing:

// Characters count excluding spaces

// Words count

// Vowels count

// Consonants count

// Test case 1
// Input:
//  "JavaScript is fun to learn"
// Output:
// { characters: 22, words: 5, vowels: 8, consonants: 14 }

// Test case 2
// Input:
//  " I am OK "
// Output:
// { characters: 5, words: 3, vowels: 3, consonants: 2 }


function textStats(text) {

    const stats = {
        characters: 0,
        words: 0,
        vowels: 0,
        consonants: 0
    };
 
    const vowels = "aeiouAEIOU";
    const trimmedText = text.trim();
    stats.characters = trimmedText.length;
    stats.words = trimmedText.split(/\s+/).filter(word => word.length > 0).length;

    for (let char of trimmedText) {
        if (vowels.includes(char)) {
            stats.vowels++;
        } else if (/[a-zA-Z]/.test(char)) {
            stats.consonants++;
        }
    
    }
    return stats;

}

const input1 = "JavaScript is fun to learn";
const result1 = textStats(input1);
console.log(result1);

const input2 = " I am OK ";
const result2 = textStats(input2);
console.log(result2);
















