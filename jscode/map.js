const arr = [20,32,54,4,96,47];

const resarr = arr.map((item) => {return item/2})
console.log("Map Method");
console.log(resarr);

let str1 = "Ram";
let str2 = "Kesa";

[str1,str2] = [str2,str1];
console.log("Iterchanged string");
console.log(str1 +" <=> "+ str2);

//Repeated Character

function repeaterchar(str){
    let str1 = str.split('');
    let char = str1.reduce((acc,curr) =>{ 
        if(acc[curr]){
            acc[curr]= acc[curr] + 1;
        }
        else{
            acc[curr] = 1;
        }
        return acc;
    },{})
    return char.en;
}
console.log(repeaterchar("kesapragatha"));


 //large number 
function largerno(arr){

    let ln = arr.reduce((ac,cur) =>{
         if(ac > cur) {
            return ac
         }else{
            return cur;
         }
    })
    
    return ln;
}
const larr = [20,32,54,4,96,47];
console.log(largerno(larr));
 
 //number is prime 

 function prime(prim){

    if(prim /2 === 0){
        return false
    }
    else{
        return true
    }
 }

 console.log(prime(24));

 //factorial of a number



//whitespace characters 


//sum of all elements

function sumno(arr){

    let ln = arr.reduce((ac,cur) =>{
        return ac = ac + cur;
    })
    
    return ln;
}
const sarr = [20,32,54,4,96,47];
console.log(sumno(sarr));

//average

function sumnoavg(arr){
    let ln = arr.reduce((ac,cur) =>{
        return ac = ac + cur;
    })
    
    return ln/arr.length;
}
const aarr = [20,32,54,4,96,47];
console.log(sumnoavg(aarr));

// sort an array

function sortArr(arr){
   return arr.sort((a,b) => (a-b)) //low => high
  // return arr.sort((a,b) => (a-b)) high => low
}
const sortarr = [20,32,54,4,96,47];
console.log(sortArr(sortarr));

//sorted 
function isortArr(isortarr){
    let issort = [0];
    for(let i=0;i<isortarr.length;i++){
        if(isortarr[i -1] > isortarr[i]){
           return false;
        }
    }
    return true;
 }
 const isortarr =[4, 20, 32, 47, 54, 96];
 console.log(isortArr(isortarr));
//single sorted array

//remove a specific element 


//second largest element

//reverse the order of words

//longest word

console.log("delay Random");

const delay = (0.7 + Math.random() * 2) * 1000
console.log(delay);

console.log("Repeat value");

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function(obj, item) {
   // console.log(!obj[item]);
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});

console.log(transportation);

console.log("Curry Funtion");
function sum(a){
    return function (b){
        return function (c){     
                return function (d){           
                    return a + b + c + d;
            }
        }

    }
}

const result = sum(2)(3)(4)
console.log(result(20));


console.log("Onchange color Event");
const red = document.getElementById("redid");
const yellow = document.getElementById("yellowid");
const blue = document.getElementById("blueid");

red.addEventListener("click",(e) => color("red"));
yellow.addEventListener("click",(e) => color("yellow"));
blue.addEventListener("click",(e) => color("blue"));

function color(clr){
    document.body.style.backgroundColor = clr;
}

// reverse
console.log("reverseNO");

function reverseNO(num){
    let rev = 0;
    while(num > 0)
    {
        let rem = num%10;
        rev = rev * 10 + rem;
        num = Math.floor(num/10);
    }
    return rev;
}

console.log(reverseNO(123548));


// 1.Given a string, reverse each word in the sentence



//2.How to check if an object is an array or not ? provide some code

//3.how to empty an array in js?

//4.How would you check if a number is an Integer?

//5.Make this work
// duplicate([1,2,3,4,5]); //[1,2,3,4,5,1,2,3,4,5]



//6.Write a js function that reverse a number?

//7.Write a js function that check weather a passed string is polidrome or not?

//8.Write a js function that returns a passed string with letters in alphabetical order?

//9.Write a js function that accepts a string as a parameter and converts 
//  the first letter of the string in upper case?

//9.Write a js function which accepts an aruguments and returns the type
//  Note : There are six possible values that typeof
//  return : object, boolean,function,number ,string         ?

// Write a js function to get the number of occurrences of each letter in specified string.

// write a js program to find the most frequent item of an array

//loop

//loop an array on numbers and strings, only add those numbers which are not strings

//loop an array of object and remove all object which is don't have gender's value male


//Write a js function to clone an array?

//Write a js function to get the first element of an array. 
// passing 'n' will return the first 'n' element of the array? 

//Write a js function to get the first element of an array. 
// passing 'n' will return the last 'n' element of the array? 

// stuffle program in array

//union two array
