console.log("This is tutorial 53");



function greet(name, greetText= "Greetings from javascript"){
    let name1 = "Name1";
    console.log(greetText + " " + name);
    console.log(name + " is a good boy ");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
    // this line will never execiqute (unrechable code)
    // console.log("function is returned")
}


let name = " Anand";
let name1 = " Janhavi";
let name2 = " Shreya";
let name3 = " Varun";
greetText = "Good morning"
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
// let returnVal = greet(name3);
// console.log(returnVal)


let returnVal = sum(1 , 2 , 3 );
console.log(returnVal)
// console.log(name + " is a good boy");
// console.log(name1 + " is a good girl");
// console.log(name2 + " is a good girl");
// console.log(name3 + " is a good boy");