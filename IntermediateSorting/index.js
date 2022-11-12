
//  Intermediate Sorting Algorithms

// Understand the limitations of the sorting algo
// 


////////////// Merge Sort ////////////////////
// split , merge ,sort

// Works by decomposit array into smaller arrays of 0 or 1 element then building newly sorted

// merging arrays

// implemtn mergoe sort first
// create new array length of both array

//create empty array, take a look of the smallest values in each array
// while ther are still values 
    // if value of smaller farr than sarr add farr[i] and increase i
    // if value is biiger in farr than sarr then add sarr[j] and increse j

function merge(arr1,arr2) {
    let results = [];    
    let i = 0;
    let j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] < arr2[j]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

// console.log(merge([1,10,50],[2,14,99,100]))

/// split up arr to one element
// call mergeSort recursevly until that happens
function mergeSort(arr) {
    
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    
    return merge(left,right);
}

// console.log(mergeSort([10,23,76,73,72,1,9]))



////////////// Quick Sort ////////////////////

// splits arr into 0 or 1 elements 
// works by selecting one element (pivot) and finding the index where the pivot should end up in the sorted array

// Pivot Helper
// designate an element as the pivot
// rearange elements

function pivot(arr, start=0,end=arr.length-1) {
    var pivot= arr[start];
    var swapIdx = start;

    function swap(arr,i,j) {
        temp  = arr[j];
        arr[j] = arr[i];
        arr[i] = temp
    }

    for (let i = start+1; i < arr.length; i++) {
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr,swapIdx,i)
        }
    }

    swap(arr,start,swapIdx)

    return swapIdx
}

// console.log(pivot([4,8,2,1,5,7,6,3]))


// Quicksort
function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right){

        let pivotIndex = pivot(arr,left, right);
    
        // left
        quickSort(arr,left,pivotIndex);
        // right
        quickSort(arr,pivotIndex+1, right);
    }

    return arr;

}

//console.log(quickSort([4,6,9,1,2,5,3]))


// All above are Comparison Sorts


///////////////// Radix Sort ///////////////////////
// special sorting algorithm that owrks on lists of numbers


// create helper functions 
// get digit in num at given place of value

function getDigit(digit,place) {
    return Math.floor(Math.abs(digit) / Math.pow(10,place)) % 10;
}

// console.log(getDigit(7323,0))


// get the number of digits in num
function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// console.log(digitCount(41523))

// get the number of digits in largest numbers in the list
function mostDigits(arr) {
    let maxDigits = 0
    for (let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits,digitCount(arr[i]));
    }
    return maxDigits;
}

// console.log(mostDigits([1,5,84,26576,436456,45643573,45,4567,836]))


// 

function radixSort(arr) {
    let maxDigitCount = mostDigits(arr)

    for (let k = 0; k < maxDigitCount; k++) {
        let digitBuckets = Array.from({length:10}, ()=> [])

        for (let i = 0; i < arr.length; i++) {
            
            let digit = getDigit(arr[i],k);
            
            digitBuckets[digit].push(arr[i]);
        }
        arr = [].concat(...digitBuckets);
        
    }
    return arr;
}


console.log(radixSort([23,356,6578,23,12,2345,9852]))