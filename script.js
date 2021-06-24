
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





