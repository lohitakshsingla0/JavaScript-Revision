//Callback and arrow function introduction in array

var isEven = (element) => {

    return element%2 === 0;
};

//console.log(isEven(2));

//var result = [2,4,6,8].every(isEven);

//var result = [2,4,6,8].every((e) => (
//     e%2 === 0
// )
var result = [2,4,6,8].every((e) => (e%2 ===0));  //Call back function. arrow function is converted to call back function
                                                  //there is no return as no curly brackets.
console.log(result);