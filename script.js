
//-----------------------BASIC-------------------------------------

//first

function crystalGazer(a, b, c, d) {

    return `You will be a' ${a} in ${b} and married to ${c} with ${d} children.`;
}

console.log(crystalGazer("Developer", "Vienna", "life", "0"));


//second
function ageCalculator(a, b) {

    result = b - a;
    return `You are either ${result} or ${result - 1} years old.`;
}

console.log(ageCalculator(1991, 2021));
var today = new Date();

//third
console.log(ageCalculator(1991, today.getFullYear()));


//fourth
function degreeToRadiant(a) {
    return a * (Math.PI / 180);
}

console.log(degreeToRadiant(90));


//fourth
function areaAndVolume(a, b, c) {
    var area = a * b;
    var volume = area * c;

    return [area, volume];
}


console.log("The area is " + areaAndVolume(1, 2, 3)[0] + " and the volume is " + areaAndVolume(1, 2, 3)[1]);



//-----------------------Intermediate-------------------------------------

//first
var cappitalize = (function () {

    var text = "i am a developer";
    var new_text = text.substring(0, 1).toLocaleUpperCase() + text.substring(1, text.length);
    //other method
    //var new_text = text.charAt(0).toLocaleUpperCase() + text.substring(1,text.length);
    console.log(new_text);
    return new_text;
}());


//second
function avgGrade(a, b, c) {
    //average = sum of all divided by number of grades
    //Number() converts string to number
    return ((Number(a) + Number(b) + Number(c)) / 3);
}

console.log("The average grade is: " + avgGrade("3", 4, 5));



//-----------------------Advanced-------------------------------------

function minToH(m) {
    // one h has 60 minutes -> divide minutes by 60
    //Math.floor gives us the next lowes integer. E.g. Math.floor(3,78929) = 3
    var h = Math.floor(m / 60);
    // if minutes > 60, we will have some remaining minutes. E.g. 90 minutes > 60 minutes (1hour), remaining: 90-60 = 30 minutes
    // we use modulo calculation
    var remaining = m % 60;
    return [h, remaining];
}

var first_minutes = 20;
var second_minutes = 90;
var third_minutes = 200;

console.log("You have " + minToH(first_minutes)[0] + " hours and " + minToH(first_minutes)[1] + " minutes");
console.log("You have " + minToH(second_minutes)[0] + " hours and " + minToH(second_minutes)[1] + " minutes");
console.log("You have " + minToH(third_minutes)[0] + " hours and " + minToH(third_minutes)[1] + " minutes");


//-------------------------Challange-------------------------------------
// //n is input
// function setMoneyNotes(n, rem_note){

// var money_notes = [10,20,50,100];
// var required_notes = [0,0,0,0];

// if (!(n%10==0)){
//     return `Not possible.`

// return getMoneyNotes(rem_note,requ_note,n);
// }



// }
// //rem_note is the remaining note (array), n is the required note (array)
// function getMoneyNotes(rem_note,requ_note,n){
//     var requ_note_tmp = [0,0,0,0];
//     var money_notes = [100, 50, 20, 10];
//     var rem_value;
//     // requ_note = requ_note + requ_note_tmp;
//     // rem_note = rem_note - requ_note_tmp;

//     for (let i = 0; i < money_notes.length; i++) {
//         if (n >= money_notes[i] && rem_note[i]>0){
//             requ_note_tmp[i] = Math.floor(n/money_notes[i]);
//             requ_note = requ_note + requ_note_tmp;
//             rem_note[i] = rem_note[i] - 1;
//             rem_value = n%money_notes[i];
//             getMoneyNotes(rem_note,requ_note,rem_value);
//         }
//       } 

//       return requ_note;
// }

// var remaining_notes = [10,5,4,2];
// var required_notes = [0,0,0,0];
// var value_input = 120;

// console.log(getMoneyNotes(remaining_notes, required_notes, value_input));


function getMoneyNotes(x) {

    var money_notes = [100, 50, 20, 10];
    var requ_note_tmp = [0, 0, 0, 0];

    for (let i = 0; i < money_notes.length; i++) {
        if (x >= money_notes[i]) {
            requ_note_tmp[i] = Math.floor(x / money_notes[i]); 
            var rem_value = x % money_notes[i];
            getMoneyNotes(rem_value);
        }
    }
    console.log(rem_value);
    return requ_note_tmp;
}

console.log(getMoneyNotes(120));