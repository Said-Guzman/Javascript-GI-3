// EASY: Write a function that would allow you to do this:


// var run = exercise('running');
// console.log(run()); // prints "Today's exercise: running"



// var swim = exercise('swimming');
// console.log(swim()); // prints "Today's exercise: swimming"


var swim = exercise('swimming')
var run = exercise('running')
 
function exercise(out){
    return function(){
        return today + out
    }
}
var today = "Today's activities: "





console.log(run());

console.log(swim())




























