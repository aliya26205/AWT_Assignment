
let productName: string = "Laptop";
let price: number = 45000;
let inStock: boolean = true;
let tags: string[] = ["Electronics", "Computer", "Gadgets"];
let productId: number | string = "P101";

function printProductInfo(): void {
    console.log(
        `Product ID: ${productId}, Product Name: ${productName}, ` +
        `Price: ₹${price}, In Stock: ${inStock}, Tags: ${tags.join(", ")}`
    );
}

printProductInfo();

// Using any
let product: any = "Laptop";
product = 45000;

// Refactored to a specific type
let productNameSafe: string = "Laptop";
// productNameSafe = 45000; // TypeScript error
