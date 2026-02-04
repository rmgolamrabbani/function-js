
// Problem 2: Student Marks Analyzer
// Function name: analyzeMarks(marksObj)
// Statement:
//  Return total marks, average marks, highest scoring subject, and lowest scoring subject.
// Test case 1
// Input: { math: 78, english: 65, physics: 88, bangla: 55 }
// Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }


function analyzeMarks(marksObj) {
    let total = 0;
    let highestSubject = null;
    let lowestSubject = null;
    let highestMark = -Infinity;
    let lowestMark = Infinity;
    let subjectCount = 0;

    for (let subject in marksObj) {
        let mark = marksObj[subject];
        total += mark;
        subjectCount++;
        if (mark > highestMark) {
            highestMark = mark;
            highestSubject = subject;
        }   

        if (mark < lowestMark) {
            lowestMark = mark;
            lowestSubject = subject;
        }
    }

    let average = total / subjectCount;

    return {
        total: total,
        average: average,
        highest: highestSubject,
        lowest: lowestSubject
    };  
}

console.log(analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 }));
console.log(analyzeMarks({ biology: 90, chemistry: 85, physics: 92, math: 88 })); 
console.log(analyzeMarks({ history: 70, geography: 75, civics: 80, economics: 65 }));
console.log(analyzeMarks({ art: 95, music: 85, dance: 90, drama: 80 }));    








