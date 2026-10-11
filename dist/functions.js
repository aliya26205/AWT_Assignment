"use strict";
function calculateDiscount(price, discountPercent = 10) {
    return price - (price * discountPercent / 100);
}
console.log(calculateDiscount(1000));
console.log(calculateDiscount(1000, 20));
function applyBulkDiscount(prices, discountRate) {
    return prices.map((price) => price - (price * discountRate / 100));
}
let prices = [1000, 2000, 3000];
console.log(applyBulkDiscount(prices, 10));
function demonstrateScope() {
    for (let i = 0; i < 3; i++) {
        let message = "Hello";
        console.log(i, message);
    }
    // console.log(i); 
    // Error: i is limited to the loop block.
}
demonstrateScope();
