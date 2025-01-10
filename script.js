/* console.log('TheLoneDsgner')

// alert("Lone Dsgner says Hello world!")

// Three data types 

// Text data - String
// Number data - number
// Bullean data - bullean

// 'James David'
// `12 Erelu Danisa, Ijesha Surulere`
// 30
// true
// false

var street = `No 12 Erelu-Danisa, Ijesha Surulere, Lagos`
let fuck = `Babes let's fuck tonight`
const amount = 400


console.log(street)
console.log(fuck)
console.log(amount)


// Arithemetic operations

// subtractionb & addition

let outcome = 200 - 120
console.log(outcome)

console.log(200 + 20)

// Multiplication
let answer = 200 * 20
console.log(answer)

let amount = 200
let quantity = 20
console.log(amount * quantity)

// division
const divivison = 100/10
console.log(divivison)

// modulus
let modules = 11 % 2
console.log(modules)

// Raise to power
const raiseToPower = 2 ** 4
console.log(raiseToPower)




const ricePrice = 4000
const beansPrice = 4200

const totalPrice = ricePrice + beansPrice

console.log(totalPrice)

console.log(ricePrice + beansPrice)

const acountBalance = 50000
const witdrawaAmount = 25000

const currentBalance = acountBalance - witdrawaAmount

console.log(currentBalance)

// (2+3) * 4 - 4 / 2

//Working with numbers
let result = 10 + 10
console.log(result);

let yamPrice = 2000
let waterPrice = 3000
let ricePrice = 30000

let outCome = yamPrice + waterPrice + ricePrice

console.log(outCome) */

// Varialbe re-asssignment - giving a variable another value

// let myDaugtherAge = 2
// myDaugtherAge = 3

// console.log(myDaugtherAge)

/*
let balance = 2000

balance = 3000
console.log(balance);

let maxScore
console.log(maxScore) 
maxScore = 300
console.log(maxScore)


let subject
subject = `English`

console.log(subject);

// Increament operator - good for shoping cart

let cartItems = 2
cartItems ++

console.log(cartItems)

// Decreement operator - good for shoping cart

let numberOfItems = 10
numberOfItems --

console.log(numberOfItems)

// addition assignment operator - increase value of a variable by a number more than 1 - good for banking apps

let myBalance = 2500
myBalance += 1000

console.log(myBalance)

// subtraction assignment operator
let newBalance = 3500
newBalance -= 1000

console.log(newBalance)

//Data Type conversion Number and String

let userAge = `18`
console.log(typeof(userAge))

Number(userAge)
userAge = Number(userAge)


console.log(typeof(userAge))
console.log(userAge)

let age ="16"
let height = 12

Number(age)

String(height)

console.log( age, height)
*/

// Prompt
//prompt("Enter your age")

//Comparision operators
//Greater than comparison
//Less than comparison operator
//Greater than or equal to operator
//Less than or equal to operator

//let outcome = 10 <= 20
//console.log(outcome)

//Equal to operator
//Strict equal to operator
//Not equal to operator

/*let password = "password"
let enteredPass = "password" == "password"

console.log(enteredPass)

let number = 45 === "45"
console.log(number)

10 != 20

let userAgee = prompt("How old are you?")
userAgee = Number(userAgee)

let result = userAgee >= 45

console.log(result); */


//Concatenation operator - combining string with variable
//Invoice statement example

/*
let totalPrice = 1500
let buyerName = "Emmita"

let invoiceStatement = "Hi " + buyerName + " Your payment is " + totalPrice

console.log(invoiceStatement)

let username = "Paul"
let greatings = "Welcome " + username

console.log(greatings)

//Mordern way to concatenate

let babyName = `Mofe`
let babyAge = "15 months"

let statement = `Welcome ${babyName}, Your current age is ${babyAge}.`

console.log(statement)

// Math object - rounding number up or generating random number
let myNumber = 5.5
let numberResult = Math.round(myNumber)

console.log(numberResult)

//Force round up - ceil

let mofeAge = 1.3
let ageGroup = Math.ceil(mofeAge)

console.log(ageGroup)

//Force round down

let rent = 5.8
let rentAmount = Math.floor(rent)

console.log(rentAmount)

//Generate random number

let trackingCode = Math.random() * 1000000
let roundedCode = Math.round(trackingCode)

console.log(roundedCode)
*/

// Minimum and Maximum number
//max

