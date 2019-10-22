// Rewrite the code below to Async:

async function calculateSum(x,y){
    const sum= x+y;
    if(sum>8){
        console.log("larger than 8")
    }else{
        throw new Error
    }
}
async function asyncCall(x,y){
    console.log(x+y);
    try{
        await calculateSum(x,y);
    }catch(e){
            console.log("I made thefunction to catch error intentionally")

        }
    
}
asyncCall(2,6)

// 2.

// let results = $.getJSON('http://myapi.com');
// showResults(results);
var results;
async function xcompany(){
    await fetch("http://myapi.com")
    .then(value=>value.json())
    .then(value=>{company = value});
}
console.log(xcompany.name);

// 4.

var data;
async function writeDataToFile(){  
    await fetch('http://myapi.com'); 
    var data = data.map(function (x) {
     return x * 8; 
    })};
console.log(writeDataToFile(data));
