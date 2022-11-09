// Sorting is the process of rearangin the itmes in a  collection so that items are insome kind of order


// Start looping from start with a vailable called i the end of the array towards the


function bubbleSort(arr) {

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }

    }
    return arr;
}

// console.log(bubbleSort([37,45,29,8,12,66,-34]))

// complexity n^2

///////////////// Selection Sort //////////////////////////////////

// Sorts by moving smallest value to left

function selectionSort(arr) {
    
    for (let i = 0; i < arr.length; i++) {
        var lowest = i;

        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[lowest]){
                lowest = j;
            } 
        }
        if(i !== lowest){
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
            console.log(i,lowest)
        }
    }
    
    return arr;
}

// console.log(selectionSort([10,6,20,26,2,4,16,18]))

// Complexity n^2


/////////////////////// Insertion Sort /////////////////////////
// builds up sort by gradually creating a larger left half which is always sorted

function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentVal = arr[i]
        
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            console.log(i,j)
            
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}


// console.log(insertionSort([2,1,9,7]))

// Complexity n^2


// Sorting is fundamental!
// All above are all roughly equivalent
// All have average time complexities that are quadratic
// There is faster ones