/*
let firstStudent = 80
let secondStudent = 60
let thridStudent = 50

let examResult = Math.max(firstStudent, secondStudent, thridStudent)

console.log(examResult)

// min
let johnTestResult = 20
let obiTestResult = 16
let vivianTestResult = 4

let testResult = Math.min(johnTestResult, obiTestResult, vivianTestResult)

let resultStatement = 

console.log(testResult)

//Conditional statement -If Else statement

let minimumBalance = 100
let cardAmount = 90

if(cardAmount > minimumBalance){
    console.log(`You're allowed to shop`)
} else{
    console.log(`You're not allow to shop here`)
}

*/


//conditional examples

//The young mind schorlarship for anyone whose grade is above 85. If your grade is above 85 sign up on our platform and submit your grade.

/*
let studentGrade = 70
let schorlashipScore = 85
let grantScore = 70

let applicationStatementQualifiy = `You're eligible for the schorlarship`

let applicationStatementNotQualify
= `You're not qualified`

let grantStatement = `You're qualify for a grant`

if(studentGrade >= schorlashipScore){
    alert(applicationStatementQualifiy)
}else if(studentGrade === grantScore){
    alert(grantStatement)
}else{
    alert(applicationStatementNotQualify)
}
*/

/*
//Object literals -  for storing data

let bioData = {
    name : `Joseph`,
    nationality : `Nigerian`,
    josephAge : 20,
    stateOfOrigin : `Delta`,
    stateOfResidence : `Ogun`
}

console.log(bioData)

let customerInfo = {
    customerName : "Andrew",
    countTier : "3",
    accountStatus : "active",
    accountBalance : 100000,
    customerAge : 30
}

let employeeData = {
    employeeName : "Morenita Mbia",
    department : "Product development",
    jobDescription : "Product manager",
    employeeLevel : "Associate",
    employeeNetPay : 500000,
    employeeNoticePeriod : " 1 month",
    employeeLocation : "Abuja"
}

// The dot notation - extracting/access data from an existing object literals

let result = employeeData.employeeLocation
console.log(result)




//How to edit data in an object - right or update - every data can be created, read, updated and deleted

employeeData.employeeLevel = "Senior Associate"

console.log(employeeData)

//delete data from object
delete employeeData.employeeNoticePeriod

console.log(employeeData)

//update/add data to object
employeeData.workType = "Remote"
console.log(employeeData)


// Nested object literal

let chidi = {
    studentName : "Chidi",
    studentID : "GF8753",
    studentLevel : 300,
    studentLocation : "Abuja",
    laptopDetails : {
        laptopBrand : "Macbook",
        laptopColor : "Silver",
        laptopYear : 2024,
        laptopSize : "14 Inches"
    } //nested objec
}

console.log(chidi)

//banking example

let bankCustomer = {
    customerName : "Sandra",
    cusstomerAccNo : 9974568212,
    customerAccTier : 3,
    securityQuestion : {
        favouritePet : "Cat",
        momMaidenName : "Alice",
        fovouriteAunt : "Uche"
    } //nested object
}

//How to access data from a nested object

let id = chidi.studentID
console.log(id)

//from nested object
let color = chidi.laptopDetails.laptopColor
console.log(color)


//Another example
let david = {
    location : "Neatherland",
    favouriteFood : {
        food : "Beans",
        drinks : "Water",
        protein : "Chicken",
        topup : "Platain"
    }
}

let protein = david.favouriteFood.protein
console.log(protein)



//Aray = list

let tenants = [
    "Christ",
    "Ayokunle",
    "Mbia",
    "Joy",
    "Solomon"
]


let shoppingList = [
    "Roll on",
    "Kitchen towel",
    "Dish soap",
    "milk",
    "Sugar",
    "Floor"
]

console.log(shoppingList)

console.log(tenants)


//Object in a list (Array)

let games = [
    {
        Tango : "Wednesday",
    },

    {
        Queen : 255,
    },

    {
        Pinpoint : "Wednesday"
    }
]

console.log(games)

//How to extract 1 data or items out of an array

let extract = games[1]
console.log(extract)

//Length of array

let long = games.length
console.log(long)

//Storing lists of objects in an array (List)

let userRecords = [
    {
    userName : "David James",
    userRole : "Product Designer",
    userID : "PD890",
    userTeam : "Technology"
    },

    {
    userName : "Joe Brendan",
    userRole : "Tutor",
    userID : "TT491",
    userTeam  : "TLearning and Skills Development"
    },

    {
    userName : "Richard Denah",
    userRole : "Brand Designer",
    userID : "BD062",
    userTeam  : "Technology"
    }
]

console.log(userRecords)


let tenantsList = [
    "Joy",
    "Chris",
    "Moses",
    "David"
]

//How to work with array
// Add item or data to the end of an array - push method

tenantsList.push("Paul")

console.log(tenantsList)

//Remove the last item from an array - pop

tenantsList.pop()

console.log(tenantsList)

// Add items or data to the beggining of an array - unShift

tenantsList.unshift("Israel")

console.log(tenantsList)

// Remove items or data to the beggining of an array - Shift

tenantsList.shift()
console.log(tenantsList)

//Example list of transactions - use case

let transactionHistory = [
    "firstTransaction",
    "secondTransaction",
    "thirdTransaction",
    "forthTransaction",
    "latestTransaction"
]
*/

