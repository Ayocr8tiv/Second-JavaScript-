var developer = 'Ayo'
var designer = "Sydney"
var accountant = 'Damola'

// Concatenation

var sentence = `I have a friends named ${developer} is a developer and a designer named ${designer} with an accountant named ${accountant}`;
console.log(sentence);

console.log(sentence.length);
console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());


var age = 25
if(age >= 18){
    console.log("you can vote");
    
} else{
    console.log("You're too young vote");
    
}

var students = false

if(students == true){
    console.log("free ticket");
    
} else{
    console.log("pay your complete money");
    
}

var me = 'tired'

if(me != "tired"){
    console.log('contiune working');
    
}else{
    console.log('take a break');
    
}

var presido = "Tpain"
if(presido != "Tpain"){
    console.log("life is good");
    
}else{
    console.log("sapa dey for here");
    
}

var jobTittle = 'Designer'
if(jobTittle == 'Lawyer'){
    console.log('Your bill is 200k');
    
}else if(jobTittle == 'Police'){
    console.log('Your bill is 1 millon');
    
}else if(jobTittle == 'Influencer'){
    console.log('Your bill is 600k');
    
}else if(jobTittle == 'Instructor'){
    console.log('Your bill is 50k');
    
}else{
    console.log('Your bill is 100k');
    
}


var classmate = ['Ayo', 'Gbenga','Sydney', 'Ridwan', 'Damola', 'Tochukwu', 'Banjo' ]
console.log(classmate);
classmate.push('Ehis')
console.log(classmate);
classmate.push('Daniel')
console.log(classmate);
classmate.pop()
console.log(classmate);
classmate.pop()
console.log(classmate);

classmate.shift()
console.log(classmate);
classmate.unshift('Damola')
console.log(classmate);
classmate.unshift('Alex')
console.log(classmate);

console.log(classmate.length);
console.log(classmate[0]);

classmate[3]= 'Alabi'
console.log(classmate);

classmate[6]= 'Temidayo GMYC'
console.log(classmate);


// var x = "Hello"
// var y = 'World'
// console.log(x + y);


// JavaScripts Object

var staff = {
    fullName: 'Ayokunle Pastore',
    job: 'Software Developer',
    age: undefined,
    disability: null,
    wageParDay: 60000,
    numberOfDayPresent: 10,
    salary: function(){
        return this.wageParDay*this.numberOfDayPresent
        
    },
    maritalStatus: false,
    phoneNumber: 8108982434,
    hobbies: ['Coding', 'Traveling', 'Soccer',],
    address: {
        number: 17,
        street: 'Alagomeji',
        city: 'Yaba',
        country: 'Nigeria',
    }
}

staff.maritalStatus = true

staff.hobbies = ['Playing Soccer', 'Traveling', 'Soccer',],
staff.hobbies[0] = 'Coding'
console.log(staff);
console.log(staff);
console.log(staff.hobbies[2]);
console.log(staff.address.city);

staff.address.city = 'Guru'

console.log(staff.salary());





function greeting (){
    return console.log("Merry Christmas");
    
}
greeting()


function add(x, y){
    var sum = x+y
    return console.log(sum);
    
}
add(10, 25)
add(35, 72)

function AreaOfSquare(l, b){
    var AreaOfSquare = l*l
    return console.log(AreaOfSquare);
    
}

AreaOfSquare(10)

function AreaOfCircle(r){
    var AreaOfCircle = Math.PI * r**2
    return console.log(AreaOfCircle);
    
}

AreaOfCircle(10)

function AreaOfTriangle(h,b){
    var AreaOfTriangle = 0.5*h*b
    return console.log(AreaOfTriangle);
    
}


function Perimeter(a,b,c){
    var Perimeter = a+b+c
    return console.log(Perimeter);
    
}

Perimeter(5, 7, 5)


function salute(name){
    return console.log("Hello " + name);
    
}
salute("Ayokunle")
function salute(name){
    return console.log("Hello " + name);
    
}
salute("Yoro")


var score = 70
// switch(score){
//     case score <= 40:
//         console.log("Your grade is D");
//         break;
//     case score >= 41 && score <= 50:
//         console.log("Your grade is C");
//         break;
//     case score >= 51 && score <= 70:
//         console.log("Your grade is B");
//         break;
//     default:
//         console.log("Your grade is A");
    
        
// }

var score = 80;

if (score <= 40) {
    console.log("Your grade is D");
} else if (score >= 41 && score <= 50) {
    console.log("Your grade is C");
} else if (score >= 51 && score <= 70) {
    console.log("Your grade is B");
} else {
    console.log("Your grade is A");
}


// var testing = ['jadons', false, 50, null, undefined]
// console.log(testing);

