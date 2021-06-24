

// BASIC 1


function crystalGazer(a, b, c, d) {
    return `You will be a' ${a} in ${b} and married to ${c} with ${d} children.`;

}
console.log(crystalGazer ("teacher","Moscow", "John", "3"));


// BASIC 2

function ageCalculator(a, b){

    result = b-a;
    return `You are either ${result} or ${result-1} years old.`;
    
}
console.log(ageCalculator (1991,2021));
var today = new Date();

// BAsic 3

console.log(ageCalculator(1991,today.getFullYear()));


// BASIC 4

function degreeToRadian(a){
  return a* (Math.PI/180);
   
}
console.log(degreeToRadian(90));



// BASIC 5

function areaAndVolume(a,b,c){
var area = a*b;
var volume = a * b * c;

return [area, volume];

}
console.log("The area is " +areaAndVolume(1,2,3)[0] + " and the volume is " + areaAndVolume (1,2,3)[1]);



// INTER 1

var cappitalize = (function() {

    var text = "i am a developer";
    var new_text = text.substring(0,1).toLocaleUpperCase() + text.substring(1,text.length);
    //other method
    //var new_text = text.charAt(0).toLocaleUpperCase() + text.substring(1,text.length);
    console.log(new_text);
    return new_text;
   }());


// INTER 2



function avgGrade(a, b, c){
    // Number() converts string to number
    return ((Number(a) + Number(b) + Number(c)))/3;
}
console.log("The avarage grade is " + avgGrade(1,3,4))


// ADVANCED 1


function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return num + " minutes = " + rhours + " hour(s) and " + rminutes + " minute(s).";
    }
    
    console.log(timeConvert(400));

