


// Write a function that would allow you to do this:



// var sharePizza = cutPizzaSlices(8);
                                                                                                                                                               







var sharePizza = cutPizzaSlices(8)

var div = 2

function cutPizzaSlices(x){
    return function(){
        return "Each person get's " + x / div + " slices of Pizza"
    }
}




console.log(sharePizza(2));
//   // prints "Each person gets 4.00 slices of pizza"

 var div = 3

function cutPizzaSlices(x){
    return function(){
        return "Each person get's " + x / div + " slices of Pizza"
    }
}


console.log(sharePizza(3)); 
//   // prints "Each person gets 2.67 slices of pizza"














