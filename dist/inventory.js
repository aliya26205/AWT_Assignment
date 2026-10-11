"use strict";
let productName = "Laptop";
let price = 45000;
let inStock = true;
let tags = ["Electronics", "Computer", "Gadgets"];
let productId = "P101";
function printProductInfo() {
    console.log(`Product ID: ${productId}, Product Name: ${productName}, ` +
        `Price: ₹${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}`);
}
printProductInfo();
// Using any
let product = "Laptop";
product = 45000;
// Refactored to a specific type
let productNameSafe = "Laptop";
// productNameSafe = 45000; // TypeScript error
