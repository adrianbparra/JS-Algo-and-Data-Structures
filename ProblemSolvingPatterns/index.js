// basic approach solving a problem

// what an algotithm is
// a process or set if steps ti accomplish a certain task

// how do you improve
// 1. device a plan for solving problems
// 2. master common problem solving patterns


//### problem solving strategies

// -- Understand the problem
// 1. restate the problem in my own words
// 2. what are the inputs
// 3. whar are the outputs
// 4. can the outputs be determined from the inputs
// 5. how should i label the important pices of data are part of the problem

// --Explore concrete examples
// help understand the problem better
// provide sanity checks that solution works how it should

// --Break it down
// explicitly write down the steps


// --Simplify the problem
// write what you can and then later do the difficult part

// --Look Back and Refactor
// # questions
// Can you check results
// can you drive the result differnetly
// can you understand it a glance
// can you use the result or method for some other problem
// can you improve the performance of your solution
// can you think of other ways to refactor
// how have other people solved this problem

// Some Patterns
// Frequncy Counter
// Multiple Pointers
// Sliding Window
// Divide and COnquer
// Dynamic Programing
// Greedy Algo
// Backtracking
// more....

// #### Frequncy Counters
// uses objest or sets to collet values/freq of values

// write a function called same, which accepts two array, func should return true
// if every value in array has corresponding values squared in second arry
// freq of values must be the same
function same(arr1,arr2) { 
    if(arr1.length !== arr2.length){
        return false;
    }

    let freqCounter1 = {}
    let freqCounter2 = {}

    for(let val of arr1){
        freqCounter1[val] = (freqCounter1[val] || 0) + 1
    }

    for(let val of arr2){
        freqCounter2[val] = (freqCounter2[val] || 0) + 1
    }

    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            return false
        }
    }

    return true
}

// console.log(same([1,2,3,4],[1,4,9,16]))

// ###### Anagrams
// Given two string , wrinte a functions to termine if the second string is an anagram of the first
// an anagram is a word prase or name formed by rearranging the letters of another

function validAnagram(fstr,sstr) {
    if (fstr.length !== sstr.length){
        return false;
    }
    
    let fstrObj = {};
    let sstrObj = {};
    
    for(let i in fstr){
        fstrObj[fstr[i]] = (fstrObj[fstr[i]] || 0) + 1;
    }
    for(let i in sstr){
        sstrObj[sstr[i]] = (sstrObj[sstr[i]] || 0) + 1;
    }
    console.log(fstrObj,sstrObj)
    for (let char in fstrObj){
        
        if (!(char in sstrObj)){
            return false;
        }
        
        if (fstrObj[char] !== sstrObj[char]){
            return false;
        }
    }
    
    return true;
}

// console.log(validAnagram('', '')) // true
// console.log(validAnagram('aaz', 'zza')) // false
// console.log(validAnagram('anagram', 'nagaram')) // true
// console.log(validAnagram("rat","car")) // false) // false
// console.log(validAnagram('awesome', 'awesom')) // false
// console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')) // false
// console.log(validAnagram('qwerty', 'qeywrt')) // true
// console.log(validAnagram('texttwisttime', 'timetwisttext')) // true



// ###### Multi Pointers
// creating pointers or values that correspond to an index or positon and move towards the beginning end or middle based on certain condition


// ex. Write a func called sumZero which accepts a sorted array of intergers. 
// the func should find the first paor where sum is 0.
// return an array that includes both values that sum to zero or undefined if a pair does not exist

function sumZero(arr) {
    
    let left = 0;
    let right = arr.length - 1;

    while (left < right){
        let sum = arr[left] + arr[right];

        if (sum === 0){
            return [arr[left], arr[right]];
        } else if (sum > 0){
            right--;
        }else{
            left++;
        }
    }

    return undefined
}

// console.log(sumZero([-4,-3,-2,-1,0,3,5,10]))


// countUniqueValues
// accemts a sorted array and count the unizue values in the array, negative nums in array but it is sorted


function countUniqueValues(arr) {

    if(arr.length < 2){
        return arr.length
    }
    
    let f = 0;
    let s = 1;
    
    while(s < arr.length){
      
      if (arr[f] === arr[s]){
          s++
      }else {
          f++
          arr[f] = arr[s];
      }
    }

    return f+1
}

// console.log(countUniqueValues([1,1,1,1,1,2])) // 2
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
// console.log(countUniqueValues([])) // 0
// console.log(countUniqueValues([-2,-1,-1,0,1])) // 4


// ######### Sliding Window
// involves creating a window which can either be an array or number from one pos to another

function maxSubarraySum(arr,num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i= 0; i<num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i];
        maxSum = Math.max(maxSum,tempSum);
    }
    return maxSum;

}

// console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))


// ########## Divide and Conquer
// involves dividing a data set into smalller chunks and then repeating a process with a subset of data
// decreases time complexity

// function search(arr,num) {
    
// }


function sameFrequency(first,second){

    let fstring = first.toString();
    let sstring = second.toString();
    
    fObj = {}
    sObj = {}


    for(let i = 0; i < fstring.length; i++){
        fObj[fstring[i]] = (fObj[fstring[i]] || 0) + 1
    }
    for(let i = 0; i < sstring.length; i++){
        sObj[sstring[i]] = (sObj[sstring[i]] || 0) + 1
    }


    for(let k in fObj){
        

        if (k in sObj){
            if (sObj[k] !== fObj[k]){
                return false
            }
        } else{
            return false
        }
    }
    for(let k in sObj){
        if (k in fObj){
            if (sObj[k] !== fObj[k]){
                return false
            }
        }else{
            return false
        }
    }
    return true
  }

// console.log(sameFrequency(22,222222));

function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}

// console.log(areThereDuplicates(1,2,3))



function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
}

// console.log(averagePair([1,2,3,5,7,9,14,15,17,27,29],2.5))

function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
}

function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

console.log(maxSubarraySum([1,4,62,2,7,34,27,43,74],2))