
//-----------------------BASIC-------------------------------------

//first

function crystalGazer(a,b,c,d){

    return `You will be a' ${a} in ${b} and married to ${c} with ${d} children.`;
}

console.log(crystalGazer("Developer", "Vienna", "life", "0"));


//second
function ageCalculator(a,b){

    result = b-a;
    return `You are either ${result} or ${result-1} years old.`;
}

console.log(ageCalculator(1991,2021));
var today = new Date();

//third
console.log(ageCalculator(1991,today.getFullYear()));


//fourth
function degreeToRadiant(a){
    return a*(Math.PI/180);
}

console.log(degreeToRadiant(90));


//fourth
function areaAndVolume(a,b,c){
    var area = a*b;
    var volume = area*c;
    
    return [area, volume];
}


console.log("The area is " + areaAndVolume(1,2,3)[0] + " and the volume is "  + areaAndVolume(1,2,3)[1]);



//-----------------------Intermediate-------------------------------------

//first
var cappitalize = (function() {

    var text = "i am a developer";
    var new_text = text.substring(0,1).toLocaleUpperCase() + text.substring(1,text.length);
    //other method
    //var new_text = text.charAt(0).toLocaleUpperCase() + text.substring(1,text.length);
    console.log(new_text);
    return new_text;
   }());


//second
function avgGrade(a,b,c){
//average = sum of all divided by number of grades
//Number() converts string to number
    return ((Number(a)+Number(b)+Number(c))/3);
}

console.log("The average grade is: " + avgGrade("3",4,5));



//-----------------------Advanced-------------------------------------

function minToH(m){
    // one h has 60 minutes -> divide minutes by 60
    //Math.floor gives us the next lowes integer. E.g. Math.floor(3,78929) = 3
    var h = Math.floor(m/60);
    // if minutes > 60, we will have some remaining minutes. E.g. 90 minutes > 60 minutes (1hour), remaining: 90-60 = 30 minutes
    // we use modulo calculation-> please google
    var remaining = m % 60;
    return[h, remaining];
}

var first_minutes = 20;
var second_minutes = 90;
var third_minutes = 200;

console.log("You have " + minToH(first_minutes)[0] + " hours and " + minToH(first_minutes)[1] + " minutes");
console.log("You have " + minToH(second_minutes)[0] + " hours and " + minToH(second_minutes)[1] + " minutes");
console.log("You have " + minToH(third_minutes)[0] + " hours and " + minToH(third_minutes)[1] + " minutes");


//-----------------------Challange-------------------------------------