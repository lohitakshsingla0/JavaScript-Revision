// var num1 = 3;
// var num2 = 7;

// console.log(num1 * num2);

// var answer = num1 > num2;

// console.log(answer);


var listingPrice = 799;
var sellingPrice = 199;

var discountPercent = ((listingPrice - sellingPrice)/listingPrice) * 100;

var displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "%");

var result = listingPrice > sellingPrice;

console.log(typeof result);