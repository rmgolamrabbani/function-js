
// remove_duplicate_element_from_array

const numArray = [1, 2, 2, 3, 4, 4, 5, 5, 5, 6];
const strArray = ["apple", "banana", "apple", "orange", "banana", "grape"];

function removeDuplicates(arr) {
    let uniqueElements = []; 

    for ( let item of arr) {
        if (uniqueElements .includes(item) === false) {
            uniqueElements .push(item);
        }
    }
    return uniqueElements;
}

const result = removeDuplicates(numArray);
console.log(result);  
const result2 = removeDuplicates(strArray);
console.log(result2);