//remove last items from transaction list

//transactionHistory.pop()

//console.log(transactionHistory)

//use index number to get items in an array

//transactionHistory.at(1)

//How to edit items in an array

//transactionHistory[1] = "newTransaction"

//console.log(transactionHistory)

//How to look for item in an array

/*

let response = transactionHistory.includes("latestTransaction")

console.log(response)

//Slice - cut a part of the array and use it elsewhere - in slice the array does not change

//let newTransactionList = transactionHistory.splice(1,3)
//console.log(newTransactionList)


//Splice - cut and modified the array
let cut = transactionHistory.splice(1, 2)

console.log(cut)

console.log(transactionHistory)
*/


/*
//Intro to function functions are actions that enable reuseable action to code


//first method
//function declaration method -  a function with name

function arithemeticFunction(){
    let price1 = 100
    let price2 = 300
    let overalPrice = price1 + price2

    console.log(overalPrice);
}
// call function - function enable data reuseability
arithemeticFunction()

*/

/*
//Second method
//Function expression -  function that we store in a variable -  a varaible is whatever it stores
//in variable that stores function, we use "const" keyword in place of "let"
const myFunction = function(){
    console.log("David");
}

myFunction()
*/



//Third method

//Arrow function
/*
const sayMyName = ()=>{
    console.log("Lawrence")
}

sayMyName() */

//()=>{
//    }  - this is an arrow function without a name, this function cannot be call becuase only functions with can be call in JavaScript

//Function expression and arrow function are the type of function stores in a variable

//Return statement
/*
function averageNumners(){
    let firstNumber = 100
    let secondNumber = 100
    let thridNumber = 200

    let average = (firstNumber + secondNumber + thridNumber)/3
    return average
}

let returnAvaerage = averageNumners()
console.log(returnAvaerage)




// Function parameters - this allow you to provide external data to a function, basically, the pipeline use to pipe in data

function verifyUserID(nationalID){   //the data in the bracket before curl bracket is called function parameters - you can have more than one parameters in the bracket

    let userName = "Mary"
    let userNationalID = nationalID 

    let sentence = `The user's name is ${userName} and their national Id is ${userNationalID}`

    return sentence
}

let returnedSentence = verifyUserID(464756978089-909)
console.log(returnedSentence)
*/


/*
function totalPrice(firstPrice, secondPrice){
    let firstItemPrice = firstPrice
    let secondItemPrice = secondPrice

    let totalItemPrice = firstItemPrice + secondItemPrice
    return totalItemPrice
}

let customerTotalPrice = totalPrice(100, 400)
console.log(customerTotalPrice)
*/

// Rest parameters -  this is a pipeline that collect more than one data - a multipurpose pipeline. After a rest parameter you cannot put any parameter


//Important: when a function has paraneter, you don't just call it you will need to supply data to function

/*
function cartItemsPrice(itemOnePrice, ...otherItemPrices){
    let cartItemOne = itemOnePrice
    let otherItemPrice = otherItemPrices

    let totalCartItemPrice = cartItemOne + otherItemPrice
    return totalCartItemPrice
}

let totalCartItemPrice = cartItemsPrice(200, 440, 500, 600, 200)

console.log(totalCartItemPrice)

//Higher other array method -  creating a rest parameter and geting the items out of the list (array)


function sayMyName(){
    let fullName = `My name is ${firstname} ${lastname}`
    return fullName
}

sayMyName("David James")

const sayMyName = firstname=> `My name is ${firstname}`
console.log(sayMyName)

*/



