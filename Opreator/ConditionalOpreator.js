//if
let Age = 18;
if (Age >= 18) {
    console.log("You can Vote!");
}

//if else
if (Age >= 18) {
    console.log("You are eligible for licence");
} else {
    console.log("You are not eligible for licence");
}

//else if
let a = 10, b = 11, c = 13;

if (a > b && a > c) {
    console.log("a is largest number!");
} else if (b > a && b > c){
    console.log("b is largets number!");
}else{
    console.log("c is largets number!");
}

// Swtich Case
let caseValue = parseInt(prompt("Enter the case value : "));
switch(caseValue){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thrusday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday");
}