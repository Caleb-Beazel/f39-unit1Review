// ***** Variable ***** //
/* 
    Create a few variables that store a value of string, number, and boolean. Choose your own topic.
*/

//CODE HERE

const myName = "Caleb"
let season = 'winter'
let color = `red`
let number = 20
let todayIsCold = true // variable assigned to a boolean. 
let pizza = null
let food // no value -> undefined

let myFavColor = `My favorite color is ${color}` // template literal

// ***** Array ***** //
/*
    Create an array of strings called 'codingLanguages' that include 4 coding language of your choice. 
*/

//CODE HERE

let codingLanguages = ['javascript', 'python', 'java', 'swift']

/* 
    Access the 3rd element of the 'codingLanguages' array.
*/

//CODE HERE

console.log(codingLanguages[2])

/*
    Copy the array using one of the array methods, and call it 'codingLanguages2.'
*/

//CODE HERE

let codingLanguages2 = codingLanguages.slice()

/* 
Add another coding language to the codingLanguages2 array.
*/

//CODE HERE

codingLanguages2.push('rust', 'PHP')
codingLanguages2.push('SQL')

console.log(codingLanguages2)

// !!! Don't edit the code below !!! //
let instruments = ['piano', 'trumpet', 'xylophone', 'flute', 'cello']
// !!! Don't edit the code above !!! //

/* 
    Use a built-in array function to remove 'cello' from the instruments array.
*/

//CODE HERE

instruments.pop()

/* 
Use a built-in array function to remove 'piano' from the instruments array
*/

//CODE HERE

instruments.shift()

/* 
Use a built-in array function to add 'guitar' to the front of the instruments array
*/

//CODE HERE

instruments.unshift('guitar')

/* 
Use a built-in array function to replace 'xylophone' in the instruments array to 'glockenspiel.'
*/

//CODE HERE

instruments.splice(2, 1, 'glockenspiel')
// instruments[2] = 'glockenspiel'

console.log(instruments)
// ***** if-else ***** //
/* 
    Discuss the if-else statement syntax.
*/

// !!! Don't edit the code below !!! //
let num = 11;
// !!! Don't edit the code above !!! //

/* 
    Refer to the num variable above.
    If num is an even number, print num. Otherwise, print 'num is not an even number.'
*/

//CODE HERE

if(num % 2 === 0){
    console.log(num)
} else {
    console.log(`${num} is not an even number.`)
}

// !!! Don't edit the code below !!! //
let score = 83;
// !!! Don't edit the code above !!! //
/* 
    Refer to the score variable above.
    Using if-else statement, determine the grade of the above score.
    If the score is less than and equal to 10, print 'Failed.'
    If the the score is between 10 and 41, print 'The grade is C.'
    If the the score is between 40 and 71, print 'The grade is B.'
    If the the score is above 70, print 'The grade is A.'
*/

//CODE HERE

score >= 70 ? console.log('The grade is A'):
score >= 40 ? console.log('The grade is B'):
score >= 11 ? console.log('The grade is D'): console.log('Failed')



// ***** For Loop ***** //
/* 
    Discuss the for loop syntax.
*/

// !!! Don't edit the code below !!! //
let price = [10, 5, 6];
// !!! Don't edit the code above !!! //

/* 
    Using for loop, calculate the total price from the 'price' array above.
*/

//CODE HERE
let totalPrice = 0

for(let i = 0; i < price.length; i++){
    totalPrice += price[i]
}
console.log(totalPrice)
/* 
    Using the 'totalPrice,' find the average of 'price.'
*/

let avPrice = totalPrice / price.length

// !!! Don't edit the code below !!! //
let colors = ['red', 'green', 'yellow', 'red', 'green']
// !!! Don't edit the code above !!! //

/* 
    Loop through the colors array above. Then, print 'apple' if the color is red, print 'melon' if the color is green, and print 'banana' when the color is yellow.
*/

// CODE HERE

for(i = 0; i < colors.length; i++){
    if(colors[i] === 'red'){
        console.log('apple')
    } else if(colors[i] === 'green'){
        console.log('melon')
    } else if(colors[i] === 'yellow'){
        console.log('banana')
}

// ***** Software Development Life Cycle (SDLC) ***** //
/* 
    Discuss SDLC:
    -- planning -- Purpose of the software
    -- Analysis of Requirements -- planning the programming needs
    -- Design -- psuedo code, asthetics, etc
    -- Implementation -- writing the code
    -- Testing & Integration -- test MVP (minimum viable product), etc
    -- Maintain -- 
*/

// ***** Git ***** //
/* 
    Discuss:
    - Definition of:
        -- git -- version control software
        -- github -- cloud service for storing git repositories
        -- git init -- initiates a git repository
        -- git clone -- downloading a repository from github
        -- git status -- tells the status of your git
        -- git add -- adds changes to file to a staging ground
        -- git commit -- saves changes to a repository
        -- git push -- sends the repository to github
    - How to push git to github
*/