//Function - a lesson from the guest Abbass

/*
function sayHappyBirthday(userName = "Bukmus"){  //default parameter, this is use to replace empty data - like a placeholder
    console.log(`Happy Birthday ${userName}`);
}

sayHappyBirthday("David");
sayHappyBirthday();


function nameChecker(name1, name2, name3){
    console.log(`${name1}, ${name2}, and ${name3} where at the event`)
}

nameChecker("Tunde", "Momo", "Joy")


// How to force string into a number

function addNumber(num1, num2){
    num1 = num1
    num2 = num2

    let totalNumber = Number(num1) + Number(num2)

    return totalNumber
}

let total = addNumber(200, 30);
console.log(total);
*/





//new year
//method - method is the function that is inside an object literal

const studentScore = {
    studentName : "James",
    studentID : "FHGH8799H",
    studentFirstScore : 100,
    studentSecondScore: 88,
    studentThirdScore : 76,
    averageScore : function(){ //method
        let averageScore = (this.studentFirstScore + this.studentSeconScore + this.student>ThirdScore) / 3

        return averageScore
    }
}

//how to work with Strings

let myString = "Strings in JavaScript"


//convert to uppercase
console.log(myString.toUpperCase());

//convert to lowercase
let myEmail = "JAMES.DESIGNER19@GMAIL.COM"

console.log(myEmail.toLowerCase());

//trim extra space at the beggining
let myName = "      David"
console.log(myName.trimStart())

//remove extra space at the end
let myLastName = "James     "
console.log(myLastName.trimEnd())

//remove extra space in both side
let myFridge = "   Hisense   "
console.log(myFridge.trim())

//how to replace word
let fullName = "James David"
console.log(fullName.replace('David', "Oluwabukunmi"))

//slice
let myFanTagName = "Air Freshness"
let textSlice = myFanTagName.slice(2, 5)
console.log(textSlice)

//include method
let myNames = "James"
let result = myNames.includes("es")
console.log(result)

//start with
let myDraw = "James"
let answer = myDraw.startsWith("J")
console.log(answer)

//end with
let betSlip = "MosesHG"
let betSlipResult = betSlip.endsWith("HG")
console.log(betSlipResult)


//Logical operators
//Logical AND (&&) - operator
//Logical OR (||) - operator

let userCity = "London"
let userAge = 30

if (userCity === "Uganda" &&  userAge >= 30){
    console.log("Let them into the party")
}else{
    console.log("Tell them they are not allow into the party")
}

let userCountry = "Nigeria"
let userTicketNumber = 70

if (userCountry === "Uganda" || userTicketNumber >= 70){
    console.log("Visa approved")
}else{
    console.log("Visa denied")
}


//Loops - loops are use mainly to fetch data out of an array one-by-one

const myArray = [
    "Sandra",
    "John",
    "Paul",
    "Winifred",
    "Seun",
    "Ada",
    "Zainab"
]

for(let x = 0; x < myArray.length; x++){
    let extract = myArray[x]

    console.log(extract)
}

//x = 0; = initializer
//x < 7; or (myArray.length)= condition
//x++ = increement

//x - can be anything 


const cities = [
    "Accra",
    "Lome",
    "Uganda",
    "Nairobi",
    "Lagos"
]

for(let x =0; x < cities.length; x++){
    let numberOfCities = cities[x]

    console.log(numberOfCities)
}


const students = [
    {
        fullName : "David James",
        studentId : 45564,
        score : 56
    },

    {
        fullName : "Andy Easy",
        studentId : 34564,
        score : 70
    }, 

    {
        fullName : "James Sandra",
        studentId : 4004,
        score : 40
    },

    {
        fullName : "Mary Moon",
        studentId : 90235,
        score : 90
    }
]

for (let x = 0; x < students.length; x++){
    let studentsRecord = students[x]


    let studentsFullName = studentsRecord.fullName
    let studentsScore = studentsRecord.score

    if(studentsScore > 70){
        console.log(`The student with the name ${studentsFullName} score the highest`)
    }
}


//Nested for loops - it is use to put a loop inside a loop

for(let x = 0; x < 5; x++){
    console.log(`This is me trying nested loop`)

    for(let z = 0; z < 10; z++){
        console.log(`This is the child for loop`)
    }
}