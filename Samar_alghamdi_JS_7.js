//Given an array, write a function that changes all positive numbers in the array to the string "big"
function biggieSize(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            arr[i]="big";
        }
    }
    console.log(arr);
}
//allPositiveToString([1,2,3,4,5,6]);

//Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array
function printLowReturnHigh(arr){
    console.log(Math.min(...arr));
    return Math.max(...arr);
}
//console.log("the return is: "+maxMin([1,2,3,4,5,6,7]));

//Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function printOneReturnAnother(arr){
    for(let i=1;i<arr.length;i++){
        console.log(arr[i]);
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            return arr[i];
        }
    }
}
//console.log(secondTolastOdd([2,3,4,5,6,7]));

//create a function that returns a new array where each value in the original array has been doubled. 
function doubleVision(arr){
    var newArr=[...arr];
    for(let i=0;i<newArr.length;i++){
        newArr[i]=newArr[i]*2;
    }
    return newArr;
}
//console.log(doubleVision([1,2,3]));

//Given an array of numbers, create a function to replace the last value with the number of positive values found in the array
function countPositives(arr){
    arr.pop;
    var count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            count++;
        }
    }
    arr.push(count);
}

//Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function evensAndOdds(arr){
    var eCount=0;
    var oCount=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            eCount++;
            oCount=0;
            if(eCount==3){
                console.log("Even more so!")
            }
        } else {
            oCount++;
            eCount=0
            if(oCount==3){
                console.log("That's odd!")
            }
        }
    }
}
//evensAndOdds([1,2,3,3,4,4,6,7,5,2,3,7,5]);

//Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
function incrementTheSeconds(arr){
    for(let i=1;I<arr.length;i+=2){
        arr[i]=arr[i]+1;
        console.log(arr[i]);
    }
    return arr;
}

//You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.
function previousLengths(arr){
    for (var i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

// console.log(previousLengths(["hello", "dojo", "awesome"]));

// Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.
function addSeven(arr){
    var newArr=[...arr];
    for(let i=0;i<newArr.length;i++){
        newArr[i]=newArr[i]+7;
    }
    return newArr;
}

//Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseArray(arr){
    function reverse(arr){
        for (var i = 0; i < arr.length/2; i++){
            var temp = arr[i];
            arr[i] = arr[arr.length-1-i];
            arr[arr.length-1-i] = temp;
        }
        return arr;
    }
}

//Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1)
function outlookNegative(arr){
    var newArr=[...arr];
    for(let i=0;i<newArr.length;i++){
        newArr[i]=newArr[i]-(newArr[i]+1);
    }
    return newArr;
}

//Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once
function alwaysHungry(arr){
    var count=0;
    for(let i=0;i<arr.length;i++){
        if (arr[i]==='food'){
            console.log("yummy");
            count++;
        }
    }
    if(count==0){
        console.log("I'm hungry");
    }
}

//Given an array, swap the first and last values, third and third-to-last values, etc. 
function swapTowardCenter(arr){
    for (var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// console.log(swapTowardCenter([1,2,3,4,5,6]));
//Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr
function scaleTheArray(arr, num){
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i]*num;
    }
    return arr;
}
