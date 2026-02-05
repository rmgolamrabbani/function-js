// Problem 6: Phonebook Prefix Search
// Function name: searchByPrefix(phonebook, prefix)
// Statement:
//  Return an array of names that start with the given prefix.
// Test case 1
// Input:
// phonebook = { rahim: "0181", karim: "0172", rafi: "0193" };
// prefix = "ra";

// Output:
// ["rahim", "rafi"]

// Test case 2
// Input:
// phonebook = { mina: "013", mim: "014", rina: "015" };
// prefix = "mi";

// Output:
// ["mina", "mim"]



function searchByPrefix(phonebook, prefix) {
    let result = [];
    let names = Object.keys(phonebook);

    for (let name of names  ) {
        if (name.startsWith(prefix)) {
            result.push(name);
        }
    }

    return result;
}

const phonebook1 = { rahim: "0181", karim: "0172", rafi: "0193" };
const prefix1 = "ra";
const result1 = searchByPrefix(phonebook1, prefix1);
console.log(result1);

const phonebook2 = { mina: "013", mim: "014", rina: "015" };
const prefix2 = "mi";
const result2 = searchByPrefix(phonebook2, prefix2);
console.log(result2);





















