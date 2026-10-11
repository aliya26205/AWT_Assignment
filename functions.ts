
function calculateDiscount(
    price: number,
    discountPercent: number = 10
): number {
    return price - (price * discountPercent / 100);
}

console.log(calculateDiscount(1000)); 
console.log(calculateDiscount(1000, 20));

function applyBulkDiscount(
    prices: number[],
    discountRate: number
): number[] {
    return prices.map(
        (price: number): number =>
            price - (price * discountRate / 100)
    );
}

let prices: number[] = [1000, 2000, 3000];

console.log(applyBulkDiscount(prices, 10));

function demonstrateScope(): void {
    for (let i = 0; i < 3; i++) {
        let message: string = "Hello";
        console.log(i, message);
    }

    // console.log(i); 
    // Error: i is limited to the loop block.
}

demonstrateScope();
