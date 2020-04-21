// ----------------------
// Repeat Function #1
// ----------------------
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

// ----------------------
// Filter Function #2
// ----------------------
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

// ----------------------
// Functions as return values #3
// ----------------------
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

// ----------------------
// forEach, filter, map
// ----------------------

let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// Filter
console.log(movements.filter(x => (x[0] >= 0 && x[1] >= 0)));

// Map
let steps = movements.map(x => Math.abs(x[0]) + Math.abs(x[1]));
console.log(steps);

// forEach
movements.forEach(x => {
    let word1 = "steps";
    let word2 = "steps";
    if(Math.abs(x[0]) === 1) {
        word1 = "step";
    } else if(Math.abs(x[1]) === 1) {
        word2 = "step";
    }
    console.log(`Movement #1: ${Math.abs(x[0])} ${word1}`);
    console.log(`Movement #2: ${Math.abs(x[1])} ${word2}`);
});

// ----------------------
// Reduce
// ----------------------

let test = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

let str = test.split(" ").reduce((a,b) => {
    if(b.length === 3) {
        a.push(" ");
    } else {
        a.push(b[b.length - 1].toUpperCase());
    }
    return a;
}, []).join("");

console.log(str);

