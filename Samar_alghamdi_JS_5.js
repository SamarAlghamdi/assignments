function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);
// Predict 1: Hello

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

// Predict 2: Summing Numbers!
//            num1 is: 3
//            num1 is: 5
//            8
//            num1 is: 4
//            num1 is: 7
//            11

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}
highFive(10);

// Predict 3: IF the function is called: 0 1 2 3 4 High Five! 6 7 8 9


