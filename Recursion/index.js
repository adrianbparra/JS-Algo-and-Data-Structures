// What is recursion?
// a process that calls its self

// its used everywhere
// 


///// Call Stack

function takeShower(params) {
    return "Showering"
}

function eatBreakfast() {
    let meal = cookFood();
    return `Eating ${meal}`
}

function cookFood() {
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random()*items.length)];
}

function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log("Ok ready for work")
}

// wakeUp()

// How recurive functions work


// Base Case
    // condition when the function ends


// Input changes
    // the values change 


function countDown(num) {
    if(num <= 0) {
        console.log("All done!")
        return;
    }
    console.log(num);
    num--;
    countDown(num)
}

// countDown(12)

/// Helper Method Recursion


function collectOdds(nums) {
    let result = [];

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperInput.slice(1))
    }

    helper(nums)

    return result;

}

// console.log(collectOdds([1,2,3,4,5,6,7,8,9]))


function factorial(n){

    if(n <= 1){
        return 1
    }

    return n * factorial(n-1)
   
}

// console.log(factorial(1))


function productOfArray(arr){
    
    if( arr.length === 0 ){
        return 1
    }
    
    return arr[0] * productOfArray(arr.slice(1))
}

// console.log(productOfArray([1,2,3,10]))

function recursiveRange(n){
    if (n === 0){
        return 0
    }
    
    return n + recursiveRange(n-1)
    
}

// console.log(recursiveRange(10))


function fib(n) {
    if(n<= 2) return 1;
    return fib(n-1) + fib(n-2)
}       

// console.log(fib(4))

function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    
    if(str.length === 0){
        return ""
    }  
    
    return str.slice(-1) + reverse(str.slice(0,str.length-1))
}

// console.log(reverse("awesome"))

function isPalindrome(str) {
    
    if(str.length === 1)return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0]=== str.slice(-1)) return isPalindrome(str.slice(1,-1));
    return false;
}

// console.log(isPalindrome("racecar"))

function someRecursive(arr,cb){
    // add whatever parameters you deem necessary - good luck!

    // let test = []
    // test = arr.map(t => {
    //     return cb(t)
    // });
    // return test.some(x=>x)
    if(arr.length === 0) return false;
    if(cb(arr[0])) return true;
    return someRecursive(arr.slice(1),cb);
}


const even = (element) => element % 2 === 0;

// console.log(someRecursive([1,2,3,5,5],even))

function flatten(arr) {
    // loop over values if value is array type then loop over those

    // when looping should the recursion be a helper?
    // yess since original array stays the same

    let newArr = []

    for(let i = 0; i < arr.length; i++){

        if (Array.isArray(arr[i])){
            newArr = newArr.concat(flatten(arr[i]))
        } else {
            newArr.push(arr[i])
        }
    }

    return newArr


}

// console.log(flatten([[[3,[4,[[[[[5]]]]]]]]]))

function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    // it was supposed to be recursive functions

    // so we just have an array
    // we need to cappatize first char

    // loop over arr
    // get first char
    // then capetilze it
    newarr = []

    for(let i = 0; i< arr.length; i++){
        // console.log(arr[i][0])
        let string = arr[i]

        string = string.charAt(0).toUpperCase() + string.slice(1)

        newarr.push(string)
    }

    return newarr
}
  
// console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']


function nestedEvenSum (obj) {
    // add whatever parameters you deem necessary - good luck!

    // call the function on each val from key
    // check if it is a number

    let total = 0;

    for (let key in obj){

        if(typeof obj[key] === "number" && obj[key] % 2 === 0){
            total += obj[key]
        } 
        else if (typeof obj[key] === "object")
        {
            total += nestedEvenSum(obj[key])
        }

    }

    return total
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10


function capitalizeWords (arr) {
    // add whatever parameters you deem necessary - good luck!


    return arr.map(element => {
        return element.toUpperCase()
    });


}
  
let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']


function stringifyNumbers(obj){

    for ( let key in obj){

        if(typeof obj[key] === "number"){

            obj[key] = obj[key].toString()
        } else if (typeof obj[key] == "object"){

            stringifyNumbers(obj[key])
        }
    }
    return obj

}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
// console.log(stringifyNumbers(obj))


function collectStrings(obj) {
    // returns array of avalies of type string

    let arr = []

    for (key in obj){
        if (typeof obj[key] === "string"){
            arr.push(obj[key])
        } else if(typeof obj[key] === "object"){

            arr = arr.concat(collectStrings(obj[key]))
        }
    }

    return arr


}

let obj4 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

// console.log(collectStrings(obj4))
