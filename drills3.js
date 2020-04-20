// Repeat Function #1

function repeat(fn, n) {
    for(let i = 0; i < n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

// Filter Function #2

function filter(arr, fn) {
    let newArray = [];

    for(let i = 0; i < arr.length; i++) {
        if(fn(arr[i])) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

const filteredNames = filter(myNames, function(name) {
    return name[0] === 'R';
}); 

console.log(filteredNames);

// Problem 2 Bonus
console.log(filter(myNames, (n) => { return n[0] === 'R';}));


// Functions as return values #3

function hazardWarningCounter(typeOfWarning) {
    let warningCounter = 0;

    return (location) => {
        warningCounter++;
        // Bonus credit!
        const word = warningCounter !== 1 ? 'times' : 'time';
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} ${word} today!`);
    };
}

const rocksWarning = hazardWarningCounter('Rocks on the Road');
const tornadoWarning = hazardWarningCounter('Tornado');
const tidalWave = hazardWarningCounter('Tidal wave');

rocksWarning('1st');
rocksWarning('2nd');

tornadoWarning('1st');
tornadoWarning('2nd');

tidalWave('1st');
tidalWave('2nd');
tidalWave('3rd');
tidalWave('4th');


