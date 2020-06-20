let ages = [ 3, 9, 23, 64, 2, 8, 28, 93];

console.log('Ages :', ages);

//subtract first element from the last:

function subtractAges(){
    console.log('First subtracted from last',ages[ages.length - 1] - ages[0]);
}

subtractAges();

//add new age:

ages.push(22);

console.log('Ages :', ages);

subtractAges();

//loop that calculates averages:

let sum = 0;
for(i = 0; i < ages.length;i++){
    sum += ages[i];
}
console.log('Average number of ages:', sum / ages.length);


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log(names);

let letters = 0;
for (y = 0; y < names.length; y++) {
    letters += names[y].length;
}
console.log('The average number of letters in each name is:', letters / names.length);


//calculate the average number of letters per name with .map:

//let lengths = names.map(function(element) {
//    return element.length;
//});

//console.log('The number of letters in "names" using .map',lengths)

//calculates the average number of letters with a reduce array method:

// let lettersSum = lengths.reduce(function(accumulator, currentValue) {
//    return accumulator + currentValue;
// });
// console.log("The average amount of letters is", lettersSum / names.length);


//prints names to console:

let printedNames = '';
for (z = 0; z < names.length; z++) {
    printedNames += ' ' + names[z];
}
console.log(printedNames);

//New Array that iterates over the names array

let nameLengths = [];

for (x = 0; x < names.length; x++) {
        nameLengths.push(names[x].length);
} 

console.log('Name lengths:', nameLengths);

//loop that calculates the sum of all the elements in nameLengths:

let letterSum = 0;
for (a = 0; a < nameLengths.length; a++) {
    letterSum += nameLengths[a];
}

console.log('The sum of all nameLength elements:', letterSum);

//function that returns a word concated to itself n number of times:

function repeatedString(word, n) {
    if (n > 0) {
      return word.repeat(n);
    } else {
      return ""; 
    }
  }

console.log(repeatedString('hello', 3));

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

console.log('My full name is', fullName('Kate', 'Grapentine'));

//function that takes an array of numbers and returns true if the sum of all numbers is greater than 100

function isGreaterThanOneHundred(array){
    let numSum = 0;
    for(i = 0; i < array.length;i++){
        numSum += array[i];
    }
    if (numSum > 100) {
        return true;
    } else if (numSum < 100) {
        return false;
    } else {
        return "invalid";
    }
}

console.log('This should return true:',isGreaterThanOneHundred(ages));

let test = [ 1 , 2, 3, 4];
console.log('Test Array:', test);

console.log('This should return false:', isGreaterThanOneHundred(test));

//function that takes an array of numbers and returns the average:

function Average(array){
    let sumAvg = 0;
    for(i = 0; i < array.length;i++){
        sumAvg += array[i];
    }
    return sumAvg / array.length;
}

console.log('Average number of array:', Average(test));
console.log('Average number of array:', Average(ages));

//function that takes two arrays and returns true if the first if greater than the second:

function arrayIsGreaterThan(firstArray, secondArray){
    let firstAvg = Average(firstArray);
    let secondAvg = Average(secondArray);
    if (firstAvg > secondAvg) {
        return true;
    } else if (firstAvg < secondAvg){
        return false;
    } else {
        return "invalid";
    }
}

console.log('The ages array has a larger avg than nameLengths:', arrayIsGreaterThan(ages, nameLengths));
console.log('The nameLengths array has a larger avg than age:', arrayIsGreaterThan(nameLengths, ages));

//function that returns true if it's hot outside and you have more than $10.50:

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside == true && moneyInPocket > 10.50) {
        return true;
    } else if (isHotOutside == false && moneyInPocket > 10.50 || moneyInPocket < 10.50 && isHotOutside == true || isHotOutside == false && moneyInPocket < 10.50) {
        return false;
    } else {
        return 'invalid';
    }
}


console.log("It's hot outside and I have $20, do I buy a drink?", willBuyDrink(true, 20));
console.log("What if I only have $3?", willBuyDrink(true, 3));
console.log("What if it's cold?", willBuyDrink(false, 20));


//Making my own function:
//This function plays the game "Duck, Duck, Goose" with the elements of an array: 

function duckDuckGoose(array){
    let goose = Math.floor(Math.random() * Math.floor(array.length));
    console.log('Number of Ducks before Goose:',goose);
    for (let x = 0; x < array.length; x++) {
        if (array[x] == array[goose]) {
            console.log('Goose!');
            console.log(array[goose], ' is Goose!');
            break;
        } else {
            console.log('Duck.')
         }       
        
    }
}

duckDuckGoose(names);
