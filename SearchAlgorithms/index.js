
// ##### Linear Search
// Linear search - check each element one at a time

function linearSearch(arr,val) {
    for (let i = 0; i < arr.length; i++) {
        if(val === arr[i]){
            return i
        }
        
    }
    return -1
}


function binarySearch(arr,val) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left+right) / 2);

    // console.log(mid)

    while (left <= right) {
        
        if(arr[mid] === val){
            return mid;
        }else if (val < arr[mid]){
            right = mid - 1;
        } else {
            left = mid + 1;
        }
        mid = Math.floor((left+right) / 2);
    }

    return -1
}

// console.log(binarySearch([1,4,6,8,9,14,17,19,26,37,47],20))


function naiveSearch(long,short) {
    var count = 0;
    for (var i = 0; i < long.length; i++){

        for (let j = 0; j < short.length; j++) {
            if(short[j] !== long[i+j]){
                break;
            }
            if(j === short.length - 1){
                count++;
            }
        }
    }
    return count;
}

console.log(naiveSearch("lorlolie loled","lol"))