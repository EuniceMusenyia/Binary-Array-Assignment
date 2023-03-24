// Given an array of unsorted numbers, return the index of the following target if the target exists in the array. If the target is not found, return null
// let num = [45,12,6,89,2,5]
// let target = 6

function mergeSortTopDown(num){
    if(num.length<=1){
        return num
    }
    const middle=Math.floor(num.length/2)
    const left=num.slice(0,middle)
    const right=num.slice(middle)
    return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right))
}
function mergeTopDown(left,right){
    const num1=[];
    while(left.length && right.length ){
        if (left <=right) {
        num1.push(left.shift())
    }
    else{
        num1.push(right.shift())
    }
    return num1.concat(left.slice()).concat(right.slice())
}

}
function binary(num1,target){
let left=0;
    let right =num1.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (num1[middle] ===target){
            return middle
        }
        else if(num1[middle]< target){
            left=middle + 1;

        }
        else{
            right= middle - 1;
        }
    }
    return null
    }
    let num = [45,12,6,89,2,5]

        let num2=mergeSortTopDown(num)
let target=6;
console.log(binary(num2,target))


// Given an unsorted array of numbers return the sorted array in descending order
// let arr=[123,89,5,23,9,56]

let arr=[123,89,5,23,9,56]
let sortedArray=arr.sort(function(a,b)
{return a-b})
console.log(sortedArray.reverse())


// Given the following array, search for the following target
// let target = 34
// let arr2 = [1,4,78,2,67,3];

function mergeSortTopDown(arr2){
    if(arr2.length<=1){
        return arr2
    }
    const middle=Math.floor(arr2.length/2)
    const left=arr2.slice(0,middle)
    const right=arr2.slice(middle)
    return mergeTopDown(mergeSortTopDown(left),mergeSortTopDown(right))
}
function mergeTopDown(left,right){
    const searchTarget=[];
    while(left.length && right.length ){
        if (left <=right) {
            searchTarget.push(left.shift())
    }
    else{
        searchTarget.push(right.shift())
    }
    return searchTarget.concat(left.slice()).concat(right.slice())
}

}
function binary(searchTarget,target){
let left=0;
    let right =searchTarget.length-1;
    while(left<=right){
        let middle=Math.floor((left+right)/2);
        if (searchTarget[middle] ===target){
            return middle
        }
        else if(searchTarget[middle]< target){
            left=middle + 1;

        }
        else{
            right= middle - 1;
        }
    }
    return null
    }
    let searchTarget1 = [1,4,78,2,67,3];
    let array=mergeSortTopDown(searchTarget1)
let arrayTarget=34;
console.log(binary(array,arrayTarget))
