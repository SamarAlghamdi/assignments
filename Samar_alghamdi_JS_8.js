// Implement function sigma(num) that, given a number, returns the sum of all positive integers up to the given number (inclusive).
function sigma(num) {
    sum = 0;
    for (let i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
//console.log(sigma(5));

//Write a function factorial(num) that, given a number, returns the product (multiplication) of all positive integers from 1 up to the given number (inclusive)
function factorial(num) {
    product = 1;
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}
//console.log(factorial(5));

// Create a function to generate Fibonacci numbers.  In this famous mathematical sequence, each number is the sum of the previous two, starting with values 0 and 1.  Your function should accept one argument, an index into the sequence (where 0 corresponds to the initial value, 4 corresponds to the value four later, etc).  Examples: fibonacci(0) = 0 (given), fibonacci(1) = 1 (given), fibonacci(2) = 1 (fib(0)+fib(1), or 0+1), fibonacci(3) = 2 (fib(1) + fib(2)3, or 1+1), fibonacci(4) = 3 (1+2), fibonacci(5) = 5 (2+3), fibonacci(6) = 8 (3+5), fibonacci(7) = 13 (5+8).  Do this without using recursion first.  If you
function fibonacci(num) {
    if (num <= 1) {
        return 1;
    }
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function secondToLast(arr) {
    if (arr.length < 3) return null;
    return arr[arr.length - 2];
}

//  Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nthToLast(arr, num) {
    if (arr.length < 4) return null;
    return arr[arr.length - num];
}

// Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null
function secondLargest(arr) {
    arr.sort((a, b) => (a > b ? 1 : -1));
    return arr[arr.length - 2];
}

// Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
function doubleTrouble(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i], arr[i]);
    }
    return newArray;
}

