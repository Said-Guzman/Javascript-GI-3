

// HARD: Data security exercise. Inside of a closure, create an object called pii (Personally Identifiable Information)that cannot be accessed directly. The object should have at least two properties: name and ssn. 
// Only the name property should be accessible, and it should be called through a public function. The ssn property should not be accessible at all.
// Creating private objects and private properties helps you control who has access to what data and helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
// You can use 'getName' or other get methods to access data that people might need. For example, people addressing a package or email may need a customer's name, but they definitely shouldn't have access to their ssn.






pii = function() {
var person = {
    name: "seth",
    ssn: 1234567,
    
};
return (()=> person.name)()

};

console.log((pii()))


// i did a 2nd complete joke method
// still works somehow


let pii2 = {
    name: "Seth",
    ssn : 123456789
}

console.log(pii2.snn)
console.log(pii2.name)





