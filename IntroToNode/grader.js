var scores = [90,98,89,100,100,86,94];
console.log(average(scores))

var scores2 =[40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));

function average(array){
    var sum = array.reduce(function(a,b){return a+b});
    return Math.round((sum / array.length));
}