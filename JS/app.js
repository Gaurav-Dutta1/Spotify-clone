// let color = "green"

// // Traffic light system
// if(color === "red"){
//     console.log (" Stop! light color is red ");
// }
// else if(color === "yellow"){
//     console.log ("Slow down. light color is yellow");
// }
// else if(color === "green"){
//     console.log ("Go. light color is green ");
// }



// let age=16;
// if (age>=18){
//     console.log("You can vote");
// }
// else if (age>=18){
//    console.log ("Sorry you cannot vote");
// }
// else if (age<18){
//     console.log("you cannot vote");
// }

let marks=89;
if (marks>=80 ){
    console.log("Grade A+");
}

else if (marks>=60){
    console.log("Grade A");
}
else if (marks>=33){
    console.log("Grade B");
}
else if (marks<33){
    console.log("Grade F");
}

let month = "april";
if(month === "jan" ){
    console.log("Winter is here");
} 
else if (month === "april"){
    console.log("Summer is here");
}

let age = 16;
if (age>=18){
    console.log("You Can Vote");
}
else{
    console.log("sorry you can't vote");
}



let color2="pink";

if (color2==="red"){
    console.log("Stop");
}else if (color2==="yellow"){
    console.log("slow down");
}else if ( color2==="green"){
    console.log("Go");
}else{console.log("Traffic Light is broken");
}

let size="XL";
if (size==="XL"){
    console.log("price is Rs. 250 ")
}
else if (size==="L"){
    console.log("price is Rs. 200");
}
else if (size==="M"){
    console.log("price is Rs. 100");
}
else if (size==="S") {
    console.log("price is Rs. 50");
}
else{
    console.log("Not Available");
}


let score =85;
if (score>=33){
    console.log("Pass");
if (score>=80){
    console.log("Grade : O");
}
else{
    console.log("Score : A");
}

}

else {
    console.log("Better luck next time");
}

//logical operators

let marks1 = 75;
if (!( marks1 < 33 )) {
    console.log("pass");
    console.log("A+");
}

let marks2 = 45;
if (( marks2>33 && marks <= 80) || !false){
    console.log("Pass");

} 


//Good string
let str = "apple";
if ( (str[0]==='a')  && (str.length > 3 ) )   {
    console.log("it's a good string");
}  
else {console.log
    ("not a good string");}

    let num = 12;
    if(( num%3 === 0) && ((num+1===15)  || (num-1 === 11)              ) ) {
        console.log ("Safe");
    }  else {
        console.log ("Unsafe");
    }

    if (0n) {
        console.log("it has true value");
    } else {
        console.log("it has false value");
    }

    let colour = "green";
    switch (colour){
        case "red" : 
        console.log("Stop");
        break ;
         case "yellow" : 
        console.log("Slow Down");
        break ;
         case "green" : 
        console.log("Go");
        break ;
        default :
        console.log ("Traffic light is broken");
    }

    let day = 7;
    switch(day) {
        case 1: 
        console.log("Monday");
        break ;
          case 2: 
        console.log("Tuesday");
        break ;
          case 3: 
        console.log("Wednesday");
        break ;
          case 4: 
        console.log("Thrusday");
        break ;
          case 5: 
        console.log("Friday");
        break ;
          case 6: 
        console.log("Saturday");
        break ;
        case 7 : 
        console.log("Sunday ,Funday ");
        break;
        
          default : 
        console.log("Wrong Number");
        
    }

    // alert ("this is a simple alert");

    // console.log("this is a simple log");
    // console.error("this is an error msg");
    // console.warn("this is an warning msg");


    //  let firstName =  prompt ("enter first name:");
    //   let lastName =  prompt ("enter last name:");
    //  let msg = "Welcome" + " "+firstName + " " + lastName + "!";
    // alert (msg);

    let int = 59;
    if (int % 10 == 0){
        console.log ("Good");
    }  else {
        console.log("Bad");
    }
   
    // let userName = prompt ("enter your username");
    // let Age = prompt ("enter your age");
    // let info = `${userName} is ${Age} years old`;
    // alert (info);

    let quarter = 4;
    switch (quarter){
        case 1 : console.log("Jan Feb Mar");
            break
        case 2 : console.log ("Apr May Jun");
                break
        case 3 : console.log("July Aug Sep");
                    break
        case 4 : console.log("Oct Nov Dec");
                break
        default : console.log("Not a Quarter.");
    }

    let String = "ashish";
if ( (String[0]== 'a'|| String[0] == 'A')  && (String.length > 5) ) {
    console.log ("Golden String");
} else {
    console.log("Not a golden String");
}

let a = 5;
let b = 18;
let c = 13;
if (a>b) {
    if (a>c) {
    console.log(a,"is largest") ;
    }
    else {
        console.log(c ,"is largest");
    }
}
 
else {
    if (b>c) {
console.log (b,"is largest ");
    }
    else {
        console.log (c,"is largest");
    }
}

let num1 = 326;
let num2 = 47852;
if ( (num1 %10) == (num2 % 10) ){
    console.log("numbers have the same last digit which is " ,num1 %10 );
}
else {
    console.log("numbers don't have the same last digit");
}